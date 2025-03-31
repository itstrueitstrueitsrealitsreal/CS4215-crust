import { AbstractParseTreeVisitor } from "antlr4ng";
import {
  ProgContext,
  ExprStmtContext,
  VarDeclContext,
  IfStmtContext,
  WhileStmtContext,
  BlockStmtContext,
  BreakStmtContext,
  ExpressionContext,
  LiteralContext,
  AssignmentStmtContext,
  LambdaExprContext,
  LambdaCallContext,
  ReturnStmtContext,
  FunctionDeclContext,
} from "./parser/src/CrustParser";
import { CrustVisitor } from "./parser/src/CrustVisitor";
import { push } from "./Common";

export class CrustEvaluatorVisitor
  extends AbstractParseTreeVisitor<void>
  implements CrustVisitor<void>
{
  private wc: number = 0;
  private instrs: any[] = [];
  private breakTargets: number[][] = [];

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
  private global_compile_environment: { name: string; mutable: boolean }[][] = [];

  private compile_time_environment_extend(
    vs: { name: string; mutable: boolean }[],
    e: { name: string; mutable: boolean }[][]
  ): { name: string; mutable: boolean }[][] {
    //  make shallow copy of e
    return push([...e], vs);
  }

  private scan(ctx: BlockStmtContext): { name: string; mutable: boolean }[] {
    const locals: { name: string; mutable: boolean }[] = [];
    const declaredVariables = new Set<string>(); // Use a Set to detect duplicates

    for (const statementCtx of ctx.statement()) {
      if (statementCtx.getChild(0) instanceof VarDeclContext) {
        const varDeclContext = statementCtx.getChild(0) as VarDeclContext;
        const variableName = varDeclContext.IDENTIFIER().getText();

        if (declaredVariables.has(variableName)) {
          throw new Error(`Duplicate variable declaration: '${variableName}'`);
        }

        declaredVariables.add(variableName);

        // Determine mutability. For example, if the second child is "mut", mark as mutable.
        let isMutable = false;
        if (
          varDeclContext.getChild(1) &&
          varDeclContext.getChild(1).getText() === "mut"
        ) {
          isMutable = true;
        }
        locals.push({ name: variableName, mutable: isMutable });
      }
    }
    console.log("locals", locals);
    return locals;
  }

  visitBlockStmt(ctx: BlockStmtContext): void {
    const locals = this.scan(ctx);
    // const locals = [];
    const previousEnvironment = this.global_compile_environment;
    this.global_compile_environment = this.compile_time_environment_extend(
      locals,
      this.global_compile_environment
    );
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
  private compile_time_environment_position(
    env: any[],
    x: any
  ): [number, number] {
    let frame_index = env.length;
    while (frame_index > 0) {
      frame_index--;
      const valueIndex = this.value_index(env[frame_index], x);
      if (valueIndex !== -1) {
        return [frame_index, valueIndex];
      }
    }
    throw new Error(
      `Variable '${x}' not found in the compile-time environment.`
    );
  }
  private value_index(frame: any[], x: any): number {
    for (let i = 0; i < frame.length; i++) {
      if (frame[i].name === x) return i;
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
      pos: this.compile_time_environment_position(
        this.global_compile_environment,
        sym
      ),
    };
  }

  visitAssignmentStmt(ctx: AssignmentStmtContext): void {
    const sym = ctx.IDENTIFIER().getText();
    // Get the assignment operator (child index 1 in the parse tree)
    const op = ctx.getChild(1).getText();

    // Find the variable's position in the compile-time environment.
    const [frameIndex, valueIndex] = this.compile_time_environment_position(
      this.global_compile_environment,
      sym
    );

    // Check if the variable is mutable.
    if (!this.global_compile_environment[frameIndex][valueIndex].mutable) {
      throw new Error(`cannot assign twice to immutable variable '${sym}'`);
    }

    // Handle simple assignment.
    if (op === "=") {
      this.visit(ctx.expression());
      this.instrs[this.wc++] = {
        tag: "ASSIGN",
        pos: [frameIndex, valueIndex],
      };
    } else {
      // For compound assignment (e.g., '+=', '-=', etc.):
      // 1. Load the current value of the variable.
      this.instrs[this.wc++] = {
        tag: "LD",
        pos: [frameIndex, valueIndex],
      };

      // 2. Evaluate the right-hand side expression.
      this.visit(ctx.expression());

      // 3. Determine the binary operator corresponding to the compound assignment.
      let binop: string;
      switch (op) {
        case "+=":
          binop = "+";
          break;
        case "-=":
          binop = "-";
          break;
        case "*=":
          binop = "*";
          break;
        case "/=":
          binop = "/";
          break;
        case "%=":
          binop = "%";
          break;
        case "<<=":
          binop = "<<";
          break;
        case ">>=":
          binop = ">>";
          break;
        case "&=":
          binop = "&";
          break;
        case "^=":
          binop = "^";
          break;
        case "|=":
          binop = "|";
          break;
        default:
          throw new Error(`Unsupported compound assignment operator: ${op}`);
      }

      // 4. Emit the binary operation instruction.
      this.instrs[this.wc++] = { tag: "BINOP", sym: binop };

      // 5. Assign the result back to the variable.
      this.instrs[this.wc++] = {
        tag: "ASSIGN",
        pos: [frameIndex, valueIndex],
      };
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

    // Push a new break target list for this loop.
    this.breakTargets.push([]);

    // Compile the loop condition.
    this.visit(ctx.expression());
    const branchIndex = this.wc;
    this.instrs[this.wc++] = { tag: "JOF", addr: null };

    // Compile the loop body.
    this.visit(ctx.statement());

    // Emit a jump to loop back.
    this.instrs[this.wc++] = { tag: "GOTO", addr: loopStart };

    // Patch the false branch of the condition to exit the loop.
    this.instrs[branchIndex].addr = this.wc;

    // Patch any break instructions to jump here (immediately after the loop).
    const breaks = this.breakTargets.pop();
    for (const breakIndex of breaks) {
      this.instrs[breakIndex].addr = this.wc;
    }
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
          pos: this.compile_time_environment_position(
            this.global_compile_environment,
            sym
          ),
        };
      } else if ((ctx.getChild(0) instanceof LambdaCallContext)) {
        this.visit(ctx.getChild(0) as LambdaCallContext);
      } else if ((ctx.getChild(0) instanceof LambdaExprContext)) {
        this.visit(ctx.getChild(0) as LambdaExprContext);
      } else {
        throw new Error(`Invalidd expression: ${ctx.getText()}`);
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
      throw new Error(`Invaliddd expression: ${ctx.getText()}`);
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

  visitBreakStmt(ctx: BreakStmtContext): void {
    if (this.breakTargets.length === 0) {
      throw new Error("Break statement not within a loop.");
    }
    // Emit a GOTO with an unknown address.
    const breakInstrIndex = this.wc;
    this.instrs[this.wc++] = { tag: "GOTO", addr: null };
    // Add this instruction index to the top break target list.
    this.breakTargets[this.breakTargets.length - 1].push(breakInstrIndex);
  }

	// fun: (comp, ce) => {
	// 	compile(
	// 		{
	// 			tag: "const",
	// 			sym: comp.sym,
	// 			expr: { tag: "lam", prms: comp.prms, body: comp.body },
	// 		},
	// 		ce,
	// 	);
	// },
  visitFunctionDecl(ctx: FunctionDeclContext): void {
    // TODO!
    // assign variable to closure
    // extend environment with params
    // visit block
  }

  visitLambdaExpr(ctx: LambdaExprContext): void {
    const params = ctx.paramList().IDENTIFIER().map((id) => ({
      name: id.getText(),
      mutable: false,
    }));
    console.log("params", params);
    this.instrs[this.wc++] = { tag: "LDF", arity: ctx.paramList().IDENTIFIER().length, addr: this.wc + 1 };
    const goto_instruction = { tag: "GOTO", addr: null };
    this.instrs[this.wc++] = goto_instruction;
    const previousEnvironment = this.global_compile_environment;
    this.global_compile_environment = this.compile_time_environment_extend(
      params,
      this.global_compile_environment
    );
    this.showGlobalCompileEnvironment();
    // check if the lambda expression has a block statement or an expression
    if (ctx.expression()) {
      this.visit(ctx.expression());
    } else if (ctx.blockStmt()) {
      this.visit(ctx.blockStmt());
    }
    this.instrs[this.wc++] = { tag: "LDC", val: undefined };
    this.instrs[this.wc++] = { tag: "RESET" };
    goto_instruction.addr = this.wc;
    this.global_compile_environment = previousEnvironment;
  }
  
  visitLambdaCall(ctx: LambdaCallContext): void {
    const sym = ctx.IDENTIFIER().getText();
        this.instrs[this.wc++] = {
          tag: "LD",
          pos: this.compile_time_environment_position(
            this.global_compile_environment,
            sym
          ),
        };
    const args = ctx.argList()
      ? ctx.argList().expression().map((arg) => this.visit(arg))
      : [];
    this.instrs[this.wc++] = {
      tag: "CALL",
      arity: args.length,
    };
  }
  
  visitReturnStmt(ctx: ReturnStmtContext): void {
    if (ctx.expression()) {
      this.visit(ctx.expression());
    } else {
      this.instrs[this.wc++] = { tag: "LDC", val: undefined };
    }
    if (ctx.expression().getChild(0) instanceof LambdaCallContext) {
      this.instrs[this.wc - 1].tag = "TAIL_CALL";
    } else
      this.instrs[this.wc++] = { tag: "RESET" };
  }


  private showGlobalCompileEnvironment(): void {
    console.log("Global compile-time environment:");
    for (let i = 0; i < this.global_compile_environment.length; i++) {
      console.log(`Frame ${i}:`);
      for (const { name, mutable } of this.global_compile_environment[i]) {
        console.log(`  ${name} (mutable: ${mutable})`);
      }
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
