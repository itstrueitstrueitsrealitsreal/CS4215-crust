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
    public static readonly INT = 16;
    public static readonly BOOL = 17;
    public static readonly CHAR = 18;
    public static readonly IDENTIFIER = 19;
    public static readonly WS = 20;
    public static readonly COMMENT = 21;
    public static readonly BLOCK_COMMENT = 22;
    public static readonly RULE_prog = 0;
    public static readonly RULE_expression = 1;
    public static readonly RULE_literal = 2;

    public static readonly literalNames = [
        null, "';'", "'*'", "'/'", "'+'", "'-'", "'<'", "'<='", "'>'", "'>='", 
        "'=='", "'!='", "'&&'", "'||'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, "INT", "BOOL", "CHAR", "IDENTIFIER", 
        "WS", "COMMENT", "BLOCK_COMMENT"
    ];
    public static readonly ruleNames = [
        "prog", "expression", "literal",
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
            this.state = 9;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 6;
                this.expression(0);
                this.state = 7;
                this.match(CrustParser.T__0);
                }
                }
                this.state = 11;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 475136) !== 0));
            this.state = 13;
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

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 2;
        this.enterRecursionRule(localContext, 2, CrustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 23;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                {
                this.state = 16;
                this.literal();
                }
                break;
            case 2:
                {
                this.state = 17;
                this.match(CrustParser.INT);
                }
                break;
            case 3:
                {
                this.state = 18;
                this.match(CrustParser.BOOL);
                }
                break;
            case 4:
                {
                this.state = 19;
                this.match(CrustParser.T__13);
                this.state = 20;
                this.expression(0);
                this.state = 21;
                this.match(CrustParser.T__14);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 42;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 40;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 25;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 26;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 2 || _la === 3)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 27;
                        this.expression(9);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 28;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 29;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 4 || _la === 5)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 30;
                        this.expression(8);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 31;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 32;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 960) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 33;
                        this.expression(7);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 34;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 35;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 10 || _la === 11)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 36;
                        this.expression(6);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 37;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 38;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 12 || _la === 13)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 39;
                        this.expression(5);
                        }
                        break;
                    }
                    }
                }
                this.state = 44;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
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
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 4, CrustParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 45;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 458752) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
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

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 1:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 8);
        case 1:
            return this.precpred(this.context, 7);
        case 2:
            return this.precpred(this.context, 6);
        case 3:
            return this.precpred(this.context, 5);
        case 4:
            return this.precpred(this.context, 4);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,22,48,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,1,0,4,0,10,8,0,11,0,12,
        0,11,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,24,8,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,41,8,1,10,
        1,12,1,44,9,1,1,2,1,2,1,2,0,1,2,3,0,2,4,0,6,1,0,2,3,1,0,4,5,1,0,
        6,9,1,0,10,11,1,0,12,13,1,0,16,18,53,0,9,1,0,0,0,2,23,1,0,0,0,4,
        45,1,0,0,0,6,7,3,2,1,0,7,8,5,1,0,0,8,10,1,0,0,0,9,6,1,0,0,0,10,11,
        1,0,0,0,11,9,1,0,0,0,11,12,1,0,0,0,12,13,1,0,0,0,13,14,5,0,0,1,14,
        1,1,0,0,0,15,16,6,1,-1,0,16,24,3,4,2,0,17,24,5,16,0,0,18,24,5,17,
        0,0,19,20,5,14,0,0,20,21,3,2,1,0,21,22,5,15,0,0,22,24,1,0,0,0,23,
        15,1,0,0,0,23,17,1,0,0,0,23,18,1,0,0,0,23,19,1,0,0,0,24,42,1,0,0,
        0,25,26,10,8,0,0,26,27,7,0,0,0,27,41,3,2,1,9,28,29,10,7,0,0,29,30,
        7,1,0,0,30,41,3,2,1,8,31,32,10,6,0,0,32,33,7,2,0,0,33,41,3,2,1,7,
        34,35,10,5,0,0,35,36,7,3,0,0,36,41,3,2,1,6,37,38,10,4,0,0,38,39,
        7,4,0,0,39,41,3,2,1,5,40,25,1,0,0,0,40,28,1,0,0,0,40,31,1,0,0,0,
        40,34,1,0,0,0,40,37,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,
        0,0,0,43,3,1,0,0,0,44,42,1,0,0,0,45,46,7,5,0,0,46,5,1,0,0,0,4,11,
        23,40,42
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
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
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


export class ExpressionContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.INT, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.BOOL, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_expression;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.INT, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.BOOL, 0);
    }
    public CHAR(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.CHAR, 0);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_literal;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
