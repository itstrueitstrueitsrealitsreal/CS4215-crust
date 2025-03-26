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
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly INT = 23;
    public static readonly BOOL = 24;
    public static readonly CHAR = 25;
    public static readonly IDENTIFIER = 26;
    public static readonly WS = 27;
    public static readonly COMMENT = 28;
    public static readonly BLOCK_COMMENT = 29;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "';'", "'('", "')'", "'-'", "'!'", "'*'", "'/'", "'%'", "'+'", 
        "'<<'", "'>>'", "'<'", "'<='", "'>'", "'>='", "'=='", "'!='", "'&'", 
        "'^'", "'|'", "'&&'", "'||'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, "INT", "BOOL", "CHAR", "IDENTIFIER", "WS", "COMMENT", "BLOCK_COMMENT"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "INT", "BOOL", 
        "CHAR", "IDENTIFIER", "WS", "COMMENT", "BLOCK_COMMENT",
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
        4,0,29,170,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,
        1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,
        11,1,11,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,
        16,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,21,1,
        21,1,21,1,22,4,22,113,8,22,11,22,12,22,114,1,23,1,23,1,23,1,23,1,
        23,1,23,1,23,1,23,1,23,3,23,126,8,23,1,24,1,24,1,24,1,24,1,25,1,
        25,5,25,134,8,25,10,25,12,25,137,9,25,1,26,4,26,140,8,26,11,26,12,
        26,141,1,26,1,26,1,27,1,27,1,27,1,27,5,27,150,8,27,10,27,12,27,153,
        9,27,1,27,1,27,1,28,1,28,1,28,1,28,5,28,161,8,28,10,28,12,28,164,
        9,28,1,28,1,28,1,28,1,28,1,28,1,162,0,29,1,1,3,2,5,3,7,4,9,5,11,
        6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,
        35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,
        57,29,1,0,5,1,0,48,57,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,
        95,97,122,3,0,9,10,13,13,32,32,2,0,10,10,13,13,175,0,1,1,0,0,0,0,
        3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
        1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
        1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,
        1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,
        1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,
        1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,1,59,1,0,0,0,3,61,1,0,0,0,5,63,
        1,0,0,0,7,65,1,0,0,0,9,67,1,0,0,0,11,69,1,0,0,0,13,71,1,0,0,0,15,
        73,1,0,0,0,17,75,1,0,0,0,19,77,1,0,0,0,21,80,1,0,0,0,23,83,1,0,0,
        0,25,85,1,0,0,0,27,88,1,0,0,0,29,90,1,0,0,0,31,93,1,0,0,0,33,96,
        1,0,0,0,35,99,1,0,0,0,37,101,1,0,0,0,39,103,1,0,0,0,41,105,1,0,0,
        0,43,108,1,0,0,0,45,112,1,0,0,0,47,125,1,0,0,0,49,127,1,0,0,0,51,
        131,1,0,0,0,53,139,1,0,0,0,55,145,1,0,0,0,57,156,1,0,0,0,59,60,5,
        59,0,0,60,2,1,0,0,0,61,62,5,40,0,0,62,4,1,0,0,0,63,64,5,41,0,0,64,
        6,1,0,0,0,65,66,5,45,0,0,66,8,1,0,0,0,67,68,5,33,0,0,68,10,1,0,0,
        0,69,70,5,42,0,0,70,12,1,0,0,0,71,72,5,47,0,0,72,14,1,0,0,0,73,74,
        5,37,0,0,74,16,1,0,0,0,75,76,5,43,0,0,76,18,1,0,0,0,77,78,5,60,0,
        0,78,79,5,60,0,0,79,20,1,0,0,0,80,81,5,62,0,0,81,82,5,62,0,0,82,
        22,1,0,0,0,83,84,5,60,0,0,84,24,1,0,0,0,85,86,5,60,0,0,86,87,5,61,
        0,0,87,26,1,0,0,0,88,89,5,62,0,0,89,28,1,0,0,0,90,91,5,62,0,0,91,
        92,5,61,0,0,92,30,1,0,0,0,93,94,5,61,0,0,94,95,5,61,0,0,95,32,1,
        0,0,0,96,97,5,33,0,0,97,98,5,61,0,0,98,34,1,0,0,0,99,100,5,38,0,
        0,100,36,1,0,0,0,101,102,5,94,0,0,102,38,1,0,0,0,103,104,5,124,0,
        0,104,40,1,0,0,0,105,106,5,38,0,0,106,107,5,38,0,0,107,42,1,0,0,
        0,108,109,5,124,0,0,109,110,5,124,0,0,110,44,1,0,0,0,111,113,7,0,
        0,0,112,111,1,0,0,0,113,114,1,0,0,0,114,112,1,0,0,0,114,115,1,0,
        0,0,115,46,1,0,0,0,116,117,5,116,0,0,117,118,5,114,0,0,118,119,5,
        117,0,0,119,126,5,101,0,0,120,121,5,102,0,0,121,122,5,97,0,0,122,
        123,5,108,0,0,123,124,5,115,0,0,124,126,5,101,0,0,125,116,1,0,0,
        0,125,120,1,0,0,0,126,48,1,0,0,0,127,128,5,39,0,0,128,129,9,0,0,
        0,129,130,5,39,0,0,130,50,1,0,0,0,131,135,7,1,0,0,132,134,7,2,0,
        0,133,132,1,0,0,0,134,137,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,
        0,136,52,1,0,0,0,137,135,1,0,0,0,138,140,7,3,0,0,139,138,1,0,0,0,
        140,141,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,143,1,0,0,0,
        143,144,6,26,0,0,144,54,1,0,0,0,145,146,5,47,0,0,146,147,5,47,0,
        0,147,151,1,0,0,0,148,150,8,4,0,0,149,148,1,0,0,0,150,153,1,0,0,
        0,151,149,1,0,0,0,151,152,1,0,0,0,152,154,1,0,0,0,153,151,1,0,0,
        0,154,155,6,27,0,0,155,56,1,0,0,0,156,157,5,47,0,0,157,158,5,42,
        0,0,158,162,1,0,0,0,159,161,9,0,0,0,160,159,1,0,0,0,161,164,1,0,
        0,0,162,163,1,0,0,0,162,160,1,0,0,0,163,165,1,0,0,0,164,162,1,0,
        0,0,165,166,5,42,0,0,166,167,5,47,0,0,167,168,1,0,0,0,168,169,6,
        28,0,0,169,58,1,0,0,0,7,0,114,125,135,141,151,162,1,6,0,0
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