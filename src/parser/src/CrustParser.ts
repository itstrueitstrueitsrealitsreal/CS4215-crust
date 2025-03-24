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
    public static readonly INT = 8;
    public static readonly WS = 9;
    public static readonly RULE_prog = 0;
    public static readonly RULE_expression = 1;

    public static readonly literalNames = [
        null, "';'", "'*'", "'/'", "'+'", "'-'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, "INT", "WS"
    ];
    public static readonly ruleNames = [
        "prog", "expression",
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
            this.state = 7;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 4;
                this.expression(0);
                this.state = 5;
                this.match(CrustParser.T__0);
                }
                }
                this.state = 9;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 6 || _la === 8);
            this.state = 11;
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
            this.state = 19;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CrustParser.INT:
                {
                this.state = 14;
                this.match(CrustParser.INT);
                }
                break;
            case CrustParser.T__5:
                {
                this.state = 15;
                this.match(CrustParser.T__5);
                this.state = 16;
                this.expression(0);
                this.state = 17;
                this.match(CrustParser.T__6);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 29;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 27;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 21;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 22;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 2 || _la === 3)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 23;
                        this.expression(5);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 24;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 25;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 4 || _la === 5)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 26;
                        this.expression(4);
                        }
                        break;
                    }
                    }
                }
                this.state = 31;
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
            return this.precpred(this.context, 4);
        case 1:
            return this.precpred(this.context, 3);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,9,33,2,0,7,0,2,1,7,1,1,0,1,0,1,0,4,0,8,8,0,11,0,12,0,9,1,0,1,
        0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,20,8,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,
        28,8,1,10,1,12,1,31,9,1,1,1,0,1,2,2,0,2,0,2,1,0,2,3,1,0,4,5,34,0,
        7,1,0,0,0,2,19,1,0,0,0,4,5,3,2,1,0,5,6,5,1,0,0,6,8,1,0,0,0,7,4,1,
        0,0,0,8,9,1,0,0,0,9,7,1,0,0,0,9,10,1,0,0,0,10,11,1,0,0,0,11,12,5,
        0,0,1,12,1,1,0,0,0,13,14,6,1,-1,0,14,20,5,8,0,0,15,16,5,6,0,0,16,
        17,3,2,1,0,17,18,5,7,0,0,18,20,1,0,0,0,19,13,1,0,0,0,19,15,1,0,0,
        0,20,29,1,0,0,0,21,22,10,4,0,0,22,23,7,0,0,0,23,28,3,2,1,5,24,25,
        10,3,0,0,25,26,7,1,0,0,26,28,3,2,1,4,27,21,1,0,0,0,27,24,1,0,0,0,
        28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,3,1,0,0,0,31,29,1,0,
        0,0,4,9,19,27,29
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
    public INT(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.INT, 0);
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
