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
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly Identifier = 31;
    public static readonly Integer = 32;
    public static readonly WS = 33;
    public static readonly RULE_program = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_variableDeclaration = 2;
    public static readonly RULE_functionDeclaration = 3;
    public static readonly RULE_parameterList = 4;
    public static readonly RULE_parameter = 5;
    public static readonly RULE_block = 6;
    public static readonly RULE_ifStatement = 7;
    public static readonly RULE_whileStatement = 8;
    public static readonly RULE_returnStatement = 9;
    public static readonly RULE_expressionStatement = 10;
    public static readonly RULE_expression = 11;
    public static readonly RULE_assignment = 12;
    public static readonly RULE_logicalOr = 13;
    public static readonly RULE_logicalAnd = 14;
    public static readonly RULE_equality = 15;
    public static readonly RULE_relational = 16;
    public static readonly RULE_additive = 17;
    public static readonly RULE_multiplicative = 18;
    public static readonly RULE_unary = 19;
    public static readonly RULE_primary = 20;
    public static readonly RULE_type = 21;

    public static readonly literalNames = [
        null, "'let'", "'mut'", "'='", "';'", "'fn'", "'('", "')'", "','", 
        "':'", "'{'", "'}'", "'if'", "'else'", "'while'", "'return'", "'||'", 
        "'&&'", "'=='", "'!='", "'<'", "'>'", "'<='", "'>='", "'+'", "'-'", 
        "'*'", "'/'", "'%'", "'!'", "'&'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, "Identifier", 
        "Integer", "WS"
    ];
    public static readonly ruleNames = [
        "program", "statement", "variableDeclaration", "functionDeclaration", 
        "parameterList", "parameter", "block", "ifStatement", "whileStatement", 
        "returnStatement", "expressionStatement", "expression", "assignment", 
        "logicalOr", "logicalAnd", "equality", "relational", "additive", 
        "multiplicative", "unary", "primary", "type",
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
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, CrustParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 47;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 4043336241) !== 0)) {
                {
                {
                this.state = 44;
                this.statement();
                }
                }
                this.state = 49;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 50;
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
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 2, CrustParser.RULE_statement);
        try {
            this.state = 59;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CrustParser.T__0:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 52;
                this.variableDeclaration();
                }
                break;
            case CrustParser.T__4:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 53;
                this.functionDeclaration();
                }
                break;
            case CrustParser.T__9:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 54;
                this.block();
                }
                break;
            case CrustParser.T__11:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 55;
                this.ifStatement();
                }
                break;
            case CrustParser.T__13:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 56;
                this.whileStatement();
                }
                break;
            case CrustParser.T__14:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 57;
                this.returnStatement();
                }
                break;
            case CrustParser.T__5:
            case CrustParser.T__24:
            case CrustParser.T__28:
            case CrustParser.T__29:
            case CrustParser.Identifier:
            case CrustParser.Integer:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 58;
                this.expressionStatement();
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
    public variableDeclaration(): VariableDeclarationContext {
        let localContext = new VariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 4, CrustParser.RULE_variableDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 61;
            this.match(CrustParser.T__0);
            this.state = 63;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 62;
                this.match(CrustParser.T__1);
                }
            }

            this.state = 65;
            this.match(CrustParser.Identifier);
            this.state = 68;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 66;
                this.match(CrustParser.T__2);
                this.state = 67;
                this.expression();
                }
            }

            this.state = 70;
            this.match(CrustParser.T__3);
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
    public functionDeclaration(): FunctionDeclarationContext {
        let localContext = new FunctionDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 6, CrustParser.RULE_functionDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 72;
            this.match(CrustParser.T__4);
            this.state = 73;
            this.match(CrustParser.Identifier);
            this.state = 74;
            this.match(CrustParser.T__5);
            this.state = 76;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 75;
                this.parameterList();
                }
            }

            this.state = 78;
            this.match(CrustParser.T__6);
            this.state = 79;
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
    public parameterList(): ParameterListContext {
        let localContext = new ParameterListContext(this.context, this.state);
        this.enterRule(localContext, 8, CrustParser.RULE_parameterList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 81;
            this.parameter();
            this.state = 86;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8) {
                {
                {
                this.state = 82;
                this.match(CrustParser.T__7);
                this.state = 83;
                this.parameter();
                }
                }
                this.state = 88;
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
    public parameter(): ParameterContext {
        let localContext = new ParameterContext(this.context, this.state);
        this.enterRule(localContext, 10, CrustParser.RULE_parameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 89;
            this.match(CrustParser.Identifier);
            this.state = 92;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 90;
                this.match(CrustParser.T__8);
                this.state = 91;
                this.type_();
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
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 12, CrustParser.RULE_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 94;
            this.match(CrustParser.T__9);
            this.state = 98;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 4043336241) !== 0)) {
                {
                {
                this.state = 95;
                this.statement();
                }
                }
                this.state = 100;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 101;
            this.match(CrustParser.T__10);
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
    public ifStatement(): IfStatementContext {
        let localContext = new IfStatementContext(this.context, this.state);
        this.enterRule(localContext, 14, CrustParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 103;
            this.match(CrustParser.T__11);
            this.state = 104;
            this.match(CrustParser.T__5);
            this.state = 105;
            this.expression();
            this.state = 106;
            this.match(CrustParser.T__6);
            this.state = 107;
            this.block();
            this.state = 110;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 13) {
                {
                this.state = 108;
                this.match(CrustParser.T__12);
                this.state = 109;
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
    public whileStatement(): WhileStatementContext {
        let localContext = new WhileStatementContext(this.context, this.state);
        this.enterRule(localContext, 16, CrustParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 112;
            this.match(CrustParser.T__13);
            this.state = 113;
            this.match(CrustParser.T__5);
            this.state = 114;
            this.expression();
            this.state = 115;
            this.match(CrustParser.T__6);
            this.state = 116;
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
    public returnStatement(): ReturnStatementContext {
        let localContext = new ReturnStatementContext(this.context, this.state);
        this.enterRule(localContext, 18, CrustParser.RULE_returnStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 118;
            this.match(CrustParser.T__14);
            this.state = 120;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 126353409) !== 0)) {
                {
                this.state = 119;
                this.expression();
                }
            }

            this.state = 122;
            this.match(CrustParser.T__3);
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
    public expressionStatement(): ExpressionStatementContext {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 20, CrustParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 124;
            this.expression();
            this.state = 125;
            this.match(CrustParser.T__3);
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
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 22, CrustParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 127;
            this.assignment();
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
    public assignment(): AssignmentContext {
        let localContext = new AssignmentContext(this.context, this.state);
        this.enterRule(localContext, 24, CrustParser.RULE_assignment);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 129;
            this.logicalOr();
            this.state = 132;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 130;
                this.match(CrustParser.T__2);
                this.state = 131;
                this.assignment();
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
    public logicalOr(): LogicalOrContext {
        let localContext = new LogicalOrContext(this.context, this.state);
        this.enterRule(localContext, 26, CrustParser.RULE_logicalOr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 134;
            this.logicalAnd();
            this.state = 139;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 16) {
                {
                {
                this.state = 135;
                this.match(CrustParser.T__15);
                this.state = 136;
                this.logicalAnd();
                }
                }
                this.state = 141;
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
    public logicalAnd(): LogicalAndContext {
        let localContext = new LogicalAndContext(this.context, this.state);
        this.enterRule(localContext, 28, CrustParser.RULE_logicalAnd);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 142;
            this.equality();
            this.state = 147;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 17) {
                {
                {
                this.state = 143;
                this.match(CrustParser.T__16);
                this.state = 144;
                this.equality();
                }
                }
                this.state = 149;
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
    public equality(): EqualityContext {
        let localContext = new EqualityContext(this.context, this.state);
        this.enterRule(localContext, 30, CrustParser.RULE_equality);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 150;
            this.relational();
            this.state = 155;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 18 || _la === 19) {
                {
                {
                this.state = 151;
                _la = this.tokenStream.LA(1);
                if(!(_la === 18 || _la === 19)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 152;
                this.relational();
                }
                }
                this.state = 157;
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
    public relational(): RelationalContext {
        let localContext = new RelationalContext(this.context, this.state);
        this.enterRule(localContext, 32, CrustParser.RULE_relational);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 158;
            this.additive();
            this.state = 163;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 15728640) !== 0)) {
                {
                {
                this.state = 159;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 15728640) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 160;
                this.additive();
                }
                }
                this.state = 165;
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
    public additive(): AdditiveContext {
        let localContext = new AdditiveContext(this.context, this.state);
        this.enterRule(localContext, 34, CrustParser.RULE_additive);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 166;
            this.multiplicative();
            this.state = 171;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 24 || _la === 25) {
                {
                {
                this.state = 167;
                _la = this.tokenStream.LA(1);
                if(!(_la === 24 || _la === 25)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 168;
                this.multiplicative();
                }
                }
                this.state = 173;
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
    public multiplicative(): MultiplicativeContext {
        let localContext = new MultiplicativeContext(this.context, this.state);
        this.enterRule(localContext, 36, CrustParser.RULE_multiplicative);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 174;
            this.unary();
            this.state = 179;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 469762048) !== 0)) {
                {
                {
                this.state = 175;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 469762048) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 176;
                this.unary();
                }
                }
                this.state = 181;
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
    public unary(): UnaryContext {
        let localContext = new UnaryContext(this.context, this.state);
        this.enterRule(localContext, 38, CrustParser.RULE_unary);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 183;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1644167168) !== 0)) {
                {
                this.state = 182;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1644167168) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 185;
            this.primary();
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
    public primary(): PrimaryContext {
        let localContext = new PrimaryContext(this.context, this.state);
        this.enterRule(localContext, 40, CrustParser.RULE_primary);
        try {
            this.state = 193;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CrustParser.Integer:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 187;
                this.match(CrustParser.Integer);
                }
                break;
            case CrustParser.Identifier:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 188;
                this.match(CrustParser.Identifier);
                }
                break;
            case CrustParser.T__5:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 189;
                this.match(CrustParser.T__5);
                this.state = 190;
                this.expression();
                this.state = 191;
                this.match(CrustParser.T__6);
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
    public type_(): TypeContext {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 42, CrustParser.RULE_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 195;
            this.match(CrustParser.Identifier);
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

    public static readonly _serializedATN: number[] = [
        4,1,33,198,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,1,0,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,3,1,60,8,1,1,2,1,2,3,2,64,8,2,1,2,1,2,1,2,3,2,
        69,8,2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,77,8,3,1,3,1,3,1,3,1,4,1,4,1,
        4,5,4,85,8,4,10,4,12,4,88,9,4,1,5,1,5,1,5,3,5,93,8,5,1,6,1,6,5,6,
        97,8,6,10,6,12,6,100,9,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,
        111,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,3,9,121,8,9,1,9,1,9,1,10,
        1,10,1,10,1,11,1,11,1,12,1,12,1,12,3,12,133,8,12,1,13,1,13,1,13,
        5,13,138,8,13,10,13,12,13,141,9,13,1,14,1,14,1,14,5,14,146,8,14,
        10,14,12,14,149,9,14,1,15,1,15,1,15,5,15,154,8,15,10,15,12,15,157,
        9,15,1,16,1,16,1,16,5,16,162,8,16,10,16,12,16,165,9,16,1,17,1,17,
        1,17,5,17,170,8,17,10,17,12,17,173,9,17,1,18,1,18,1,18,5,18,178,
        8,18,10,18,12,18,181,9,18,1,19,3,19,184,8,19,1,19,1,19,1,20,1,20,
        1,20,1,20,1,20,1,20,3,20,194,8,20,1,21,1,21,1,21,0,0,22,0,2,4,6,
        8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,0,5,1,0,18,
        19,1,0,20,23,1,0,24,25,1,0,26,28,2,0,25,25,29,30,200,0,47,1,0,0,
        0,2,59,1,0,0,0,4,61,1,0,0,0,6,72,1,0,0,0,8,81,1,0,0,0,10,89,1,0,
        0,0,12,94,1,0,0,0,14,103,1,0,0,0,16,112,1,0,0,0,18,118,1,0,0,0,20,
        124,1,0,0,0,22,127,1,0,0,0,24,129,1,0,0,0,26,134,1,0,0,0,28,142,
        1,0,0,0,30,150,1,0,0,0,32,158,1,0,0,0,34,166,1,0,0,0,36,174,1,0,
        0,0,38,183,1,0,0,0,40,193,1,0,0,0,42,195,1,0,0,0,44,46,3,2,1,0,45,
        44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,
        0,49,47,1,0,0,0,50,51,5,0,0,1,51,1,1,0,0,0,52,60,3,4,2,0,53,60,3,
        6,3,0,54,60,3,12,6,0,55,60,3,14,7,0,56,60,3,16,8,0,57,60,3,18,9,
        0,58,60,3,20,10,0,59,52,1,0,0,0,59,53,1,0,0,0,59,54,1,0,0,0,59,55,
        1,0,0,0,59,56,1,0,0,0,59,57,1,0,0,0,59,58,1,0,0,0,60,3,1,0,0,0,61,
        63,5,1,0,0,62,64,5,2,0,0,63,62,1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,
        0,65,68,5,31,0,0,66,67,5,3,0,0,67,69,3,22,11,0,68,66,1,0,0,0,68,
        69,1,0,0,0,69,70,1,0,0,0,70,71,5,4,0,0,71,5,1,0,0,0,72,73,5,5,0,
        0,73,74,5,31,0,0,74,76,5,6,0,0,75,77,3,8,4,0,76,75,1,0,0,0,76,77,
        1,0,0,0,77,78,1,0,0,0,78,79,5,7,0,0,79,80,3,12,6,0,80,7,1,0,0,0,
        81,86,3,10,5,0,82,83,5,8,0,0,83,85,3,10,5,0,84,82,1,0,0,0,85,88,
        1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,9,1,0,0,0,88,86,1,0,0,0,89,
        92,5,31,0,0,90,91,5,9,0,0,91,93,3,42,21,0,92,90,1,0,0,0,92,93,1,
        0,0,0,93,11,1,0,0,0,94,98,5,10,0,0,95,97,3,2,1,0,96,95,1,0,0,0,97,
        100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,98,1,
        0,0,0,101,102,5,11,0,0,102,13,1,0,0,0,103,104,5,12,0,0,104,105,5,
        6,0,0,105,106,3,22,11,0,106,107,5,7,0,0,107,110,3,12,6,0,108,109,
        5,13,0,0,109,111,3,12,6,0,110,108,1,0,0,0,110,111,1,0,0,0,111,15,
        1,0,0,0,112,113,5,14,0,0,113,114,5,6,0,0,114,115,3,22,11,0,115,116,
        5,7,0,0,116,117,3,12,6,0,117,17,1,0,0,0,118,120,5,15,0,0,119,121,
        3,22,11,0,120,119,1,0,0,0,120,121,1,0,0,0,121,122,1,0,0,0,122,123,
        5,4,0,0,123,19,1,0,0,0,124,125,3,22,11,0,125,126,5,4,0,0,126,21,
        1,0,0,0,127,128,3,24,12,0,128,23,1,0,0,0,129,132,3,26,13,0,130,131,
        5,3,0,0,131,133,3,24,12,0,132,130,1,0,0,0,132,133,1,0,0,0,133,25,
        1,0,0,0,134,139,3,28,14,0,135,136,5,16,0,0,136,138,3,28,14,0,137,
        135,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,139,140,1,0,0,0,140,
        27,1,0,0,0,141,139,1,0,0,0,142,147,3,30,15,0,143,144,5,17,0,0,144,
        146,3,30,15,0,145,143,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,
        148,1,0,0,0,148,29,1,0,0,0,149,147,1,0,0,0,150,155,3,32,16,0,151,
        152,7,0,0,0,152,154,3,32,16,0,153,151,1,0,0,0,154,157,1,0,0,0,155,
        153,1,0,0,0,155,156,1,0,0,0,156,31,1,0,0,0,157,155,1,0,0,0,158,163,
        3,34,17,0,159,160,7,1,0,0,160,162,3,34,17,0,161,159,1,0,0,0,162,
        165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,33,1,0,0,0,165,163,
        1,0,0,0,166,171,3,36,18,0,167,168,7,2,0,0,168,170,3,36,18,0,169,
        167,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,
        35,1,0,0,0,173,171,1,0,0,0,174,179,3,38,19,0,175,176,7,3,0,0,176,
        178,3,38,19,0,177,175,1,0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,
        180,1,0,0,0,180,37,1,0,0,0,181,179,1,0,0,0,182,184,7,4,0,0,183,182,
        1,0,0,0,183,184,1,0,0,0,184,185,1,0,0,0,185,186,3,40,20,0,186,39,
        1,0,0,0,187,194,5,32,0,0,188,194,5,31,0,0,189,190,5,6,0,0,190,191,
        3,22,11,0,191,192,5,7,0,0,192,194,1,0,0,0,193,187,1,0,0,0,193,188,
        1,0,0,0,193,189,1,0,0,0,194,41,1,0,0,0,195,196,5,31,0,0,196,43,1,
        0,0,0,19,47,59,63,68,76,86,92,98,110,120,132,139,147,155,163,171,
        179,183,193
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

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(CrustParser.EOF, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_program;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclaration(): VariableDeclarationContext | null {
        return this.getRuleContext(0, VariableDeclarationContext);
    }
    public functionDeclaration(): FunctionDeclarationContext | null {
        return this.getRuleContext(0, FunctionDeclarationContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public ifStatement(): IfStatementContext | null {
        return this.getRuleContext(0, IfStatementContext);
    }
    public whileStatement(): WhileStatementContext | null {
        return this.getRuleContext(0, WhileStatementContext);
    }
    public returnStatement(): ReturnStatementContext | null {
        return this.getRuleContext(0, ReturnStatementContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_statement;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CrustParser.Identifier, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_variableDeclaration;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterVariableDeclaration) {
             listener.enterVariableDeclaration(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitVariableDeclaration) {
             listener.exitVariableDeclaration(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CrustParser.Identifier, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public parameterList(): ParameterListContext | null {
        return this.getRuleContext(0, ParameterListContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_functionDeclaration;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterFunctionDeclaration) {
             listener.enterFunctionDeclaration(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitFunctionDeclaration) {
             listener.exitFunctionDeclaration(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParameterListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parameter(): ParameterContext[];
    public parameter(i: number): ParameterContext | null;
    public parameter(i?: number): ParameterContext[] | ParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }

        return this.getRuleContext(i, ParameterContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_parameterList;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterParameterList) {
             listener.enterParameterList(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitParameterList) {
             listener.exitParameterList(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitParameterList) {
            return visitor.visitParameterList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CrustParser.Identifier, 0)!;
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_parameter;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterParameter) {
             listener.enterParameter(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitParameter) {
             listener.exitParameter(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
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


export class IfStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
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
        return CrustParser.RULE_ifStatement;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterIfStatement) {
             listener.enterIfStatement(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitIfStatement) {
             listener.exitIfStatement(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_whileStatement;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterWhileStatement) {
             listener.enterWhileStatement(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitWhileStatement) {
             listener.exitWhileStatement(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_returnStatement;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterReturnStatement) {
             listener.enterReturnStatement(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitReturnStatement) {
             listener.exitReturnStatement(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_expressionStatement;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterExpressionStatement) {
             listener.enterExpressionStatement(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitExpressionStatement) {
             listener.exitExpressionStatement(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public assignment(): AssignmentContext {
        return this.getRuleContext(0, AssignmentContext)!;
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


export class AssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logicalOr(): LogicalOrContext {
        return this.getRuleContext(0, LogicalOrContext)!;
    }
    public assignment(): AssignmentContext | null {
        return this.getRuleContext(0, AssignmentContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_assignment;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterAssignment) {
             listener.enterAssignment(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitAssignment) {
             listener.exitAssignment(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogicalOrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logicalAnd(): LogicalAndContext[];
    public logicalAnd(i: number): LogicalAndContext | null;
    public logicalAnd(i?: number): LogicalAndContext[] | LogicalAndContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicalAndContext);
        }

        return this.getRuleContext(i, LogicalAndContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_logicalOr;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterLogicalOr) {
             listener.enterLogicalOr(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitLogicalOr) {
             listener.exitLogicalOr(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitLogicalOr) {
            return visitor.visitLogicalOr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogicalAndContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public equality(): EqualityContext[];
    public equality(i: number): EqualityContext | null;
    public equality(i?: number): EqualityContext[] | EqualityContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EqualityContext);
        }

        return this.getRuleContext(i, EqualityContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_logicalAnd;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterLogicalAnd) {
             listener.enterLogicalAnd(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitLogicalAnd) {
             listener.exitLogicalAnd(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitLogicalAnd) {
            return visitor.visitLogicalAnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EqualityContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relational(): RelationalContext[];
    public relational(i: number): RelationalContext | null;
    public relational(i?: number): RelationalContext[] | RelationalContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelationalContext);
        }

        return this.getRuleContext(i, RelationalContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_equality;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterEquality) {
             listener.enterEquality(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitEquality) {
             listener.exitEquality(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitEquality) {
            return visitor.visitEquality(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelationalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public additive(): AdditiveContext[];
    public additive(i: number): AdditiveContext | null;
    public additive(i?: number): AdditiveContext[] | AdditiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveContext);
        }

        return this.getRuleContext(i, AdditiveContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_relational;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterRelational) {
             listener.enterRelational(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitRelational) {
             listener.exitRelational(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitRelational) {
            return visitor.visitRelational(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AdditiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiplicative(): MultiplicativeContext[];
    public multiplicative(i: number): MultiplicativeContext | null;
    public multiplicative(i?: number): MultiplicativeContext[] | MultiplicativeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeContext);
        }

        return this.getRuleContext(i, MultiplicativeContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_additive;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterAdditive) {
             listener.enterAdditive(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitAdditive) {
             listener.exitAdditive(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitAdditive) {
            return visitor.visitAdditive(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultiplicativeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unary(): UnaryContext[];
    public unary(i: number): UnaryContext | null;
    public unary(i?: number): UnaryContext[] | UnaryContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UnaryContext);
        }

        return this.getRuleContext(i, UnaryContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_multiplicative;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterMultiplicative) {
             listener.enterMultiplicative(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitMultiplicative) {
             listener.exitMultiplicative(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitMultiplicative) {
            return visitor.visitMultiplicative(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primary(): PrimaryContext {
        return this.getRuleContext(0, PrimaryContext)!;
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_unary;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterUnary) {
             listener.enterUnary(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitUnary) {
             listener.exitUnary(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitUnary) {
            return visitor.visitUnary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Integer(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.Integer, 0);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.Identifier, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_primary;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterPrimary) {
             listener.enterPrimary(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitPrimary) {
             listener.exitPrimary(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitPrimary) {
            return visitor.visitPrimary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CrustParser.Identifier, 0)!;
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_type;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterType) {
             listener.enterType(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitType) {
             listener.exitType(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitType) {
            return visitor.visitType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
