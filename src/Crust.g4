grammar Crust;

prog: stmt* EOF;

stmt: varDecl | exprStmt | ifStmt | whileStmt | funcDecl;

varDecl: 'let' ID '=' expr ';';

exprStmt: expr ';';

ifStmt: 'if' '(' expr ')' block ('else' block)?;

whileStmt: 'while' '(' expr ')' block;

funcDecl: 'fn' ID '(' paramList? ')' block;

paramList: ID (',' ID)*;

block: '{' stmt* '}';

expr:
	expr op = ('+' | '-' | '*' | '/') expr
	| INT
	| ID
	| '(' expr ')';

ID: [a-zA-Z_][a-zA-Z_0-9]*;
INT: [0-9]+;
WS: [ \t\r\n]+ -> skip;