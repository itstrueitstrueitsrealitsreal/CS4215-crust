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
  MethodCallContext,
} from "./parser/src/CrustParser";
import { CrustVisitor } from "./parser/src/CrustVisitor";
import { push } from "./utils/Common";
import {
  FunctionType,
  isFunctionType,
  isTypeEqual,
  parseType,
  Type,
  typeToString,
} from "./utils/TypeUtils";
export const typeMap = new Map<string, Type>();
export class TypeCheckerVisitor
  extends AbstractParseTreeVisitor<Type>
  implements CrustVisitor<Type>
{
  private globalTypeEnvironment: TypeEnvironment = [];
  private currentFunctionReturnType: Type | null = null;
  private currentBaseType: Type | null = null;

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

  public visitVarDecl(ctx: VarDeclContext): Type {
    // single call to checkType does the heavy lifting
    const declaredType = this.checkType(ctx, "variable declaration");
    this.addBinding(ctx.IDENTIFIER().getText(), declaredType);
    return "()";
  }

  public visitAssignmentStmt(ctx: AssignmentStmtContext): Type {
    // single call to checkType
    this.checkType(ctx, "assignment");
    // no need to add a new binding, since variable is already in environment
    return "()";
  }

  private checkType(
    ctx: VarDeclContext | AssignmentStmtContext,
    context: string
  ): Type {
    const sym = ctx.IDENTIFIER().getText();

    let declaredType: Type;
    if (ctx instanceof VarDeclContext) {
      // if it's a VarDecl, we read the user's type annotation
      const typeAnnotation = ctx.typeAnnotation().getText();
      declaredType = parseType(typeAnnotation);
    } else {
      // if it's an assignment, we look up the variable's known type
      declaredType = this.lookupType(sym);
    }

    // get the type of the expression
    const actualType = this.visit(ctx.expression());

    // compare
    if (!isTypeEqual(actualType, declaredType)) {
      throw new Error(
        `Type error in ${context} for '${sym}'; ` +
          `declared type: ${typeToString(declaredType)}, ` +
          `actual type: ${typeToString(actualType)}`
      );
    }
    return declaredType;
  }

  // For environment logic
  private addBinding(name: string, declaredType: Type): void {
    if (this.globalTypeEnvironment.length === 0) {
      this.globalTypeEnvironment.push(new Map<string, Type>());
    }
    const topFrame =
      this.globalTypeEnvironment[this.globalTypeEnvironment.length - 1];
    topFrame.set(name, declaredType);

    // Also store in a global or shared map for code gen
    typeMap.set(name, declaredType);
  }

  private scan(ctx: BlockStmtContext): { name: string; type: Type }[] {
    const locals: { name: string; type: Type }[] = [];

    for (const statementCtx of ctx.statement()) {
      // Handle variable declarations
      if (statementCtx.getChild(0) instanceof VarDeclContext) {
        const varDeclContext = statementCtx.getChild(0) as VarDeclContext;
        const variableName = varDeclContext.IDENTIFIER().getText();
        const typeAnnotation = varDeclContext.typeAnnotation().getText();

        locals.push({
          name: variableName,
          type: parseType(typeAnnotation),
        });
      }
      // Handle function declarations
      else if (statementCtx.getChild(0) instanceof FunctionDeclContext) {
        const functionDeclContext = statementCtx.getChild(
          0
        ) as FunctionDeclContext;
        const functionName = functionDeclContext.IDENTIFIER().getText();
        const returnTypeAnnotation = functionDeclContext
          .typeAnnotation()
          ?.getText();
        const returnType: Type = returnTypeAnnotation
          ? parseType(returnTypeAnnotation)
          : "()";

        const paramList = functionDeclContext.paramList();
        const paramTypes: Type[] = paramList
          ? paramList.typeAnnotation().map((type) => parseType(type.getText()))
          : [];

        // Create function type
        const functionType: FunctionType = {
          params: paramTypes,
          returnType: returnType,
        };

        locals.push({ name: functionName, type: functionType });
      }
    }

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
    return push([...environment], newFrame);
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
  visitMethodCall(ctx: MethodCallContext): Type {
    // Get the stored base type
    const baseType = this.currentBaseType;
    if (baseType === null) {
      throw new Error("Method call without a base expression");
    }

    const methodName = ctx.getChild(0).getText(); // First child is the method name

    if (methodName === "to_owned") {
      // Suppose we only allow .to_owned on an &str -> yields String
      if (baseType === "&str") {
        return "String";
      } else {
        throw new Error(`.to_owned() is not valid on type '${baseType}'`);
      }
    } else if (methodName === "to_string") {
      // Let's allow &str, i64, bool, etc. to be converted to String
      if (baseType === "&str" || baseType === "i64" || baseType === "bool") {
        return "String";
      } else {
        throw new Error(`.to_string() is not valid on type '${baseType}'`);
      }
    }

    throw new Error(`Unsupported method: '${methodName}'`);
  }
  visitExpression(ctx: ExpressionContext): Type {
    if (
      ctx.getChildCount() === 3 &&
      ctx.getChild(1).getText() === "." &&
      ctx.methodCall() !== undefined // or ctx.methodCall() != null
    ) {
      // base expression is child(0)
      const baseType = this.visit(ctx.getChild(0) as ExpressionContext);

      // Store the base type for use in visitMethodCall
      this.currentBaseType = baseType;

      // methodCall is child(2)
      const methodCtx = ctx.methodCall();
      // call our helper
      const result = this.visitMethodCall(methodCtx);

      // Clean up after method call
      this.currentBaseType = null;

      return result;
      return this.visitMethodCall(methodCtx);
    } else if (ctx.getChildCount() === 1) {
      if (ctx.getChild(0) instanceof LiteralContext) {
        return this.visit(ctx.getChild(0) as LiteralContext);
      } else if (ctx.IDENTIFIER()) {
        const sym = ctx.IDENTIFIER().getText();
        return this.lookupType(sym);
      } else if (ctx.getChild(0) instanceof FormatExprContext) {
        return this.visit(ctx.getChild(0) as FormatExprContext);
      } else if (ctx.getChild(0) instanceof LambdaCallContext) {
        return this.visit(ctx.getChild(0) as LambdaCallContext);
      } else if (ctx.getChild(0) instanceof LambdaExprContext) {
        return this.visit(ctx.getChild(0) as LambdaExprContext);
      } else {
        throw new Error(`Invalid expression: ${ctx.getText()}`);
      }
    } else if (ctx.getChildCount() === 2) {
      // Unary operator: e.g., '-' expression or '!' expression.
      const op = ctx.getChild(0).getText();
      const exprType = this.visit(ctx.expression(0));

      if (op === "!" && exprType !== "bool") {
        throw new Error(
          `Type error in unary operation '!': Expected 'bool', got '${typeToString(
            exprType
          )}'`
        );
      } else if (op === "-" && exprType !== "i64") {
        throw new Error(
          `Type error in unary operation '-': Expected 'i64', got '${typeToString(
            exprType
          )}'`
        );
      }

      return op === "!" ? "bool" : exprType;
    } else if (ctx.getChildCount() === 3) {
      if (
        ctx.getChild(0).getText() === "(" &&
        ctx.getChild(2).getText() === ")"
      ) {
        // Parenthesized expression.
        return this.visit(ctx.expression(0));
      } else {
        // Binary operator: compile left and right operands.
        const leftType = this.visit(ctx.expression(0));
        const rightType = this.visit(ctx.expression(1));
        const op = ctx.getChild(1).getText();

        // Type check binary operations
        switch (op) {
          case "+":
          case "-":
          case "*":
          case "/":
          case "%":
            if (leftType !== "i64" || rightType !== "i64") {
              throw new Error(
                `Type error in binary arithmetic operation: Expected 'i64' operands, got '${typeToString(
                  leftType
                )}' and '${typeToString(rightType)}'`
              );
            }
            return "i64";

          case "==":
          case "!=":
            if (!isTypeEqual(leftType, rightType)) {
              throw new Error(
                `Type error in equality operation: Operands must be of the same type, got '${typeToString(
                  leftType
                )}' and '${typeToString(rightType)}'`
              );
            }
            return "bool";

          case "<":
          case ">":
          case "<=":
          case ">=":
            if (leftType !== "i64" || rightType !== "i64") {
              throw new Error(
                `Type error in comparison operation: Expected 'i64' operands, got '${typeToString(
                  leftType
                )}' and '${typeToString(rightType)}'`
              );
            }
            return "bool";

          case "&&":
          case "||":
            if (leftType !== "bool" || rightType !== "bool") {
              throw new Error(
                `Type error in logical operation: Expected 'bool' operands, got '${typeToString(
                  leftType
                )}' and '${typeToString(rightType)}'`
              );
            }
            return "bool";

          default:
            throw new Error(`Unsupported binary operator: ${op}`);
        }
      }
    } else {
      throw new Error(`Invalid expression: ${ctx.getText()}`);
    }
  }
  visitFormatExpr(ctx: FormatExprContext): Type {
    // Make sure all expressions in the string interpolation are valid
    const expressions = ctx.expression();
    for (const expr of expressions) {
      // Each expression in a format string should be convertible to string
      const exprType = this.visit(expr);
      // All basic types are fine for string interpolation
      // For complex types like functions, we might want to be more restrictive
      if (isFunctionType(exprType)) {
        throw new Error(`Cannot interpolate function type in format string`);
      }
    }

    // Format expressions return strings
    return "String";
  }
  visitLiteral(ctx: LiteralContext): Type {
    const text = ctx.getText();
    if (/^[0-9]+$/.test(text)) {
      return "i64";
    } else if (text === "true" || text === "false") {
      return "bool";
    } else if (text.startsWith('"') && text.endsWith('"')) {
      return "&str";
    } else if (
      text.startsWith("'") &&
      text.endsWith("'") &&
      text.length === 3
    ) {
      return "char";
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
      ? parseType(returnTypeAnnotation)
      : "()"; // Default to void if no return type is specified

    const paramTypes: { name: string; type: Type }[] = paramList
      ? paramList.IDENTIFIER().map((id, index) => {
          const typeAnnotation = paramList.typeAnnotation(index)?.getText();
          if (!typeAnnotation) {
            throw new Error(
              `Missing type annotation for parameter '${id.getText()}'`
            );
          }
          return { name: id.getText(), type: parseType(typeAnnotation) };
        })
      : [];

    const previousEnvironment = this.globalTypeEnvironment;
    this.globalTypeEnvironment = this.extend_type_environment(
      paramTypes,
      this.globalTypeEnvironment
    );

    // Set current function return type for checking return statements
    const previousFunctionReturnType = this.currentFunctionReturnType;
    this.currentFunctionReturnType = returnType;

    const bodyType = this.visit(body);

    // Reset function return type
    this.currentFunctionReturnType = previousFunctionReturnType;

    if (!isTypeEqual(bodyType, returnType)) {
      throw new Error(
        `Type error in function '${functionName}': ` +
          `declared return type is '${typeToString(
            returnType
          )}', but body returns '${typeToString(bodyType)}'`
      );
    }
    this.globalTypeEnvironment = previousEnvironment;

    return "()"; // Function declarations do not produce a value
  }

  visitLambdaExpr(ctx: LambdaExprContext): Type {
    // Extract the parameter list and parameter types
    const paramList = ctx.paramList();
    const paramNames: string[] = paramList
      ? paramList.IDENTIFIER().map((id) => id.getText())
      : [];
    const paramTypes: Type[] = paramList
      ? paramList.typeAnnotation().map((type) => parseType(type.getText()))
      : [];

    // Create param name-type pairs for environment extension
    const params: { name: string; type: Type }[] = paramNames.map(
      (name, idx) => ({ name, type: paramTypes[idx] })
    );

    // Create a new environment with parameters
    const previousEnvironment = this.globalTypeEnvironment;
    this.globalTypeEnvironment = this.extend_type_environment(
      params,
      this.globalTypeEnvironment
    );

    // Determine the return type by analyzing the body
    let returnType: Type;
    if (ctx.blockStmt()) {
      // Block statement body
      returnType = this.visit(ctx.blockStmt());
    } else if (ctx.expression()) {
      // Expression body (implicitly returned)
      returnType = this.visit(ctx.expression());
    } else {
      throw new Error(
        `Lambda expression must have either a block or expression body`
      );
    }

    // Restore the previous environment
    this.globalTypeEnvironment = previousEnvironment;

    // Create function type for the lambda
    const functionType: FunctionType = {
      params: paramTypes,
      returnType: returnType,
    };

    return functionType;
  }

  visitLambdaCall(ctx: LambdaCallContext): Type {
    const lambdaName = ctx.IDENTIFIER().getText();
    const lambdaType = this.lookupType(lambdaName);

    // Ensure the lambda has a function type
    if (!isFunctionType(lambdaType)) {
      throw new Error(
        `Type error in lambda call: '${lambdaName}' is not a function. Actual type: ${typeToString(
          lambdaType
        )}`
      );
    }

    // Get the argument types by visiting each argument expression
    const argList = ctx.argList()?.expression() || [];
    const actualArgTypes = argList.map((arg) => this.visit(arg));

    // Check if the number of arguments matches the number of parameters
    if (actualArgTypes.length !== (lambdaType as FunctionType).params.length) {
      throw new Error(
        `Type error in lambda call: '${lambdaName}' expects ${
          (lambdaType as FunctionType).params.length
        } arguments, ` + `but got ${actualArgTypes.length}.`
      );
    }

    // Check if each argument type matches the corresponding parameter type
    for (let i = 0; i < actualArgTypes.length; i++) {
      const expectedType = (lambdaType as FunctionType).params[i];
      const actualType = actualArgTypes[i];
      if (!isTypeEqual(expectedType, actualType)) {
        throw new Error(
          `Type error in lambda call: Argument ${
            i + 1
          } of '${lambdaName}' has type '${typeToString(actualType)}', ` +
            `but expected '${typeToString(expectedType)}'.`
        );
      }
    }

    // Return the return type of the lambda
    return (lambdaType as FunctionType).returnType;
  }

  visitReturnStmt(ctx: ReturnStmtContext): Type {
    const returnExprType = this.visit(ctx.expression());

    // Check if return type matches function return type
    if (
      this.currentFunctionReturnType !== null &&
      !isTypeEqual(returnExprType, this.currentFunctionReturnType)
    ) {
      throw new Error(
        `Type error in return statement: expected type '${typeToString(
          this.currentFunctionReturnType
        )}', ` + `but got '${typeToString(returnExprType)}'`
      );
    }

    return returnExprType;
  }

  // Override the default result method.
  protected defaultResult(): Type {
    return "()"; // Default to void for statements
  }
}

type TypeEnvironment = Map<string, Type>[];
