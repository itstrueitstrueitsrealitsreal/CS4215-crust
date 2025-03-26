import { AbstractParseTreeVisitor } from "antlr4ng";
import {
  ProgContext,
  ExprStmtContext,
  VarDeclContext,
  IfStmtContext,
  WhileStmtContext,
  BlockStmtContext,
  ExpressionContext,
} from "./parser/src/CrustParser";
import { CrustVisitor } from "./parser/src/CrustVisitor";

export class CrustEvaluatorVisitor
  extends AbstractParseTreeVisitor<void>
  implements CrustVisitor<void>
{
  // Write counter for instructions.
  private wc: number = 0;
  // Array to store generated instructions.
  private instrs: any[] = [];

  private compileSequence(statements: any[]): void {
    for (let i = 0; i < statements.length - 1; i++) {
      this.visit(statements[i]);
      // Discard the result of non-final statements.
      this.instrs[this.wc++] = { tag: "POP" };
    }
    if (statements.length > 0) {
      this.visit(statements[statements.length - 1]);
    }
  }

  visitProg(ctx: ProgContext): void {
    this.compileSequence(ctx.statement());
  }

  visitBlockStmt(ctx: BlockStmtContext): void {
    this.compileSequence(ctx.statement());
  }

  visitExprStmt(ctx: ExprStmtContext): void {
    // Just compile the contained expression.
    this.visit(ctx.expression());
  }

  // Visitor for a variable declaration:
  // 'let' IDENTIFIER ('=' expression)? ';'
  visitVarDecl(ctx: VarDeclContext): void {
    const id = ctx.IDENTIFIER().getText();
    // Emit a VARDECL instruction (you need to implement its microcode)
    this.instrs[this.wc++] = { tag: "VARDECL", id: id };
    // If an initializer is provided, compile it and then emit a STORE.
    if (ctx.expression()) {
      this.visit(ctx.expression());
      this.instrs[this.wc++] = { tag: "STORE", id: id };
    }
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
    // Compile the condition.
    this.visit(ctx.expression());
    // Emit a branch instruction to exit the loop when false.
    const branchIndex = this.wc;
    this.instrs[this.wc++] = { tag: "JOF", addr: null };
    // Compile the loop body.
    this.visit(ctx.statement());
    // Emit a jump instruction to go back to the loop start.
    this.instrs[this.wc++] = { tag: "GOTO", addr: loopStart };
    // Patch the branch to exit the loop.
    this.instrs[branchIndex].addr = this.wc;
  }

  // Visitor for an expression.
  // This remains similar to your previous implementation.
  visitExpression(ctx: ExpressionContext): void {
    if (ctx.getChildCount() === 1) {
      // Literal (or identifier if you extend further)
      const text = ctx.getText();
      const val =
        text === "true" ? true : text === "false" ? false : parseInt(text);
      this.instrs[this.wc++] = { tag: "LDC", val: val };
    } else if (ctx.getChildCount() === 2) {
      // Unary operator: e.g., '-' expression or '!' expression.
      const op = ctx.getChild(0).getText();
      this.visit(ctx.getChild(1) as ExpressionContext);
      this.instrs[this.wc++] = { tag: "UNOP", sym: op };
    } else if (ctx.getChildCount() === 3) {
      if (
        ctx.getChild(0).getText() === "(" &&
        ctx.getChild(2).getText() === ")"
      ) {
        // Parenthesized expression.
        this.visit(ctx.getChild(1) as ExpressionContext);
      } else {
        // Binary operator: compile left and right operands.
        this.visit(ctx.getChild(0));
        this.visit(ctx.getChild(2));
        this.instrs[this.wc++] = {
          tag: "BINOP",
          sym: ctx.getChild(1).getText(),
        };
      }
    } else {
      throw new Error(`Invalid expression: ${ctx.getText()}`);
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
