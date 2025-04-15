// Generated from /Users/seetk/Desktop/sch/CS4215-crust/src/Crust.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CrustParser}.
 */
public interface CrustListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CrustParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(CrustParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(CrustParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(CrustParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(CrustParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#exprStmt}.
	 * @param ctx the parse tree
	 */
	void enterExprStmt(CrustParser.ExprStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#exprStmt}.
	 * @param ctx the parse tree
	 */
	void exitExprStmt(CrustParser.ExprStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#varDecl}.
	 * @param ctx the parse tree
	 */
	void enterVarDecl(CrustParser.VarDeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#varDecl}.
	 * @param ctx the parse tree
	 */
	void exitVarDecl(CrustParser.VarDeclContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#assignmentStmt}.
	 * @param ctx the parse tree
	 */
	void enterAssignmentStmt(CrustParser.AssignmentStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#assignmentStmt}.
	 * @param ctx the parse tree
	 */
	void exitAssignmentStmt(CrustParser.AssignmentStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#assignOp}.
	 * @param ctx the parse tree
	 */
	void enterAssignOp(CrustParser.AssignOpContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#assignOp}.
	 * @param ctx the parse tree
	 */
	void exitAssignOp(CrustParser.AssignOpContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#breakStmt}.
	 * @param ctx the parse tree
	 */
	void enterBreakStmt(CrustParser.BreakStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#breakStmt}.
	 * @param ctx the parse tree
	 */
	void exitBreakStmt(CrustParser.BreakStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#ifStmt}.
	 * @param ctx the parse tree
	 */
	void enterIfStmt(CrustParser.IfStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#ifStmt}.
	 * @param ctx the parse tree
	 */
	void exitIfStmt(CrustParser.IfStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#whileStmt}.
	 * @param ctx the parse tree
	 */
	void enterWhileStmt(CrustParser.WhileStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#whileStmt}.
	 * @param ctx the parse tree
	 */
	void exitWhileStmt(CrustParser.WhileStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#blockStmt}.
	 * @param ctx the parse tree
	 */
	void enterBlockStmt(CrustParser.BlockStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#blockStmt}.
	 * @param ctx the parse tree
	 */
	void exitBlockStmt(CrustParser.BlockStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#printStmt}.
	 * @param ctx the parse tree
	 */
	void enterPrintStmt(CrustParser.PrintStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#printStmt}.
	 * @param ctx the parse tree
	 */
	void exitPrintStmt(CrustParser.PrintStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#printlnStmt}.
	 * @param ctx the parse tree
	 */
	void enterPrintlnStmt(CrustParser.PrintlnStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#printlnStmt}.
	 * @param ctx the parse tree
	 */
	void exitPrintlnStmt(CrustParser.PrintlnStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#formatExpr}.
	 * @param ctx the parse tree
	 */
	void enterFormatExpr(CrustParser.FormatExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#formatExpr}.
	 * @param ctx the parse tree
	 */
	void exitFormatExpr(CrustParser.FormatExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#returnStmt}.
	 * @param ctx the parse tree
	 */
	void enterReturnStmt(CrustParser.ReturnStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#returnStmt}.
	 * @param ctx the parse tree
	 */
	void exitReturnStmt(CrustParser.ReturnStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#functionDecl}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDecl(CrustParser.FunctionDeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#functionDecl}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDecl(CrustParser.FunctionDeclContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(CrustParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(CrustParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#lambdaExpr}.
	 * @param ctx the parse tree
	 */
	void enterLambdaExpr(CrustParser.LambdaExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#lambdaExpr}.
	 * @param ctx the parse tree
	 */
	void exitLambdaExpr(CrustParser.LambdaExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#lambdaCall}.
	 * @param ctx the parse tree
	 */
	void enterLambdaCall(CrustParser.LambdaCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#lambdaCall}.
	 * @param ctx the parse tree
	 */
	void exitLambdaCall(CrustParser.LambdaCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#paramList}.
	 * @param ctx the parse tree
	 */
	void enterParamList(CrustParser.ParamListContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#paramList}.
	 * @param ctx the parse tree
	 */
	void exitParamList(CrustParser.ParamListContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#argList}.
	 * @param ctx the parse tree
	 */
	void enterArgList(CrustParser.ArgListContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#argList}.
	 * @param ctx the parse tree
	 */
	void exitArgList(CrustParser.ArgListContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#typeAnnotation}.
	 * @param ctx the parse tree
	 */
	void enterTypeAnnotation(CrustParser.TypeAnnotationContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#typeAnnotation}.
	 * @param ctx the parse tree
	 */
	void exitTypeAnnotation(CrustParser.TypeAnnotationContext ctx);
	/**
	 * Enter a parse tree produced by {@link CrustParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(CrustParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link CrustParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(CrustParser.LiteralContext ctx);
}