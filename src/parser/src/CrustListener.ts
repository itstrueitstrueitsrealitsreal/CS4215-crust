// Generated from src/Crust.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgramContext } from "./CrustParser.js";
import { StatementContext } from "./CrustParser.js";
import { VariableDeclarationContext } from "./CrustParser.js";
import { FunctionDeclarationContext } from "./CrustParser.js";
import { ParameterListContext } from "./CrustParser.js";
import { ParameterContext } from "./CrustParser.js";
import { BlockContext } from "./CrustParser.js";
import { IfStatementContext } from "./CrustParser.js";
import { WhileStatementContext } from "./CrustParser.js";
import { ReturnStatementContext } from "./CrustParser.js";
import { ExpressionStatementContext } from "./CrustParser.js";
import { ExpressionContext } from "./CrustParser.js";
import { AssignmentContext } from "./CrustParser.js";
import { LogicalOrContext } from "./CrustParser.js";
import { LogicalAndContext } from "./CrustParser.js";
import { EqualityContext } from "./CrustParser.js";
import { RelationalContext } from "./CrustParser.js";
import { AdditiveContext } from "./CrustParser.js";
import { MultiplicativeContext } from "./CrustParser.js";
import { UnaryContext } from "./CrustParser.js";
import { PrimaryContext } from "./CrustParser.js";
import { TypeContext } from "./CrustParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CrustParser`.
 */
export class CrustListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `CrustParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
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
     * Enter a parse tree produced by `CrustParser.variableDeclaration`.
     * @param ctx the parse tree
     */
    enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.variableDeclaration`.
     * @param ctx the parse tree
     */
    exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.functionDeclaration`.
     * @param ctx the parse tree
     */
    enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.functionDeclaration`.
     * @param ctx the parse tree
     */
    exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.parameterList`.
     * @param ctx the parse tree
     */
    enterParameterList?: (ctx: ParameterListContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.parameterList`.
     * @param ctx the parse tree
     */
    exitParameterList?: (ctx: ParameterListContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.parameter`.
     * @param ctx the parse tree
     */
    enterParameter?: (ctx: ParameterContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.parameter`.
     * @param ctx the parse tree
     */
    exitParameter?: (ctx: ParameterContext) => void;
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
     * Enter a parse tree produced by `CrustParser.ifStatement`.
     * @param ctx the parse tree
     */
    enterIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.ifStatement`.
     * @param ctx the parse tree
     */
    exitIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.whileStatement`.
     * @param ctx the parse tree
     */
    enterWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.whileStatement`.
     * @param ctx the parse tree
     */
    exitWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.returnStatement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.returnStatement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.expressionStatement`.
     * @param ctx the parse tree
     */
    enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.expressionStatement`.
     * @param ctx the parse tree
     */
    exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
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
     * Enter a parse tree produced by `CrustParser.logicalOr`.
     * @param ctx the parse tree
     */
    enterLogicalOr?: (ctx: LogicalOrContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.logicalOr`.
     * @param ctx the parse tree
     */
    exitLogicalOr?: (ctx: LogicalOrContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.logicalAnd`.
     * @param ctx the parse tree
     */
    enterLogicalAnd?: (ctx: LogicalAndContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.logicalAnd`.
     * @param ctx the parse tree
     */
    exitLogicalAnd?: (ctx: LogicalAndContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.equality`.
     * @param ctx the parse tree
     */
    enterEquality?: (ctx: EqualityContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.equality`.
     * @param ctx the parse tree
     */
    exitEquality?: (ctx: EqualityContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.relational`.
     * @param ctx the parse tree
     */
    enterRelational?: (ctx: RelationalContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.relational`.
     * @param ctx the parse tree
     */
    exitRelational?: (ctx: RelationalContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.additive`.
     * @param ctx the parse tree
     */
    enterAdditive?: (ctx: AdditiveContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.additive`.
     * @param ctx the parse tree
     */
    exitAdditive?: (ctx: AdditiveContext) => void;
    /**
     * Enter a parse tree produced by `CrustParser.multiplicative`.
     * @param ctx the parse tree
     */
    enterMultiplicative?: (ctx: MultiplicativeContext) => void;
    /**
     * Exit a parse tree produced by `CrustParser.multiplicative`.
     * @param ctx the parse tree
     */
    exitMultiplicative?: (ctx: MultiplicativeContext) => void;
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

