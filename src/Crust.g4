grammar Crust;

prog: stmt* EOF;

stmt:
	varDecl
	| exprStmt
	| ifStmt
	| whileStmt
	| funcDecl
	| returnStmt
	| block;

varDecl: 'let' 'mut'? ID (':' type)? ('=' expr)? ';';
exprStmt: expr ';';
ifStmt: 'if' expr block ('else' (ifStmt | block))?;
whileStmt: 'while' expr block;
funcDecl: 'fn' ID '(' paramList? ')' ('->' type)? block;
returnStmt: 'return' expr? ';';
paramList: param (',' param)*;
param: ID ':' type;
block: '{' stmt* '}';

expr: assignment;

assignment: ID ('=' assignment)? | logical;

logical: comparison (('&&' | '||') comparison)*;

comparison:
	term (('==' | '!=' | '<' | '<=' | '>' | '>=') term)*;

term: factor (('+' | '-') factor)*;

factor: unary (('*' | '/') unary)*;

unary: ('!' | '-' | '&' 'mut'?) unary | primary;

primary:
	INT
	| FLOAT
	| BOOL
	| STRING
	| ID
	| functionCall
	| '(' expr ')';

functionCall: ID '(' arguments? ')';
arguments: expr (',' expr)*;

type:
	'i32'
	| 'f64'
	| 'bool'
	| 'String'
	| '&' 'mut'? type
	| '()'; // Unit type

// Lexer Rules
ID: [a-zA-Z_][a-zA-Z_0-9]*;
INT: [0-9]+;
FLOAT: [0-9]+ '.' [0-9]+;
BOOL: 'true' | 'false';
STRING: '"' (~["\r\n] | '\\"')* '"';
COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;
WS: [ \t\r\n]+ -> skip;