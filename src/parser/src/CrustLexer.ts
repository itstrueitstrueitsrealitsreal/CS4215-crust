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
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly ID = 17;
    public static readonly INT = 18;
    public static readonly WS = 19;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'let'", "'='", "';'", "'if'", "'('", "')'", "'else'", "'while'", 
        "'fn'", "','", "'{'", "'}'", "'+'", "'-'", "'*'", "'/'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "ID", "INT", "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "ID", "INT", "WS",
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
        4,0,19,101,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,
        0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,
        6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,10,1,10,
        1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,5,16,
        85,8,16,10,16,12,16,88,9,16,1,17,4,17,91,8,17,11,17,12,17,92,1,18,
        4,18,96,8,18,11,18,12,18,97,1,18,1,18,0,0,19,1,1,3,2,5,3,7,4,9,5,
        11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,
        17,35,18,37,19,1,0,4,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,
        97,122,1,0,48,57,3,0,9,10,13,13,32,32,103,0,1,1,0,0,0,0,3,1,0,0,
        0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,
        0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,
        0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,
        0,35,1,0,0,0,0,37,1,0,0,0,1,39,1,0,0,0,3,43,1,0,0,0,5,45,1,0,0,0,
        7,47,1,0,0,0,9,50,1,0,0,0,11,52,1,0,0,0,13,54,1,0,0,0,15,59,1,0,
        0,0,17,65,1,0,0,0,19,68,1,0,0,0,21,70,1,0,0,0,23,72,1,0,0,0,25,74,
        1,0,0,0,27,76,1,0,0,0,29,78,1,0,0,0,31,80,1,0,0,0,33,82,1,0,0,0,
        35,90,1,0,0,0,37,95,1,0,0,0,39,40,5,108,0,0,40,41,5,101,0,0,41,42,
        5,116,0,0,42,2,1,0,0,0,43,44,5,61,0,0,44,4,1,0,0,0,45,46,5,59,0,
        0,46,6,1,0,0,0,47,48,5,105,0,0,48,49,5,102,0,0,49,8,1,0,0,0,50,51,
        5,40,0,0,51,10,1,0,0,0,52,53,5,41,0,0,53,12,1,0,0,0,54,55,5,101,
        0,0,55,56,5,108,0,0,56,57,5,115,0,0,57,58,5,101,0,0,58,14,1,0,0,
        0,59,60,5,119,0,0,60,61,5,104,0,0,61,62,5,105,0,0,62,63,5,108,0,
        0,63,64,5,101,0,0,64,16,1,0,0,0,65,66,5,102,0,0,66,67,5,110,0,0,
        67,18,1,0,0,0,68,69,5,44,0,0,69,20,1,0,0,0,70,71,5,123,0,0,71,22,
        1,0,0,0,72,73,5,125,0,0,73,24,1,0,0,0,74,75,5,43,0,0,75,26,1,0,0,
        0,76,77,5,45,0,0,77,28,1,0,0,0,78,79,5,42,0,0,79,30,1,0,0,0,80,81,
        5,47,0,0,81,32,1,0,0,0,82,86,7,0,0,0,83,85,7,1,0,0,84,83,1,0,0,0,
        85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,34,1,0,0,0,88,86,1,
        0,0,0,89,91,7,2,0,0,90,89,1,0,0,0,91,92,1,0,0,0,92,90,1,0,0,0,92,
        93,1,0,0,0,93,36,1,0,0,0,94,96,7,3,0,0,95,94,1,0,0,0,96,97,1,0,0,
        0,97,95,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,99,100,6,18,0,0,100,
        38,1,0,0,0,4,0,86,92,97,1,6,0,0
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