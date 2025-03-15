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
  private variables: Map<string, number> = new Map();

  visitVarDecl(ctx: CrustParser.VarDeclContext): number {
    const varName = ctx.ID().text;
    const value = this.visit(ctx.expr());
    this.variables.set(varName, value);
    return value;
  }

  visitExprStmt(ctx: ExprContext): number {
    return this.visit(ctx);
  }

  visitIfStmt(ctx: CrustParser.IfStmtContext): number {
    const condition = this.visit(ctx.expr());
    if (condition !== 0) {
      return this.visit(ctx.block(0));
    } else if (ctx.block(1)) {
      return this.visit(ctx.block(1));
    }
    return 0;
  }

  visitWhileStmt(ctx: CrustParser.WhileStmtContext): number {
    let result = 0;
    while (this.visit(ctx.expr()) !== 0) {
      result = this.visit(ctx.block());
    }
    return result;
  }

  visitFuncDecl(ctx: CrustParser.FuncDeclContext): number {
    return 0; // Placeholder
  }

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

  protected defaultResult(): number {
    return 0;
  }

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
      const inputStream = CharStream.fromString(chunk);
      const lexer = new CrustLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new CrustParser(tokenStream);

      const tree = parser.prog();
      const result = this.visitor.visit(tree);

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
