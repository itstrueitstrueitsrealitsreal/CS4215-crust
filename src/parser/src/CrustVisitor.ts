// Generated from src/Crust.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgContext } from "./CrustParser.js";
import { StmtContext } from "./CrustParser.js";
import { VarDeclContext } from "./CrustParser.js";
import { ExprStmtContext } from "./CrustParser.js";
import { IfStmtContext } from "./CrustParser.js";
import { WhileStmtContext } from "./CrustParser.js";
import { FuncDeclContext } from "./CrustParser.js";
import { ReturnStmtContext } from "./CrustParser.js";
import { ParamListContext } from "./CrustParser.js";
import { ParamContext } from "./CrustParser.js";
import { BlockContext } from "./CrustParser.js";
import { ExprContext } from "./CrustParser.js";
import { AssignmentContext } from "./CrustParser.js";
import { LogicalContext } from "./CrustParser.js";
import { ComparisonContext } from "./CrustParser.js";
import { TermContext } from "./CrustParser.js";
import { FactorContext } from "./CrustParser.js";
import { UnaryContext } from "./CrustParser.js";
import { PrimaryContext } from "./CrustParser.js";
import { FunctionCallContext } from "./CrustParser.js";
import { ArgumentsContext } from "./CrustParser.js";
import { TypeContext } from "./CrustParser.js";


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
     * Visit a parse tree produced by `CrustParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt?: (ctx: StmtContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.varDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarDecl?: (ctx: VarDeclContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.exprStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprStmt?: (ctx: ExprStmtContext) => Result;
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
     * Visit a parse tree produced by `CrustParser.funcDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncDecl?: (ctx: FuncDeclContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.returnStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStmt?: (ctx: ReturnStmtContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.paramList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamList?: (ctx: ParamListContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.param`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParam?: (ctx: ParamContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr?: (ctx: ExprContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.logical`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogical?: (ctx: LogicalContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.comparison`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparison?: (ctx: ComparisonContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.term`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTerm?: (ctx: TermContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.factor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFactor?: (ctx: FactorContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.unary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnary?: (ctx: UnaryContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.primary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimary?: (ctx: PrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.functionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.arguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArguments?: (ctx: ArgumentsContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
}

