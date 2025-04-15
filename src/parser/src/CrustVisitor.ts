// Generated from src/Crust.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgContext } from "./CrustParser.js";
import { StatementContext } from "./CrustParser.js";
import { ExprStmtContext } from "./CrustParser.js";
import { VarDeclContext } from "./CrustParser.js";
import { AssignmentStmtContext } from "./CrustParser.js";
import { DerefAssignStmtContext } from "./CrustParser.js";
import { AssignOpContext } from "./CrustParser.js";
import { BreakStmtContext } from "./CrustParser.js";
import { IfStmtContext } from "./CrustParser.js";
import { WhileStmtContext } from "./CrustParser.js";
import { BlockStmtContext } from "./CrustParser.js";
import { PrintStmtContext } from "./CrustParser.js";
import { PrintlnStmtContext } from "./CrustParser.js";
import { FormatExprContext } from "./CrustParser.js";
import { ReturnStmtContext } from "./CrustParser.js";
import { FunctionDeclContext } from "./CrustParser.js";
import { ExpressionContext } from "./CrustParser.js";
import { MethodCallContext } from "./CrustParser.js";
import { LambdaExprContext } from "./CrustParser.js";
import { LambdaCallContext } from "./CrustParser.js";
import { ParamListContext } from "./CrustParser.js";
import { ArgListContext } from "./CrustParser.js";
import { TypeAnnotationContext } from "./CrustParser.js";
import { LiteralContext } from "./CrustParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CrustParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class CrustVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `CrustParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.exprStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprStmt?: (ctx: ExprStmtContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.varDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarDecl?: (ctx: VarDeclContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.assignmentStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentStmt?: (ctx: AssignmentStmtContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.derefAssignStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDerefAssignStmt?: (ctx: DerefAssignStmtContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.assignOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignOp?: (ctx: AssignOpContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.breakStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreakStmt?: (ctx: BreakStmtContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.ifStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStmt?: (ctx: IfStmtContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.whileStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStmt?: (ctx: WhileStmtContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.blockStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockStmt?: (ctx: BlockStmtContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.printStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrintStmt?: (ctx: PrintStmtContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.printlnStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrintlnStmt?: (ctx: PrintlnStmtContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.formatExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormatExpr?: (ctx: FormatExprContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.returnStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStmt?: (ctx: ReturnStmtContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.functionDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.methodCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethodCall?: (ctx: MethodCallContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.lambdaExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLambdaExpr?: (ctx: LambdaExprContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.lambdaCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLambdaCall?: (ctx: LambdaCallContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.paramList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamList?: (ctx: ParamListContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.argList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgList?: (ctx: ArgListContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.typeAnnotation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeAnnotation?: (ctx: TypeAnnotationContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
}

