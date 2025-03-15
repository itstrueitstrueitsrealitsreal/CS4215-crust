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
} from "./parser/src/CrustParser";
import { CrustVisitor } from "./parser/src/CrustVisitor";

class CrustEvaluatorVisitor
  extends AbstractParseTreeVisitor<number>
  implements CrustVisitor<number>
{
  // Environment for variable storage
  private variables: Map<string, number> = new Map();

  // Visit a variable declaration: let x = expr;
  visitVarDecl(ctx: CrustParser.VarDeclContext): number {
    const varName = ctx.ID().text;
    const value = this.visit(ctx.expr());
    this.variables.set(varName, value);
    return value;
  }

  // Visit an expression statement (an expression followed by a semicolon)
  visitExprStmt(ctx: ExprContext): number {
    return this.visit(ctx);
  }

  // Visit an if statement
  visitIfStmt(ctx: CrustParser.IfStmtContext): number {
    const condition = this.visit(ctx.expr());
    if (condition !== 0) {
      return this.visit(ctx.block(0));
    } else if (ctx.block(1)) {
      return this.visit(ctx.block(1));
    }
    return 0;
  }

  // Visit a while statement
  visitWhileStmt(ctx: CrustParser.WhileStmtContext): number {
    let result = 0;
    while (this.visit(ctx.expr()) !== 0) {
      result = this.visit(ctx.block());
    }
    return result;
  }

  // Visit a function declaration (placeholder implementation)
  visitFuncDecl(ctx: CrustParser.FuncDeclContext): number {
    return 0; // Placeholder: Extend to support function calls as needed.
  }

  // Visit an expression
  visitExpr(ctx: ExprContext): number {
    if (ctx.getChildCount() === 1) {
      if (ctx.INT()) {
        return parseInt(ctx.INT().text);
      } else if (ctx.ID()) {
        const varName = ctx.ID().text;
        if (this.variables.has(varName)) {
          return this.variables.get(varName) ?? 0;
        }
        throw new Error(`Variable ${varName} not defined`);
      }
    } else if (ctx.getChildCount() === 3) {
      // Binary operation or parenthesized expression
      // For parenthesized expressions, the first and third tokens are '(' and ')'
      if (
        ctx.getChild(0).getText() === "(" &&
        ctx.getChild(2).getText() === ")"
      ) {
        return this.visit(ctx.expr());
      }
      // Otherwise, handle binary operations
      const left = this.visit(ctx.expr(0));
      const right = this.visit(ctx.expr(1));
      const op = ctx.op.text;
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
          throw new Error(`Unsupported operator: ${op}`);
      }
    }
    throw new Error(`Invalid expression: ${ctx.getText()}`);
  }

  // Default result for unvisited nodes
  protected defaultResult(): number {
    return 0;
  }

  // Aggregate results for child nodes (for completeness)
  protected aggregateResult(aggregate: number, nextResult: number): number {
    return nextResult;
  }
}

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

      // Send the result to the REPL
      this.conductor.sendOutput(`Result of expression: ${result}`);
    } catch (error) {
      if (error instanceof Error) {
        this.conductor.sendOutput(`Error: ${error.message}`);
      } else {
        this.conductor.sendOutput(`Error: ${String(error)}`);
      }
    }
  }
}
