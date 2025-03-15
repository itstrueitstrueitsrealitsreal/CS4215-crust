import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import {
  CharStream,
  CommonTokenStream,
  AbstractParseTreeVisitor,
} from "antlr4ng";
import { CrustLexer } from "./parser/src/CrustLexer";
import {
  ExprContext,
  StmtContext,
  CrustParser,
  ProgContext,
  VarDeclContext,
  IfStmtContext,
  WhileStmtContext,
  FuncDeclContext,
  BlockContext,
  ReturnStmtContext,
  AssignmentContext,
  LogicalContext,
  ComparisonContext,
  TermContext,
  FactorContext,
  UnaryContext,
  PrimaryContext,
  FunctionCallContext,
  ParamListContext,
  ArgumentsContext,
} from "./parser/src/CrustParser";
import { CrustVisitor } from "./parser/src/CrustVisitor";

// Type definitions for variables and values
type ValueType =
  | "i32"
  | "f64"
  | "bool"
  | "string"
  | "reference"
  | "function"
  | "unit";

interface Value {
  type: ValueType;
  value: any;
  mutable: boolean;
  borrowed: boolean;
  mutableBorrowed: boolean;
  immutableBorrowCount: number;
}

interface FunctionValue {
  name: string;
  params: { name: string; type: ValueType }[];
  returnType: ValueType;
  body: BlockContext;
}

// Memory management with ArrayBuffer
class MemoryAllocator {
  private memory: ArrayBuffer;
  private view: DataView;
  private freeList: { address: number; size: number }[];
  private nextFreeAddress: number;

  constructor(sizeInBytes: number = 1024 * 1024) {
    this.memory = new ArrayBuffer(sizeInBytes);
    this.view = new DataView(this.memory);
    this.freeList = [];
    this.nextFreeAddress = 0;
  }

  allocate(size: number): number {
    // Try to find a suitable block in the free list
    for (let i = 0; i < this.freeList.length; i++) {
      const block = this.freeList[i];
      if (block.size >= size) {
        const address = block.address;
        if (block.size === size) {
          this.freeList.splice(i, 1);
        } else {
          block.address += size;
          block.size -= size;
        }
        return address;
      }
    }

    // No suitable block found, allocate from the end
    const address = this.nextFreeAddress;
    this.nextFreeAddress += size;

    if (this.nextFreeAddress > this.memory.byteLength) {
      throw new Error("Out of memory");
    }

    return address;
  }

  deallocate(address: number, size: number): void {
    this.freeList.push({ address, size });

    // Merge adjacent blocks (simple coalescing)
    this.freeList.sort((a, b) => a.address - b.address);

    for (let i = 0; i < this.freeList.length - 1; i++) {
      const current = this.freeList[i];
      const next = this.freeList[i + 1];

      if (current.address + current.size === next.address) {
        current.size += next.size;
        this.freeList.splice(i + 1, 1);
        i--; // Check the current block again
      }
    }
  }

  readInt32(address: number): number {
    return this.view.getInt32(address, true);
  }

  writeInt32(address: number, value: number): void {
    this.view.setInt32(address, value, true);
  }

  readFloat64(address: number): number {
    return this.view.getFloat64(address, true);
  }

  writeFloat64(address: number, value: number): void {
    this.view.setFloat64(address, value, true);
  }

  readBool(address: number): boolean {
    return this.view.getUint8(address) !== 0;
  }

  writeBool(address: number, value: boolean): void {
    this.view.setUint8(address, value ? 1 : 0);
  }

  // String operations would require more complex handling
  writeString(address: number, value: string): void {
    // Convert string to UTF-8 bytes and write to memory
    const encoder = new TextEncoder();
    const bytes = encoder.encode(value);
    const uint8Array = new Uint8Array(this.memory, address, bytes.length + 4);

    // Write string length as prefix
    this.view.setUint32(address, bytes.length, true);

    // Write string data
    uint8Array.set(bytes, 4);
  }

  readString(address: number): string {
    // Read string length
    const length = this.view.getUint32(address, true);

    // Read string data
    const bytes = new Uint8Array(this.memory, address + 4, length);
    const decoder = new TextDecoder();
    return decoder.decode(bytes);
  }
}

// Environment to track variables and scopes
class Environment {
  private values: Map<string, Value>;
  private parent: Environment | null;
  private allocator: MemoryAllocator;

  constructor(
    parent: Environment | null = null,
    allocator: MemoryAllocator | null = null
  ) {
    this.values = new Map();
    this.parent = parent;
    this.allocator =
      allocator || (parent ? parent.allocator : new MemoryAllocator());
  }

