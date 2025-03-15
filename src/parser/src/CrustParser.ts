// Generated from src/Crust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { CrustListener } from "./CrustListener.js";
import { CrustVisitor } from "./CrustVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class CrustParser extends antlr.Parser {
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
    public static readonly RULE_prog = 0;
    public static readonly RULE_stmt = 1;
    public static readonly RULE_varDecl = 2;
    public static readonly RULE_exprStmt = 3;
    public static readonly RULE_ifStmt = 4;
    public static readonly RULE_whileStmt = 5;
    public static readonly RULE_funcDecl = 6;
    public static readonly RULE_paramList = 7;
    public static readonly RULE_block = 8;
    public static readonly RULE_expr = 9;

    public static readonly literalNames = [
        null, "'let'", "'='", "';'", "'if'", "'('", "')'", "'else'", "'while'", 
        "'fn'", "','", "'{'", "'}'", "'+'", "'-'", "'*'", "'/'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "ID", "INT", "WS"
    ];
    public static readonly ruleNames = [
        "prog", "stmt", "varDecl", "exprStmt", "ifStmt", "whileStmt", "funcDecl", 
        "paramList", "block", "expr",
    ];

    public get grammarFileName(): string { return "Crust.g4"; }
    public get literalNames(): (string | null)[] { return CrustParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return CrustParser.symbolicNames; }
    public get ruleNames(): string[] { return CrustParser.ruleNames; }
    public get serializedATN(): number[] { return CrustParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, CrustParser._ATN, CrustParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, CrustParser.RULE_prog);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 23;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 394034) !== 0)) {
                {
                {
                this.state = 20;
                this.stmt();
                }
                }
                this.state = 25;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 26;
            this.match(CrustParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stmt(): StmtContext {
        let localContext = new StmtContext(this.context, this.state);
        this.enterRule(localContext, 2, CrustParser.RULE_stmt);
        try {
            this.state = 33;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CrustParser.T__0:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 28;
                this.varDecl();
                }
                break;
            case CrustParser.T__4:
            case CrustParser.ID:
            case CrustParser.INT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 29;
                this.exprStmt();
                }
                break;
            case CrustParser.T__3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 30;
                this.ifStmt();
                }
                break;
            case CrustParser.T__7:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 31;
                this.whileStmt();
                }
                break;
            case CrustParser.T__8:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 32;
                this.funcDecl();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public varDecl(): VarDeclContext {
        let localContext = new VarDeclContext(this.context, this.state);
        this.enterRule(localContext, 4, CrustParser.RULE_varDecl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 35;
            this.match(CrustParser.T__0);
            this.state = 36;
            this.match(CrustParser.ID);
            this.state = 37;
            this.match(CrustParser.T__1);
            this.state = 38;
            this.expr(0);
            this.state = 39;
            this.match(CrustParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exprStmt(): ExprStmtContext {
        let localContext = new ExprStmtContext(this.context, this.state);
        this.enterRule(localContext, 6, CrustParser.RULE_exprStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 41;
            this.expr(0);
            this.state = 42;
            this.match(CrustParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifStmt(): IfStmtContext {
        let localContext = new IfStmtContext(this.context, this.state);
        this.enterRule(localContext, 8, CrustParser.RULE_ifStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 44;
            this.match(CrustParser.T__3);
            this.state = 45;
            this.match(CrustParser.T__4);
            this.state = 46;
            this.expr(0);
            this.state = 47;
            this.match(CrustParser.T__5);
            this.state = 48;
            this.block();
            this.state = 51;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 7) {
                {
                this.state = 49;
                this.match(CrustParser.T__6);
                this.state = 50;
                this.block();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileStmt(): WhileStmtContext {
        let localContext = new WhileStmtContext(this.context, this.state);
        this.enterRule(localContext, 10, CrustParser.RULE_whileStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 53;
            this.match(CrustParser.T__7);
            this.state = 54;
            this.match(CrustParser.T__4);
            this.state = 55;
            this.expr(0);
            this.state = 56;
            this.match(CrustParser.T__5);
            this.state = 57;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public funcDecl(): FuncDeclContext {
        let localContext = new FuncDeclContext(this.context, this.state);
        this.enterRule(localContext, 12, CrustParser.RULE_funcDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 59;
            this.match(CrustParser.T__8);
            this.state = 60;
            this.match(CrustParser.ID);
            this.state = 61;
            this.match(CrustParser.T__4);
            this.state = 63;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 62;
                this.paramList();
                }
            }

            this.state = 65;
            this.match(CrustParser.T__5);
            this.state = 66;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public paramList(): ParamListContext {
        let localContext = new ParamListContext(this.context, this.state);
        this.enterRule(localContext, 14, CrustParser.RULE_paramList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 68;
            this.match(CrustParser.ID);
            this.state = 73;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 10) {
                {
                {
                this.state = 69;
                this.match(CrustParser.T__9);
                this.state = 70;
                this.match(CrustParser.ID);
                }
                }
                this.state = 75;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 16, CrustParser.RULE_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 76;
            this.match(CrustParser.T__10);
            this.state = 80;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 394034) !== 0)) {
                {
                {
                this.state = 77;
                this.stmt();
                }
                }
                this.state = 82;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 83;
            this.match(CrustParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expr(): ExprContext;
    public expr(_p: number): ExprContext;
    public expr(_p?: number): ExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 18;
        this.enterRecursionRule(localContext, 18, CrustParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 92;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CrustParser.INT:
                {
                this.state = 86;
                this.match(CrustParser.INT);
                }
                break;
            case CrustParser.ID:
                {
                this.state = 87;
                this.match(CrustParser.ID);
                }
                break;
            case CrustParser.T__4:
                {
                this.state = 88;
                this.match(CrustParser.T__4);
                this.state = 89;
                this.expr(0);
                this.state = 90;
                this.match(CrustParser.T__5);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 99;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ExprContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expr);
                    this.state = 94;
                    if (!(this.precpred(this.context, 4))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                    }
                    this.state = 95;
                    localContext._op = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 122880) !== 0))) {
                        localContext._op = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 96;
                    this.expr(5);
                    }
                    }
                }
                this.state = 101;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 9:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 4);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,19,103,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,5,0,22,8,0,10,0,12,0,25,9,0,1,0,1,
        0,1,1,1,1,1,1,1,1,1,1,3,1,34,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,
        1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,52,8,4,1,5,1,5,1,5,1,5,1,5,1,
        5,1,6,1,6,1,6,1,6,3,6,64,8,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,72,8,7,
        10,7,12,7,75,9,7,1,8,1,8,5,8,79,8,8,10,8,12,8,82,9,8,1,8,1,8,1,9,
        1,9,1,9,1,9,1,9,1,9,1,9,3,9,93,8,9,1,9,1,9,1,9,5,9,98,8,9,10,9,12,
        9,101,9,9,1,9,0,1,18,10,0,2,4,6,8,10,12,14,16,18,0,1,1,0,13,16,104,
        0,23,1,0,0,0,2,33,1,0,0,0,4,35,1,0,0,0,6,41,1,0,0,0,8,44,1,0,0,0,
        10,53,1,0,0,0,12,59,1,0,0,0,14,68,1,0,0,0,16,76,1,0,0,0,18,92,1,
        0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,
        24,1,0,0,0,24,26,1,0,0,0,25,23,1,0,0,0,26,27,5,0,0,1,27,1,1,0,0,
        0,28,34,3,4,2,0,29,34,3,6,3,0,30,34,3,8,4,0,31,34,3,10,5,0,32,34,
        3,12,6,0,33,28,1,0,0,0,33,29,1,0,0,0,33,30,1,0,0,0,33,31,1,0,0,0,
        33,32,1,0,0,0,34,3,1,0,0,0,35,36,5,1,0,0,36,37,5,17,0,0,37,38,5,
        2,0,0,38,39,3,18,9,0,39,40,5,3,0,0,40,5,1,0,0,0,41,42,3,18,9,0,42,
        43,5,3,0,0,43,7,1,0,0,0,44,45,5,4,0,0,45,46,5,5,0,0,46,47,3,18,9,
        0,47,48,5,6,0,0,48,51,3,16,8,0,49,50,5,7,0,0,50,52,3,16,8,0,51,49,
        1,0,0,0,51,52,1,0,0,0,52,9,1,0,0,0,53,54,5,8,0,0,54,55,5,5,0,0,55,
        56,3,18,9,0,56,57,5,6,0,0,57,58,3,16,8,0,58,11,1,0,0,0,59,60,5,9,
        0,0,60,61,5,17,0,0,61,63,5,5,0,0,62,64,3,14,7,0,63,62,1,0,0,0,63,
        64,1,0,0,0,64,65,1,0,0,0,65,66,5,6,0,0,66,67,3,16,8,0,67,13,1,0,
        0,0,68,73,5,17,0,0,69,70,5,10,0,0,70,72,5,17,0,0,71,69,1,0,0,0,72,
        75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,15,1,0,0,0,75,73,1,0,0,
        0,76,80,5,11,0,0,77,79,3,2,1,0,78,77,1,0,0,0,79,82,1,0,0,0,80,78,
        1,0,0,0,80,81,1,0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,83,84,5,12,0,0,
        84,17,1,0,0,0,85,86,6,9,-1,0,86,93,5,18,0,0,87,93,5,17,0,0,88,89,
        5,5,0,0,89,90,3,18,9,0,90,91,5,6,0,0,91,93,1,0,0,0,92,85,1,0,0,0,
        92,87,1,0,0,0,92,88,1,0,0,0,93,99,1,0,0,0,94,95,10,4,0,0,95,96,7,
        0,0,0,96,98,3,18,9,5,97,94,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,
        99,100,1,0,0,0,100,19,1,0,0,0,101,99,1,0,0,0,8,23,33,51,63,73,80,
        92,99
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!CrustParser.__ATN) {
            CrustParser.__ATN = new antlr.ATNDeserializer().deserialize(CrustParser._serializedATN);
        }

        return CrustParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(CrustParser.literalNames, CrustParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return CrustParser.vocabulary;
    }

    private static readonly decisionsToDFA = CrustParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(CrustParser.EOF, 0)!;
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_prog;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public varDecl(): VarDeclContext | null {
        return this.getRuleContext(0, VarDeclContext);
    }
    public exprStmt(): ExprStmtContext | null {
        return this.getRuleContext(0, ExprStmtContext);
    }
    public ifStmt(): IfStmtContext | null {
        return this.getRuleContext(0, IfStmtContext);
    }
    public whileStmt(): WhileStmtContext | null {
        return this.getRuleContext(0, WhileStmtContext);
    }
    public funcDecl(): FuncDeclContext | null {
        return this.getRuleContext(0, FuncDeclContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_stmt;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterStmt) {
             listener.enterStmt(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitStmt) {
             listener.exitStmt(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VarDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(CrustParser.ID, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_varDecl;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterVarDecl) {
             listener.enterVarDecl(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitVarDecl) {
             listener.exitVarDecl(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitVarDecl) {
            return visitor.visitVarDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_exprStmt;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterExprStmt) {
             listener.enterExprStmt(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitExprStmt) {
             listener.exitExprStmt(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitExprStmt) {
            return visitor.visitExprStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public block(): BlockContext[];
    public block(i: number): BlockContext | null;
    public block(i?: number): BlockContext[] | BlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }

        return this.getRuleContext(i, BlockContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_ifStmt;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterIfStmt) {
             listener.enterIfStmt(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitIfStmt) {
             listener.exitIfStmt(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitIfStmt) {
            return visitor.visitIfStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_whileStmt;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterWhileStmt) {
             listener.enterWhileStmt(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitWhileStmt) {
             listener.exitWhileStmt(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitWhileStmt) {
            return visitor.visitWhileStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FuncDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(CrustParser.ID, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public paramList(): ParamListContext | null {
        return this.getRuleContext(0, ParamListContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_funcDecl;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterFuncDecl) {
             listener.enterFuncDecl(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitFuncDecl) {
             listener.exitFuncDecl(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitFuncDecl) {
            return visitor.visitFuncDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CrustParser.ID);
    	} else {
    		return this.getToken(CrustParser.ID, i);
    	}
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_paramList;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterParamList) {
             listener.enterParamList(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitParamList) {
             listener.exitParamList(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_block;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.INT, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.ID, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_expr;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterExpr) {
             listener.enterExpr(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitExpr) {
             listener.exitExpr(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
