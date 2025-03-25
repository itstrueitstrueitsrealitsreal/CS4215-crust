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
    if (ctx.getChildCount() == 1) {
      // Handle different literal types
      const text = ctx.getText();
      const val =
        text === "true" ? true : text === "false" ? false : parseInt(text);

      this.instrs[this.wc++] = { tag: "LDC", val: val };
    } else if (ctx.getChildCount() === 3) {
      if (
        ctx.getChild(0).getText() === "(" &&
        ctx.getChild(2).getText() === ")"
      ) {
        this.visit(ctx.getChild(1) as ExpressionContext);
      } else {
        // If the expression is a binary operation, compile the operands and add a binary operation instruction
        this.visit(ctx.getChild(0)); // Compile the first operand
        this.visit(ctx.getChild(2)); // Compile the second operand
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
