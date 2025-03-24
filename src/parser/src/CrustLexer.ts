// Generated from src/Crust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class CrustLexer extends antlr.Lexer {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly INT = 8;
    public static readonly WS = 9;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "';'", "'*'", "'/'", "'+'", "'-'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, "INT", "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "INT", "WS",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, CrustLexer._ATN, CrustLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "Crust.g4"; }

    public get literalNames(): (string | null)[] { return CrustLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return CrustLexer.symbolicNames; }
    public get ruleNames(): string[] { return CrustLexer.ruleNames; }

    public get serializedATN(): number[] { return CrustLexer._serializedATN; }

    public get channelNames(): string[] { return CrustLexer.channelNames; }

    public get modeNames(): string[] { return CrustLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,9,45,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,
        6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,
        5,1,5,1,6,1,6,1,7,4,7,35,8,7,11,7,12,7,36,1,8,4,8,40,8,8,11,8,12,
        8,41,1,8,1,8,0,0,9,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,1,0,2,
        1,0,48,57,3,0,9,10,13,13,32,32,46,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,
        0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,
        0,0,0,17,1,0,0,0,1,19,1,0,0,0,3,21,1,0,0,0,5,23,1,0,0,0,7,25,1,0,
        0,0,9,27,1,0,0,0,11,29,1,0,0,0,13,31,1,0,0,0,15,34,1,0,0,0,17,39,
        1,0,0,0,19,20,5,59,0,0,20,2,1,0,0,0,21,22,5,42,0,0,22,4,1,0,0,0,
        23,24,5,47,0,0,24,6,1,0,0,0,25,26,5,43,0,0,26,8,1,0,0,0,27,28,5,
        45,0,0,28,10,1,0,0,0,29,30,5,40,0,0,30,12,1,0,0,0,31,32,5,41,0,0,
        32,14,1,0,0,0,33,35,7,0,0,0,34,33,1,0,0,0,35,36,1,0,0,0,36,34,1,
        0,0,0,36,37,1,0,0,0,37,16,1,0,0,0,38,40,7,1,0,0,39,38,1,0,0,0,40,
        41,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,43,1,0,0,0,43,44,6,8,0,
        0,44,18,1,0,0,0,3,0,36,41,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!CrustLexer.__ATN) {
            CrustLexer.__ATN = new antlr.ATNDeserializer().deserialize(CrustLexer._serializedATN);
        }

        return CrustLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(CrustLexer.literalNames, CrustLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return CrustLexer.vocabulary;
    }

    private static readonly decisionsToDFA = CrustLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}