  define(name: string, value: Value): void {
    this.values.set(name, value);
  }

  get(name: string): Value {
    if (this.values.has(name)) {
      return this.values.get(name)!;
    }

    if (this.parent) {
      return this.parent.get(name);
    }

    throw new Error(`Variable '${name}' is not defined`);
  }

  assign(name: string, value: Value): void {
    if (this.values.has(name)) {
      const existingValue = this.values.get(name)!;

      if (!existingValue.mutable) {
        throw new Error(`Cannot assign to immutable variable '${name}'`);
      }

      if (existingValue.borrowed) {
        throw new Error(`Cannot assign to borrowed variable '${name}'`);
      }

      this.values.set(name, { ...value, mutable: existingValue.mutable });
      return;
    }

    if (this.parent) {
      this.parent.assign(name, value);
      return;
    }

    throw new Error(`Variable '${name}' is not defined`);
  }

  borrow(name: string, mutable: boolean): Value {
    const value = this.get(name);

    if (mutable) {
      if (value.borrowed || value.immutableBorrowCount > 0) {
        throw new Error(
          `Cannot mutably borrow '${name}' as it is already borrowed`
        );
      }
      value.mutableBorrowed = true;
    } else {
      if (value.mutableBorrowed) {
        throw new Error(
          `Cannot immutably borrow '${name}' as it is already mutably borrowed`
        );
      }
      value.immutableBorrowCount++;
    }

    value.borrowed = true;
    this.values.set(name, value);

    return {
      type: "reference",
      value: name,
      mutable: mutable,
      borrowed: false,
      mutableBorrowed: false,
      immutableBorrowCount: 0,
    };
  }

  releaseBorrow(reference: Value): void {
    if (reference.type !== "reference") {
      throw new Error("Cannot release a non-reference");
    }

    const name = reference.value;
    const value = this.get(name);

    if (reference.mutable) {
      value.mutableBorrowed = false;
    } else {
      value.immutableBorrowCount--;
    }

    if (value.immutableBorrowCount === 0 && !value.mutableBorrowed) {
      value.borrowed = false;
    }

    this.values.set(name, value);
  }

  getAllocator(): MemoryAllocator {
    return this.allocator;
  }
}

// Runtime error class
class RuntimeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RuntimeError";
  }
}

