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
  LambdaCallContext,
  DerefAssignStmtContext,
  PrintStmtContext,
  PrintlnStmtContext,
} from "./parser/src/CrustParser";
import { CrustVisitor } from "./parser/src/CrustVisitor";
import { BorrowChecker } from "./BorrowChecker";
import { isCopyType, parseType } from "./utils/TypeUtils";

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

  private isBorrowExpression(expression: ExpressionContext): boolean {
    return (
      this.isImmutableBorrowExpression(expression) ||
      this.isMutableBorrowExpression(expression)
    );
  }

  private isImmutableBorrowExpression(expression: ExpressionContext): boolean {
    return (
      expression.getChildCount() === 2 &&
      expression.getChild(0).getText() === "&"
    );
  }

  private isMutableBorrowExpression(expression: ExpressionContext): boolean {
    return (
      expression.getChildCount() === 3 &&
      expression.getChild(0).getText() === "&" &&
      expression.getChild(1).getText() === "mut"
    );
  }

  private getInnerExpressionFromBorrowExpression(
    expression: ExpressionContext
  ): ExpressionContext | undefined {
    if (this.isBorrowExpression(expression)) {
      const isMutable = this.isMutableBorrowExpression(expression);
      return expression.getChild(isMutable ? 2 : 1) as ExpressionContext;
    }
    throw new Error(
      `Expected a borrow expression, but got: ${expression.getText()}`
    );
  }

  private extractBorrowedFromIfBorrow(
    expression: ExpressionContext
  ): string | undefined {
    const extractBorrowedFromHelper = (
      expr: ExpressionContext
    ): string | undefined => {
      // Base case: If the expression is an identifier, return its name
      if (expr.IDENTIFIER()) {
        return expr.IDENTIFIER().getText();
      }
      // Recursive case: If the expression is a borrow (e.g., &x or &mut x)
      if (this.isBorrowExpression(expr)) {
        const innerExpression =
          this.getInnerExpressionFromBorrowExpression(expr);
        return extractBorrowedFromHelper(innerExpression); // Recurse into the inner expression
      }
      throw new Error(
        `Unsupported expression type for borrowed variable extraction: ${expr.getText()}`
      );
    };

    // chk if is borrow
    if (!this.isBorrowExpression(expression)) {
      return undefined; // No borrowed variable
    }
    return extractBorrowedFromHelper(expression);
  }

  visitVarDecl(ctx: VarDeclContext): void {
    const varName = ctx.IDENTIFIER().getText();
    console.log("Visiting variable declaration:", varName);

    const isMutable = ctx.getChild(1)?.getText() === "mut"; // Check if 'mut' is present
    const isCopy = isCopyType(parseType(ctx.typeAnnotation().getText()));
    let borrowedFrom: string | undefined = undefined; // Variable being borrowed from

    const rhsExpression = ctx.expression();
    if (!rhsExpression) {
      throw new Error(
        "Initializer expression is missing in variable declaration"
      );
    }

    // Extract the innermost variable being borrowed
    // if initializer is not a borrow, borrowedFrom is undefined
    borrowedFrom = this.extractBorrowedFromIfBorrow(rhsExpression);

    // Visit the initializer expression
    this.visit(rhsExpression);

    // Declare the variable in the borrow checker
    this.checker.declare(varName, isMutable, isCopy, borrowedFrom);
  }

  visitAssignmentStmt(ctx: AssignmentStmtContext): void {
    console.log("Visiting assignment statement");
    const varName = ctx.IDENTIFIER().getText();
    let borrowedFrom: string | undefined = undefined; // Variable being borrowed from

    // Analyze the right-hand side expression
    const rhsExpression = ctx.expression();
    if (!rhsExpression) {
      throw new Error("Right-hand side expression is missing in assignment");
    }
    // Extract the innermost variable being borrowed
    borrowedFrom = this.extractBorrowedFromIfBorrow(rhsExpression);

    // assign to varName before rhsExpression to release the old borrow
    this.checker.assign(varName, borrowedFrom);

    // Visit the right-hand side expression
    this.visit(rhsExpression);
  }

  visitDerefAssignStmt(ctx: DerefAssignStmtContext): void {
    console.log("Visiting dereference assignment statement");
    // get underlying variable, try to mutate (only can mutate if it is not borrowed)
    const derefVarName = this.extractVarNameFromDeref(ctx.expression(0));
    if (!derefVarName) {
      throw new Error("Dereference variable name is missing");
    }
    this.checker.mutateDeref(derefVarName);
  }

  // expects consecutive * followed by identifier
  // e.g. **x
  private extractVarNameFromDeref(
    expression: ExpressionContext
  ): string | undefined {
    // if is identifier
    if (expression.IDENTIFIER()) {
      return expression.IDENTIFIER().getText();
    }
    // if is deref, get the inner expression
    if (
      expression.getChildCount() === 2 &&
      expression.getChild(0).getText() === "*"
    ) {
      const innerExpression = expression.getChild(1) as ExpressionContext;
      return this.extractVarNameFromDeref(innerExpression);
    }
    throw new Error(
      `Unsupported expression type for dereference variable extraction: ${expression.getText()}`
    );
  }

  // visitDerefAssignStmt(
  //   ctx: DerefAssignStmtContext
  // ): void {
  //   console.log("Visiting dereference assignment statement");
  //   const derefExpression = ctx.expression(0);
  //   const derefVarName = derefExpression.IDENTIFIER()?.getText();
  //   if (!derefVarName) {
  //     throw new Error("Dereference variable name is missing");
  //   }
  //   const derefVarType = this.checker.lookup(derefVarName)[1].isCopyType;
  //   if (!derefVarType) {
  //     throw new Error(
  //       `Dereference variable '${derefVarName}' is not a copy type`
  //     );
  //   }
  //   const derefRhsExpression = ctx.expression(1);
  //   if (!derefRhsExpression) {
  //     throw new Error("Right-hand side expression is missing in assignment");
  //   }
  //   // Extract the innermost variable being borrowed
  //   const borrowedFrom = this.extractBorrowedFromIfBorrow(derefRhsExpression);
  //   // Visit the right-hand side expression
  //   this.visit(derefRhsExpression);
  //   // Assign to derefVarName before derefRhsExpression to release the old borrow
  //   this.checker.assign(derefVarName, borrowedFrom);
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
    const paramList = ctx.paramList();
    const body = ctx.blockStmt();

    // Declare function parameters in a new frame
    this.checker.pushFrame();
    if (paramList) {
      for (let i = 0; i < paramList.IDENTIFIER().length; i++) {
        const paramName = paramList.IDENTIFIER(i).getText();
        const isMutable = false; // Function parameters are immutable by default TODO!
        console.log("Before isCopyType");
        const paramType = paramList.typeAnnotation(i).getText();
        const isCopy = isCopyType(parseType(paramType));
        console.log("After isCopyType");
        this.checker.declare(paramName, isMutable, isCopy);
      }
    }

    // Visit the function body
    this.visit(body);

    this.checker.popFrame();
  }

  visitLambdaCall(ctx: LambdaCallContext): void {
    console.log("Visiting lambda call");

    // Visit the arguments (if any)
    const argList = ctx.argList();
    if (!argList) {
      return;
    }

    for (let i = 0; i < argList.expression().length; i++) {
      const argExpression = argList.expression(i);
      // Visit the argument expression
      this.visit(argExpression);
    }

    // Release all borrows after the lambda call
    for (let i = 0; i < argList.expression().length; i++) {
      const argExpression = argList.expression(i);
      const borrowedFrom = this.extractBorrowedFromIfBorrow(argExpression);
      if (borrowedFrom) {
        console.log(`Releasing borrow: ${borrowedFrom}`);
        this.checker.release(borrowedFrom); // Release the borrow
      }
    }
  }

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

    if (this.isBorrowExpression(ctx)) {
      const innerExpression = this.getInnerExpressionFromBorrowExpression(ctx);
      const varName = innerExpression.IDENTIFIER()?.getText();
      if (varName) {
        if (this.isImmutableBorrowExpression(ctx)) {
          this.checker.immutBorrow(varName); // Perform immutable borrow
        } else if (this.isMutableBorrowExpression(ctx)) {
          this.checker.mutBorrow(varName); // Perform mutable borrow
        } else {
          throw new Error(
            `Logic Error: Unknown borrow expression type: ${ctx.getText()}`
          );
        }
      } else {
        this.visit(innerExpression); // Visit the inner expression
      }
      return;
    }

    // if is dereference, read without move
    if (ctx.getChildCount() === 2 && ctx.getChild(0).getText() === "*") {
      // get type
      // if isCopyType, allow
      // else disallow bc cannot move out

      // const innerExpression = ctx.getChild(1) as ExpressionContext;
      // const varName = innerExpression.IDENTIFIER()?.getText();
      // if (varName) {
      //   this.checker.readFrom(varName); // Perform read without move TODO!
      // } else {
      //   this.visit(innerExpression); // Visit the inner expression
      // }
      return;
    }

    // Handle other expressions (e.g., binary operations, nested expressions)
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);
      // if (
      //   child instanceof ExpressionContext ||
      //   child instanceof LambdaCallContext
      // ) {
      this.visit(child); // Recursively visit child expressions
      // }
    }
  }

  visitPrintStmt(ctx: PrintStmtContext): void {
    console.log("Visiting print statement");
    this.processExpressionsInPrint(ctx.expression(), "print statement");
  }

  visitPrintlnStmt(ctx: PrintlnStmtContext): void {
    console.log("Visiting println statement");
    this.processExpressionsInPrint(ctx.expression(), "println statement");
  }

  /**
   * Helper method to process expressions for print/println statements.
   * @param expressions - The list of expressions to process.
   * @param contextName - The name of the context (e.g., "print statement").
   */
  private processExpressionsInPrint(
    expressions: ExpressionContext[],
    contextName: string
  ): void {
    // Process all expressions
    for (const expression of expressions) {
      // Check if the expression is already a borrow
      const borrowedFrom = this.extractBorrowedFromIfBorrow(expression);

      if (borrowedFrom) {
        console.log(`Expression is already a borrow: ${borrowedFrom}`);
        this.checker.immutBorrow(borrowedFrom); // Perform immutable borrow
      } else {
        // If not a borrow, implicitly borrow the variable
        const varName = expression.IDENTIFIER()?.getText();
        if (varName) {
          console.log(`Implicitly borrowing variable: ${varName}`);
          this.checker.immutBorrow(varName); // Perform implicit immutable borrow
        } else {
          console.warn(
            `Unsupported expression type in ${contextName}: ${expression.getText()}`
          );
        }
      }
    }

    // Release all borrows after processing all expressions
    for (const expression of expressions) {
      const borrowedFrom = this.extractBorrowedFromIfBorrow(expression);
      if (borrowedFrom) {
        console.log(`Releasing borrow: ${borrowedFrom}`);
        this.checker.release(borrowedFrom); // Release the borrow
      } else if (expression.IDENTIFIER()) {
        console.log(
          `Releasing implicit borrow: ${expression.IDENTIFIER().getText()}`
        );
        this.checker.release(expression.IDENTIFIER().getText());
      }
    }
  }

  protected defaultResult(): void {}
}
