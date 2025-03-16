import { AbstractParseTreeVisitor } from "antlr4ng";
import { CrustVisitor } from "./parser/src/CrustVisitor";
import {
  ProgramContext,
  FunctionDeclarationContext,
  ExpressionContext,
  BlockContext,
  StatementContext,
  // Add other contexts as needed (e.g., VariableDeclarationContext)
} from "./parser/src/CrustParser";

// A simple structure for storing function definitions.
interface FunctionValue {
  parameters: string[];
  body: BlockContext;
  // Optionally, you can add an environment snapshot here for closures.
}

export class CrustEvaluatorVisitor
  extends AbstractParseTreeVisitor<any>
  implements CrustVisitor<any>
{
  // A simple environment for variables and functions.
  // For a real interpreter, you might implement a scope stack.
  private env: Record<string, any> = {};

  // Visit the top-level program: execute all statements and return the result of the last one.
  visitProgram(ctx: ProgramContext): any {
    let result = null;
    const statements = ctx.statement();
    for (const stmt of statements) {
      result = this.visit(stmt);
    }
    return result;
  }

  // Handle function declarations.
  // Syntax: fn Identifier ( parameterList? ) block
  visitFunctionDeclaration(ctx: FunctionDeclarationContext): any {
    const funcName = ctx.Identifier().getText();
    let parameters: string[] = [];
    if (ctx.parameterList()) {
      // Get each parameter's text while filtering out commas.
      parameters =
        ctx
          .parameterList()
          .children?.filter((child) => child.getText() !== ",")
          .map((child) => child.getText()) || [];
    }
    const body = ctx.block();
    // Store the function definition in the environment.
    this.env[funcName] = {
      parameters,
      body,
    } as FunctionValue;
    return null; // Declarations do not produce a value.
  }

  // Evaluate an expression.
  // This method handles literals, function calls, binary operations, and parenthesized expressions.
  visitExpression(ctx: ExpressionContext): any {
    // If the expression consists of a single child, it could be a literal or variable.
    if (ctx.getChildCount() === 1) {
      const text = ctx.getText();
      // Check if it's an integer literal.
      if (/^\d+$/.test(text)) {
        return parseInt(text);
      }
      // Otherwise, assume it's a variable reference.
      if (this.env[text] !== undefined) {
        return this.env[text];
      }
      // Return the text if nothing else applies.
      return text;
    }

    // Check for a parenthesized expression: '(' expression ')'
    if (
      ctx.getChildCount() === 3 &&
      ctx.getChild(0).getText() === "(" &&
      ctx.getChild(2).getText() === ")"
    ) {
      return this.visit(ctx.getChild(1));
    }

    // Check if this is a function call.
    // We assume the structure: Identifier '(' ... ')'
    if (ctx.getChildCount() >= 3 && ctx.getChild(1).getText() === "(") {
      // Retrieve the function name from the first child.
      const funcName = ctx.getChild(0).getText();
      // Collect arguments by iterating over children from index 2 up to the second-last (skipping commas).
      const args: any[] = [];
      for (let i = 2; i < ctx.getChildCount() - 1; i++) {
        const childText = ctx.getChild(i).getText();
        if (childText === ",") continue;
        args.push(this.visit(ctx.getChild(i)));
      }
      // Look up the function in the environment.
      const func = this.env[funcName] as FunctionValue;
      if (!func) {
        throw new Error(`Function ${funcName} is not defined.`);
      }
      // Create a new temporary environment scope.
      const oldEnv = { ...this.env };
      func.parameters.forEach((param, index) => {
        this.env[param] = args[index];
      });
      // Evaluate the function body.
      const result = this.visit(func.body);
      // Restore the original environment.
      this.env = oldEnv;
      return result;
    }

    // Handle binary operations.
    // Assuming the grammar creates binary expressions with exactly three children.
    if (ctx.getChildCount() === 3) {
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
        default:
          throw new Error(`Unknown operator: ${op}`);
      }
    }

    // Fallback: visit all children and return the result of the last one.
    return this.visitChildren(ctx);
  }

  // Visit a block: execute all statements within the block.
  visitBlock(ctx: BlockContext): any {
    let result = null;
    const statements = ctx.statement();
    for (const stmt of statements) {
      result = this.visit(stmt);
    }
    return result;
  }

  // You can implement additional visit methods here—for example,
  // for variable declarations, if-statements, while loops, etc.

  protected defaultResult(): any {
    return null;
  }

  protected aggregateResult(aggregate: any, nextResult: any): any {
    return nextResult;
  }
}
