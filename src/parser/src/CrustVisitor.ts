// Generated from src/Crust.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CrustParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class CrustVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `CrustParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.variableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.functionDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.parameterList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterList?: (ctx: ParameterListContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.parameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter?: (ctx: ParameterContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.ifStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStatement?: (ctx: IfStatementContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.whileStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStatement?: (ctx: WhileStatementContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.returnStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.expressionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.logicalOr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalOr?: (ctx: LogicalOrContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.logicalAnd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalAnd?: (ctx: LogicalAndContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.equality`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEquality?: (ctx: EqualityContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.relational`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelational?: (ctx: RelationalContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.additive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdditive?: (ctx: AdditiveContext) => Result;
    /**
     * Visit a parse tree produced by `CrustParser.multiplicative`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiplicative?: (ctx: MultiplicativeContext) => Result;
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
     * Visit a parse tree produced by `CrustParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
}

