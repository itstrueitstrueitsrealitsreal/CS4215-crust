import { AbstractParseTreeVisitor } from "antlr4ng";
import { CrustVisitor } from "./parser/src/CrustVisitor";
import {
  ProgramContext,
  StatementContext,
  VariableDeclarationContext,
  FunctionDeclarationContext,
  ParameterListContext,
  IfStatementContext,
  WhileStatementContext,
  ReturnStatementContext,
  ExpressionStatementContext,
  BlockContext,
  ExpressionContext,
  // ... add any other contexts you need
} from "./parser/src/CrustParser";

/**
 * A special class to handle early returns from functions.
 * We "throw" this object up the call stack to break out
 * of the function body evaluation.
 */
class ReturnValue {
  constructor(public value: any) {}
}

/**
 * Structure for storing function definitions in the environment.
 * Each function has a list of parameter names and a block for the body.
 */
interface FunctionValue {
  parameters: string[];
  body: BlockContext;
}

/**
 * A custom visitor that interprets a Rust‐like sublanguage.
 * It uses an environment stack to handle variable/function scope.
 */
export class CrustEvaluatorVisitor
  extends AbstractParseTreeVisitor<any>
  implements CrustVisitor<any>
{
  /**
   * A stack of "environments", each environment is a plain object
   * mapping variable/function names to values.
   * The top of the stack is the current scope.
   */
  private envStack: Array<Record<string, any>> = [{}];

  /**
   * Utility: get the current (top) environment on the stack.
   */
  private currentEnv(): Record<string, any> {
    return this.envStack[this.envStack.length - 1];
  }

  /**
   * Utility: push a new environment scope.
   * We clone the top environment so inherited variables are visible.
   */
  private pushEnv(): void {
    this.envStack.push({ ...this.currentEnv() });
  }

  /**
   * Utility: pop the current (top) environment scope.
   */
  private popEnv(): void {
    this.envStack.pop();
  }

  /**
   * Utility: retrieve a variable from any scope up the stack.
   * If it doesn’t exist, throw an error.
   */
  private getVar(name: string): any {
    for (let i = this.envStack.length - 1; i >= 0; i--) {
      if (name in this.envStack[i]) {
        return this.envStack[i][name];
      }
    }
    throw new Error(`Variable '${name}' not declared`);
  }

  /**
   * Utility: set a variable in the nearest scope where it is found,
   * or define it in the current scope if it doesn’t exist yet.
   */
  private setVar(name: string, value: any): void {
    for (let i = this.envStack.length - 1; i >= 0; i--) {
      if (name in this.envStack[i]) {
        this.envStack[i][name] = value;
        return;
      }
    }
    // If not found in any scope, define in current scope.
    this.currentEnv()[name] = value;
  }

  // --------------------------------------------------
  //                   Program
  // --------------------------------------------------

  /**
   * Top-level entry: execute each statement in the program
   * and return the result of the last statement.
   */
  visitProgram(ctx: ProgramContext): any {
    let result: any = null;
    for (const stmt of ctx.statement()) {
      result = this.visit(stmt);
    }
    return result;
  }

  // --------------------------------------------------
  //                   Statements
  // --------------------------------------------------

  /**
   * Variable Declaration:
   * e.g., `let x = 42;`
   */
  visitVariableDeclaration(ctx: VariableDeclarationContext): any {
    const varName = ctx.Identifier().getText();
    const exprCtx = ctx.expression();
    const value = exprCtx ? this.visit(exprCtx) : undefined;
    this.setVar(varName, value);
    return null; // Declaration yields no direct value
  }

  /**
   * Function Declaration:
   * e.g., `fn add(a, b) { a + b; }`
   */
  visitFunctionDeclaration(ctx: FunctionDeclarationContext): any {
    const funcName = ctx.Identifier().getText();
    // Collect parameters from parameterList
    let parameters: string[] = [];
    if (ctx.parameterList()) {
      // Filter out commas, keep parameter identifiers
      parameters = ctx
        .parameterList()!
        .children!.filter((child) => child.getText() !== ",")
        .map((child) => child.getText());
    }
    // The function body is a block
    const body = ctx.block();
    // Store the function in the current environment
    const funcValue: FunctionValue = { parameters, body };
    this.setVar(funcName, funcValue);
    return null;
  }

  /**
   * If Statement:
   * e.g., `if (cond) { ... } else { ... }`
   */
  visitIfStatement(ctx: IfStatementContext): any {
    const condition = this.visit(ctx.expression());
    if (condition) {
      return this.visit(ctx.block(0));
    } else if (ctx.block().length > 1) {
      // else block
      return this.visit(ctx.block(1));
    }
    return null;
  }

  /**
   * While Statement:
   * e.g., `while (cond) { ... }`
   */
  visitWhileStatement(ctx: WhileStatementContext): any {
    let result = null;
    while (this.visit(ctx.expression())) {
      result = this.visit(ctx.block());
    }
    return result;
  }

  /**
   * Return Statement:
   * e.g., `return expr;`
   * Throws a `ReturnValue` to break out of the function body.
   */
  visitReturnStatement(ctx: ReturnStatementContext): any {
    const exprCtx = ctx.expression();
    const value = exprCtx ? this.visit(exprCtx) : null;
    throw new ReturnValue(value);
  }

  /**
   * Expression Statement:
   * e.g., `x + 2;`
   */
  visitExpressionStatement(ctx: ExpressionStatementContext): any {
    return this.visit(ctx.expression());
  }

  // --------------------------------------------------
  //                   Blocks
  // --------------------------------------------------

  /**
   * A block creates a new scope. We push an environment,
   * evaluate each statement, and pop the environment.
   */
  visitBlock(ctx: BlockContext): any {
    this.pushEnv();
    let result: any = null;
    try {
      for (const stmt of ctx.statement()) {
        result = this.visit(stmt);
      }
    } catch (e) {
      // If a ReturnValue is thrown, bubble it up
      this.popEnv();
      if (e instanceof ReturnValue) {
        throw e;
      }
      throw e;
    }
    this.popEnv();
    return result;
  }

  // --------------------------------------------------
  //                   Expressions
  // --------------------------------------------------

  /**
   * Expression handling.
   * You may have subrules like `assignment`, `logicalOr`, etc.
   * For simplicity, this example shows how to handle
   * single-child expressions, function calls, binary ops, etc.
   */
  visitExpression(ctx: ExpressionContext): any {
    const childCount = ctx.getChildCount();

    // Single-child expression: literal or variable
    if (childCount === 1) {
      const text = ctx.getText();
      // If it's an integer
      if (/^\d+$/.test(text)) {
        return parseInt(text, 10);
      }
      // Otherwise treat it as a variable
      return this.getVar(text);
    }

    // Parenthesized expression: '(' expr ')'
    if (
      childCount === 3 &&
      ctx.getChild(0).getText() === "(" &&
      ctx.getChild(2).getText() === ")"
    ) {
      return this.visit(ctx.getChild(1));
    }

    // Possible function call: Identifier '(' ... ')'
    if (childCount >= 3 && ctx.getChild(1).getText() === "(") {
      const funcName = ctx.getChild(0).getText();
      const args: any[] = [];
      // Collect arguments from the children between '(' and ')'
      for (let i = 2; i < childCount - 1; i++) {
        const tokenText = ctx.getChild(i).getText();
        if (tokenText === ",") continue;
        args.push(this.visit(ctx.getChild(i)));
      }
      // Look up the function
      const func = this.getVar(funcName) as FunctionValue;
      if (!func || !func.body) {
        throw new Error(`Function '${funcName}' is not defined.`);
      }
      // Create a new scope for the function call
      const oldEnv = [...this.envStack];
      // Push a fresh environment that inherits from the current
      this.pushEnv();
      // Bind parameters
      func.parameters.forEach((param, index) => {
        this.setVar(param, args[index]);
      });
      let result;
      try {
        result = this.visit(func.body);
      } catch (e) {
        if (e instanceof ReturnValue) {
          result = e.value;
        } else {
          throw e;
        }
      }
      // Pop function scope and restore env
      this.popEnv();
      return result;
    }

    // Binary operation with 3 children (e.g., "left op right")
    if (childCount === 3) {
      const left = this.visit(ctx.getChild(0));
      const op = ctx.getChild(1).getText();
      const right = this.visit(ctx.getChild(2));
      switch (op) {
        case "+":
          return left + right;
        case "-":
          return left - right;
        case "*":
          return left * right;
        case "/":
          if (right === 0) {
            throw new Error("Division by zero");
          }
          return left / right;
        case "==":
          return left === right;
        case "!=":
          return left !== right;
        case "<":
          return left < right;
        case ">":
          return left > right;
        case "<=":
          return left <= right;
        case ">=":
          return left >= right;
        default:
          throw new Error(`Unknown operator: ${op}`);
      }
    }

    // If none of the above matched, fall back to visiting children.
    return this.visitChildren(ctx);
  }

  // --------------------------------------------------
  //             Default Visitor Methods
  // --------------------------------------------------

  protected defaultResult(): any {
    return null;
  }

  protected aggregateResult(aggregate: any, nextResult: any): any {
    return nextResult;
  }
}
