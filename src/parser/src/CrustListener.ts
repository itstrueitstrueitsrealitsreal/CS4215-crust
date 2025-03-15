// Generated from src/Crust.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
     * Enter a parse tree produced by `CrustParser.param`.
     * @param ctx the parse tree
     */
    enterParam?: (ctx: ParamContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.param`.
     * @param ctx the parse tree
     */
    exitParam?: (ctx: ParamContext) => void;
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
    /**
     * Enter a parse tree produced by `CrustParser.assignment`.
     * @param ctx the parse tree
     */
    enterAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.assignment`.
     * @param ctx the parse tree
     */
    exitAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.logical`.
     * @param ctx the parse tree
     */
    enterLogical?: (ctx: LogicalContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.logical`.
     * @param ctx the parse tree
     */
    exitLogical?: (ctx: LogicalContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.comparison`.
     * @param ctx the parse tree
     */
    enterComparison?: (ctx: ComparisonContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.comparison`.
     * @param ctx the parse tree
     */
    exitComparison?: (ctx: ComparisonContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.term`.
     * @param ctx the parse tree
     */
    enterTerm?: (ctx: TermContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.term`.
     * @param ctx the parse tree
     */
    exitTerm?: (ctx: TermContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.factor`.
     * @param ctx the parse tree
     */
    enterFactor?: (ctx: FactorContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.factor`.
     * @param ctx the parse tree
     */
    exitFactor?: (ctx: FactorContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.unary`.
     * @param ctx the parse tree
     */
    enterUnary?: (ctx: UnaryContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.unary`.
     * @param ctx the parse tree
     */
    exitUnary?: (ctx: UnaryContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.primary`.
     * @param ctx the parse tree
     */
    enterPrimary?: (ctx: PrimaryContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.primary`.
     * @param ctx the parse tree
     */
    exitPrimary?: (ctx: PrimaryContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.functionCall`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.functionCall`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.arguments`.
     * @param ctx the parse tree
     */
    enterArguments?: (ctx: ArgumentsContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.arguments`.
     * @param ctx the parse tree
     */
    exitArguments?: (ctx: ArgumentsContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

