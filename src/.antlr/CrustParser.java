// Generated from /Users/seetk/Desktop/sch/CS4215-crust/src/Crust.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CrustParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40, T__40=41, T__41=42, T__42=43, T__43=44, T__44=45, 
		T__45=46, T__46=47, T__47=48, T__48=49, T__49=50, T__50=51, T__51=52, 
		T__52=53, T__53=54, T__54=55, T__55=56, INT=57, BOOL=58, CHAR=59, IDENTIFIER=60, 
		STRING=61, WS=62, COMMENT=63, BLOCK_COMMENT=64;
	public static final int
		RULE_prog = 0, RULE_statement = 1, RULE_exprStmt = 2, RULE_varDecl = 3, 
		RULE_assignmentStmt = 4, RULE_derefAssignStmt = 5, RULE_assignOp = 6, 
		RULE_breakStmt = 7, RULE_ifStmt = 8, RULE_whileStmt = 9, RULE_blockStmt = 10, 
		RULE_printStmt = 11, RULE_printlnStmt = 12, RULE_formatExpr = 13, RULE_returnStmt = 14, 
		RULE_functionDecl = 15, RULE_expression = 16, RULE_methodCall = 17, RULE_lambdaExpr = 18, 
		RULE_lambdaCall = 19, RULE_paramList = 20, RULE_argList = 21, RULE_typeAnnotation = 22, 
		RULE_literal = 23;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "statement", "exprStmt", "varDecl", "assignmentStmt", "derefAssignStmt", 
			"assignOp", "breakStmt", "ifStmt", "whileStmt", "blockStmt", "printStmt", 
			"printlnStmt", "formatExpr", "returnStmt", "functionDecl", "expression", 
			"methodCall", "lambdaExpr", "lambdaCall", "paramList", "argList", "typeAnnotation", 
			"literal"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "'let'", "'mut'", "':'", "'='", "'*'", "'+='", "'-='", "'*='", 
			"'/='", "'%='", "'<<='", "'>>='", "'&='", "'^='", "'|='", "'break'", 
			"'if'", "'('", "')'", "'else'", "'while'", "'{'", "'}'", "'print!'", 
			"','", "'println!'", "'format!'", "'return'", "'fn'", "'->'", "'-'", 
			"'!'", "'&'", "'/'", "'%'", "'+'", "'<<'", "'>>'", "'<'", "'<='", "'>'", 
			"'>='", "'=='", "'!='", "'^'", "'|'", "'.'", "'to_string'", "'to_owned'", 
			"'bool'", "'char'", "'&str'", "'String'", "'i64'", "'()'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, "INT", "BOOL", 
			"CHAR", "IDENTIFIER", "STRING", "WS", "COMMENT", "BLOCK_COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Crust.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CrustParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(CrustParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(48);
				statement();
				}
				}
				setState(51); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 4467711599964979268L) != 0) );
			setState(53);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public ExprStmtContext exprStmt() {
			return getRuleContext(ExprStmtContext.class,0);
		}
		public VarDeclContext varDecl() {
			return getRuleContext(VarDeclContext.class,0);
		}
		public DerefAssignStmtContext derefAssignStmt() {
			return getRuleContext(DerefAssignStmtContext.class,0);
		}
		public AssignmentStmtContext assignmentStmt() {
			return getRuleContext(AssignmentStmtContext.class,0);
		}
		public IfStmtContext ifStmt() {
			return getRuleContext(IfStmtContext.class,0);
		}
		public WhileStmtContext whileStmt() {
			return getRuleContext(WhileStmtContext.class,0);
		}
		public BreakStmtContext breakStmt() {
			return getRuleContext(BreakStmtContext.class,0);
		}
		public PrintStmtContext printStmt() {
			return getRuleContext(PrintStmtContext.class,0);
		}
		public PrintlnStmtContext printlnStmt() {
			return getRuleContext(PrintlnStmtContext.class,0);
		}
		public BlockStmtContext blockStmt() {
			return getRuleContext(BlockStmtContext.class,0);
		}
		public ReturnStmtContext returnStmt() {
			return getRuleContext(ReturnStmtContext.class,0);
		}
		public FunctionDeclContext functionDecl() {
			return getRuleContext(FunctionDeclContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(67);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(55);
				exprStmt();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(56);
				varDecl();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(57);
				derefAssignStmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(58);
				assignmentStmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(59);
				ifStmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(60);
				whileStmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(61);
				breakStmt();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(62);
				printStmt();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(63);
				printlnStmt();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(64);
				blockStmt();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(65);
				returnStmt();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(66);
				functionDecl();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprStmtContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExprStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprStmt; }
	}

	public final ExprStmtContext exprStmt() throws RecognitionException {
		ExprStmtContext _localctx = new ExprStmtContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_exprStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			expression(0);
			setState(70);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VarDeclContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(CrustParser.IDENTIFIER, 0); }
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VarDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varDecl; }
	}

	public final VarDeclContext varDecl() throws RecognitionException {
		VarDeclContext _localctx = new VarDeclContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_varDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72);
			match(T__1);
			setState(74);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__2) {
				{
				setState(73);
				match(T__2);
				}
			}

			setState(76);
			match(IDENTIFIER);
			setState(77);
			match(T__3);
			setState(78);
			typeAnnotation();
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__4) {
				{
				setState(79);
				match(T__4);
				setState(80);
				expression(0);
				}
			}

			setState(83);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignmentStmtContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(CrustParser.IDENTIFIER, 0); }
		public AssignOpContext assignOp() {
			return getRuleContext(AssignOpContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AssignmentStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentStmt; }
	}

	public final AssignmentStmtContext assignmentStmt() throws RecognitionException {
		AssignmentStmtContext _localctx = new AssignmentStmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_assignmentStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			match(IDENTIFIER);
			setState(86);
			assignOp();
			setState(87);
			expression(0);
			setState(88);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DerefAssignStmtContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public DerefAssignStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_derefAssignStmt; }
	}

	public final DerefAssignStmtContext derefAssignStmt() throws RecognitionException {
		DerefAssignStmtContext _localctx = new DerefAssignStmtContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_derefAssignStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			match(T__5);
			setState(91);
			expression(0);
			setState(92);
			match(T__4);
			setState(93);
			expression(0);
			setState(94);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignOpContext extends ParserRuleContext {
		public AssignOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignOp; }
	}

	public final AssignOpContext assignOp() throws RecognitionException {
		AssignOpContext _localctx = new AssignOpContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_assignOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 130976L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BreakStmtContext extends ParserRuleContext {
		public BreakStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStmt; }
	}

	public final BreakStmtContext breakStmt() throws RecognitionException {
		BreakStmtContext _localctx = new BreakStmtContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_breakStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(98);
			match(T__16);
			setState(99);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfStmtContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public IfStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStmt; }
	}

	public final IfStmtContext ifStmt() throws RecognitionException {
		IfStmtContext _localctx = new IfStmtContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_ifStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			match(T__17);
			setState(102);
			match(T__18);
			setState(103);
			expression(0);
			setState(104);
			match(T__19);
			setState(105);
			statement();
			setState(108);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				setState(106);
				match(T__20);
				setState(107);
				statement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhileStmtContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WhileStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStmt; }
	}

	public final WhileStmtContext whileStmt() throws RecognitionException {
		WhileStmtContext _localctx = new WhileStmtContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_whileStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			match(T__21);
			setState(111);
			match(T__18);
			setState(112);
			expression(0);
			setState(113);
			match(T__19);
			setState(114);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockStmtContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BlockStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockStmt; }
	}

	public final BlockStmtContext blockStmt() throws RecognitionException {
		BlockStmtContext _localctx = new BlockStmtContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_blockStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(116);
			match(T__22);
			setState(120);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4467711599964979268L) != 0)) {
				{
				{
				setState(117);
				statement();
				}
				}
				setState(122);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(123);
			match(T__23);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintStmtContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(CrustParser.STRING, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public PrintStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printStmt; }
	}

	public final PrintStmtContext printStmt() throws RecognitionException {
		PrintStmtContext _localctx = new PrintStmtContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_printStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			match(T__24);
			setState(126);
			match(T__18);
			setState(127);
			match(STRING);
			setState(132);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__25) {
				{
				{
				setState(128);
				match(T__25);
				setState(129);
				expression(0);
				}
				}
				setState(134);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(135);
			match(T__19);
			setState(136);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintlnStmtContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(CrustParser.STRING, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public PrintlnStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printlnStmt; }
	}

	public final PrintlnStmtContext printlnStmt() throws RecognitionException {
		PrintlnStmtContext _localctx = new PrintlnStmtContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_printlnStmt);
		int _la;
		try {
			setState(154);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(138);
				match(T__26);
				setState(139);
				match(T__18);
				setState(140);
				match(STRING);
				setState(145);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__25) {
					{
					{
					setState(141);
					match(T__25);
					setState(142);
					expression(0);
					}
					}
					setState(147);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(148);
				match(T__19);
				setState(149);
				match(T__0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(150);
				match(T__26);
				setState(151);
				match(T__18);
				setState(152);
				match(T__19);
				setState(153);
				match(T__0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FormatExprContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(CrustParser.STRING, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public FormatExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formatExpr; }
	}

	public final FormatExprContext formatExpr() throws RecognitionException {
		FormatExprContext _localctx = new FormatExprContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_formatExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(156);
			match(T__27);
			setState(157);
			match(T__18);
			setState(158);
			match(STRING);
			setState(163);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__25) {
				{
				{
				setState(159);
				match(T__25);
				setState(160);
				expression(0);
				}
				}
				setState(165);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(166);
			match(T__19);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnStmtContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ReturnStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStmt; }
	}

	public final ReturnStmtContext returnStmt() throws RecognitionException {
		ReturnStmtContext _localctx = new ReturnStmtContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_returnStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			match(T__28);
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4467711598173618240L) != 0)) {
				{
				setState(169);
				expression(0);
				}
			}

			setState(172);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDeclContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(CrustParser.IDENTIFIER, 0); }
		public BlockStmtContext blockStmt() {
			return getRuleContext(BlockStmtContext.class,0);
		}
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public FunctionDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDecl; }
	}

	public final FunctionDeclContext functionDecl() throws RecognitionException {
		FunctionDeclContext _localctx = new FunctionDeclContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_functionDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(174);
			match(T__29);
			setState(175);
			match(IDENTIFIER);
			setState(176);
			match(T__18);
			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(177);
				paramList();
				}
			}

			setState(180);
			match(T__19);
			setState(183);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__30) {
				{
				setState(181);
				match(T__30);
				setState(182);
				typeAnnotation();
				}
			}

			setState(185);
			blockStmt();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public Token op;
		public FormatExprContext formatExpr() {
			return getRuleContext(FormatExprContext.class,0);
		}
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(CrustParser.IDENTIFIER, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public LambdaExprContext lambdaExpr() {
			return getRuleContext(LambdaExprContext.class,0);
		}
		public LambdaCallContext lambdaCall() {
			return getRuleContext(LambdaCallContext.class,0);
		}
		public MethodCallContext methodCall() {
			return getRuleContext(MethodCallContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 32;
		enterRecursionRule(_localctx, 32, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(188);
				formatExpr();
				}
				break;
			case 2:
				{
				setState(189);
				literal();
				}
				break;
			case 3:
				{
				setState(190);
				match(IDENTIFIER);
				}
				break;
			case 4:
				{
				setState(191);
				match(T__18);
				setState(192);
				expression(0);
				setState(193);
				match(T__19);
				}
				break;
			case 5:
				{
				setState(195);
				match(T__31);
				setState(196);
				expression(18);
				}
				break;
			case 6:
				{
				setState(197);
				match(T__32);
				setState(198);
				expression(17);
				}
				break;
			case 7:
				{
				setState(199);
				match(T__5);
				setState(200);
				expression(16);
				}
				break;
			case 8:
				{
				setState(201);
				match(T__33);
				setState(202);
				match(T__2);
				setState(203);
				expression(15);
				}
				break;
			case 9:
				{
				setState(204);
				match(T__33);
				setState(205);
				expression(14);
				}
				break;
			case 10:
				{
				setState(206);
				lambdaExpr();
				}
				break;
			case 11:
				{
				setState(207);
				lambdaCall();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(247);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(245);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(210);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(211);
						((ExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 103079215168L) != 0)) ) {
							((ExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(212);
						expression(14);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(213);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(214);
						((ExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__31 || _la==T__36) ) {
							((ExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(215);
						expression(13);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(216);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(217);
						((ExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__37 || _la==T__38) ) {
							((ExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(218);
						expression(12);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(219);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(220);
						((ExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 16492674416640L) != 0)) ) {
							((ExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(221);
						expression(11);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(222);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(223);
						((ExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__43 || _la==T__44) ) {
							((ExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(224);
						expression(10);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(225);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(226);
						((ExpressionContext)_localctx).op = match(T__33);
						setState(227);
						expression(9);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(228);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(229);
						((ExpressionContext)_localctx).op = match(T__45);
						setState(230);
						expression(8);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(231);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(232);
						((ExpressionContext)_localctx).op = match(T__46);
						setState(233);
						expression(7);
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(234);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(235);
						match(T__33);
						setState(236);
						match(T__33);
						setState(237);
						expression(6);
						}
						break;
					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(238);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(239);
						match(T__46);
						setState(240);
						match(T__46);
						setState(241);
						expression(5);
						}
						break;
					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(242);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(243);
						match(T__47);
						setState(244);
						methodCall();
						}
						break;
					}
					} 
				}
				setState(249);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MethodCallContext extends ParserRuleContext {
		public MethodCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodCall; }
	}

	public final MethodCallContext methodCall() throws RecognitionException {
		MethodCallContext _localctx = new MethodCallContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_methodCall);
		try {
			setState(256);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__48:
				enterOuterAlt(_localctx, 1);
				{
				setState(250);
				match(T__48);
				setState(251);
				match(T__18);
				setState(252);
				match(T__19);
				}
				break;
			case T__49:
				enterOuterAlt(_localctx, 2);
				{
				setState(253);
				match(T__49);
				setState(254);
				match(T__18);
				setState(255);
				match(T__19);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LambdaExprContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BlockStmtContext blockStmt() {
			return getRuleContext(BlockStmtContext.class,0);
		}
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public LambdaExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambdaExpr; }
	}

	public final LambdaExprContext lambdaExpr() throws RecognitionException {
		LambdaExprContext _localctx = new LambdaExprContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_lambdaExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(T__46);
			setState(260);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(259);
				paramList();
				}
			}

			setState(262);
			match(T__46);
			setState(265);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__30) {
				{
				setState(263);
				match(T__30);
				setState(264);
				typeAnnotation();
				}
			}

			setState(269);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
			case T__18:
			case T__27:
			case T__31:
			case T__32:
			case T__33:
			case T__46:
			case INT:
			case BOOL:
			case CHAR:
			case IDENTIFIER:
			case STRING:
				{
				setState(267);
				expression(0);
				}
				break;
			case T__22:
				{
				setState(268);
				blockStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LambdaCallContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(CrustParser.IDENTIFIER, 0); }
		public ArgListContext argList() {
			return getRuleContext(ArgListContext.class,0);
		}
		public LambdaCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambdaCall; }
	}

	public final LambdaCallContext lambdaCall() throws RecognitionException {
		LambdaCallContext _localctx = new LambdaCallContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_lambdaCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(271);
			match(IDENTIFIER);
			setState(272);
			match(T__18);
			setState(274);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4467711598173618240L) != 0)) {
				{
				setState(273);
				argList();
				}
			}

			setState(276);
			match(T__19);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParamListContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(CrustParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(CrustParser.IDENTIFIER, i);
		}
		public List<TypeAnnotationContext> typeAnnotation() {
			return getRuleContexts(TypeAnnotationContext.class);
		}
		public TypeAnnotationContext typeAnnotation(int i) {
			return getRuleContext(TypeAnnotationContext.class,i);
		}
		public ParamListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramList; }
	}

	public final ParamListContext paramList() throws RecognitionException {
		ParamListContext _localctx = new ParamListContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_paramList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(278);
			match(IDENTIFIER);
			setState(281);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__3) {
				{
				setState(279);
				match(T__3);
				setState(280);
				typeAnnotation();
				}
			}

			setState(291);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__25) {
				{
				{
				setState(283);
				match(T__25);
				setState(284);
				match(IDENTIFIER);
				setState(287);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__3) {
					{
					setState(285);
					match(T__3);
					setState(286);
					typeAnnotation();
					}
				}

				}
				}
				setState(293);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ArgListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argList; }
	}

	public final ArgListContext argList() throws RecognitionException {
		ArgListContext _localctx = new ArgListContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_argList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(294);
			expression(0);
			setState(299);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__25) {
				{
				{
				setState(295);
				match(T__25);
				setState(296);
				expression(0);
				}
				}
				setState(301);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeAnnotationContext extends ParserRuleContext {
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public TypeAnnotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeAnnotation; }
	}

	public final TypeAnnotationContext typeAnnotation() throws RecognitionException {
		TypeAnnotationContext _localctx = new TypeAnnotationContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_typeAnnotation);
		try {
			setState(313);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(302);
				match(T__50);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(303);
				match(T__51);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(304);
				match(T__52);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(305);
				match(T__53);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(306);
				match(T__54);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(307);
				match(T__55);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(308);
				match(T__33);
				setState(309);
				typeAnnotation();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(310);
				match(T__33);
				setState(311);
				match(T__2);
				setState(312);
				typeAnnotation();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(CrustParser.INT, 0); }
		public TerminalNode BOOL() { return getToken(CrustParser.BOOL, 0); }
		public TerminalNode CHAR() { return getToken(CrustParser.CHAR, 0); }
		public TerminalNode STRING() { return getToken(CrustParser.STRING, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_literal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(315);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 3314649325744685056L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 16:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 13);
		case 1:
			return precpred(_ctx, 12);
		case 2:
			return precpred(_ctx, 11);
		case 3:
			return precpred(_ctx, 10);
		case 4:
			return precpred(_ctx, 9);
		case 5:
			return precpred(_ctx, 8);
		case 6:
			return precpred(_ctx, 7);
		case 7:
			return precpred(_ctx, 6);
		case 8:
			return precpred(_ctx, 5);
		case 9:
			return precpred(_ctx, 4);
		case 10:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001@\u013e\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0001\u0000\u0004\u0000"+
		"2\b\u0000\u000b\u0000\f\u00003\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001D\b"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0003"+
		"\u0003K\b\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0003\u0003R\b\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0003\bm\b\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t"+
		"\u0001\t\u0001\n\u0001\n\u0005\nw\b\n\n\n\f\nz\t\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u0083"+
		"\b\u000b\n\u000b\f\u000b\u0086\t\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0005\f\u0090\b\f\n\f\f\f\u0093"+
		"\t\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003\f\u009b\b\f"+
		"\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005\r\u00a2\b\r\n\r\f\r\u00a5"+
		"\t\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0003\u000e\u00ab\b\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0003\u000f\u00b3\b\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f"+
		"\u00b8\b\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0003\u0010\u00d1\b\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0005\u0010\u00f6\b\u0010\n\u0010\f\u0010\u00f9\t\u0010\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0003"+
		"\u0011\u0101\b\u0011\u0001\u0012\u0001\u0012\u0003\u0012\u0105\b\u0012"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u010a\b\u0012\u0001\u0012"+
		"\u0001\u0012\u0003\u0012\u010e\b\u0012\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0003\u0013\u0113\b\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014"+
		"\u0001\u0014\u0003\u0014\u011a\b\u0014\u0001\u0014\u0001\u0014\u0001\u0014"+
		"\u0001\u0014\u0003\u0014\u0120\b\u0014\u0005\u0014\u0122\b\u0014\n\u0014"+
		"\f\u0014\u0125\t\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0005\u0015"+
		"\u012a\b\u0015\n\u0015\f\u0015\u012d\t\u0015\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0003\u0016\u013a\b\u0016\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0000\u0001 \u0018\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.\u0000\u0007"+
		"\u0002\u0000\u0005\u0005\u0007\u0010\u0002\u0000\u0006\u0006#$\u0002\u0000"+
		"  %%\u0001\u0000&\'\u0001\u0000(+\u0001\u0000,-\u0002\u00009;==\u0161"+
		"\u00001\u0001\u0000\u0000\u0000\u0002C\u0001\u0000\u0000\u0000\u0004E"+
		"\u0001\u0000\u0000\u0000\u0006H\u0001\u0000\u0000\u0000\bU\u0001\u0000"+
		"\u0000\u0000\nZ\u0001\u0000\u0000\u0000\f`\u0001\u0000\u0000\u0000\u000e"+
		"b\u0001\u0000\u0000\u0000\u0010e\u0001\u0000\u0000\u0000\u0012n\u0001"+
		"\u0000\u0000\u0000\u0014t\u0001\u0000\u0000\u0000\u0016}\u0001\u0000\u0000"+
		"\u0000\u0018\u009a\u0001\u0000\u0000\u0000\u001a\u009c\u0001\u0000\u0000"+
		"\u0000\u001c\u00a8\u0001\u0000\u0000\u0000\u001e\u00ae\u0001\u0000\u0000"+
		"\u0000 \u00d0\u0001\u0000\u0000\u0000\"\u0100\u0001\u0000\u0000\u0000"+
		"$\u0102\u0001\u0000\u0000\u0000&\u010f\u0001\u0000\u0000\u0000(\u0116"+
		"\u0001\u0000\u0000\u0000*\u0126\u0001\u0000\u0000\u0000,\u0139\u0001\u0000"+
		"\u0000\u0000.\u013b\u0001\u0000\u0000\u000002\u0003\u0002\u0001\u0000"+
		"10\u0001\u0000\u0000\u000023\u0001\u0000\u0000\u000031\u0001\u0000\u0000"+
		"\u000034\u0001\u0000\u0000\u000045\u0001\u0000\u0000\u000056\u0005\u0000"+
		"\u0000\u00016\u0001\u0001\u0000\u0000\u00007D\u0003\u0004\u0002\u0000"+
		"8D\u0003\u0006\u0003\u00009D\u0003\n\u0005\u0000:D\u0003\b\u0004\u0000"+
		";D\u0003\u0010\b\u0000<D\u0003\u0012\t\u0000=D\u0003\u000e\u0007\u0000"+
		">D\u0003\u0016\u000b\u0000?D\u0003\u0018\f\u0000@D\u0003\u0014\n\u0000"+
		"AD\u0003\u001c\u000e\u0000BD\u0003\u001e\u000f\u0000C7\u0001\u0000\u0000"+
		"\u0000C8\u0001\u0000\u0000\u0000C9\u0001\u0000\u0000\u0000C:\u0001\u0000"+
		"\u0000\u0000C;\u0001\u0000\u0000\u0000C<\u0001\u0000\u0000\u0000C=\u0001"+
		"\u0000\u0000\u0000C>\u0001\u0000\u0000\u0000C?\u0001\u0000\u0000\u0000"+
		"C@\u0001\u0000\u0000\u0000CA\u0001\u0000\u0000\u0000CB\u0001\u0000\u0000"+
		"\u0000D\u0003\u0001\u0000\u0000\u0000EF\u0003 \u0010\u0000FG\u0005\u0001"+
		"\u0000\u0000G\u0005\u0001\u0000\u0000\u0000HJ\u0005\u0002\u0000\u0000"+
		"IK\u0005\u0003\u0000\u0000JI\u0001\u0000\u0000\u0000JK\u0001\u0000\u0000"+
		"\u0000KL\u0001\u0000\u0000\u0000LM\u0005<\u0000\u0000MN\u0005\u0004\u0000"+
		"\u0000NQ\u0003,\u0016\u0000OP\u0005\u0005\u0000\u0000PR\u0003 \u0010\u0000"+
		"QO\u0001\u0000\u0000\u0000QR\u0001\u0000\u0000\u0000RS\u0001\u0000\u0000"+
		"\u0000ST\u0005\u0001\u0000\u0000T\u0007\u0001\u0000\u0000\u0000UV\u0005"+
		"<\u0000\u0000VW\u0003\f\u0006\u0000WX\u0003 \u0010\u0000XY\u0005\u0001"+
		"\u0000\u0000Y\t\u0001\u0000\u0000\u0000Z[\u0005\u0006\u0000\u0000[\\\u0003"+
		" \u0010\u0000\\]\u0005\u0005\u0000\u0000]^\u0003 \u0010\u0000^_\u0005"+
		"\u0001\u0000\u0000_\u000b\u0001\u0000\u0000\u0000`a\u0007\u0000\u0000"+
		"\u0000a\r\u0001\u0000\u0000\u0000bc\u0005\u0011\u0000\u0000cd\u0005\u0001"+
		"\u0000\u0000d\u000f\u0001\u0000\u0000\u0000ef\u0005\u0012\u0000\u0000"+
		"fg\u0005\u0013\u0000\u0000gh\u0003 \u0010\u0000hi\u0005\u0014\u0000\u0000"+
		"il\u0003\u0002\u0001\u0000jk\u0005\u0015\u0000\u0000km\u0003\u0002\u0001"+
		"\u0000lj\u0001\u0000\u0000\u0000lm\u0001\u0000\u0000\u0000m\u0011\u0001"+
		"\u0000\u0000\u0000no\u0005\u0016\u0000\u0000op\u0005\u0013\u0000\u0000"+
		"pq\u0003 \u0010\u0000qr\u0005\u0014\u0000\u0000rs\u0003\u0002\u0001\u0000"+
		"s\u0013\u0001\u0000\u0000\u0000tx\u0005\u0017\u0000\u0000uw\u0003\u0002"+
		"\u0001\u0000vu\u0001\u0000\u0000\u0000wz\u0001\u0000\u0000\u0000xv\u0001"+
		"\u0000\u0000\u0000xy\u0001\u0000\u0000\u0000y{\u0001\u0000\u0000\u0000"+
		"zx\u0001\u0000\u0000\u0000{|\u0005\u0018\u0000\u0000|\u0015\u0001\u0000"+
		"\u0000\u0000}~\u0005\u0019\u0000\u0000~\u007f\u0005\u0013\u0000\u0000"+
		"\u007f\u0084\u0005=\u0000\u0000\u0080\u0081\u0005\u001a\u0000\u0000\u0081"+
		"\u0083\u0003 \u0010\u0000\u0082\u0080\u0001\u0000\u0000\u0000\u0083\u0086"+
		"\u0001\u0000\u0000\u0000\u0084\u0082\u0001\u0000\u0000\u0000\u0084\u0085"+
		"\u0001\u0000\u0000\u0000\u0085\u0087\u0001\u0000\u0000\u0000\u0086\u0084"+
		"\u0001\u0000\u0000\u0000\u0087\u0088\u0005\u0014\u0000\u0000\u0088\u0089"+
		"\u0005\u0001\u0000\u0000\u0089\u0017\u0001\u0000\u0000\u0000\u008a\u008b"+
		"\u0005\u001b\u0000\u0000\u008b\u008c\u0005\u0013\u0000\u0000\u008c\u0091"+
		"\u0005=\u0000\u0000\u008d\u008e\u0005\u001a\u0000\u0000\u008e\u0090\u0003"+
		" \u0010\u0000\u008f\u008d\u0001\u0000\u0000\u0000\u0090\u0093\u0001\u0000"+
		"\u0000\u0000\u0091\u008f\u0001\u0000\u0000\u0000\u0091\u0092\u0001\u0000"+
		"\u0000\u0000\u0092\u0094\u0001\u0000\u0000\u0000\u0093\u0091\u0001\u0000"+
		"\u0000\u0000\u0094\u0095\u0005\u0014\u0000\u0000\u0095\u009b\u0005\u0001"+
		"\u0000\u0000\u0096\u0097\u0005\u001b\u0000\u0000\u0097\u0098\u0005\u0013"+
		"\u0000\u0000\u0098\u0099\u0005\u0014\u0000\u0000\u0099\u009b\u0005\u0001"+
		"\u0000\u0000\u009a\u008a\u0001\u0000\u0000\u0000\u009a\u0096\u0001\u0000"+
		"\u0000\u0000\u009b\u0019\u0001\u0000\u0000\u0000\u009c\u009d\u0005\u001c"+
		"\u0000\u0000\u009d\u009e\u0005\u0013\u0000\u0000\u009e\u00a3\u0005=\u0000"+
		"\u0000\u009f\u00a0\u0005\u001a\u0000\u0000\u00a0\u00a2\u0003 \u0010\u0000"+
		"\u00a1\u009f\u0001\u0000\u0000\u0000\u00a2\u00a5\u0001\u0000\u0000\u0000"+
		"\u00a3\u00a1\u0001\u0000\u0000\u0000\u00a3\u00a4\u0001\u0000\u0000\u0000"+
		"\u00a4\u00a6\u0001\u0000\u0000\u0000\u00a5\u00a3\u0001\u0000\u0000\u0000"+
		"\u00a6\u00a7\u0005\u0014\u0000\u0000\u00a7\u001b\u0001\u0000\u0000\u0000"+
		"\u00a8\u00aa\u0005\u001d\u0000\u0000\u00a9\u00ab\u0003 \u0010\u0000\u00aa"+
		"\u00a9\u0001\u0000\u0000\u0000\u00aa\u00ab\u0001\u0000\u0000\u0000\u00ab"+
		"\u00ac\u0001\u0000\u0000\u0000\u00ac\u00ad\u0005\u0001\u0000\u0000\u00ad"+
		"\u001d\u0001\u0000\u0000\u0000\u00ae\u00af\u0005\u001e\u0000\u0000\u00af"+
		"\u00b0\u0005<\u0000\u0000\u00b0\u00b2\u0005\u0013\u0000\u0000\u00b1\u00b3"+
		"\u0003(\u0014\u0000\u00b2\u00b1\u0001\u0000\u0000\u0000\u00b2\u00b3\u0001"+
		"\u0000\u0000\u0000\u00b3\u00b4\u0001\u0000\u0000\u0000\u00b4\u00b7\u0005"+
		"\u0014\u0000\u0000\u00b5\u00b6\u0005\u001f\u0000\u0000\u00b6\u00b8\u0003"+
		",\u0016\u0000\u00b7\u00b5\u0001\u0000\u0000\u0000\u00b7\u00b8\u0001\u0000"+
		"\u0000\u0000\u00b8\u00b9\u0001\u0000\u0000\u0000\u00b9\u00ba\u0003\u0014"+
		"\n\u0000\u00ba\u001f\u0001\u0000\u0000\u0000\u00bb\u00bc\u0006\u0010\uffff"+
		"\uffff\u0000\u00bc\u00d1\u0003\u001a\r\u0000\u00bd\u00d1\u0003.\u0017"+
		"\u0000\u00be\u00d1\u0005<\u0000\u0000\u00bf\u00c0\u0005\u0013\u0000\u0000"+
		"\u00c0\u00c1\u0003 \u0010\u0000\u00c1\u00c2\u0005\u0014\u0000\u0000\u00c2"+
		"\u00d1\u0001\u0000\u0000\u0000\u00c3\u00c4\u0005 \u0000\u0000\u00c4\u00d1"+
		"\u0003 \u0010\u0012\u00c5\u00c6\u0005!\u0000\u0000\u00c6\u00d1\u0003 "+
		"\u0010\u0011\u00c7\u00c8\u0005\u0006\u0000\u0000\u00c8\u00d1\u0003 \u0010"+
		"\u0010\u00c9\u00ca\u0005\"\u0000\u0000\u00ca\u00cb\u0005\u0003\u0000\u0000"+
		"\u00cb\u00d1\u0003 \u0010\u000f\u00cc\u00cd\u0005\"\u0000\u0000\u00cd"+
		"\u00d1\u0003 \u0010\u000e\u00ce\u00d1\u0003$\u0012\u0000\u00cf\u00d1\u0003"+
		"&\u0013\u0000\u00d0\u00bb\u0001\u0000\u0000\u0000\u00d0\u00bd\u0001\u0000"+
		"\u0000\u0000\u00d0\u00be\u0001\u0000\u0000\u0000\u00d0\u00bf\u0001\u0000"+
		"\u0000\u0000\u00d0\u00c3\u0001\u0000\u0000\u0000\u00d0\u00c5\u0001\u0000"+
		"\u0000\u0000\u00d0\u00c7\u0001\u0000\u0000\u0000\u00d0\u00c9\u0001\u0000"+
		"\u0000\u0000\u00d0\u00cc\u0001\u0000\u0000\u0000\u00d0\u00ce\u0001\u0000"+
		"\u0000\u0000\u00d0\u00cf\u0001\u0000\u0000\u0000\u00d1\u00f7\u0001\u0000"+
		"\u0000\u0000\u00d2\u00d3\n\r\u0000\u0000\u00d3\u00d4\u0007\u0001\u0000"+
		"\u0000\u00d4\u00f6\u0003 \u0010\u000e\u00d5\u00d6\n\f\u0000\u0000\u00d6"+
		"\u00d7\u0007\u0002\u0000\u0000\u00d7\u00f6\u0003 \u0010\r\u00d8\u00d9"+
		"\n\u000b\u0000\u0000\u00d9\u00da\u0007\u0003\u0000\u0000\u00da\u00f6\u0003"+
		" \u0010\f\u00db\u00dc\n\n\u0000\u0000\u00dc\u00dd\u0007\u0004\u0000\u0000"+
		"\u00dd\u00f6\u0003 \u0010\u000b\u00de\u00df\n\t\u0000\u0000\u00df\u00e0"+
		"\u0007\u0005\u0000\u0000\u00e0\u00f6\u0003 \u0010\n\u00e1\u00e2\n\b\u0000"+
		"\u0000\u00e2\u00e3\u0005\"\u0000\u0000\u00e3\u00f6\u0003 \u0010\t\u00e4"+
		"\u00e5\n\u0007\u0000\u0000\u00e5\u00e6\u0005.\u0000\u0000\u00e6\u00f6"+
		"\u0003 \u0010\b\u00e7\u00e8\n\u0006\u0000\u0000\u00e8\u00e9\u0005/\u0000"+
		"\u0000\u00e9\u00f6\u0003 \u0010\u0007\u00ea\u00eb\n\u0005\u0000\u0000"+
		"\u00eb\u00ec\u0005\"\u0000\u0000\u00ec\u00ed\u0005\"\u0000\u0000\u00ed"+
		"\u00f6\u0003 \u0010\u0006\u00ee\u00ef\n\u0004\u0000\u0000\u00ef\u00f0"+
		"\u0005/\u0000\u0000\u00f0\u00f1\u0005/\u0000\u0000\u00f1\u00f6\u0003 "+
		"\u0010\u0005\u00f2\u00f3\n\u0001\u0000\u0000\u00f3\u00f4\u00050\u0000"+
		"\u0000\u00f4\u00f6\u0003\"\u0011\u0000\u00f5\u00d2\u0001\u0000\u0000\u0000"+
		"\u00f5\u00d5\u0001\u0000\u0000\u0000\u00f5\u00d8\u0001\u0000\u0000\u0000"+
		"\u00f5\u00db\u0001\u0000\u0000\u0000\u00f5\u00de\u0001\u0000\u0000\u0000"+
		"\u00f5\u00e1\u0001\u0000\u0000\u0000\u00f5\u00e4\u0001\u0000\u0000\u0000"+
		"\u00f5\u00e7\u0001\u0000\u0000\u0000\u00f5\u00ea\u0001\u0000\u0000\u0000"+
		"\u00f5\u00ee\u0001\u0000\u0000\u0000\u00f5\u00f2\u0001\u0000\u0000\u0000"+
		"\u00f6\u00f9\u0001\u0000\u0000\u0000\u00f7\u00f5\u0001\u0000\u0000\u0000"+
		"\u00f7\u00f8\u0001\u0000\u0000\u0000\u00f8!\u0001\u0000\u0000\u0000\u00f9"+
		"\u00f7\u0001\u0000\u0000\u0000\u00fa\u00fb\u00051\u0000\u0000\u00fb\u00fc"+
		"\u0005\u0013\u0000\u0000\u00fc\u0101\u0005\u0014\u0000\u0000\u00fd\u00fe"+
		"\u00052\u0000\u0000\u00fe\u00ff\u0005\u0013\u0000\u0000\u00ff\u0101\u0005"+
		"\u0014\u0000\u0000\u0100\u00fa\u0001\u0000\u0000\u0000\u0100\u00fd\u0001"+
		"\u0000\u0000\u0000\u0101#\u0001\u0000\u0000\u0000\u0102\u0104\u0005/\u0000"+
		"\u0000\u0103\u0105\u0003(\u0014\u0000\u0104\u0103\u0001\u0000\u0000\u0000"+
		"\u0104\u0105\u0001\u0000\u0000\u0000\u0105\u0106\u0001\u0000\u0000\u0000"+
		"\u0106\u0109\u0005/\u0000\u0000\u0107\u0108\u0005\u001f\u0000\u0000\u0108"+
		"\u010a\u0003,\u0016\u0000\u0109\u0107\u0001\u0000\u0000\u0000\u0109\u010a"+
		"\u0001\u0000\u0000\u0000\u010a\u010d\u0001\u0000\u0000\u0000\u010b\u010e"+
		"\u0003 \u0010\u0000\u010c\u010e\u0003\u0014\n\u0000\u010d\u010b\u0001"+
		"\u0000\u0000\u0000\u010d\u010c\u0001\u0000\u0000\u0000\u010e%\u0001\u0000"+
		"\u0000\u0000\u010f\u0110\u0005<\u0000\u0000\u0110\u0112\u0005\u0013\u0000"+
		"\u0000\u0111\u0113\u0003*\u0015\u0000\u0112\u0111\u0001\u0000\u0000\u0000"+
		"\u0112\u0113\u0001\u0000\u0000\u0000\u0113\u0114\u0001\u0000\u0000\u0000"+
		"\u0114\u0115\u0005\u0014\u0000\u0000\u0115\'\u0001\u0000\u0000\u0000\u0116"+
		"\u0119\u0005<\u0000\u0000\u0117\u0118\u0005\u0004\u0000\u0000\u0118\u011a"+
		"\u0003,\u0016\u0000\u0119\u0117\u0001\u0000\u0000\u0000\u0119\u011a\u0001"+
		"\u0000\u0000\u0000\u011a\u0123\u0001\u0000\u0000\u0000\u011b\u011c\u0005"+
		"\u001a\u0000\u0000\u011c\u011f\u0005<\u0000\u0000\u011d\u011e\u0005\u0004"+
		"\u0000\u0000\u011e\u0120\u0003,\u0016\u0000\u011f\u011d\u0001\u0000\u0000"+
		"\u0000\u011f\u0120\u0001\u0000\u0000\u0000\u0120\u0122\u0001\u0000\u0000"+
		"\u0000\u0121\u011b\u0001\u0000\u0000\u0000\u0122\u0125\u0001\u0000\u0000"+
		"\u0000\u0123\u0121\u0001\u0000\u0000\u0000\u0123\u0124\u0001\u0000\u0000"+
		"\u0000\u0124)\u0001\u0000\u0000\u0000\u0125\u0123\u0001\u0000\u0000\u0000"+
		"\u0126\u012b\u0003 \u0010\u0000\u0127\u0128\u0005\u001a\u0000\u0000\u0128"+
		"\u012a\u0003 \u0010\u0000\u0129\u0127\u0001\u0000\u0000\u0000\u012a\u012d"+
		"\u0001\u0000\u0000\u0000\u012b\u0129\u0001\u0000\u0000\u0000\u012b\u012c"+
		"\u0001\u0000\u0000\u0000\u012c+\u0001\u0000\u0000\u0000\u012d\u012b\u0001"+
		"\u0000\u0000\u0000\u012e\u013a\u00053\u0000\u0000\u012f\u013a\u00054\u0000"+
		"\u0000\u0130\u013a\u00055\u0000\u0000\u0131\u013a\u00056\u0000\u0000\u0132"+
		"\u013a\u00057\u0000\u0000\u0133\u013a\u00058\u0000\u0000\u0134\u0135\u0005"+
		"\"\u0000\u0000\u0135\u013a\u0003,\u0016\u0000\u0136\u0137\u0005\"\u0000"+
		"\u0000\u0137\u0138\u0005\u0003\u0000\u0000\u0138\u013a\u0003,\u0016\u0000"+
		"\u0139\u012e\u0001\u0000\u0000\u0000\u0139\u012f\u0001\u0000\u0000\u0000"+
		"\u0139\u0130\u0001\u0000\u0000\u0000\u0139\u0131\u0001\u0000\u0000\u0000"+
		"\u0139\u0132\u0001\u0000\u0000\u0000\u0139\u0133\u0001\u0000\u0000\u0000"+
		"\u0139\u0134\u0001\u0000\u0000\u0000\u0139\u0136\u0001\u0000\u0000\u0000"+
		"\u013a-\u0001\u0000\u0000\u0000\u013b\u013c\u0007\u0006\u0000\u0000\u013c"+
		"/\u0001\u0000\u0000\u0000\u001a3CJQlx\u0084\u0091\u009a\u00a3\u00aa\u00b2"+
		"\u00b7\u00d0\u00f5\u00f7\u0100\u0104\u0109\u010d\u0112\u0119\u011f\u0123"+
		"\u012b\u0139";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}