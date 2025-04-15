// Generated from src/Crust.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `CrustParser`.
 */
export class CrustListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `CrustParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.exprStmt`.
     * @param ctx the parse tree
     */
    enterExprStmt?: (ctx: ExprStmtContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.exprStmt`.
     * @param ctx the parse tree
     */
    exitExprStmt?: (ctx: ExprStmtContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.varDecl`.
     * @param ctx the parse tree
     */
    enterVarDecl?: (ctx: VarDeclContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.varDecl`.
     * @param ctx the parse tree
     */
    exitVarDecl?: (ctx: VarDeclContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.assignmentStmt`.
     * @param ctx the parse tree
     */
    enterAssignmentStmt?: (ctx: AssignmentStmtContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.assignmentStmt`.
     * @param ctx the parse tree
     */
    exitAssignmentStmt?: (ctx: AssignmentStmtContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.derefAssignStmt`.
     * @param ctx the parse tree
     */
    enterDerefAssignStmt?: (ctx: DerefAssignStmtContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.derefAssignStmt`.
     * @param ctx the parse tree
     */
    exitDerefAssignStmt?: (ctx: DerefAssignStmtContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.assignOp`.
     * @param ctx the parse tree
     */
    enterAssignOp?: (ctx: AssignOpContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.assignOp`.
     * @param ctx the parse tree
     */
    exitAssignOp?: (ctx: AssignOpContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.breakStmt`.
     * @param ctx the parse tree
     */
    enterBreakStmt?: (ctx: BreakStmtContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.breakStmt`.
     * @param ctx the parse tree
     */
    exitBreakStmt?: (ctx: BreakStmtContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.ifStmt`.
     * @param ctx the parse tree
     */
    enterIfStmt?: (ctx: IfStmtContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.ifStmt`.
     * @param ctx the parse tree
     */
    exitIfStmt?: (ctx: IfStmtContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.whileStmt`.
     * @param ctx the parse tree
     */
    enterWhileStmt?: (ctx: WhileStmtContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.whileStmt`.
     * @param ctx the parse tree
     */
    exitWhileStmt?: (ctx: WhileStmtContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.blockStmt`.
     * @param ctx the parse tree
     */
    enterBlockStmt?: (ctx: BlockStmtContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.blockStmt`.
     * @param ctx the parse tree
     */
    exitBlockStmt?: (ctx: BlockStmtContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.printStmt`.
     * @param ctx the parse tree
     */
    enterPrintStmt?: (ctx: PrintStmtContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.printStmt`.
     * @param ctx the parse tree
     */
    exitPrintStmt?: (ctx: PrintStmtContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.printlnStmt`.
     * @param ctx the parse tree
     */
    enterPrintlnStmt?: (ctx: PrintlnStmtContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.printlnStmt`.
     * @param ctx the parse tree
     */
    exitPrintlnStmt?: (ctx: PrintlnStmtContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.formatExpr`.
     * @param ctx the parse tree
     */
    enterFormatExpr?: (ctx: FormatExprContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.formatExpr`.
     * @param ctx the parse tree
     */
    exitFormatExpr?: (ctx: FormatExprContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.returnStmt`.
     * @param ctx the parse tree
     */
    enterReturnStmt?: (ctx: ReturnStmtContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.returnStmt`.
     * @param ctx the parse tree
     */
    exitReturnStmt?: (ctx: ReturnStmtContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.functionDecl`.
     * @param ctx the parse tree
     */
    enterFunctionDecl?: (ctx: FunctionDeclContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.functionDecl`.
     * @param ctx the parse tree
     */
    exitFunctionDecl?: (ctx: FunctionDeclContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.methodCall`.
     * @param ctx the parse tree
     */
    enterMethodCall?: (ctx: MethodCallContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.methodCall`.
     * @param ctx the parse tree
     */
    exitMethodCall?: (ctx: MethodCallContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.lambdaExpr`.
     * @param ctx the parse tree
     */
    enterLambdaExpr?: (ctx: LambdaExprContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.lambdaExpr`.
     * @param ctx the parse tree
     */
    exitLambdaExpr?: (ctx: LambdaExprContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.lambdaCall`.
     * @param ctx the parse tree
     */
    enterLambdaCall?: (ctx: LambdaCallContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.lambdaCall`.
     * @param ctx the parse tree
     */
    exitLambdaCall?: (ctx: LambdaCallContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.paramList`.
     * @param ctx the parse tree
     */
    enterParamList?: (ctx: ParamListContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.paramList`.
     * @param ctx the parse tree
     */
    exitParamList?: (ctx: ParamListContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.argList`.
     * @param ctx the parse tree
     */
    enterArgList?: (ctx: ArgListContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.argList`.
     * @param ctx the parse tree
     */
    exitArgList?: (ctx: ArgListContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.typeAnnotation`.
     * @param ctx the parse tree
     */
    enterTypeAnnotation?: (ctx: TypeAnnotationContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.typeAnnotation`.
     * @param ctx the parse tree
     */
    exitTypeAnnotation?: (ctx: TypeAnnotationContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.literal`.
     * @param ctx the parse tree
     */
    enterLiteral?: (ctx: LiteralContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.literal`.
     * @param ctx the parse tree
     */
    exitLiteral?: (ctx: LiteralContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