// The main visitor implementation
class CrustEvaluatorVisitor
  extends AbstractParseTreeVisitor<Value>
  implements CrustVisitor<Value>
{
  private environment: Environment;
  private returnValue: Value | null = null;

  constructor() {
    super();
    this.environment = new Environment();
  }

  // Visit program
  visitProg(ctx: ProgContext): Value {
    let lastValue = this.createUnitValue();

    for (const stmt of ctx.stmt()) {
      lastValue = this.visit(stmt);

      if (this.returnValue !== null) {
        break;
      }
    }

    return lastValue;
  }

  // Visit variable declaration
  visitVarDecl(ctx: VarDeclContext): Value {
    const name = ctx.ID().getText();
    const isMutable = ctx.getToken(CrustLexer.T__1, 0) !== null; // Check for 'mut' keyword

    let value: Value;

    if (ctx.expr()) {
      value = this.visit(ctx.expr());
    } else {
      // Default value based on type
      value = this.createDefaultValue(ctx.type()?.getText() || "i32");
    }

    // Set mutability
    value.mutable = isMutable;

    this.environment.define(name, value);

    return this.createUnitValue();
  }

  // Visit expression statement
  visitExprStmt(ctx: ExprContext): Value {
    return this.visit(ctx);
  }

  // Visit if statement
  visitIfStmt(ctx: IfStmtContext): Value {
    const condition = this.visit(ctx.expr());

    if (this.isTruthy(condition)) {
      return this.visit(ctx.block(0));
    } else if (ctx.block(1)) {
      return this.visit(ctx.block(1));
    } else if (ctx.ifStmt()) {
      return this.visit(ctx.ifStmt());
    }

    return this.createUnitValue();
  }

  // Visit while statement
  visitWhileStmt(ctx: WhileStmtContext): Value {
    let lastValue = this.createUnitValue();

    while (this.isTruthy(this.visit(ctx.expr()))) {
      lastValue = this.visit(ctx.block());

      if (this.returnValue !== null) {
        break;
      }
    }

    return lastValue;
  }

  // Visit function declaration
  visitFuncDecl(ctx: FuncDeclContext): Value {
    const name = ctx.ID().getText();
    const params = ctx.paramList() ? this.extractParams(ctx.paramList()) : [];
    const returnType = ctx.type()
      ? (ctx.type().getText() as ValueType)
      : "unit";
    const body = ctx.block();

    const func: FunctionValue = {
      name,
      params,
      returnType,
      body,
    };

    this.environment.define(name, {
      type: "function",
      value: func,
      mutable: false,
      borrowed: false,
      mutableBorrowed: false,
      immutableBorrowCount: 0,
    });

    return this.createUnitValue();
  }

  // Visit return statement
  visitReturnStmt(ctx: ReturnStmtContext): Value {
    let value = this.createUnitValue();

    if (ctx.expr()) {
      value = this.visit(ctx.expr());
    }

    this.returnValue = value;

    return value;
  }

  // Visit block
  visitBlock(ctx: BlockContext): Value {
    const prevEnv = this.environment;
    this.environment = new Environment(prevEnv);

    let lastValue = this.createUnitValue();

    for (const stmt of ctx.stmt()) {
      lastValue = this.visit(stmt);

      if (this.returnValue !== null) {
        break;
      }
    }

    this.environment = prevEnv;

    return lastValue;
  }

  // Visit expressions
  visitExpr(ctx: ExprContext): Value {
    return this.visit(ctx.getChild(0));
  }

  visitAssignment(ctx: AssignmentContext): Value {
    if (ctx.getChildCount() === 1) {
      // Not an assignment, just an expression
      return this.visit(ctx.getChild(0));
    }

    const name = ctx.ID().getText();
    const value = this.visit(ctx.assignment());

    this.environment.assign(name, value);

    return value;
  }

  visitLogical(ctx: LogicalContext): Value {
    let left = this.visit(ctx.comparison(0));

    for (let i = 1; i < ctx.comparison().length; i++) {
      const operator = ctx.getChild(i * 2 - 1).getText();
      const right = this.visit(ctx.comparison(i));

      if (operator === "&&") {
        if (!this.isTruthy(left)) {
          return this.createBoolValue(false);
        }
        left = this.createBoolValue(this.isTruthy(right));
      } else if (operator === "||") {
        if (this.isTruthy(left)) {
          return this.createBoolValue(true);
        }
        left = this.createBoolValue(this.isTruthy(right));
      }
    }

    return left;
  }

  visitComparison(ctx: ComparisonContext): Value {
    let left = this.visit(ctx.term(0));

    for (let i = 1; i < ctx.term().length; i++) {
      const operator = ctx.getChild(i * 2 - 1).getText();
      const right = this.visit(ctx.term(i));

      switch (operator) {
        case "==":
          left = this.createBoolValue(this.isEqual(left, right));
          break;
        case "!=":
          left = this.createBoolValue(!this.isEqual(left, right));
          break;
        case "<":
          left = this.createBoolValue(this.isLessThan(left, right));
          break;
        case "<=":
          left = this.createBoolValue(
            this.isLessThan(left, right) || this.isEqual(left, right)
          );
          break;
        case ">":
          left = this.createBoolValue(
            !this.isLessThan(left, right) && !this.isEqual(left, right)
          );
          break;
        case ">=":
          left = this.createBoolValue(!this.isLessThan(left, right));
          break;
      }
    }

    return left;
  }

  visitTerm(ctx: TermContext): Value {
    let left = this.visit(ctx.factor(0));

    for (let i = 1; i < ctx.factor().length; i++) {
      const operator = ctx.getChild(i * 2 - 1).getText();
      const right = this.visit(ctx.factor(i));

      if (left.type !== "i32" && left.type !== "f64") {
        throw new Error(`Cannot perform ${operator} on non-numeric value`);
      }

      if (right.type !== "i32" && right.type !== "f64") {
        throw new Error(`Cannot perform ${operator} on non-numeric value`);
      }

      const isFloat = left.type === "f64" || right.type === "f64";
      const leftValue = isFloat ? Number(left.value) : left.value;
      const rightValue = isFloat ? Number(right.value) : right.value;

      switch (operator) {
        case "+":
          left = this.createNumericValue(
            leftValue + rightValue,
            isFloat ? "f64" : "i32"
          );
          break;
        case "-":
          left = this.createNumericValue(
            leftValue - rightValue,
            isFloat ? "f64" : "i32"
          );
          break;
      }
    }

    return left;
  }

  visitFactor(ctx: FactorContext): Value {
    let left = this.visit(ctx.unary(0));

    for (let i = 1; i < ctx.unary().length; i++) {
      const operator = ctx.getChild(i * 2 - 1).getText();
      const right = this.visit(ctx.unary(i));

      if (left.type !== "i32" && left.type !== "f64") {
        throw new Error(`Cannot perform ${operator} on non-numeric value`);
      }

      if (right.type !== "i32" && right.type !== "f64") {
        throw new Error(`Cannot perform ${operator} on non-numeric value`);
      }

      const isFloat = left.type === "f64" || right.type === "f64";
      const leftValue = isFloat ? Number(left.value) : left.value;
      const rightValue = isFloat ? Number(right.value) : right.value;

      switch (operator) {
        case "*":
          left = this.createNumericValue(
            leftValue * rightValue,
            isFloat ? "f64" : "i32"
          );
          break;
        case "/":
          if (rightValue === 0) {
            throw new Error("Division by zero");
          }
          left = this.createNumericValue(
            leftValue / rightValue,
            isFloat ? "f64" : "i32"
          );
          break;
      }
    }

    return left;
  }

  visitUnary(ctx: UnaryContext): Value {
    if (ctx.getChildCount() === 1) {
      return this.visit(ctx.getChild(0));
    }

    const operator = ctx.getChild(0).getText();
    const value = this.visit(ctx.unary());

    switch (operator) {
      case "!":
        return this.createBoolValue(!this.isTruthy(value));
      case "-":
        if (value.type !== "i32" && value.type !== "f64") {
          throw new Error("Cannot negate non-numeric value");
        }
        return this.createNumericValue(-value.value, value.type);
      case "&":
        const isMutable = ctx.getToken(CrustLexer.T__1, 0) !== null; // Check for 'mut' keyword

        if (value.type !== "reference") {
          // Get the variable name from the primary expression
          // This assumes the unary is directly referencing a variable, not a complex expression
          const primary = ctx.getChild(1) as UnaryContext;
          if (primary.primary() && primary.primary().ID()) {
            const varName = primary.primary().ID().getText();
            return this.environment.borrow(varName, isMutable);
          }
          throw new Error("Can only borrow a variable");
        }

        throw new Error("Cannot borrow a reference");
    }

    throw new Error(`Unknown unary operator: ${operator}`);
  }

  visitPrimary(ctx: PrimaryContext): Value {
    if (ctx.INT()) {
      return this.createNumericValue(parseInt(ctx.INT().getText()), "i32");
    }

    if (ctx.FLOAT()) {
      return this.createNumericValue(parseFloat(ctx.FLOAT().getText()), "f64");
    }

    if (ctx.BOOL()) {
      return this.createBoolValue(ctx.BOOL().getText() === "true");
    }

    if (ctx.STRING()) {
      // Remove quotes from string
      const text = ctx.STRING().getText();
      const unquoted = text.substring(1, text.length - 1);
      return this.createStringValue(unquoted);
    }

    if (ctx.ID()) {
      return this.environment.get(ctx.ID().getText());
    }

    if (ctx.functionCall()) {
      return this.visit(ctx.functionCall());
    }

    if (ctx.expr()) {
      return this.visit(ctx.expr());
    }

    throw new Error(`Invalid primary expression: ${ctx.getText()}`);
  }

  visitFunctionCall(ctx: FunctionCallContext): Value {
    const name = ctx.ID().getText();
    const functionValue = this.environment.get(name);

    if (functionValue.type !== "function") {
      throw new Error(`'${name}' is not a function`);
    }

    const func = functionValue.value as FunctionValue;
    const args = this.evaluateArguments(ctx.arguments());

    if (args.length !== func.params.length) {
      throw new Error(
        `Function '${name}' expects ${func.params.length} arguments, but got ${args.length}`
      );
    }

    // Create a new environment for the function call
    const prevEnv = this.environment;
    this.environment = new Environment(prevEnv);

    // Define parameters in the new environment
    for (let i = 0; i < func.params.length; i++) {
      this.environment.define(func.params[i].name, args[i]);
    }

    // Save the current return value
    const prevReturnValue = this.returnValue;
    this.returnValue = null;

    // Execute the function body
    let result = this.visit(func.body);

    // Check if a return value was set
    if (this.returnValue !== null) {
      result = this.returnValue;
      this.returnValue = null;
    }

    // Restore the previous return value and environment
    this.returnValue = prevReturnValue;
    this.environment = prevEnv;

    return result;
  }

  // Helper methods
  private extractParams(
    paramList: ParamListContext
  ): { name: string; type: ValueType }[] {
    const params: { name: string; type: ValueType }[] = [];

    for (let i = 0; i < paramList.ID().length; i++) {
      const name = paramList.ID(i).getText();
      const type = paramList.type(i).getText() as ValueType;
      params.push({ name, type });
    }

    return params;
  }

  private evaluateArguments(args: ArgumentsContext | null): Value[] {
    if (!args) {
      return [];
    }

    const values: Value[] = [];

    for (const expr of args.expr()) {
      values.push(this.visit(expr));
    }

    return values;
  }

  private createDefaultValue(type: string): Value {
    switch (type) {
      case "i32":
        return this.createNumericValue(0, "i32");
      case "f64":
        return this.createNumericValue(0.0, "f64");
      case "bool":
        return this.createBoolValue(false);
      case "String":
        return this.createStringValue("");
      case "()":
        return this.createUnitValue();
      default:
        if (type.startsWith("&")) {
          throw new Error("Cannot create default value for reference type");
        }
        throw new Error(`Unknown type: ${type}`);
    }
  }

  private createNumericValue(value: number, type: "i32" | "f64"): Value {
    return {
      type,
      value,
      mutable: false,
      borrowed: false,
      mutableBorrowed: false,
      immutableBorrowCount: 0,
    };
  }

  private createBoolValue(value: boolean): Value {
    return {
      type: "bool",
      value,
      mutable: false,
      borrowed: false,
      mutableBorrowed: false,
      immutableBorrowCount: 0,
    };
  }

  private createStringValue(value: string): Value {
    return {
      type: "string",
      value,
      mutable: false,
      borrowed: false,
      mutableBorrowed: false,
      immutableBorrowCount: 0,
    };
  }

  private createUnitValue(): Value {
    return {
      type: "unit",
      value: null,
      mutable: false,
      borrowed: false,
      mutableBorrowed: false,
      immutableBorrowCount: 0,
    };
  }

  private isTruthy(value: Value): boolean {
    if (value.type === "bool") {
      return value.value;
    }

    if (value.type === "i32" || value.type === "f64") {
      return value.value !== 0;
    }

    if (value.type === "string") {
      return value.value !== "";
    }

    return false;
  }

  private isEqual(left: Value, right: Value): boolean {
    if (left.type !== right.type) {
      return false;
    }

    return left.value === right.value;
  }

  private isLessThan(left: Value, right: Value): boolean {
    if (left.type !== right.type) {
      throw new Error(
        `Cannot compare values of different types: ${left.type} and ${right.type}`
      );
    }

    if (left.type !== "i32" && left.type !== "f64" && left.type !== "string") {
      throw new Error(`Cannot compare values of type ${left.type}`);
    }

    return left.value < right.value;
  }

  // Default visitor methods
  protected defaultResult(): Value {
    return this.createUnitValue();
  }

  protected aggregateResult(aggregate: Value, nextResult: Value): Value {
    return nextResult;
  }
}

