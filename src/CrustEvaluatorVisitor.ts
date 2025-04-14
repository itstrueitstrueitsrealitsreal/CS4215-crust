import { AbstractParseTreeVisitor } from "antlr4ng";
import {
  ProgContext,
  ExprStmtContext,
  VarDeclContext,
  IfStmtContext,
  WhileStmtContext,
  BlockStmtContext,
  BreakStmtContext,
  ExpressionContext,
  LiteralContext,
  AssignmentStmtContext,
  PrintStmtContext,
  PrintlnStmtContext,
  FormatExprContext,
  LambdaExprContext,
  LambdaCallContext,
  ReturnStmtContext,
  FunctionDeclContext,
  ParamListContext,
  DerefAssignStmtContext,
} from "./parser/src/CrustParser";
import { CrustVisitor } from "./parser/src/CrustVisitor";
import { push } from "./utils/Common";
import { typeMap } from "./TypeCheckerVisitor";
import { Type } from "./utils/TypeUtils";
export class CrustEvaluatorVisitor
  extends AbstractParseTreeVisitor<void>
  implements CrustVisitor<void>
{
  private wc: number = 0;
  private instrs: any[] = [];
  private breakTargets: number[][] = [];

  private compileSequence(statements: any[]): void {
    for (let i = 0; i < statements.length - 1; i++) {
      const stmt = statements[i];
      this.visit(stmt);
  
      // Add this log to check the statement type
      console.log(`compileSequence: Checking statement type for POP: ${stmt.constructor.name}`);
  
      // Only POP if the statement is guaranteed *not* to alter control flow...
      if (
        !(stmt instanceof IfStmtContext) &&
        !(stmt instanceof WhileStmtContext) &&
        !(stmt instanceof BlockStmtContext) &&
        !(stmt instanceof ReturnStmtContext) &&
        !(stmt instanceof BreakStmtContext) &&
        !(stmt instanceof FunctionDeclContext)
      ) {
         console.log(`compileSequence: Adding POP after ${stmt.constructor.name}`); // Add this log
         this.instrs[this.wc++] = { tag: "POP" };
      } else {
         console.log(`compileSequence: Skipping POP after ${stmt.constructor.name}`); // Add this log
      }
    }
    // Visit the last statement (or push undefined for empty sequence)
    if (statements.length > 0) {
      this.visit(statements[statements.length - 1]);
    } else {
      // Empty sequence should produce undefined
      this.instrs[this.wc++] = { tag: "LDC", val: undefined };
    }
  }

  visitProg(ctx: ProgContext): void {
    this.compileSequence(ctx.statement());
  }

  private global_compile_environment: {
    name: string;
    mutable: boolean;
    type: Type;
  }[][] = [];

  private compile_time_environment_extend(
    vs: { name: string; mutable: boolean; type: Type }[],
    e: { name: string; mutable: boolean; type: Type }[][]
  ): { name: string; mutable: boolean; type: Type }[][] {
    //  make shallow copy of e
    return push([...e], vs);
  }

  private scan(
    ctx: BlockStmtContext
  ): { name: string; mutable: boolean; type: Type }[] {
    const locals: { name: string; mutable: boolean; type: Type }[] = [];
    const declaredSymbols = new Set<string>(); // Use a Set to detect duplicates

    for (const statementCtx of ctx.statement()) {
      // Handle variable declarations
      if (statementCtx.getChild(0) instanceof VarDeclContext) {
        const varDeclContext = statementCtx.getChild(0) as VarDeclContext;
        const variableName = varDeclContext.IDENTIFIER().getText();

        if (declaredSymbols.has(variableName)) {
          throw new Error(`Duplicate declared symbol: '${variableName}'`);
        }
        declaredSymbols.add(variableName);

        // Determine mutability. For example, if the second child is "mut", mark as mutable.
        let isMutable = false;
        if (
          varDeclContext.getChild(1) &&
          varDeclContext.getChild(1).getText() === "mut"
        ) {
          isMutable = true;
        }
        const declaredType = typeMap.get(variableName) || "()";
        locals.push({
          name: variableName,
          mutable: isMutable,
          type: declaredType,
        });
      }
      // Handle function declarations
      else if (statementCtx.getChild(0) instanceof FunctionDeclContext) {
        const functionDeclContext = statementCtx.getChild(
          0
        ) as FunctionDeclContext;
        const functionName = functionDeclContext.IDENTIFIER().getText();

        if (declaredSymbols.has(functionName)) {
          throw new Error(`Duplicate declared symbol: '${functionName}'`);
        }
        declaredSymbols.add(functionName);
        const fnType = typeMap.get(functionName) || "()";
        locals.push({ name: functionName, mutable: false, type: fnType });
      }
    }

    console.log("locals", locals);
    return locals;
  }

  visitBlockStmt(ctx: BlockStmtContext): void {
    const locals = this.scan(ctx);
    // const locals = [];
    const previousEnvironment = this.global_compile_environment;
    this.global_compile_environment = this.compile_time_environment_extend(
      locals,
      this.global_compile_environment
    );
    this.instrs[this.wc++] = { tag: "ENTER_SCOPE", num: locals.length };
    this.compileSequence(ctx.statement());
    this.global_compile_environment = previousEnvironment;
    this.instrs[this.wc++] = { tag: "EXIT_SCOPE" };
  }

  visitExprStmt(ctx: ExprStmtContext): void {
    // Just compile the contained expression.
    this.visit(ctx.expression());
    // Pop the result since it's not being used
    this.instrs[this.wc++] = { tag: "POP" };
  }

  /* ************************
   * compile-time environment
   * ************************/
  // a compile-time environment is an array of compile-time frames, and a compile-time frame is an array of symbols
  // find the position [frame-index, value-index] of a given symbol x
  private compile_time_environment_position(
    env: any[],
    x: any
  ): [number, number] {
    let frame_index = env.length;
    while (frame_index > 0) {
      frame_index--;
      const valueIndex = this.value_index(env[frame_index], x);
      if (valueIndex !== -1) {
        return [frame_index, valueIndex];
      }
    }
    throw new Error(
      `Variable '${x}' not found in the compile-time environment.`
    );
  }
  private value_index(frame: any[], x: any): number {
    for (let i = 0; i < frame.length; i++) {
      if (frame[i].name === x) return i;
    }
    return -1;
  }

  // Visitor for a variable declaration:
  // 'let' IDENTIFIER ('=' expression)? ';'
  visitVarDecl(ctx: VarDeclContext): void {
    const sym = ctx.IDENTIFIER().getText();
    this.visit(ctx.expression());
    this.instrs[this.wc++] = {
      tag: "ASSIGN",
      pos: this.compile_time_environment_position(
        this.global_compile_environment,
        sym
      ),
    };
  }

  visitAssignmentStmt(ctx: AssignmentStmtContext): void {
    const sym = ctx.IDENTIFIER().getText();
    // Get the assignment operator (child index 1 in the parse tree)
    const op = ctx.getChild(1).getText();

    // Find the variable's position in the compile-time environment.
    const [frameIndex, valueIndex] = this.compile_time_environment_position(
      this.global_compile_environment,
      sym
    );

    // Check if the variable is mutable.
    if (!this.global_compile_environment[frameIndex][valueIndex].mutable) {
      throw new Error(`cannot assign twice to immutable variable '${sym}'`);
    }

    // Handle simple assignment.
    if (op === "=") {
      this.visit(ctx.expression());
      this.instrs[this.wc++] = {
        tag: "ASSIGN",
        pos: [frameIndex, valueIndex],
      };
    } else {
      // For compound assignment (e.g., '+=', '-=', etc.):
      // 1. Load the current value of the variable.
      this.instrs[this.wc++] = {
        tag: "LD",
        pos: [frameIndex, valueIndex],
      };

      // 2. Evaluate the right-hand side expression.
      this.visit(ctx.expression());

      // 3. Determine the binary operator corresponding to the compound assignment.
      let binop: string;
      switch (op) {
        case "+=":
          binop = "+";
          break;
        case "-=":
          binop = "-";
          break;
        case "*=":
          binop = "*";
          break;
        case "/=":
          binop = "/";
          break;
        case "%=":
          binop = "%";
          break;
        case "<<=":
          binop = "<<";
          break;
        case ">>=":
          binop = ">>";
          break;
        case "&=":
          binop = "&";
          break;
        case "^=":
          binop = "^";
          break;
        case "|=":
          binop = "|";
          break;
        default:
          throw new Error(`Unsupported compound assignment operator: ${op}`);
      }

      // 4. Emit the binary operation instruction.
      this.instrs[this.wc++] = { tag: "BINOP", sym: binop };

      // 5. Assign the result back to the variable.
      this.instrs[this.wc++] = {
        tag: "ASSIGN",
        pos: [frameIndex, valueIndex],
      };
    }
  }

  visitDerefAssignStmt(ctx: DerefAssignStmtContext): void {
    // CORRECT ORDER: Reference first, then value
    // First the right-hand side (value)
    this.visit(ctx.expression(1));

    // Then the left-hand side (reference)
    this.visit(ctx.expression(0));

    // Now the stack has [reference, value] from top to bottom
    this.instrs[this.wc++] = { tag: "DEREF_ASSIGN" };
    this.instrs[this.wc++] = { tag: "POP" };
  }
  // Visitor for an if statement:
  // 'if' '(' expression ')' statement ('else' statement)?
  visitIfStmt(ctx: IfStmtContext): void {
    // Compile the condition.
    this.visit(ctx.expression());
    // Emit a branch instruction with a placeholder for the false jump.
    const branchIndex = this.wc;
    this.instrs[this.wc++] = { tag: "JOF", addr: null };
    // Compile the 'then' branch.
    this.visit(ctx.statement(0));
    let jumpIndex: number | null = null;
    // If there is an else branch...
    if (ctx.statement().length > 1) {
      // Emit an unconditional jump to skip the else branch.
      jumpIndex = this.wc;
      this.instrs[this.wc++] = { tag: "GOTO", addr: null };
      // Patch the false branch to jump to the else branch.
      this.instrs[branchIndex].addr = this.wc;
      // Compile the 'else' branch.
      this.visit(ctx.statement(1));
    } else {
      // No else branch; patch false branch to exit here.
      this.instrs[branchIndex].addr = this.wc;
    }
    if (jumpIndex !== null) {
      // Patch the unconditional jump to point to the end of the if statement.
      this.instrs[jumpIndex].addr = this.wc;
    }
  }

  // Visitor for a while loop:
  // 'while' '(' expression ')' statement
  visitWhileStmt(ctx: WhileStmtContext): void {
    // Mark the start of the loop.
    const loopStart = this.wc;

    // Push a new break target list for this loop.
    this.breakTargets.push([]);

    // Compile the loop condition.
    this.visit(ctx.expression());
    const branchIndex = this.wc;
    this.instrs[this.wc++] = { tag: "JOF", addr: null };

    // Compile the loop body.
    this.visit(ctx.statement());

    // Emit a jump to loop back.
    this.instrs[this.wc++] = { tag: "GOTO", addr: loopStart };

    // Patch the false branch of the condition to exit the loop.
    this.instrs[branchIndex].addr = this.wc;

    // Patch any break instructions to jump here (immediately after the loop).
    const breaks = this.breakTargets.pop();
    for (const breakIndex of breaks) {
      this.instrs[breakIndex].addr = this.wc;
    }
  }

  // Visitor for an expression.
  visitExpression(ctx: ExpressionContext): void {
    // Print children for debugging
    for (let i = 0; i < ctx.getChildCount(); i++) {}

    // Special case for &mut (two separate tokens)
    if (
      ctx.getChildCount() >= 3 &&
      ctx.getChild(0).getText() === "&" &&
      ctx.getChild(1).getText() === "mut"
    ) {
      const innerExpression = ctx.getChild(2) as ExpressionContext;

      // If it's an identifier, we need variable info for the reference
      if (innerExpression.IDENTIFIER()) {
        const varName = innerExpression.IDENTIFIER().getText();
        const [frameIndex, valueIndex] = this.compile_time_environment_position(
          this.global_compile_environment,
          varName
        );

        // Load the variable first
        this.instrs[this.wc++] = {
          tag: "LD",
          pos: [frameIndex, valueIndex],
        };

        // Create a reference with variable info
        this.instrs[this.wc++] = {
          tag: "UNOP",
          sym: "&mut",
          varInfo: { frameIndex, valueIndex },
        };
      } else {
        // For non-identifier expressions
        this.visit(innerExpression);
        this.instrs[this.wc++] = { tag: "UNOP", sym: "&mut" };
      }
      return;
    }

    // Handle method calls (expr.method())
    if (ctx.getChildCount() === 3 && ctx.getChild(1).getText() === ".") {
      // This is a method call expression: expr.method()
      // 1) Compile the base expression
      this.visit(ctx.getChild(0) as ExpressionContext);

      // 2) Handle the method call
      const methodCall = ctx.getChild(2);
      if (methodCall.getText().includes("to_string")) {
        this.instrs[this.wc++] = { tag: "TOSTRING" };
      } else if (methodCall.getText().includes("to_owned")) {
        this.instrs[this.wc++] = { tag: "TOOWNED" };
      }
      return;
    }

    // Handle single-child expressions
    if (ctx.getChildCount() === 1) {
      if (ctx.getChild(0) instanceof LiteralContext) {
        this.visit(ctx.getChild(0) as LiteralContext);
      } else if (ctx.IDENTIFIER()) {
        const sym = ctx.IDENTIFIER().getText();
        const [frameIndex, valueIndex] = this.compile_time_environment_position(
          this.global_compile_environment,
          sym
        );
        const varEntry =
          this.global_compile_environment[frameIndex][valueIndex];
        this.instrs[this.wc++] = {
          tag: "LD",
          pos: [frameIndex, valueIndex],
        };
      } else if (ctx.getChild(0) instanceof FormatExprContext) {
        this.visit(ctx.getChild(0));
      } else if (ctx.getChild(0) instanceof LambdaCallContext) {
        this.visit(ctx.getChild(0) as LambdaCallContext);
      } else if (ctx.getChild(0) instanceof LambdaExprContext) {
        this.visit(ctx.getChild(0) as LambdaExprContext);
      } else {
        throw new Error(`Invalid expression: ${ctx.getText()}`);
      }
      return;
    }

    // Handle unary operators
    if (ctx.getChildCount() === 2) {
      const op = ctx.getChild(0).getText();
      const innerExpression = ctx.getChild(1) as ExpressionContext;

      // Reference and dereference operators
      if (op === "&" || op === "*") {
        if (op === "&" && innerExpression.IDENTIFIER()) {
          // For references to variables, store the variable info
          const varName = innerExpression.IDENTIFIER().getText();
          const [frameIndex, valueIndex] =
            this.compile_time_environment_position(
              this.global_compile_environment,
              varName
            );

          // Load the variable
          this.visit(innerExpression);

          // Create immutable reference with variable info
          this.instrs[this.wc++] = {
            tag: "UNOP",
            sym: op,
            varInfo: { frameIndex, valueIndex },
          };
        } else {
          // For other expressions or dereference
          this.visit(innerExpression);
          this.instrs[this.wc++] = { tag: "UNOP", sym: op };
        }
        return;
      }

      // Other unary operators (-, !, etc.)
      this.visit(innerExpression);
      this.instrs[this.wc++] = { tag: "UNOP", sym: op };
      return;
    }

    // Handle binary operators and parenthesized expressions
    if (ctx.getChildCount() === 3) {
      if (
        ctx.getChild(0).getText() === "(" &&
        ctx.getChild(2).getText() === ")"
      ) {
        // Parenthesized expression
        this.visit(ctx.getChild(1) as ExpressionContext);
      } else {
        // Binary operator
        this.visit(ctx.getChild(0));
        this.visit(ctx.getChild(2));
        this.instrs[this.wc++] = {
          tag: "BINOP",
          sym: ctx.getChild(1).getText(),
        };
      }
      return;
    }

    throw new Error(`Invalid expression structure: ${ctx.getText()}`);
  }

  // Visitor for a literal.
  visitLiteral(ctx: LiteralContext): void {
    const text = ctx.getText();
    let val;
    if (text.startsWith('"')) {
      // Remove the surrounding quotes. You might also need to unescape characters.
      val = text.substring(1, text.length - 1);
    } else if (/^'.'$/.test(text)) {
      val = text[1];
    } else if (text === "true") {
      val = true;
    } else if (text === "false") {
      val = false;
    } else if (/^[0-9]+$/.test(text)) {
      val = parseInt(text);
    } else {
      throw new Error(`Unrecognized literal: ${text}`);
    }
    this.instrs[this.wc++] = { tag: "LDC", val: val };
  }

  visitBreakStmt(ctx: BreakStmtContext): void {
    if (this.breakTargets.length === 0) {
      throw new Error("Break statement not within a loop.");
    }
    // Emit a GOTO with an unknown address.
    const breakInstrIndex = this.wc;
    this.instrs[this.wc++] = { tag: "GOTO", addr: null };
    // Add this instruction index to the top break target list.
    this.breakTargets[this.breakTargets.length - 1].push(breakInstrIndex);
  }
  visitFormatExpr(ctx: FormatExprContext): void {
    console.log("Visiting formatExpr: " + ctx.getText());
    const fmtToken = ctx.STRING().getText();
    const formatStr = fmtToken.substring(1, fmtToken.length - 1);
    const exprs = ctx.expression();

    // Load the format string and expressions onto the stack and combine them
    this.compileTemplate(formatStr, exprs);

    // No need to push a "PRINT" instruction here since format! just returns a string
    // The result of format! is already on the stack
  }

  private compileTemplate(formatStr: string, exprs: ExpressionContext[]): void {
    const re = /\{([^}]*)\}/g;
    let lastIndex = 0;
    const literalParts: string[] = [];
    const placeholders: string[] = [];

    let match: RegExpExecArray | null;
    while ((match = re.exec(formatStr)) !== null) {
      literalParts.push(formatStr.substring(lastIndex, match.index));
      placeholders.push(match[1].trim());
      lastIndex = re.lastIndex;
    }
    literalParts.push(formatStr.substring(lastIndex));

    // If there are no placeholders, just load the literal.
    if (placeholders.length === 0) {
      this.instrs[this.wc++] = { tag: "LDC", val: formatStr };
      return;
    }

    // Load the first literal part.
    this.instrs[this.wc++] = { tag: "LDC", val: literalParts[0] };

    let posCounter = 0;
    for (let i = 0; i < placeholders.length; i++) {
      const ph = placeholders[i];

      if (ph === "") {
        if (posCounter >= exprs.length) {
          throw new Error("Not enough arguments for positional placeholder");
        }

        // Visit the expression
        this.visit(exprs[posCounter]);

        // Explicitly convert numbers to strings:
        this.instrs[this.wc++] = { tag: "TOSTRING" };
        posCounter++;
      } else {
        // Named placeholder: load variable from environment.
        this.instrs[this.wc++] = {
          tag: "LD",
          pos: this.compile_time_environment_position(
            this.global_compile_environment,
            ph
          ),
        };
        // Explicitly convert numbers to strings:
        this.instrs[this.wc++] = { tag: "TOSTRING" };
      }

      // Concatenate the placeholder's value.
      this.instrs[this.wc++] = { tag: "BINOP", sym: "+" };

      // Load and concatenate the next literal part.
      this.instrs[this.wc++] = { tag: "LDC", val: literalParts[i + 1] };
      this.instrs[this.wc++] = { tag: "BINOP", sym: "+" };
    }
  }

  visitPrintStmt(ctx: PrintStmtContext): void {
    // Process the format string and expressions
    const fmtToken = ctx.STRING().getText();
    const formatStr = fmtToken.substring(1, fmtToken.length - 1);
    const exprs = ctx.expression();

    // Compile the format string with expressions
    this.compileTemplate(formatStr, exprs);

    // Emit an instruction to print without a newline.
    this.instrs[this.wc++] = { tag: "PRINT" };
  }

  visitPrintlnStmt(ctx: PrintlnStmtContext): void {
    if (ctx.STRING()) {
      // If there's a format string, process it with expressions
      const fmtToken = ctx.STRING().getText();
      const formatStr = fmtToken.substring(1, fmtToken.length - 1);
      const exprs = ctx.expression();
      // Compile the format string with expressions
      this.compileTemplate(formatStr, exprs);
    } else {
      // If no argument is provided, load an empty string.
      this.instrs[this.wc++] = { tag: "LDC", val: "" };
    }

    // Emit PRINTLN instruction which prints with a newline.
    this.instrs[this.wc++] = { tag: "PRINTLN" };
  }

  // fun: (comp, ce) => {
  // 	compile(
  // 		{
  // 			tag: "const",
  // 			sym: comp.sym,
  // 			expr: { tag: "lam", prms: comp.prms, body: comp.body },
  // 		},
  // 		ce,
  // 	);
  // },
  visitFunctionDecl(ctx: FunctionDeclContext): void {
    const functionName = ctx.IDENTIFIER().getText();
    const paramList = ctx.paramList();
    const body = ctx.blockStmt();

    this.compileLambda(paramList, body);

    // Assign the generated lambda to the function name
    this.instrs[this.wc++] = {
      tag: "ASSIGN",
      pos: this.compile_time_environment_position(
        this.global_compile_environment,
        functionName
      ),
    };
  }

  visitLambdaExpr(ctx: LambdaExprContext): void {
    // Extract the parameter list and body
    const paramList = ctx.paramList();
    const body = ctx.blockStmt() || ctx.expression();

    // Use the helper method to compile the lambda logic
    this.compileLambda(paramList, body);
  }

  private compileLambda(
    paramList: ParamListContext | null,
    body: BlockStmtContext | ExpressionContext | null
  ): void {
    // Extract the parameters
    const params = paramList
      ? paramList.IDENTIFIER().map((id) => ({
          name: id.getText(),
          mutable: false,
          type: "()" as Type,
        }))
      : [];

    // Emit an LDF (Load Function) instruction to create a closure
    this.instrs[this.wc++] = {
      tag: "LDF",
      arity: params.length,
      addr: this.wc + 1,
    };

    // Emit a GOTO instruction to skip over the lambda body
    const gotoInstruction = { tag: "GOTO", addr: null };
    this.instrs[this.wc++] = gotoInstruction;

    const previousEnvironment = this.global_compile_environment;
    this.global_compile_environment = this.compile_time_environment_extend(
      params,
      this.global_compile_environment
    );

    if (body instanceof ExpressionContext) {
      this.visit(body);
    } else if (body instanceof BlockStmtContext) {
      this.visit(body);
    }

    // Emit a LDC (Load Constant) instruction to return undefined if no explicit return
    this.instrs[this.wc++] = { tag: "LDC", val: undefined };
    // Emit a RESET instruction to reset the environment after the lambda body
    this.instrs[this.wc++] = { tag: "RESET" };
    // Patch the GOTO instruction to jump to the end of the lambda body
    gotoInstruction.addr = this.wc;
    // Restore the previous compile-time environment
    this.global_compile_environment = previousEnvironment;
  }

  visitLambdaCall(ctx: LambdaCallContext): void {
    const sym = ctx.IDENTIFIER().getText();
    this.instrs[this.wc++] = {
      tag: "LD",
      pos: this.compile_time_environment_position(
        this.global_compile_environment,
        sym
      ),
    };
    const args = ctx.argList()
      ? ctx
          .argList()
          .expression()
          .map((arg) => this.visit(arg))
      : [];
    this.instrs[this.wc++] = {
      tag: "CALL",
      arity: args.length,
    };
  }

  visitReturnStmt(ctx: ReturnStmtContext): void {
    if (ctx.expression()) {
      this.visit(ctx.expression());
    } else {
      this.instrs[this.wc++] = { tag: "LDC", val: undefined };
    }
    if (ctx.expression().getChild(0) instanceof LambdaCallContext) {
      this.instrs[this.wc - 1].tag = "TAIL_CALL";
    } else this.instrs[this.wc++] = { tag: "RESET" };
  }

  private showGlobalCompileEnvironment(): void {
    console.log("Global compile-time environment:");
    for (let i = 0; i < this.global_compile_environment.length; i++) {
      console.log(`Frame ${i}:`);
      for (const { name, mutable } of this.global_compile_environment[i]) {
        console.log(`  ${name} (mutable: ${mutable})`);
      }
    }
  }

  // Override the default result method.
  protected defaultResult(): void {
    // No result
  }

  // Override the aggregate result method.
  protected aggregateResult(aggregate: void, nextResult: void): void {
    // No aggregation is needed.
  }

  // Public method to obtain generated instructions.
  public getInstrs(): any[] {
    return this.instrs;
  }
}
