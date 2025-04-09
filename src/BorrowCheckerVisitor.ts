import { AbstractParseTreeVisitor } from "antlr4ng";
import {
  ProgContext,
  VarDeclContext,
  FunctionDeclContext,
  ExpressionContext,
  BlockStmtContext,
  StatementContext,
  AssignmentStmtContext,
  ExprStmtContext,
  IfStmtContext,
  WhileStmtContext,
} from "./parser/src/CrustParser";
import { CrustVisitor } from "./parser/src/CrustVisitor";
import { BorrowChecker } from "./BorrowChecker";

export class BorrowCheckerVisitor
  extends AbstractParseTreeVisitor<void>
  implements CrustVisitor<void>
{
  private checker = new BorrowChecker();

  visitProg(ctx: ProgContext): void {
    console.log("Visiting program");
    // Visit all statements in the program
    this.visitStatements(ctx.statement());
  }

  visitVarDecl(ctx: VarDeclContext): void {
    console.log("Visiting variable declaration");
    const varName = ctx.IDENTIFIER().getText();
    const isMutable = ctx.getChild(1)?.getText() === "mut"; // Check if 'mut' is present
    // const type = parseType(ctx.typeAnnotation().getText());

    // If there is an initializer, ensure it is valid
    if (ctx.expression()) {
      this.visit(ctx.expression());
    }
    this.checker.declare(varName, isMutable, false);
  }

  visitAssignmentStmt(ctx: AssignmentStmtContext): void {
    console.log("Visiting assignment statement");
    const varName = ctx.IDENTIFIER().getText();
    // Visit the right-hand side expression
    this.visit(ctx.expression());
    // Perform the assignment
    this.checker.assign(varName);
  }

  // visitRelease(ctx: ExpressionContext): void {
  //   const varName = ctx.IDENTIFIER().getText();

  //   // Release the borrow
  //   this.checker.release(varName);
  // }

  visitBlockStmt(ctx: BlockStmtContext): void {
    console.log("Visiting block statement");
    // Push a new frame for the block
    this.checker.pushFrame();
    // Visit all statements in the block
    this.visitStatements(ctx.statement());
    // Pop the frame after the block
    this.checker.popFrame();
  }

  visitIfStmt(ctx: IfStmtContext): void {
    console.log("Visiting if statement");
    // Visit the condition expression
    this.visit(ctx.expression());
    // Visit the consequent (then branch)
    this.visit(ctx.statement(0));
    // Visit the alternative (else branch), if present
    if (ctx.statement(1)) {
      this.visit(ctx.statement(1));
    }
  }

  visitWhileStmt(ctx: WhileStmtContext): void {
    console.log("Visiting while statement");
    // Visit the condition expression
    this.visit(ctx.expression());
    // Visit the body of the while loop
    this.visit(ctx.statement());
  }

  visitFunctionDecl(ctx: FunctionDeclContext): void {
    console.log("Visiting function declaration");
    const functionName = ctx.IDENTIFIER().getText();
    const paramList = ctx.paramList();
    const body = ctx.blockStmt();

    // Declare function parameters in a new frame
    this.checker.pushFrame();
    if (paramList) {
      for (let i = 0; i < paramList.IDENTIFIER().length; i++) {
        const paramName = paramList.IDENTIFIER(i).getText();
        const isMutable = false; // Function parameters are immutable by default
        this.checker.declare(paramName, isMutable, false);
      }
    }

    // Visit the function body
    this.visit(body);

    // Pop the frame after the function
    this.checker.popFrame();

    // todo: if parameter is a borrow, release it
  }

  // visitLambdaCall(ctx: LambdaCallContext): void {
  //   console.log("Visiting lambda call");
  //   // todo
  //   // if call moves ownership (aka not pointer type), mark variable as moved
  //   // else if is borrow, mark variable as borrowed, then release it at the end
  // }

  visitStatements(statements: StatementContext[]): void {
    console.log("Visiting statements");
    for (const statement of statements) {
      this.visit(statement);
    }
  }

  visitExprStmt(ctx: ExprStmtContext): void {
    console.log("Visiting expression statement");
    // Visit the contained expression
    this.visit(ctx.expression());
  }

  visitExpression(ctx: ExpressionContext): void {
    console.log("Visiting expression");

    // Handle variable usage
    if (ctx.IDENTIFIER()) {
      const varName = ctx.IDENTIFIER().getText();
      this.checker.readFrom(varName); // Ensure the variable is being read
      return;
    }

    // Handle immutable borrow (e.g., &x)
    if (ctx.getChildCount() === 2 && ctx.getChild(0).getText() === "&") {
      const innerExpression = ctx.getChild(1) as ExpressionContext;
      // this.visit(innerExpression); // Visit the inner expression
      const varName = innerExpression.IDENTIFIER()?.getText();
      if (varName) {
        this.checker.immutBorrow(varName); // Perform immutable borrow
      }
      return;
    }

    // Handle mutable borrow (e.g., &mut x)
    if (ctx.getChildCount() === 2 && ctx.getChild(0).getText() === "&mut") {
      const innerExpression = ctx.getChild(1) as ExpressionContext;
      // this.visit(innerExpression); // Visit the inner expression
      const varName = innerExpression.IDENTIFIER()?.getText();
      if (varName) {
        this.checker.mutBorrow(varName); // Perform mutable borrow
      }
      return;
    }

    // Handle other expressions (e.g., binary operations, nested expressions)
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);
      if (child instanceof ExpressionContext) {
        this.visit(child); // Recursively visit child expressions
      }
    }
  }

  // visitImmutBorrow(ctx: ExpressionContext): void {
  //   const varName = ctx.IDENTIFIER().getText();
  //   this.checker.immutBorrow(varName);
  // }

  // visitMutBorrow(ctx: ExpressionContext): void {
  //   const varName = ctx.IDENTIFIER().getText();
  //   this.checker.mutBorrow(varName);
  // }

  protected defaultResult(): void {}
}
