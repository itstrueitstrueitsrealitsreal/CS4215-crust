// Generated from /Users/kennethseet/Desktop/CS4215/CS4215-crust/src/Crust.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CrustLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, INT=16, BOOL=17, 
		CHAR=18, IDENTIFIER=19, WS=20, COMMENT=21, BLOCK_COMMENT=22;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "INT", "BOOL", "CHAR", 
			"IDENTIFIER", "WS", "COMMENT", "BLOCK_COMMENT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "'*'", "'/'", "'+'", "'-'", "'<'", "'<='", "'>'", "'>='", 
			"'=='", "'!='", "'&&'", "'||'", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, "INT", "BOOL", "CHAR", "IDENTIFIER", "WS", "COMMENT", 
			"BLOCK_COMMENT"
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


	public CrustLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Crust.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0016\u008c\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f"+
		"\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0004\u000fS\b\u000f"+
		"\u000b\u000f\f\u000fT\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0003\u0010"+
		"`\b\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0001\u0012\u0005\u0012h\b\u0012\n\u0012\f\u0012k\t\u0012\u0001\u0013"+
		"\u0004\u0013n\b\u0013\u000b\u0013\f\u0013o\u0001\u0013\u0001\u0013\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0005\u0014x\b\u0014\n\u0014"+
		"\f\u0014{\t\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0005\u0015\u0083\b\u0015\n\u0015\f\u0015\u0086\t\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0084"+
		"\u0000\u0016\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b"+
		"\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b"+
		"\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016"+
		"\u0001\u0000\u0005\u0001\u000009\u0003\u0000AZ__az\u0004\u000009AZ__a"+
		"z\u0003\u0000\t\n\r\r  \u0002\u0000\n\n\r\r\u0091\u0000\u0001\u0001\u0000"+
		"\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000"+
		"\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000"+
		"\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000"+
		"\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000"+
		"\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000"+
		"\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000"+
		"\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000"+
		"#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001"+
		"\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000"+
		"\u0000\u0001-\u0001\u0000\u0000\u0000\u0003/\u0001\u0000\u0000\u0000\u0005"+
		"1\u0001\u0000\u0000\u0000\u00073\u0001\u0000\u0000\u0000\t5\u0001\u0000"+
		"\u0000\u0000\u000b7\u0001\u0000\u0000\u0000\r9\u0001\u0000\u0000\u0000"+
		"\u000f<\u0001\u0000\u0000\u0000\u0011>\u0001\u0000\u0000\u0000\u0013A"+
		"\u0001\u0000\u0000\u0000\u0015D\u0001\u0000\u0000\u0000\u0017G\u0001\u0000"+
		"\u0000\u0000\u0019J\u0001\u0000\u0000\u0000\u001bM\u0001\u0000\u0000\u0000"+
		"\u001dO\u0001\u0000\u0000\u0000\u001fR\u0001\u0000\u0000\u0000!_\u0001"+
		"\u0000\u0000\u0000#a\u0001\u0000\u0000\u0000%e\u0001\u0000\u0000\u0000"+
		"\'m\u0001\u0000\u0000\u0000)s\u0001\u0000\u0000\u0000+~\u0001\u0000\u0000"+
		"\u0000-.\u0005;\u0000\u0000.\u0002\u0001\u0000\u0000\u0000/0\u0005*\u0000"+
		"\u00000\u0004\u0001\u0000\u0000\u000012\u0005/\u0000\u00002\u0006\u0001"+
		"\u0000\u0000\u000034\u0005+\u0000\u00004\b\u0001\u0000\u0000\u000056\u0005"+
		"-\u0000\u00006\n\u0001\u0000\u0000\u000078\u0005<\u0000\u00008\f\u0001"+
		"\u0000\u0000\u00009:\u0005<\u0000\u0000:;\u0005=\u0000\u0000;\u000e\u0001"+
		"\u0000\u0000\u0000<=\u0005>\u0000\u0000=\u0010\u0001\u0000\u0000\u0000"+
		">?\u0005>\u0000\u0000?@\u0005=\u0000\u0000@\u0012\u0001\u0000\u0000\u0000"+
		"AB\u0005=\u0000\u0000BC\u0005=\u0000\u0000C\u0014\u0001\u0000\u0000\u0000"+
		"DE\u0005!\u0000\u0000EF\u0005=\u0000\u0000F\u0016\u0001\u0000\u0000\u0000"+
		"GH\u0005&\u0000\u0000HI\u0005&\u0000\u0000I\u0018\u0001\u0000\u0000\u0000"+
		"JK\u0005|\u0000\u0000KL\u0005|\u0000\u0000L\u001a\u0001\u0000\u0000\u0000"+
		"MN\u0005(\u0000\u0000N\u001c\u0001\u0000\u0000\u0000OP\u0005)\u0000\u0000"+
		"P\u001e\u0001\u0000\u0000\u0000QS\u0007\u0000\u0000\u0000RQ\u0001\u0000"+
		"\u0000\u0000ST\u0001\u0000\u0000\u0000TR\u0001\u0000\u0000\u0000TU\u0001"+
		"\u0000\u0000\u0000U \u0001\u0000\u0000\u0000VW\u0005t\u0000\u0000WX\u0005"+
		"r\u0000\u0000XY\u0005u\u0000\u0000Y`\u0005e\u0000\u0000Z[\u0005f\u0000"+
		"\u0000[\\\u0005a\u0000\u0000\\]\u0005l\u0000\u0000]^\u0005s\u0000\u0000"+
		"^`\u0005e\u0000\u0000_V\u0001\u0000\u0000\u0000_Z\u0001\u0000\u0000\u0000"+
		"`\"\u0001\u0000\u0000\u0000ab\u0005\'\u0000\u0000bc\t\u0000\u0000\u0000"+
		"cd\u0005\'\u0000\u0000d$\u0001\u0000\u0000\u0000ei\u0007\u0001\u0000\u0000"+
		"fh\u0007\u0002\u0000\u0000gf\u0001\u0000\u0000\u0000hk\u0001\u0000\u0000"+
		"\u0000ig\u0001\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000j&\u0001\u0000"+
		"\u0000\u0000ki\u0001\u0000\u0000\u0000ln\u0007\u0003\u0000\u0000ml\u0001"+
		"\u0000\u0000\u0000no\u0001\u0000\u0000\u0000om\u0001\u0000\u0000\u0000"+
		"op\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000qr\u0006\u0013\u0000"+
		"\u0000r(\u0001\u0000\u0000\u0000st\u0005/\u0000\u0000tu\u0005/\u0000\u0000"+
		"uy\u0001\u0000\u0000\u0000vx\b\u0004\u0000\u0000wv\u0001\u0000\u0000\u0000"+
		"x{\u0001\u0000\u0000\u0000yw\u0001\u0000\u0000\u0000yz\u0001\u0000\u0000"+
		"\u0000z|\u0001\u0000\u0000\u0000{y\u0001\u0000\u0000\u0000|}\u0006\u0014"+
		"\u0000\u0000}*\u0001\u0000\u0000\u0000~\u007f\u0005/\u0000\u0000\u007f"+
		"\u0080\u0005*\u0000\u0000\u0080\u0084\u0001\u0000\u0000\u0000\u0081\u0083"+
		"\t\u0000\u0000\u0000\u0082\u0081\u0001\u0000\u0000\u0000\u0083\u0086\u0001"+
		"\u0000\u0000\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0084\u0082\u0001"+
		"\u0000\u0000\u0000\u0085\u0087\u0001\u0000\u0000\u0000\u0086\u0084\u0001"+
		"\u0000\u0000\u0000\u0087\u0088\u0005*\u0000\u0000\u0088\u0089\u0005/\u0000"+
		"\u0000\u0089\u008a\u0001\u0000\u0000\u0000\u008a\u008b\u0006\u0015\u0000"+
		"\u0000\u008b,\u0001\u0000\u0000\u0000\u0007\u0000T_ioy\u0084\u0001\u0006"+
		"\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}