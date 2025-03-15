// Generated from src/Crust.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgContext } from "./CrustParser.js";
import { StmtContext } from "./CrustParser.js";
import { VarDeclContext } from "./CrustParser.js";
import { ExprStmtContext } from "./CrustParser.js";
import { IfStmtContext } from "./CrustParser.js";
import { WhileStmtContext } from "./CrustParser.js";
import { FuncDeclContext } from "./CrustParser.js";
import { ParamListContext } from "./CrustParser.js";
import { BlockContext } from "./CrustParser.js";
import { ExprContext } from "./CrustParser.js";


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
     * Enter a parse tree produced by `CrustParser.stmt`.
     * @param ctx the parse tree
     */
    enterStmt?: (ctx: StmtContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.stmt`.
     * @param ctx the parse tree
     */
    exitStmt?: (ctx: StmtContext) => void;
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
     * Enter a parse tree produced by `CrustParser.funcDecl`.
     * @param ctx the parse tree
     */
    enterFuncDecl?: (ctx: FuncDeclContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.funcDecl`.
     * @param ctx the parse tree
     */
    exitFuncDecl?: (ctx: FuncDeclContext) => void;
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
     * Enter a parse tree produced by `CrustParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.expr`.
     * @param ctx the parse tree
     */
    enterExpr?: (ctx: ExprContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.expr`.
     * @param ctx the parse tree
     */
    exitExpr?: (ctx: ExprContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

