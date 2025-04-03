import { AbstractParseTreeVisitor } from "antlr4ng";
import {
    ProgContext,
    VarDeclContext,
    FunctionDeclContext,
    ExpressionContext,
    LiteralContext,
    LambdaExprContext,
    LambdaCallContext,
    ReturnStmtContext,
    FormatExprContext,
    BlockStmtContext,
    StatementContext,
    AssignmentStmtContext,
    ExprStmtContext,
    IfStmtContext,
    WhileStmtContext,
} from "./parser/src/CrustParser";
import { CrustVisitor } from "./parser/src/CrustVisitor";
import { push } from "./Common";

export class TypeCheckerVisitor
    extends AbstractParseTreeVisitor<Type>
    implements CrustVisitor<Type> {
    private globalTypeEnvironment: TypeEnvironment = [];

    private lookupType(name: string): Type {
        for (let i = this.globalTypeEnvironment.length - 1; i >= 0; i--) {
            const env = this.globalTypeEnvironment[i];
            if (env.has(name)) {
                return env.get(name)!;
            }
        }
        throw new Error(`Unbound name: ${name}`);
    }

    visitProg(ctx: ProgContext): Type {
        return this.visitStatements(ctx.statement());
    }

    visitWhileStmt(ctx: WhileStmtContext): Type {
        // check predicate
        const predType = this.visit(ctx.expression());
        if (predType !== "bool") {
            throw new Error(
                `Expected predicate type: bool, actual predicate type: ${predType}`
            );
        }
        // check body
        return this.visit(ctx.statement());
    }

    visitIfStmt(ctx: IfStmtContext): Type {
        // Type-check predicate (condition)
        const predType = this.visit(ctx.expression());
        if (predType !== "bool") {
            throw new Error(
                `Expected predicate type: bool, actual predicate type: ${predType}`
            );
        }

        // Type-check the consequent (then branch)
        const consType = this.visit(ctx.statement(0));

        // Check if there is an alternative (else branch)
        if (ctx.statement(1)) {
            const altType = this.visit(ctx.statement(1));
            if (consType !== altType) {
                throw new Error(
                    `Types of branches not matching; consequent type: ${consType}, alternative type: ${altType}`
                );
            }
            return consType;
        } else {
            // No else branch: the type of the if statement is void
            return "()";
        }
    }

    visitVarDecl(ctx: VarDeclContext): Type {
        this.checkType(ctx, "variable declaration");
        return "()";
    }

    visitAssignmentStmt(ctx: AssignmentStmtContext): Type {
        this.checkType(ctx, "assignment");
        return "()";
    }

    private checkType(ctx: VarDeclContext | AssignmentStmtContext, context: string) {
        const sym = ctx.IDENTIFIER().getText();
        const declaredType = this.lookupType(sym);
        const actualType = this.visit(ctx.expression());
        if (actualType !== declaredType) {
            throw new Error(
                `Type error in ${context} for '${sym}'; ` +
                `declared type: ${declaredType}, actual type: ${actualType}`
            );
        }
    }

    private scan(ctx: BlockStmtContext): { name: string; type: Type }[] {
        const locals: { name: string; type: Type }[] = [];

        for (const statementCtx of ctx.statement()) {
            // Handle variable declarations
            if (statementCtx.getChild(0) instanceof VarDeclContext) {
                const varDeclContext = statementCtx.getChild(0) as VarDeclContext;
                const variableName = varDeclContext.IDENTIFIER().getText();

                locals.push({ name: variableName, type: this.parseType(varDeclContext.typeAnnotation().getText()) });
            }
            // Handle function declarations
            else if (statementCtx.getChild(0) instanceof FunctionDeclContext) { // TODO!
                const functionDeclContext = statementCtx.getChild(0) as FunctionDeclContext;
                const functionName = functionDeclContext.IDENTIFIER().getText();

                locals.push({ name: functionName, mutable: false }); // Functions are immutable by default
            }
        }
        console.log("locals", locals);
        return locals;
    }

    private extend_type_environment(
        locals: { name: string; type: Type }[],
        environment: TypeEnvironment
    ): TypeEnvironment {
        // Create a new frame (a Map) for the local declarations
        const newFrame = new Map<string, Type>();

        // Add each local declaration to the new frame
        for (const local of locals) {
            if (newFrame.has(local.name)) {
                throw new Error(`Duplicate symbol '${local.name}' in the same scope.`);
            }
            newFrame.set(local.name, local.type);
        }

        return push(environment, newFrame);
    }

    private visitStatements(statements: StatementContext[]): Type {
        let lastType: Type = "()";
        for (const statement of statements) {
            lastType = this.visit(statement);
        }
        return lastType;
    }

    visitBlockStmt(ctx: BlockStmtContext): Type {
        const localsTypesArray = this.scan(ctx);
        const previousEnvironment = this.globalTypeEnvironment;
        this.globalTypeEnvironment = this.extend_type_environment(
            localsTypesArray,
            this.globalTypeEnvironment
        );
        const lastStatementType = this.visitStatements(ctx.statement());
        this.globalTypeEnvironment = previousEnvironment;
        return lastStatementType;
    }

    //   nam:
    //     (comp, te) => lookup_type(comp.sym, te),
    // unop:
    //     (comp, te) => type({tag: 'app',
    //                         fun: {tag: 'nam', sym: comp.sym},
    //                         args: [comp.frst]}, te),
    // binop:
    //     (comp, te) => type({tag: 'app',
    //                         fun: {tag: 'nam', sym: comp.sym},
    //                         args: [comp.frst, comp.scnd]}, te),
    visitExprStmt(ctx: ExprStmtContext): Type {
        // Just compile the contained expression.
        return this.visit(ctx.expression());
    }
    visitExpression(ctx: ExpressionContext): Type {
        if (ctx.getChildCount() === 1) {
            if (ctx.getChild(0) instanceof LiteralContext) {
                this.visit(ctx.getChild(0) as LiteralContext);
            } else if (ctx.IDENTIFIER()) {
                const sym = ctx.IDENTIFIER().getText();
                return this.lookupType(sym);
            } else if (ctx.getChild(0) instanceof FormatExprContext) {
                this.visit(ctx.getChild(0)); // TODO!
            } else if (ctx.getChild(0) instanceof LambdaCallContext) {
                this.visit(ctx.getChild(0) as LambdaCallContext);
            } else if (ctx.getChild(0) instanceof LambdaExprContext) {
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

    visitLiteral(ctx: LiteralContext): Type {
        const text = ctx.getText();
        if (/^[0-9]+$/.test(text)) {
            return "i64";
        } else if (text === "true" || text === "false") {
            return "bool";
        } else if (text.startsWith('"') && text.endsWith('"')) {
            return "String";
        }
        throw new Error(`Unrecognized literal: ${text}`);
    }

    // fun:
    // (comp, te) => {
    //     const extended_te = extend_type_environment(
    //                      comp.prms,
    //                      comp.type.args,
    //                      te)
    //     const body_type = type_fun_body(comp.body, extended_te)
    //     if (equal_type(body_type, comp.type.res)) {
    //         return "undefined"
    //     } else {
    //         error("type error in function declaration; " +
    //                   "declared return type: " +
    //                   unparse_type(comp.type.res) + ", " +
    //                   "actual return type: " + 
    //                   unparse_type(body_type))
    //     }
    // },
    visitFunctionDecl(ctx: FunctionDeclContext): Type {
        const functionName = ctx.IDENTIFIER().getText();
        const paramList = ctx.paramList();
        const returnTypeAnnotation = ctx.typeAnnotation()?.getText();
        const body = ctx.blockStmt();

        const returnType: Type = returnTypeAnnotation
            ? this.parseType(returnTypeAnnotation)
            : "()"; // Default to void if no return type is specified

        const paramTypes: { name: string; type: Type }[] = paramList
            ? paramList.IDENTIFIER().map((id, index) => {
                const typeAnnotation = paramList.typeAnnotation(index)?.getText();
                if (!typeAnnotation) {
                    throw new Error(`Missing type annotation for parameter '${id.getText()}'`);
                }
                return { name: id.getText(), type: this.parseType(typeAnnotation) };
            })
            : [];

        const previousEnvironment = this.globalTypeEnvironment;
        this.globalTypeEnvironment = this.extend_type_environment(paramTypes, this.globalTypeEnvironment);

        const bodyType = this.visit(body);
        if (bodyType !== returnType) {
            throw new Error(
                `Type error in function '${functionName}': ` +
                `declared return type is '${returnType}', but body returns '${bodyType}'`
            );
        }
        this.globalTypeEnvironment = previousEnvironment;

        return "()"; // Function declarations do not produce a value
    }

    visitLambdaExpr(ctx: LambdaExprContext): Type { // TODO
        // Extract the parameter list and body
        const paramList = ctx.paramList();
        const body = ctx.blockStmt() || ctx.expression();

        // Use the helper method to compile the lambda logic
        this.compileLambda(paramList, body);
    }

    //   app:
    //   (comp, te) => {
    //       const fun_type = type(comp.fun, te)
    //       if (fun_type.tag !== "fun") 
    //           error("type error in application; function " +
    //                     "expression must have function type; " +
    //                     "actual type: " + unparse_type(fun_type))
    //       const expected_arg_types = fun_type.args
    //       const actual_arg_types = comp.args.map(e => type(e, te))
    //       if (equal_types(actual_arg_types, expected_arg_types)) {
    //           return fun_type.res
    //       } else {
    //           error("type error in application; " +
    //                 "expected argument types: " + 
    //                 unparse_types(expected_arg_types) + ", " +
    //                 "actual argument types: " + 
    //                 unparse_types(actual_arg_types))
    //       }
    //   },
    visitLambdaCall(ctx: LambdaCallContext): Type {
        const lambdaName = ctx.IDENTIFIER().getText();
        const lambdaType = this.lookupType(lambdaName);

        // Ensure the lambda has a function type
        if (typeof lambdaType !== "object" || !("params" in lambdaType) || !("returnType" in lambdaType)) {
            throw new Error(
                `Type error in lambda call: '${lambdaName}' is not a function. Actual type: ${JSON.stringify(lambdaType)}`
            );
        }

        // Get the argument types by visiting each argument expression
        const argList = ctx.argList()?.expression() || [];
        const actualArgTypes = argList.map((arg) => this.visit(arg));

        // Check if the number of arguments matches the number of parameters
        if (actualArgTypes.length !== lambdaType.params.length) {
            throw new Error(
                `Type error in lambda call: '${lambdaName}' expects ${lambdaType.params.length} arguments, ` +
                `but got ${actualArgTypes.length}.`
            );
        }

        // Check if each argument type matches the corresponding parameter type
        for (let i = 0; i < actualArgTypes.length; i++) {
            const expectedType = lambdaType.params[i];
            const actualType = actualArgTypes[i];
            if (expectedType !== actualType) {
                throw new Error(
                    `Type error in lambda call: Argument ${i + 1} of '${lambdaName}' has type '${actualType}', ` +
                    `but expected '${expectedType}'.`
                );
            }
        }

        // Return the return type of the lambda
        return lambdaType.returnType;
    }

    visitReturnStmt(ctx: ReturnStmtContext): Type { // todo: check if return type matches function return type
        const returnType = this.visit(ctx.expression());
        return returnType;
    }


    private parseType(typeAnnotation: string): Type {
        switch (typeAnnotation) {
            case "bool":
            case "char":
            case "String":
            case "i64":
            case "()":
                return typeAnnotation;
            default:
                throw new Error(`Unrecognized type annotation: ${typeAnnotation}`);
        }
    }

    // Override the default result method.
    protected defaultResult(): Type {
        return "()"; // Default to void for statements
    }
}


export type Type =
    | "bool"
    | "char"
    | "String"
    | "i64"
    | "()"
    | { params: Type[]; returnType: Type }; // Function type

type TypeEnvironment = Map<string, Type>[];