// Main evaluator class
export class CrustEvaluator extends BasicEvaluator {
  private executionCount: number;
  private visitor: CrustEvaluatorVisitor;

  constructor(conductor: IRunnerPlugin) {
    super(conductor);
    this.executionCount = 0;
    this.visitor = new CrustEvaluatorVisitor();
  }

  async evaluateChunk(chunk: string): Promise<void> {
    this.executionCount++;
    try {
      // Create the lexer and parser
      const inputStream = CharStream.fromString(chunk);
      const lexer = new CrustLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new CrustParser(tokenStream);

      // Parse the input
      const tree = parser.prog();

      // Evaluate the parsed tree
      const result = this.visitor.visit(tree);

      // Format the result based on its type
      let formattedResult: string;

      switch (result.type) {
        case "i32":
          formattedResult = result.value.toString();
          break;
        case "f64":
          formattedResult = result.value.toFixed(6);
          break;
        case "bool":
          formattedResult = result.value ? "true" : "false";
          break;
        case "string":
          formattedResult = `"${result.value}"`;
          break;
        case "unit":
          formattedResult = "()";
          break;
        case "function":
          formattedResult = `<function: ${result.value.name}>`;
          break;
        case "reference":
          formattedResult = `&${result.mutable ? "mut " : ""}${result.value}`;
          break;
        default:
          formattedResult = String(result.value);
      }

      // Send the result to the REPL
      this.conductor.sendOutput(`Result: ${formattedResult}`);
    } catch (error) {
      if (error instanceof Error) {
        this.conductor.sendOutput(`Error: ${error.message}`);
      } else {
        this.conductor.sendOutput(`Error: ${String(error)}`);
      }
    }
  }

  // Helper methods for testing and debugging
  private dumpMemory(): void {
    // This could be implemented to display the current memory state
    this.conductor.sendOutput("Memory dump not implemented yet");
  }

  private dumpEnvironment(): void {
    // This could be implemented to display the current environment
    this.conductor.sendOutput("Environment dump not implemented yet");
  }
}

// Extensions to support running in a browser environment
if (typeof window !== "undefined") {
  (window as any).CrustEvaluator = CrustEvaluator;
}
