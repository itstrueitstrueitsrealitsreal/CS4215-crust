import { AbstractParseTreeVisitor } from "antlr4ng";
import {
  ProgContext,
  ExprStmtContext,
  VarDeclContext,
  IfStmtContext,
  WhileStmtContext,
  BlockStmtContext,
  ExpressionContext,
  LiteralContext,
  AssignmentStmtContext,
} from "./parser/src/CrustParser";
import { CrustVisitor } from "./parser/src/CrustVisitor";
import { push } from "./Common";

export class CrustEvaluatorVisitor
  extends AbstractParseTreeVisitor<void>
  implements CrustVisitor<void>
{
  private wc: number = 0;
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


//     const primitive_object = {};
// const compile_time_environment_extend = (vs, e) => {
// 	//  make shallow copy of e
// 	return push([...e], vs);
// };

// // compile-time frames only need synbols (keys), no values
// const global_compile_frame = Object.keys(primitive_object);
  private global_compile_environment: any[] = [];


  private compile_time_environment_extend(vs: any[], e: any[]): any[] {
    //  make shallow copy of e
    return push([...e], vs);
  };

  private scan(ctx: BlockStmtContext): string[] {
    const locals: string[] = [];
    const declaredVariables = new Set<string>(); // Use a Set to detect duplicates

    for (const statementCtx of ctx.statement()) {
      if (statementCtx.getChild(0) instanceof VarDeclContext) {
        const varDeclContext = statementCtx.getChild(0) as VarDeclContext;
        const variableName = varDeclContext.IDENTIFIER().getText();
  
        if (declaredVariables.has(variableName)) {
          throw new Error(`Duplicate variable declaration: '${variableName}'`);
        }
  
        // Add the variable to the set and the locals array
        declaredVariables.add(variableName);
        locals.push(variableName);
      }
      // else if (statementCtx instanceof BlockStmtContext) {
      //   // Ignore nested blocks (do not scan inside them)
      //   continue;
      // } else {
      //   // For other types of statements, recursively scan if applicable
      //   // (e.g., if statements or while loops might contain variable declarations)
      //   if (statementCtx instanceof IfStmtContext || statementCtx instanceof WhileStmtContext) {
      //     const innerBlock = statementCtx.statement();
      //     if (innerBlock instanceof BlockStmtContext) {
      //       locals.push(...this.scan(innerBlock));
      //     }
      //   }
      // }
    }
    console.log("locals", locals);
    return locals;
  }

  visitBlockStmt(ctx: BlockStmtContext): void {
    const locals = this.scan(ctx);
    // const locals = [];
    const previousEnvironment = this.global_compile_environment;
    this.global_compile_environment = this.compile_time_environment_extend(locals, this.global_compile_environment);
    this.instrs[this.wc++] = { tag: "ENTER_SCOPE", num: locals.length };
    this.compileSequence(ctx.statement());
    this.global_compile_environment = previousEnvironment;
    this.instrs[this.wc++] = { tag: "EXIT_SCOPE" };
  }

  visitExprStmt(ctx: ExprStmtContext): void {
    // Just compile the contained expression.
    this.visit(ctx.expression());
  }

  /* ************************
  * compile-time environment
  * ************************/
  // a compile-time environment is an array of compile-time frames, and a compile-time frame is an array of symbols
  // find the position [frame-index, value-index] of a given symbol x
  private compile_time_environment_position(env: any[], x: any): [number, number] {
    let frame_index = env.length;
    while (frame_index > 0) {
      frame_index--;
      const valueIndex = this.value_index(env[frame_index], x);
      if (valueIndex !== -1) {
        return [frame_index, valueIndex];
      }
    }
    throw new Error(`Variable '${x}' not found in the compile-time environment.`);
  }
  private value_index(frame: any[], x: any): number {
    for (let i = 0; i < frame.length; i++) {
      if (frame[i] === x) return i;
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
      pos: this.compile_time_environment_position(this.global_compile_environment, sym),
    };
  }

  visitAssignmentStmt(ctx: AssignmentStmtContext): void {
    const sym = ctx.IDENTIFIER().getText();
    this.visit(ctx.expression());
    this.instrs[this.wc++] = { 
      tag: "ASSIGN", 
      pos: this.compile_time_environment_position(this.global_compile_environment, sym) };
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
      if (ctx.getChild(0) instanceof LiteralContext) {
        this.visit(ctx.getChild(0) as LiteralContext);
      } else if (ctx.IDENTIFIER()) {
        const sym = ctx.IDENTIFIER().getText();
        this.instrs[this.wc++] = {
          tag: "LD",
          pos: this.compile_time_environment_position(this.global_compile_environment, sym),
        };
      } else {
        throw new Error(`Invalid expression: ${ctx.getText()}`);
      }

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
  
  // Visitor for a literal.
  visitLiteral(ctx: LiteralContext): void {
      // Literal (or identifier if you extend further)
      const text = ctx.getText();
      const val =
        text === "true" ? true : text === "false" ? false : parseInt(text);
      this.instrs[this.wc++] = { tag: "LDC", val: val };
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
