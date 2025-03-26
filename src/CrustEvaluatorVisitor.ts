import { AbstractParseTreeVisitor } from "antlr4ng";
import { ExpressionContext, ProgContext } from "./parser/src/CrustParser";
import { CrustVisitor } from "./parser/src/CrustVisitor";

// should visit and compile into json
export class CrustEvaluatorVisitor
  extends AbstractParseTreeVisitor<void>
  implements CrustVisitor<void>
{
  // wc: write counter
  private wc: number = 0;
  // instrs: instruction array
  private instrs: any[] = [];

  // Visit a parse tree produced by CrustParser#prog
  visitProg(ctx: ProgContext): void {
    if (ctx.expression().length === 0) {
      this.instrs[this.wc++] = { tag: "LDC", val: undefined };
    }
    let first = true;
    for (const expressionCtx of ctx.expression()) {
      first ? (first = false) : (this.instrs[this.wc++] = { tag: "POP" });
      this.visit(expressionCtx);
    }
  }

  // Visit a parse tree produced by CrustParser#expression
  visitExpression(ctx: ExpressionContext): void {
    if (ctx.getChildCount() === 1) {
      const text = ctx.getText();
      const val =
        text === "true" ? true : text === "false" ? false : parseInt(text);
      this.instrs[this.wc++] = { tag: "LDC", val: val };
    } else if (ctx.getChildCount() === 2) {
      const op = ctx.getChild(0).getText();
      this.visit(ctx.getChild(1) as ExpressionContext);
      this.instrs[this.wc++] = { tag: "UNOP", sym: op };
    } else if (ctx.getChildCount() === 3) {
      if (
        ctx.getChild(0).getText() === "(" &&
        ctx.getChild(2).getText() === ")"
      ) {
        // Parenthesized expression
        this.visit(ctx.getChild(1) as ExpressionContext);
      } else {
        // Binary operator: compile left and right operands
        this.visit(ctx.getChild(0)); // left operand
        this.visit(ctx.getChild(2)); // right operand
        this.instrs[this.wc++] = {
          tag: "BINOP",
          sym: ctx.getChild(1).getText(),
        };
      }
    } else {
      throw new Error(`Invalid expression: ${ctx.getText()}`);
    }
  }

  // Override the default result method from AbstractParseTreeVisitor
  protected defaultResult(): void {
    // No return value needed
  }

  // Override the aggregate result method
  protected aggregateResult(aggregate: void, nextResult: void): void {
    // No aggregation needed
  }

  public getInstrs(): any[] {
    return this.instrs;
  }
}
