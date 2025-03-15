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
    public static readonly T__30 = 31;
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly ID = 36;
    public static readonly INT = 37;
    public static readonly FLOAT = 38;
    public static readonly BOOL = 39;
    public static readonly STRING = 40;
    public static readonly COMMENT = 41;
    public static readonly BLOCK_COMMENT = 42;
    public static readonly WS = 43;
    public static readonly RULE_prog = 0;
    public static readonly RULE_stmt = 1;
    public static readonly RULE_varDecl = 2;
    public static readonly RULE_exprStmt = 3;
    public static readonly RULE_ifStmt = 4;
    public static readonly RULE_whileStmt = 5;
    public static readonly RULE_funcDecl = 6;
    public static readonly RULE_returnStmt = 7;
    public static readonly RULE_paramList = 8;
    public static readonly RULE_param = 9;
    public static readonly RULE_block = 10;
    public static readonly RULE_expr = 11;
    public static readonly RULE_assignment = 12;
    public static readonly RULE_logical = 13;
    public static readonly RULE_comparison = 14;
    public static readonly RULE_term = 15;
    public static readonly RULE_factor = 16;
    public static readonly RULE_unary = 17;
    public static readonly RULE_primary = 18;
    public static readonly RULE_functionCall = 19;
    public static readonly RULE_arguments = 20;
    public static readonly RULE_type = 21;

    public static readonly literalNames = [
        null, "'let'", "'mut'", "':'", "'='", "';'", "'if'", "'else'", "'while'", 
        "'fn'", "'('", "')'", "'->'", "'return'", "','", "'{'", "'}'", "'&&'", 
        "'||'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", 
        "'*'", "'/'", "'!'", "'&'", "'i32'", "'f64'", "'bool'", "'String'", 
        "'()'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, "ID", "INT", "FLOAT", "BOOL", "STRING", "COMMENT", 
        "BLOCK_COMMENT", "WS"
    ];
    public static readonly ruleNames = [
        "prog", "stmt", "varDecl", "exprStmt", "ifStmt", "whileStmt", "funcDecl", 
        "returnStmt", "paramList", "param", "block", "expr", "assignment", 
        "logical", "comparison", "term", "factor", "unary", "primary", "functionCall", 
        "arguments", "type",
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
            this.state = 47;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1677764418) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 31) !== 0)) {
                {
                {
                this.state = 44;
                this.stmt();
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
    public stmt(): StmtContext {
        let localContext = new StmtContext(this.context, this.state);
        this.enterRule(localContext, 2, CrustParser.RULE_stmt);
        try {
            this.state = 59;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CrustParser.T__0:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 52;
                this.varDecl();
                }
                break;
            case CrustParser.T__9:
            case CrustParser.T__25:
            case CrustParser.T__28:
            case CrustParser.T__29:
            case CrustParser.ID:
            case CrustParser.INT:
            case CrustParser.FLOAT:
            case CrustParser.BOOL:
            case CrustParser.STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 53;
                this.exprStmt();
                }
                break;
            case CrustParser.T__5:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 54;
                this.ifStmt();
                }
                break;
            case CrustParser.T__7:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 55;
                this.whileStmt();
                }
                break;
            case CrustParser.T__8:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 56;
                this.funcDecl();
                }
                break;
            case CrustParser.T__12:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 57;
                this.returnStmt();
                }
                break;
            case CrustParser.T__14:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 58;
                this.block();
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
            this.match(CrustParser.ID);
            this.state = 68;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 66;
                this.match(CrustParser.T__2);
                this.state = 67;
                this.type_();
                }
            }

            this.state = 72;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 70;
                this.match(CrustParser.T__3);
                this.state = 71;
                this.expr();
                }
            }

            this.state = 74;
            this.match(CrustParser.T__4);
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
            this.state = 76;
            this.expr();
            this.state = 77;
            this.match(CrustParser.T__4);
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
            this.state = 79;
            this.match(CrustParser.T__5);
            this.state = 80;
            this.expr();
            this.state = 81;
            this.block();
            this.state = 87;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 7) {
                {
                this.state = 82;
                this.match(CrustParser.T__6);
                this.state = 85;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case CrustParser.T__5:
                    {
                    this.state = 83;
                    this.ifStmt();
                    }
                    break;
                case CrustParser.T__14:
                    {
                    this.state = 84;
                    this.block();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
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
            this.state = 89;
            this.match(CrustParser.T__7);
            this.state = 90;
            this.expr();
            this.state = 91;
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
            this.state = 93;
            this.match(CrustParser.T__8);
            this.state = 94;
            this.match(CrustParser.ID);
            this.state = 95;
            this.match(CrustParser.T__9);
            this.state = 97;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 36) {
                {
                this.state = 96;
                this.paramList();
                }
            }

            this.state = 99;
            this.match(CrustParser.T__10);
            this.state = 102;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 100;
                this.match(CrustParser.T__11);
                this.state = 101;
                this.type_();
                }
            }

            this.state = 104;
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
    public returnStmt(): ReturnStmtContext {
        let localContext = new ReturnStmtContext(this.context, this.state);
        this.enterRule(localContext, 14, CrustParser.RULE_returnStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 106;
            this.match(CrustParser.T__12);
            this.state = 108;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 2082013185) !== 0)) {
                {
                this.state = 107;
                this.expr();
                }
            }

            this.state = 110;
            this.match(CrustParser.T__4);
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
        this.enterRule(localContext, 16, CrustParser.RULE_paramList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 112;
            this.param();
            this.state = 117;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 14) {
                {
                {
                this.state = 113;
                this.match(CrustParser.T__13);
                this.state = 114;
                this.param();
                }
                }
                this.state = 119;
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
    public param(): ParamContext {
        let localContext = new ParamContext(this.context, this.state);
        this.enterRule(localContext, 18, CrustParser.RULE_param);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 120;
            this.match(CrustParser.ID);
            this.state = 121;
            this.match(CrustParser.T__2);
            this.state = 122;
            this.type_();
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
        this.enterRule(localContext, 20, CrustParser.RULE_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 124;
            this.match(CrustParser.T__14);
            this.state = 128;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1677764418) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 31) !== 0)) {
                {
                {
                this.state = 125;
                this.stmt();
                }
                }
                this.state = 130;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 131;
            this.match(CrustParser.T__15);
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
    public expr(): ExprContext {
        let localContext = new ExprContext(this.context, this.state);
        this.enterRule(localContext, 22, CrustParser.RULE_expr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 133;
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
            this.state = 141;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 135;
                this.match(CrustParser.ID);
                this.state = 138;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 4) {
                    {
                    this.state = 136;
                    this.match(CrustParser.T__3);
                    this.state = 137;
                    this.assignment();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 140;
                this.logical();
                }
                break;
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
    public logical(): LogicalContext {
        let localContext = new LogicalContext(this.context, this.state);
        this.enterRule(localContext, 26, CrustParser.RULE_logical);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 143;
            this.comparison();
            this.state = 148;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 17 || _la === 18) {
                {
                {
                this.state = 144;
                _la = this.tokenStream.LA(1);
                if(!(_la === 17 || _la === 18)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 145;
                this.comparison();
                }
                }
                this.state = 150;
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
    public comparison(): ComparisonContext {
        let localContext = new ComparisonContext(this.context, this.state);
        this.enterRule(localContext, 28, CrustParser.RULE_comparison);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 151;
            this.term();
            this.state = 156;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33030144) !== 0)) {
                {
                {
                this.state = 152;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 33030144) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 153;
                this.term();
                }
                }
                this.state = 158;
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
    public term(): TermContext {
        let localContext = new TermContext(this.context, this.state);
        this.enterRule(localContext, 30, CrustParser.RULE_term);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 159;
            this.factor();
            this.state = 164;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 25 || _la === 26) {
                {
                {
                this.state = 160;
                _la = this.tokenStream.LA(1);
                if(!(_la === 25 || _la === 26)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 161;
                this.factor();
                }
                }
                this.state = 166;
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
    public factor(): FactorContext {
        let localContext = new FactorContext(this.context, this.state);
        this.enterRule(localContext, 32, CrustParser.RULE_factor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 167;
            this.unary();
            this.state = 172;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 27 || _la === 28) {
                {
                {
                this.state = 168;
                _la = this.tokenStream.LA(1);
                if(!(_la === 27 || _la === 28)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 169;
                this.unary();
                }
                }
                this.state = 174;
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
        this.enterRule(localContext, 34, CrustParser.RULE_unary);
        let _la: number;
        try {
            this.state = 185;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CrustParser.T__25:
            case CrustParser.T__28:
            case CrustParser.T__29:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 181;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case CrustParser.T__28:
                    {
                    this.state = 175;
                    this.match(CrustParser.T__28);
                    }
                    break;
                case CrustParser.T__25:
                    {
                    this.state = 176;
                    this.match(CrustParser.T__25);
                    }
                    break;
                case CrustParser.T__29:
                    {
                    this.state = 177;
                    this.match(CrustParser.T__29);
                    this.state = 179;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 2) {
                        {
                        this.state = 178;
                        this.match(CrustParser.T__1);
                        }
                    }

                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 183;
                this.unary();
                }
                break;
            case CrustParser.T__9:
            case CrustParser.ID:
            case CrustParser.INT:
            case CrustParser.FLOAT:
            case CrustParser.BOOL:
            case CrustParser.STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 184;
                this.primary();
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
    public primary(): PrimaryContext {
        let localContext = new PrimaryContext(this.context, this.state);
        this.enterRule(localContext, 36, CrustParser.RULE_primary);
        try {
            this.state = 197;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 187;
                this.match(CrustParser.INT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 188;
                this.match(CrustParser.FLOAT);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 189;
                this.match(CrustParser.BOOL);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 190;
                this.match(CrustParser.STRING);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 191;
                this.match(CrustParser.ID);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 192;
                this.functionCall();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 193;
                this.match(CrustParser.T__9);
                this.state = 194;
                this.expr();
                this.state = 195;
                this.match(CrustParser.T__10);
                }
                break;
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
    public functionCall(): FunctionCallContext {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 38, CrustParser.RULE_functionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 199;
            this.match(CrustParser.ID);
            this.state = 200;
            this.match(CrustParser.T__9);
            this.state = 202;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 2082013185) !== 0)) {
                {
                this.state = 201;
                this.arguments();
                }
            }

            this.state = 204;
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
    public arguments(): ArgumentsContext {
        let localContext = new ArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 40, CrustParser.RULE_arguments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 206;
            this.expr();
            this.state = 211;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 14) {
                {
                {
                this.state = 207;
                this.match(CrustParser.T__13);
                this.state = 208;
                this.expr();
                }
                }
                this.state = 213;
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
    public type_(): TypeContext {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 42, CrustParser.RULE_type);
        let _la: number;
        try {
            this.state = 224;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CrustParser.T__30:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 214;
                this.match(CrustParser.T__30);
                }
                break;
            case CrustParser.T__31:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 215;
                this.match(CrustParser.T__31);
                }
                break;
            case CrustParser.T__32:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 216;
                this.match(CrustParser.T__32);
                }
                break;
            case CrustParser.T__33:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 217;
                this.match(CrustParser.T__33);
                }
                break;
            case CrustParser.T__29:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 218;
                this.match(CrustParser.T__29);
                this.state = 220;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 2) {
                    {
                    this.state = 219;
                    this.match(CrustParser.T__1);
                    }
                }

                this.state = 222;
                this.type_();
                }
                break;
            case CrustParser.T__34:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 223;
                this.match(CrustParser.T__34);
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

    public static readonly _serializedATN: number[] = [
        4,1,43,227,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,1,0,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,3,1,60,8,1,1,2,1,2,3,2,64,8,2,1,2,1,2,1,2,3,2,
        69,8,2,1,2,1,2,3,2,73,8,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,
        4,1,4,3,4,86,8,4,3,4,88,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,3,6,
        98,8,6,1,6,1,6,1,6,3,6,103,8,6,1,6,1,6,1,7,1,7,3,7,109,8,7,1,7,1,
        7,1,8,1,8,1,8,5,8,116,8,8,10,8,12,8,119,9,8,1,9,1,9,1,9,1,9,1,10,
        1,10,5,10,127,8,10,10,10,12,10,130,9,10,1,10,1,10,1,11,1,11,1,12,
        1,12,1,12,3,12,139,8,12,1,12,3,12,142,8,12,1,13,1,13,1,13,5,13,147,
        8,13,10,13,12,13,150,9,13,1,14,1,14,1,14,5,14,155,8,14,10,14,12,
        14,158,9,14,1,15,1,15,1,15,5,15,163,8,15,10,15,12,15,166,9,15,1,
        16,1,16,1,16,5,16,171,8,16,10,16,12,16,174,9,16,1,17,1,17,1,17,1,
        17,3,17,180,8,17,3,17,182,8,17,1,17,1,17,3,17,186,8,17,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,198,8,18,1,19,1,19,
        1,19,3,19,203,8,19,1,19,1,19,1,20,1,20,1,20,5,20,210,8,20,10,20,
        12,20,213,9,20,1,21,1,21,1,21,1,21,1,21,1,21,3,21,221,8,21,1,21,
        1,21,3,21,225,8,21,1,21,0,0,22,0,2,4,6,8,10,12,14,16,18,20,22,24,
        26,28,30,32,34,36,38,40,42,0,4,1,0,17,18,1,0,19,24,1,0,25,26,1,0,
        27,28,245,0,47,1,0,0,0,2,59,1,0,0,0,4,61,1,0,0,0,6,76,1,0,0,0,8,
        79,1,0,0,0,10,89,1,0,0,0,12,93,1,0,0,0,14,106,1,0,0,0,16,112,1,0,
        0,0,18,120,1,0,0,0,20,124,1,0,0,0,22,133,1,0,0,0,24,141,1,0,0,0,
        26,143,1,0,0,0,28,151,1,0,0,0,30,159,1,0,0,0,32,167,1,0,0,0,34,185,
        1,0,0,0,36,197,1,0,0,0,38,199,1,0,0,0,40,206,1,0,0,0,42,224,1,0,
        0,0,44,46,3,2,1,0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,
        1,0,0,0,48,50,1,0,0,0,49,47,1,0,0,0,50,51,5,0,0,1,51,1,1,0,0,0,52,
        60,3,4,2,0,53,60,3,6,3,0,54,60,3,8,4,0,55,60,3,10,5,0,56,60,3,12,
        6,0,57,60,3,14,7,0,58,60,3,20,10,0,59,52,1,0,0,0,59,53,1,0,0,0,59,
        54,1,0,0,0,59,55,1,0,0,0,59,56,1,0,0,0,59,57,1,0,0,0,59,58,1,0,0,
        0,60,3,1,0,0,0,61,63,5,1,0,0,62,64,5,2,0,0,63,62,1,0,0,0,63,64,1,
        0,0,0,64,65,1,0,0,0,65,68,5,36,0,0,66,67,5,3,0,0,67,69,3,42,21,0,
        68,66,1,0,0,0,68,69,1,0,0,0,69,72,1,0,0,0,70,71,5,4,0,0,71,73,3,
        22,11,0,72,70,1,0,0,0,72,73,1,0,0,0,73,74,1,0,0,0,74,75,5,5,0,0,
        75,5,1,0,0,0,76,77,3,22,11,0,77,78,5,5,0,0,78,7,1,0,0,0,79,80,5,
        6,0,0,80,81,3,22,11,0,81,87,3,20,10,0,82,85,5,7,0,0,83,86,3,8,4,
        0,84,86,3,20,10,0,85,83,1,0,0,0,85,84,1,0,0,0,86,88,1,0,0,0,87,82,
        1,0,0,0,87,88,1,0,0,0,88,9,1,0,0,0,89,90,5,8,0,0,90,91,3,22,11,0,
        91,92,3,20,10,0,92,11,1,0,0,0,93,94,5,9,0,0,94,95,5,36,0,0,95,97,
        5,10,0,0,96,98,3,16,8,0,97,96,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,
        0,99,102,5,11,0,0,100,101,5,12,0,0,101,103,3,42,21,0,102,100,1,0,
        0,0,102,103,1,0,0,0,103,104,1,0,0,0,104,105,3,20,10,0,105,13,1,0,
        0,0,106,108,5,13,0,0,107,109,3,22,11,0,108,107,1,0,0,0,108,109,1,
        0,0,0,109,110,1,0,0,0,110,111,5,5,0,0,111,15,1,0,0,0,112,117,3,18,
        9,0,113,114,5,14,0,0,114,116,3,18,9,0,115,113,1,0,0,0,116,119,1,
        0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,17,1,0,0,0,119,117,1,0,
        0,0,120,121,5,36,0,0,121,122,5,3,0,0,122,123,3,42,21,0,123,19,1,
        0,0,0,124,128,5,15,0,0,125,127,3,2,1,0,126,125,1,0,0,0,127,130,1,
        0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,131,1,0,0,0,130,128,1,
        0,0,0,131,132,5,16,0,0,132,21,1,0,0,0,133,134,3,24,12,0,134,23,1,
        0,0,0,135,138,5,36,0,0,136,137,5,4,0,0,137,139,3,24,12,0,138,136,
        1,0,0,0,138,139,1,0,0,0,139,142,1,0,0,0,140,142,3,26,13,0,141,135,
        1,0,0,0,141,140,1,0,0,0,142,25,1,0,0,0,143,148,3,28,14,0,144,145,
        7,0,0,0,145,147,3,28,14,0,146,144,1,0,0,0,147,150,1,0,0,0,148,146,
        1,0,0,0,148,149,1,0,0,0,149,27,1,0,0,0,150,148,1,0,0,0,151,156,3,
        30,15,0,152,153,7,1,0,0,153,155,3,30,15,0,154,152,1,0,0,0,155,158,
        1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,29,1,0,0,0,158,156,1,
        0,0,0,159,164,3,32,16,0,160,161,7,2,0,0,161,163,3,32,16,0,162,160,
        1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,31,1,
        0,0,0,166,164,1,0,0,0,167,172,3,34,17,0,168,169,7,3,0,0,169,171,
        3,34,17,0,170,168,1,0,0,0,171,174,1,0,0,0,172,170,1,0,0,0,172,173,
        1,0,0,0,173,33,1,0,0,0,174,172,1,0,0,0,175,182,5,29,0,0,176,182,
        5,26,0,0,177,179,5,30,0,0,178,180,5,2,0,0,179,178,1,0,0,0,179,180,
        1,0,0,0,180,182,1,0,0,0,181,175,1,0,0,0,181,176,1,0,0,0,181,177,
        1,0,0,0,182,183,1,0,0,0,183,186,3,34,17,0,184,186,3,36,18,0,185,
        181,1,0,0,0,185,184,1,0,0,0,186,35,1,0,0,0,187,198,5,37,0,0,188,
        198,5,38,0,0,189,198,5,39,0,0,190,198,5,40,0,0,191,198,5,36,0,0,
        192,198,3,38,19,0,193,194,5,10,0,0,194,195,3,22,11,0,195,196,5,11,
        0,0,196,198,1,0,0,0,197,187,1,0,0,0,197,188,1,0,0,0,197,189,1,0,
        0,0,197,190,1,0,0,0,197,191,1,0,0,0,197,192,1,0,0,0,197,193,1,0,
        0,0,198,37,1,0,0,0,199,200,5,36,0,0,200,202,5,10,0,0,201,203,3,40,
        20,0,202,201,1,0,0,0,202,203,1,0,0,0,203,204,1,0,0,0,204,205,5,11,
        0,0,205,39,1,0,0,0,206,211,3,22,11,0,207,208,5,14,0,0,208,210,3,
        22,11,0,209,207,1,0,0,0,210,213,1,0,0,0,211,209,1,0,0,0,211,212,
        1,0,0,0,212,41,1,0,0,0,213,211,1,0,0,0,214,225,5,31,0,0,215,225,
        5,32,0,0,216,225,5,33,0,0,217,225,5,34,0,0,218,220,5,30,0,0,219,
        221,5,2,0,0,220,219,1,0,0,0,220,221,1,0,0,0,221,222,1,0,0,0,222,
        225,3,42,21,0,223,225,5,35,0,0,224,214,1,0,0,0,224,215,1,0,0,0,224,
        216,1,0,0,0,224,217,1,0,0,0,224,218,1,0,0,0,224,223,1,0,0,0,225,
        43,1,0,0,0,26,47,59,63,68,72,85,87,97,102,108,117,128,138,141,148,
        156,164,172,179,181,185,197,202,211,220,224
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
    public returnStmt(): ReturnStmtContext | null {
        return this.getRuleContext(0, ReturnStmtContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
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
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
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
    public ifStmt(): IfStmtContext | null {
        return this.getRuleContext(0, IfStmtContext);
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
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
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


export class ReturnStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_returnStmt;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterReturnStmt) {
             listener.enterReturnStmt(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitReturnStmt) {
             listener.exitReturnStmt(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitReturnStmt) {
            return visitor.visitReturnStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public param(): ParamContext[];
    public param(i: number): ParamContext | null;
    public param(i?: number): ParamContext[] | ParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }

        return this.getRuleContext(i, ParamContext);
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


export class ParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(CrustParser.ID, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_param;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterParam) {
             listener.enterParam(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitParam) {
             listener.exitParam(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
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
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public assignment(): AssignmentContext {
        return this.getRuleContext(0, AssignmentContext)!;
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


export class AssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.ID, 0);
    }
    public assignment(): AssignmentContext | null {
        return this.getRuleContext(0, AssignmentContext);
    }
    public logical(): LogicalContext | null {
        return this.getRuleContext(0, LogicalContext);
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


export class LogicalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public comparison(): ComparisonContext[];
    public comparison(i: number): ComparisonContext | null;
    public comparison(i?: number): ComparisonContext[] | ComparisonContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ComparisonContext);
        }

        return this.getRuleContext(i, ComparisonContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_logical;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterLogical) {
             listener.enterLogical(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitLogical) {
             listener.exitLogical(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitLogical) {
            return visitor.visitLogical(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public term(): TermContext[];
    public term(i: number): TermContext | null;
    public term(i?: number): TermContext[] | TermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }

        return this.getRuleContext(i, TermContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_comparison;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterComparison) {
             listener.enterComparison(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitComparison) {
             listener.exitComparison(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TermContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public factor(): FactorContext[];
    public factor(i: number): FactorContext | null;
    public factor(i?: number): FactorContext[] | FactorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FactorContext);
        }

        return this.getRuleContext(i, FactorContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_term;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterTerm) {
             listener.enterTerm(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitTerm) {
             listener.exitTerm(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitTerm) {
            return visitor.visitTerm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FactorContext extends antlr.ParserRuleContext {
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
        return CrustParser.RULE_factor;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterFactor) {
             listener.enterFactor(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitFactor) {
             listener.exitFactor(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitFactor) {
            return visitor.visitFactor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unary(): UnaryContext | null {
        return this.getRuleContext(0, UnaryContext);
    }
    public primary(): PrimaryContext | null {
        return this.getRuleContext(0, PrimaryContext);
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
    public INT(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.INT, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.FLOAT, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.BOOL, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.STRING, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.ID, 0);
    }
    public functionCall(): FunctionCallContext | null {
        return this.getRuleContext(0, FunctionCallContext);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
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


export class FunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(CrustParser.ID, 0)!;
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_functionCall;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterFunctionCall) {
             listener.enterFunctionCall(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitFunctionCall) {
             listener.exitFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
        return CrustParser.RULE_arguments;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterArguments) {
             listener.enterArguments(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitArguments) {
             listener.exitArguments(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
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
