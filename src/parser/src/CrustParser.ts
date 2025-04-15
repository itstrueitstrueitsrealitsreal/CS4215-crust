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
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly T__37 = 38;
    public static readonly T__38 = 39;
    public static readonly T__39 = 40;
    public static readonly T__40 = 41;
    public static readonly T__41 = 42;
    public static readonly T__42 = 43;
    public static readonly T__43 = 44;
    public static readonly T__44 = 45;
    public static readonly T__45 = 46;
    public static readonly T__46 = 47;
    public static readonly T__47 = 48;
    public static readonly T__48 = 49;
    public static readonly T__49 = 50;
    public static readonly T__50 = 51;
    public static readonly T__51 = 52;
    public static readonly T__52 = 53;
    public static readonly T__53 = 54;
    public static readonly T__54 = 55;
    public static readonly T__55 = 56;
    public static readonly INT = 57;
    public static readonly BOOL = 58;
    public static readonly CHAR = 59;
    public static readonly IDENTIFIER = 60;
    public static readonly STRING = 61;
    public static readonly WS = 62;
    public static readonly COMMENT = 63;
    public static readonly BLOCK_COMMENT = 64;
    public static readonly RULE_prog = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_exprStmt = 2;
    public static readonly RULE_varDecl = 3;
    public static readonly RULE_assignmentStmt = 4;
    public static readonly RULE_derefAssignStmt = 5;
    public static readonly RULE_assignOp = 6;
    public static readonly RULE_breakStmt = 7;
    public static readonly RULE_ifStmt = 8;
    public static readonly RULE_whileStmt = 9;
    public static readonly RULE_blockStmt = 10;
    public static readonly RULE_printStmt = 11;
    public static readonly RULE_printlnStmt = 12;
    public static readonly RULE_formatExpr = 13;
    public static readonly RULE_returnStmt = 14;
    public static readonly RULE_functionDecl = 15;
    public static readonly RULE_expression = 16;
    public static readonly RULE_methodCall = 17;
    public static readonly RULE_lambdaExpr = 18;
    public static readonly RULE_lambdaCall = 19;
    public static readonly RULE_paramList = 20;
    public static readonly RULE_argList = 21;
    public static readonly RULE_typeAnnotation = 22;
    public static readonly RULE_literal = 23;

    public static readonly literalNames = [
        null, "';'", "'let'", "'mut'", "':'", "'='", "'*'", "'+='", "'-='", 
        "'*='", "'/='", "'%='", "'<<='", "'>>='", "'&='", "'^='", "'|='", 
        "'break'", "'if'", "'('", "')'", "'else'", "'while'", "'{'", "'}'", 
        "'print!'", "','", "'println!'", "'format!'", "'return'", "'fn'", 
        "'->'", "'-'", "'!'", "'&'", "'/'", "'%'", "'+'", "'<<'", "'>>'", 
        "'<'", "'<='", "'>'", "'>='", "'=='", "'!='", "'^'", "'|'", "'.'", 
        "'to_string'", "'to_owned'", "'bool'", "'char'", "'&str'", "'String'", 
        "'i64'", "'()'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "INT", "BOOL", "CHAR", "IDENTIFIER", "STRING", "WS", 
        "COMMENT", "BLOCK_COMMENT"
    ];
    public static readonly ruleNames = [
        "prog", "statement", "exprStmt", "varDecl", "assignmentStmt", "derefAssignStmt", 
        "assignOp", "breakStmt", "ifStmt", "whileStmt", "blockStmt", "printStmt", 
        "printlnStmt", "formatExpr", "returnStmt", "functionDecl", "expression", 
        "methodCall", "lambdaExpr", "lambdaCall", "paramList", "argList", 
        "typeAnnotation", "literal",
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
            this.state = 49;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 48;
                this.statement();
                }
                }
                this.state = 51;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2060320836) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1040220167) !== 0));
            this.state = 53;
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
            this.state = 67;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 55;
                this.exprStmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 56;
                this.varDecl();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 57;
                this.derefAssignStmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 58;
                this.assignmentStmt();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 59;
                this.ifStmt();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 60;
                this.whileStmt();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 61;
                this.breakStmt();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 62;
                this.printStmt();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 63;
                this.printlnStmt();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 64;
                this.blockStmt();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 65;
                this.returnStmt();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 66;
                this.functionDecl();
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
    public exprStmt(): ExprStmtContext {
        let localContext = new ExprStmtContext(this.context, this.state);
        this.enterRule(localContext, 4, CrustParser.RULE_exprStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 69;
            this.expression(0);
            this.state = 70;
            this.match(CrustParser.T__0);
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
        this.enterRule(localContext, 6, CrustParser.RULE_varDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 72;
            this.match(CrustParser.T__1);
            this.state = 74;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 73;
                this.match(CrustParser.T__2);
                }
            }

            this.state = 76;
            this.match(CrustParser.IDENTIFIER);
            this.state = 77;
            this.match(CrustParser.T__3);
            this.state = 78;
            this.typeAnnotation();
            this.state = 81;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 79;
                this.match(CrustParser.T__4);
                this.state = 80;
                this.expression(0);
                }
            }

            this.state = 83;
            this.match(CrustParser.T__0);
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
    public assignmentStmt(): AssignmentStmtContext {
        let localContext = new AssignmentStmtContext(this.context, this.state);
        this.enterRule(localContext, 8, CrustParser.RULE_assignmentStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 85;
            this.match(CrustParser.IDENTIFIER);
            this.state = 86;
            this.assignOp();
            this.state = 87;
            this.expression(0);
            this.state = 88;
            this.match(CrustParser.T__0);
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
    public derefAssignStmt(): DerefAssignStmtContext {
        let localContext = new DerefAssignStmtContext(this.context, this.state);
        this.enterRule(localContext, 10, CrustParser.RULE_derefAssignStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 90;
            this.match(CrustParser.T__5);
            this.state = 91;
            this.expression(0);
            this.state = 92;
            this.match(CrustParser.T__4);
            this.state = 93;
            this.expression(0);
            this.state = 94;
            this.match(CrustParser.T__0);
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
    public assignOp(): AssignOpContext {
        let localContext = new AssignOpContext(this.context, this.state);
        this.enterRule(localContext, 12, CrustParser.RULE_assignOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 96;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 130976) !== 0))) {
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
    public breakStmt(): BreakStmtContext {
        let localContext = new BreakStmtContext(this.context, this.state);
        this.enterRule(localContext, 14, CrustParser.RULE_breakStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 98;
            this.match(CrustParser.T__16);
            this.state = 99;
            this.match(CrustParser.T__0);
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
        this.enterRule(localContext, 16, CrustParser.RULE_ifStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 101;
            this.match(CrustParser.T__17);
            this.state = 102;
            this.match(CrustParser.T__18);
            this.state = 103;
            this.expression(0);
            this.state = 104;
            this.match(CrustParser.T__19);
            this.state = 105;
            this.statement();
            this.state = 108;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
            case 1:
                {
                this.state = 106;
                this.match(CrustParser.T__20);
                this.state = 107;
                this.statement();
                }
                break;
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
        this.enterRule(localContext, 18, CrustParser.RULE_whileStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 110;
            this.match(CrustParser.T__21);
            this.state = 111;
            this.match(CrustParser.T__18);
            this.state = 112;
            this.expression(0);
            this.state = 113;
            this.match(CrustParser.T__19);
            this.state = 114;
            this.statement();
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
    public blockStmt(): BlockStmtContext {
        let localContext = new BlockStmtContext(this.context, this.state);
        this.enterRule(localContext, 20, CrustParser.RULE_blockStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 116;
            this.match(CrustParser.T__22);
            this.state = 120;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2060320836) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1040220167) !== 0)) {
                {
                {
                this.state = 117;
                this.statement();
                }
                }
                this.state = 122;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 123;
            this.match(CrustParser.T__23);
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
    public printStmt(): PrintStmtContext {
        let localContext = new PrintStmtContext(this.context, this.state);
        this.enterRule(localContext, 22, CrustParser.RULE_printStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 125;
            this.match(CrustParser.T__24);
            this.state = 126;
            this.match(CrustParser.T__18);
            this.state = 127;
            this.match(CrustParser.STRING);
            this.state = 132;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26) {
                {
                {
                this.state = 128;
                this.match(CrustParser.T__25);
                this.state = 129;
                this.expression(0);
                }
                }
                this.state = 134;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 135;
            this.match(CrustParser.T__19);
            this.state = 136;
            this.match(CrustParser.T__0);
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
    public printlnStmt(): PrintlnStmtContext {
        let localContext = new PrintlnStmtContext(this.context, this.state);
        this.enterRule(localContext, 24, CrustParser.RULE_printlnStmt);
        let _la: number;
        try {
            this.state = 154;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 138;
                this.match(CrustParser.T__26);
                this.state = 139;
                this.match(CrustParser.T__18);
                this.state = 140;
                this.match(CrustParser.STRING);
                this.state = 145;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 26) {
                    {
                    {
                    this.state = 141;
                    this.match(CrustParser.T__25);
                    this.state = 142;
                    this.expression(0);
                    }
                    }
                    this.state = 147;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 148;
                this.match(CrustParser.T__19);
                this.state = 149;
                this.match(CrustParser.T__0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 150;
                this.match(CrustParser.T__26);
                this.state = 151;
                this.match(CrustParser.T__18);
                this.state = 152;
                this.match(CrustParser.T__19);
                this.state = 153;
                this.match(CrustParser.T__0);
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
    public formatExpr(): FormatExprContext {
        let localContext = new FormatExprContext(this.context, this.state);
        this.enterRule(localContext, 26, CrustParser.RULE_formatExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 156;
            this.match(CrustParser.T__27);
            this.state = 157;
            this.match(CrustParser.T__18);
            this.state = 158;
            this.match(CrustParser.STRING);
            this.state = 163;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26) {
                {
                {
                this.state = 159;
                this.match(CrustParser.T__25);
                this.state = 160;
                this.expression(0);
                }
                }
                this.state = 165;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 166;
            this.match(CrustParser.T__19);
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
        this.enterRule(localContext, 28, CrustParser.RULE_returnStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 168;
            this.match(CrustParser.T__28);
            this.state = 170;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268959808) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1040220167) !== 0)) {
                {
                this.state = 169;
                this.expression(0);
                }
            }

            this.state = 172;
            this.match(CrustParser.T__0);
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
    public functionDecl(): FunctionDeclContext {
        let localContext = new FunctionDeclContext(this.context, this.state);
        this.enterRule(localContext, 30, CrustParser.RULE_functionDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 174;
            this.match(CrustParser.T__29);
            this.state = 175;
            this.match(CrustParser.IDENTIFIER);
            this.state = 176;
            this.match(CrustParser.T__18);
            this.state = 178;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 60) {
                {
                this.state = 177;
                this.paramList();
                }
            }

            this.state = 180;
            this.match(CrustParser.T__19);
            this.state = 183;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 181;
                this.match(CrustParser.T__30);
                this.state = 182;
                this.typeAnnotation();
                }
            }

            this.state = 185;
            this.blockStmt();
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
        let _startState = 32;
        this.enterRecursionRule(localContext, 32, CrustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 208;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
            case 1:
                {
                this.state = 188;
                this.formatExpr();
                }
                break;
            case 2:
                {
                this.state = 189;
                this.literal();
                }
                break;
            case 3:
                {
                this.state = 190;
                this.match(CrustParser.IDENTIFIER);
                }
                break;
            case 4:
                {
                this.state = 191;
                this.match(CrustParser.T__18);
                this.state = 192;
                this.expression(0);
                this.state = 193;
                this.match(CrustParser.T__19);
                }
                break;
            case 5:
                {
                this.state = 195;
                this.match(CrustParser.T__31);
                this.state = 196;
                this.expression(18);
                }
                break;
            case 6:
                {
                this.state = 197;
                this.match(CrustParser.T__32);
                this.state = 198;
                this.expression(17);
                }
                break;
            case 7:
                {
                this.state = 199;
                this.match(CrustParser.T__5);
                this.state = 200;
                this.expression(16);
                }
                break;
            case 8:
                {
                this.state = 201;
                this.match(CrustParser.T__33);
                this.state = 202;
                this.match(CrustParser.T__2);
                this.state = 203;
                this.expression(15);
                }
                break;
            case 9:
                {
                this.state = 204;
                this.match(CrustParser.T__33);
                this.state = 205;
                this.expression(14);
                }
                break;
            case 10:
                {
                this.state = 206;
                this.lambdaExpr();
                }
                break;
            case 11:
                {
                this.state = 207;
                this.lambdaCall();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 247;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 245;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 14, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 210;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 211;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 1610612737) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 212;
                        this.expression(14);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 213;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 214;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 32 || _la === 37)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 215;
                        this.expression(13);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 216;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 217;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 38 || _la === 39)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 218;
                        this.expression(12);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 219;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 220;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 15) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 221;
                        this.expression(11);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 222;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 223;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 44 || _la === 45)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 224;
                        this.expression(10);
                        }
                        break;
                    case 6:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 225;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 226;
                        localContext._op = this.match(CrustParser.T__33);
                        this.state = 227;
                        this.expression(9);
                        }
                        break;
                    case 7:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 228;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 229;
                        localContext._op = this.match(CrustParser.T__45);
                        this.state = 230;
                        this.expression(8);
                        }
                        break;
                    case 8:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 231;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 232;
                        localContext._op = this.match(CrustParser.T__46);
                        this.state = 233;
                        this.expression(7);
                        }
                        break;
                    case 9:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 234;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 235;
                        this.match(CrustParser.T__33);
                        this.state = 236;
                        this.match(CrustParser.T__33);
                        this.state = 237;
                        this.expression(6);
                        }
                        break;
                    case 10:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 238;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 239;
                        this.match(CrustParser.T__46);
                        this.state = 240;
                        this.match(CrustParser.T__46);
                        this.state = 241;
                        this.expression(5);
                        }
                        break;
                    case 11:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CrustParser.RULE_expression);
                        this.state = 242;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 243;
                        this.match(CrustParser.T__47);
                        this.state = 244;
                        this.methodCall();
                        }
                        break;
                    }
                    }
                }
                this.state = 249;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
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
    public methodCall(): MethodCallContext {
        let localContext = new MethodCallContext(this.context, this.state);
        this.enterRule(localContext, 34, CrustParser.RULE_methodCall);
        try {
            this.state = 256;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CrustParser.T__48:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 250;
                this.match(CrustParser.T__48);
                this.state = 251;
                this.match(CrustParser.T__18);
                this.state = 252;
                this.match(CrustParser.T__19);
                }
                break;
            case CrustParser.T__49:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 253;
                this.match(CrustParser.T__49);
                this.state = 254;
                this.match(CrustParser.T__18);
                this.state = 255;
                this.match(CrustParser.T__19);
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
    public lambdaExpr(): LambdaExprContext {
        let localContext = new LambdaExprContext(this.context, this.state);
        this.enterRule(localContext, 36, CrustParser.RULE_lambdaExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 258;
            this.match(CrustParser.T__46);
            this.state = 260;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 60) {
                {
                this.state = 259;
                this.paramList();
                }
            }

            this.state = 262;
            this.match(CrustParser.T__46);
            this.state = 265;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 263;
                this.match(CrustParser.T__30);
                this.state = 264;
                this.typeAnnotation();
                }
            }

            this.state = 269;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CrustParser.T__5:
            case CrustParser.T__18:
            case CrustParser.T__27:
            case CrustParser.T__31:
            case CrustParser.T__32:
            case CrustParser.T__33:
            case CrustParser.T__46:
            case CrustParser.INT:
            case CrustParser.BOOL:
            case CrustParser.CHAR:
            case CrustParser.IDENTIFIER:
            case CrustParser.STRING:
                {
                this.state = 267;
                this.expression(0);
                }
                break;
            case CrustParser.T__22:
                {
                this.state = 268;
                this.blockStmt();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
    public lambdaCall(): LambdaCallContext {
        let localContext = new LambdaCallContext(this.context, this.state);
        this.enterRule(localContext, 38, CrustParser.RULE_lambdaCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 271;
            this.match(CrustParser.IDENTIFIER);
            this.state = 272;
            this.match(CrustParser.T__18);
            this.state = 274;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268959808) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1040220167) !== 0)) {
                {
                this.state = 273;
                this.argList();
                }
            }

            this.state = 276;
            this.match(CrustParser.T__19);
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
        this.enterRule(localContext, 40, CrustParser.RULE_paramList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 278;
            this.match(CrustParser.IDENTIFIER);
            this.state = 281;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 279;
                this.match(CrustParser.T__3);
                this.state = 280;
                this.typeAnnotation();
                }
            }

            this.state = 291;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26) {
                {
                {
                this.state = 283;
                this.match(CrustParser.T__25);
                this.state = 284;
                this.match(CrustParser.IDENTIFIER);
                this.state = 287;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 4) {
                    {
                    this.state = 285;
                    this.match(CrustParser.T__3);
                    this.state = 286;
                    this.typeAnnotation();
                    }
                }

                }
                }
                this.state = 293;
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
    public argList(): ArgListContext {
        let localContext = new ArgListContext(this.context, this.state);
        this.enterRule(localContext, 42, CrustParser.RULE_argList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 294;
            this.expression(0);
            this.state = 299;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26) {
                {
                {
                this.state = 295;
                this.match(CrustParser.T__25);
                this.state = 296;
                this.expression(0);
                }
                }
                this.state = 301;
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
    public typeAnnotation(): TypeAnnotationContext {
        let localContext = new TypeAnnotationContext(this.context, this.state);
        this.enterRule(localContext, 44, CrustParser.RULE_typeAnnotation);
        try {
            this.state = 313;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 302;
                this.match(CrustParser.T__50);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 303;
                this.match(CrustParser.T__51);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 304;
                this.match(CrustParser.T__52);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 305;
                this.match(CrustParser.T__53);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 306;
                this.match(CrustParser.T__54);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 307;
                this.match(CrustParser.T__55);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 308;
                this.match(CrustParser.T__33);
                this.state = 309;
                this.typeAnnotation();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 310;
                this.match(CrustParser.T__33);
                this.state = 311;
                this.match(CrustParser.T__2);
                this.state = 312;
                this.typeAnnotation();
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
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 46, CrustParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 315;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 23) !== 0))) {
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
        case 16:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 13);
        case 1:
            return this.precpred(this.context, 12);
        case 2:
            return this.precpred(this.context, 11);
        case 3:
            return this.precpred(this.context, 10);
        case 4:
            return this.precpred(this.context, 9);
        case 5:
            return this.precpred(this.context, 8);
        case 6:
            return this.precpred(this.context, 7);
        case 7:
            return this.precpred(this.context, 6);
        case 8:
            return this.precpred(this.context, 5);
        case 9:
            return this.precpred(this.context, 4);
        case 10:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,64,318,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,4,0,50,8,0,11,0,12,0,51,1,
        0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,68,8,1,
        1,2,1,2,1,2,1,3,1,3,3,3,75,8,3,1,3,1,3,1,3,1,3,1,3,3,3,82,8,3,1,
        3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,
        7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,109,8,8,1,9,1,9,1,9,1,9,1,
        9,1,9,1,10,1,10,5,10,119,8,10,10,10,12,10,122,9,10,1,10,1,10,1,11,
        1,11,1,11,1,11,1,11,5,11,131,8,11,10,11,12,11,134,9,11,1,11,1,11,
        1,11,1,12,1,12,1,12,1,12,1,12,5,12,144,8,12,10,12,12,12,147,9,12,
        1,12,1,12,1,12,1,12,1,12,1,12,3,12,155,8,12,1,13,1,13,1,13,1,13,
        1,13,5,13,162,8,13,10,13,12,13,165,9,13,1,13,1,13,1,14,1,14,3,14,
        171,8,14,1,14,1,14,1,15,1,15,1,15,1,15,3,15,179,8,15,1,15,1,15,1,
        15,3,15,184,8,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
        16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
        16,3,16,209,8,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
        16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
        16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,5,
        16,246,8,16,10,16,12,16,249,9,16,1,17,1,17,1,17,1,17,1,17,1,17,3,
        17,257,8,17,1,18,1,18,3,18,261,8,18,1,18,1,18,1,18,3,18,266,8,18,
        1,18,1,18,3,18,270,8,18,1,19,1,19,1,19,3,19,275,8,19,1,19,1,19,1,
        20,1,20,1,20,3,20,282,8,20,1,20,1,20,1,20,1,20,3,20,288,8,20,5,20,
        290,8,20,10,20,12,20,293,9,20,1,21,1,21,1,21,5,21,298,8,21,10,21,
        12,21,301,9,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
        1,22,3,22,314,8,22,1,23,1,23,1,23,0,1,32,24,0,2,4,6,8,10,12,14,16,
        18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,0,7,2,0,5,5,7,16,2,
        0,6,6,35,36,2,0,32,32,37,37,1,0,38,39,1,0,40,43,1,0,44,45,2,0,57,
        59,61,61,353,0,49,1,0,0,0,2,67,1,0,0,0,4,69,1,0,0,0,6,72,1,0,0,0,
        8,85,1,0,0,0,10,90,1,0,0,0,12,96,1,0,0,0,14,98,1,0,0,0,16,101,1,
        0,0,0,18,110,1,0,0,0,20,116,1,0,0,0,22,125,1,0,0,0,24,154,1,0,0,
        0,26,156,1,0,0,0,28,168,1,0,0,0,30,174,1,0,0,0,32,208,1,0,0,0,34,
        256,1,0,0,0,36,258,1,0,0,0,38,271,1,0,0,0,40,278,1,0,0,0,42,294,
        1,0,0,0,44,313,1,0,0,0,46,315,1,0,0,0,48,50,3,2,1,0,49,48,1,0,0,
        0,50,51,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,54,
        5,0,0,1,54,1,1,0,0,0,55,68,3,4,2,0,56,68,3,6,3,0,57,68,3,10,5,0,
        58,68,3,8,4,0,59,68,3,16,8,0,60,68,3,18,9,0,61,68,3,14,7,0,62,68,
        3,22,11,0,63,68,3,24,12,0,64,68,3,20,10,0,65,68,3,28,14,0,66,68,
        3,30,15,0,67,55,1,0,0,0,67,56,1,0,0,0,67,57,1,0,0,0,67,58,1,0,0,
        0,67,59,1,0,0,0,67,60,1,0,0,0,67,61,1,0,0,0,67,62,1,0,0,0,67,63,
        1,0,0,0,67,64,1,0,0,0,67,65,1,0,0,0,67,66,1,0,0,0,68,3,1,0,0,0,69,
        70,3,32,16,0,70,71,5,1,0,0,71,5,1,0,0,0,72,74,5,2,0,0,73,75,5,3,
        0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,76,1,0,0,0,76,77,5,60,0,0,77,
        78,5,4,0,0,78,81,3,44,22,0,79,80,5,5,0,0,80,82,3,32,16,0,81,79,1,
        0,0,0,81,82,1,0,0,0,82,83,1,0,0,0,83,84,5,1,0,0,84,7,1,0,0,0,85,
        86,5,60,0,0,86,87,3,12,6,0,87,88,3,32,16,0,88,89,5,1,0,0,89,9,1,
        0,0,0,90,91,5,6,0,0,91,92,3,32,16,0,92,93,5,5,0,0,93,94,3,32,16,
        0,94,95,5,1,0,0,95,11,1,0,0,0,96,97,7,0,0,0,97,13,1,0,0,0,98,99,
        5,17,0,0,99,100,5,1,0,0,100,15,1,0,0,0,101,102,5,18,0,0,102,103,
        5,19,0,0,103,104,3,32,16,0,104,105,5,20,0,0,105,108,3,2,1,0,106,
        107,5,21,0,0,107,109,3,2,1,0,108,106,1,0,0,0,108,109,1,0,0,0,109,
        17,1,0,0,0,110,111,5,22,0,0,111,112,5,19,0,0,112,113,3,32,16,0,113,
        114,5,20,0,0,114,115,3,2,1,0,115,19,1,0,0,0,116,120,5,23,0,0,117,
        119,3,2,1,0,118,117,1,0,0,0,119,122,1,0,0,0,120,118,1,0,0,0,120,
        121,1,0,0,0,121,123,1,0,0,0,122,120,1,0,0,0,123,124,5,24,0,0,124,
        21,1,0,0,0,125,126,5,25,0,0,126,127,5,19,0,0,127,132,5,61,0,0,128,
        129,5,26,0,0,129,131,3,32,16,0,130,128,1,0,0,0,131,134,1,0,0,0,132,
        130,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,132,1,0,0,0,135,
        136,5,20,0,0,136,137,5,1,0,0,137,23,1,0,0,0,138,139,5,27,0,0,139,
        140,5,19,0,0,140,145,5,61,0,0,141,142,5,26,0,0,142,144,3,32,16,0,
        143,141,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,
        146,148,1,0,0,0,147,145,1,0,0,0,148,149,5,20,0,0,149,155,5,1,0,0,
        150,151,5,27,0,0,151,152,5,19,0,0,152,153,5,20,0,0,153,155,5,1,0,
        0,154,138,1,0,0,0,154,150,1,0,0,0,155,25,1,0,0,0,156,157,5,28,0,
        0,157,158,5,19,0,0,158,163,5,61,0,0,159,160,5,26,0,0,160,162,3,32,
        16,0,161,159,1,0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,
        0,0,164,166,1,0,0,0,165,163,1,0,0,0,166,167,5,20,0,0,167,27,1,0,
        0,0,168,170,5,29,0,0,169,171,3,32,16,0,170,169,1,0,0,0,170,171,1,
        0,0,0,171,172,1,0,0,0,172,173,5,1,0,0,173,29,1,0,0,0,174,175,5,30,
        0,0,175,176,5,60,0,0,176,178,5,19,0,0,177,179,3,40,20,0,178,177,
        1,0,0,0,178,179,1,0,0,0,179,180,1,0,0,0,180,183,5,20,0,0,181,182,
        5,31,0,0,182,184,3,44,22,0,183,181,1,0,0,0,183,184,1,0,0,0,184,185,
        1,0,0,0,185,186,3,20,10,0,186,31,1,0,0,0,187,188,6,16,-1,0,188,209,
        3,26,13,0,189,209,3,46,23,0,190,209,5,60,0,0,191,192,5,19,0,0,192,
        193,3,32,16,0,193,194,5,20,0,0,194,209,1,0,0,0,195,196,5,32,0,0,
        196,209,3,32,16,18,197,198,5,33,0,0,198,209,3,32,16,17,199,200,5,
        6,0,0,200,209,3,32,16,16,201,202,5,34,0,0,202,203,5,3,0,0,203,209,
        3,32,16,15,204,205,5,34,0,0,205,209,3,32,16,14,206,209,3,36,18,0,
        207,209,3,38,19,0,208,187,1,0,0,0,208,189,1,0,0,0,208,190,1,0,0,
        0,208,191,1,0,0,0,208,195,1,0,0,0,208,197,1,0,0,0,208,199,1,0,0,
        0,208,201,1,0,0,0,208,204,1,0,0,0,208,206,1,0,0,0,208,207,1,0,0,
        0,209,247,1,0,0,0,210,211,10,13,0,0,211,212,7,1,0,0,212,246,3,32,
        16,14,213,214,10,12,0,0,214,215,7,2,0,0,215,246,3,32,16,13,216,217,
        10,11,0,0,217,218,7,3,0,0,218,246,3,32,16,12,219,220,10,10,0,0,220,
        221,7,4,0,0,221,246,3,32,16,11,222,223,10,9,0,0,223,224,7,5,0,0,
        224,246,3,32,16,10,225,226,10,8,0,0,226,227,5,34,0,0,227,246,3,32,
        16,9,228,229,10,7,0,0,229,230,5,46,0,0,230,246,3,32,16,8,231,232,
        10,6,0,0,232,233,5,47,0,0,233,246,3,32,16,7,234,235,10,5,0,0,235,
        236,5,34,0,0,236,237,5,34,0,0,237,246,3,32,16,6,238,239,10,4,0,0,
        239,240,5,47,0,0,240,241,5,47,0,0,241,246,3,32,16,5,242,243,10,1,
        0,0,243,244,5,48,0,0,244,246,3,34,17,0,245,210,1,0,0,0,245,213,1,
        0,0,0,245,216,1,0,0,0,245,219,1,0,0,0,245,222,1,0,0,0,245,225,1,
        0,0,0,245,228,1,0,0,0,245,231,1,0,0,0,245,234,1,0,0,0,245,238,1,
        0,0,0,245,242,1,0,0,0,246,249,1,0,0,0,247,245,1,0,0,0,247,248,1,
        0,0,0,248,33,1,0,0,0,249,247,1,0,0,0,250,251,5,49,0,0,251,252,5,
        19,0,0,252,257,5,20,0,0,253,254,5,50,0,0,254,255,5,19,0,0,255,257,
        5,20,0,0,256,250,1,0,0,0,256,253,1,0,0,0,257,35,1,0,0,0,258,260,
        5,47,0,0,259,261,3,40,20,0,260,259,1,0,0,0,260,261,1,0,0,0,261,262,
        1,0,0,0,262,265,5,47,0,0,263,264,5,31,0,0,264,266,3,44,22,0,265,
        263,1,0,0,0,265,266,1,0,0,0,266,269,1,0,0,0,267,270,3,32,16,0,268,
        270,3,20,10,0,269,267,1,0,0,0,269,268,1,0,0,0,270,37,1,0,0,0,271,
        272,5,60,0,0,272,274,5,19,0,0,273,275,3,42,21,0,274,273,1,0,0,0,
        274,275,1,0,0,0,275,276,1,0,0,0,276,277,5,20,0,0,277,39,1,0,0,0,
        278,281,5,60,0,0,279,280,5,4,0,0,280,282,3,44,22,0,281,279,1,0,0,
        0,281,282,1,0,0,0,282,291,1,0,0,0,283,284,5,26,0,0,284,287,5,60,
        0,0,285,286,5,4,0,0,286,288,3,44,22,0,287,285,1,0,0,0,287,288,1,
        0,0,0,288,290,1,0,0,0,289,283,1,0,0,0,290,293,1,0,0,0,291,289,1,
        0,0,0,291,292,1,0,0,0,292,41,1,0,0,0,293,291,1,0,0,0,294,299,3,32,
        16,0,295,296,5,26,0,0,296,298,3,32,16,0,297,295,1,0,0,0,298,301,
        1,0,0,0,299,297,1,0,0,0,299,300,1,0,0,0,300,43,1,0,0,0,301,299,1,
        0,0,0,302,314,5,51,0,0,303,314,5,52,0,0,304,314,5,53,0,0,305,314,
        5,54,0,0,306,314,5,55,0,0,307,314,5,56,0,0,308,309,5,34,0,0,309,
        314,3,44,22,0,310,311,5,34,0,0,311,312,5,3,0,0,312,314,3,44,22,0,
        313,302,1,0,0,0,313,303,1,0,0,0,313,304,1,0,0,0,313,305,1,0,0,0,
        313,306,1,0,0,0,313,307,1,0,0,0,313,308,1,0,0,0,313,310,1,0,0,0,
        314,45,1,0,0,0,315,316,7,6,0,0,316,47,1,0,0,0,26,51,67,74,81,108,
        120,132,145,154,163,170,178,183,208,245,247,256,260,265,269,274,
        281,287,291,299,313
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
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
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


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public exprStmt(): ExprStmtContext | null {
        return this.getRuleContext(0, ExprStmtContext);
    }
    public varDecl(): VarDeclContext | null {
        return this.getRuleContext(0, VarDeclContext);
    }
    public derefAssignStmt(): DerefAssignStmtContext | null {
        return this.getRuleContext(0, DerefAssignStmtContext);
    }
    public assignmentStmt(): AssignmentStmtContext | null {
        return this.getRuleContext(0, AssignmentStmtContext);
    }
    public ifStmt(): IfStmtContext | null {
        return this.getRuleContext(0, IfStmtContext);
    }
    public whileStmt(): WhileStmtContext | null {
        return this.getRuleContext(0, WhileStmtContext);
    }
    public breakStmt(): BreakStmtContext | null {
        return this.getRuleContext(0, BreakStmtContext);
    }
    public printStmt(): PrintStmtContext | null {
        return this.getRuleContext(0, PrintStmtContext);
    }
    public printlnStmt(): PrintlnStmtContext | null {
        return this.getRuleContext(0, PrintlnStmtContext);
    }
    public blockStmt(): BlockStmtContext | null {
        return this.getRuleContext(0, BlockStmtContext);
    }
    public returnStmt(): ReturnStmtContext | null {
        return this.getRuleContext(0, ReturnStmtContext);
    }
    public functionDecl(): FunctionDeclContext | null {
        return this.getRuleContext(0, FunctionDeclContext);
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


export class ExprStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
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


export class VarDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(CrustParser.IDENTIFIER, 0)!;
    }
    public typeAnnotation(): TypeAnnotationContext {
        return this.getRuleContext(0, TypeAnnotationContext)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
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


export class AssignmentStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(CrustParser.IDENTIFIER, 0)!;
    }
    public assignOp(): AssignOpContext {
        return this.getRuleContext(0, AssignOpContext)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_assignmentStmt;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterAssignmentStmt) {
             listener.enterAssignmentStmt(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitAssignmentStmt) {
             listener.exitAssignmentStmt(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitAssignmentStmt) {
            return visitor.visitAssignmentStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DerefAssignStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
        return CrustParser.RULE_derefAssignStmt;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterDerefAssignStmt) {
             listener.enterDerefAssignStmt(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitDerefAssignStmt) {
             listener.exitDerefAssignStmt(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitDerefAssignStmt) {
            return visitor.visitDerefAssignStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_assignOp;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterAssignOp) {
             listener.enterAssignOp(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitAssignOp) {
             listener.exitAssignOp(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitAssignOp) {
            return visitor.visitAssignOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BreakStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_breakStmt;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterBreakStmt) {
             listener.enterBreakStmt(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitBreakStmt) {
             listener.exitBreakStmt(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitBreakStmt) {
            return visitor.visitBreakStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
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
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
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


export class BlockStmtContext extends antlr.ParserRuleContext {
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
        return CrustParser.RULE_blockStmt;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterBlockStmt) {
             listener.enterBlockStmt(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitBlockStmt) {
             listener.exitBlockStmt(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitBlockStmt) {
            return visitor.visitBlockStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrintStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(CrustParser.STRING, 0)!;
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
        return CrustParser.RULE_printStmt;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterPrintStmt) {
             listener.enterPrintStmt(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitPrintStmt) {
             listener.exitPrintStmt(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitPrintStmt) {
            return visitor.visitPrintStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrintlnStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.STRING, 0);
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
        return CrustParser.RULE_printlnStmt;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterPrintlnStmt) {
             listener.enterPrintlnStmt(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitPrintlnStmt) {
             listener.exitPrintlnStmt(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitPrintlnStmt) {
            return visitor.visitPrintlnStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FormatExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(CrustParser.STRING, 0)!;
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
        return CrustParser.RULE_formatExpr;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterFormatExpr) {
             listener.enterFormatExpr(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitFormatExpr) {
             listener.exitFormatExpr(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitFormatExpr) {
            return visitor.visitFormatExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
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


export class FunctionDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(CrustParser.IDENTIFIER, 0)!;
    }
    public blockStmt(): BlockStmtContext {
        return this.getRuleContext(0, BlockStmtContext)!;
    }
    public paramList(): ParamListContext | null {
        return this.getRuleContext(0, ParamListContext);
    }
    public typeAnnotation(): TypeAnnotationContext | null {
        return this.getRuleContext(0, TypeAnnotationContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_functionDecl;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterFunctionDecl) {
             listener.enterFunctionDecl(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitFunctionDecl) {
             listener.exitFunctionDecl(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitFunctionDecl) {
            return visitor.visitFunctionDecl(this);
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
    public formatExpr(): FormatExprContext | null {
        return this.getRuleContext(0, FormatExprContext);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.IDENTIFIER, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public lambdaExpr(): LambdaExprContext | null {
        return this.getRuleContext(0, LambdaExprContext);
    }
    public lambdaCall(): LambdaCallContext | null {
        return this.getRuleContext(0, LambdaCallContext);
    }
    public methodCall(): MethodCallContext | null {
        return this.getRuleContext(0, MethodCallContext);
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


export class MethodCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_methodCall;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterMethodCall) {
             listener.enterMethodCall(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitMethodCall) {
             listener.exitMethodCall(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitMethodCall) {
            return visitor.visitMethodCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LambdaExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public blockStmt(): BlockStmtContext | null {
        return this.getRuleContext(0, BlockStmtContext);
    }
    public paramList(): ParamListContext | null {
        return this.getRuleContext(0, ParamListContext);
    }
    public typeAnnotation(): TypeAnnotationContext | null {
        return this.getRuleContext(0, TypeAnnotationContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_lambdaExpr;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterLambdaExpr) {
             listener.enterLambdaExpr(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitLambdaExpr) {
             listener.exitLambdaExpr(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitLambdaExpr) {
            return visitor.visitLambdaExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LambdaCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(CrustParser.IDENTIFIER, 0)!;
    }
    public argList(): ArgListContext | null {
        return this.getRuleContext(0, ArgListContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_lambdaCall;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterLambdaCall) {
             listener.enterLambdaCall(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitLambdaCall) {
             listener.exitLambdaCall(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitLambdaCall) {
            return visitor.visitLambdaCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode[];
    public IDENTIFIER(i: number): antlr.TerminalNode | null;
    public IDENTIFIER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CrustParser.IDENTIFIER);
    	} else {
    		return this.getToken(CrustParser.IDENTIFIER, i);
    	}
    }
    public typeAnnotation(): TypeAnnotationContext[];
    public typeAnnotation(i: number): TypeAnnotationContext | null;
    public typeAnnotation(i?: number): TypeAnnotationContext[] | TypeAnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeAnnotationContext);
        }

        return this.getRuleContext(i, TypeAnnotationContext);
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


export class ArgListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
        return CrustParser.RULE_argList;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterArgList) {
             listener.enterArgList(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitArgList) {
             listener.exitArgList(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitArgList) {
            return visitor.visitArgList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeAnnotationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeAnnotation(): TypeAnnotationContext | null {
        return this.getRuleContext(0, TypeAnnotationContext);
    }
    public override get ruleIndex(): number {
        return CrustParser.RULE_typeAnnotation;
    }
    public override enterRule(listener: CrustListener): void {
        if(listener.enterTypeAnnotation) {
             listener.enterTypeAnnotation(this);
        }
    }
    public override exitRule(listener: CrustListener): void {
        if(listener.exitTypeAnnotation) {
             listener.exitTypeAnnotation(this);
        }
    }
    public override accept<Result>(visitor: CrustVisitor<Result>): Result | null {
        if (visitor.visitTypeAnnotation) {
            return visitor.visitTypeAnnotation(this);
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
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(CrustParser.STRING, 0);
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
