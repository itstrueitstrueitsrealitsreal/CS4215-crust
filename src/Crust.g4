grammar Crust;

// A program is one or more statements ending with EOF.
prog: (statement)+ EOF;

statement:
	exprStmt
	| varDecl
	| derefAssignStmt
	| assignmentStmt
	| ifStmt
	| whileStmt
	| breakStmt
	| printStmt
	| printlnStmt
	| blockStmt
	| returnStmt
	| functionDecl;

exprStmt: expression ';';
varDecl:
	'let' ('mut')? IDENTIFIER ':' typeAnnotation ('=' expression)? ';';
// Assignment statement supports both plain assignment and compound assignment.
assignmentStmt: IDENTIFIER assignOp expression ';';
derefAssignStmt: '*' expression '=' expression ';';

assignOp:
	'='
	| '+='
	| '-='
	| '*='
	| '/='
	| '%='
	| '<<='
	| '>>='
	| '&='
	| '^='
	| '|=';

breakStmt: 'break' ';';
ifStmt: 'if' '(' expression ')' statement ('else' statement)?;
whileStmt: 'while' '(' expression ')' statement;
// A block is a sequence of statements enclosed in braces.
blockStmt: '{' statement* '}';

// Macros: print!: prints without a newline.
printStmt: 'print!' '(' STRING (',' expression)* ')' ';';
// println!: prints with a newline. Also allows no arguments.
printlnStmt:
	'println!' '(' STRING (',' expression)* ')' ';'
	| 'println!' '(' ')' ';';
// format!: formats a string with arguments.
formatExpr: 'format!' '(' STRING (',' expression)* ')';

returnStmt: 'return' expression? ';';
functionDecl:
	'fn' IDENTIFIER '(' paramList? ')' ('->' typeAnnotation)? blockStmt;

expression:
    formatExpr
    | literal
    | IDENTIFIER
    | '(' expression ')'
    | '-' expression                         // unary minus
    | '!' expression                         // logical not
    | '*' expression                         // Dereference
    | '&' 'mut' expression                   // Mutable reference (separate rules)
    | '&' expression                         // Immutable reference
    | expression op = ('*' | '/' | '%') expression     // multiplicative
    | expression op = ('+' | '-') expression           // additive
    | expression op = ('<<' | '>>') expression         // bit-shift
    | expression op = ('<' | '<=' | '>' | '>=') expression  // relational
    | expression op = ('==' | '!=') expression         // equality
    | expression op = '&' expression                   // bitwise AND (single &)
    | expression op = '^' expression                   // bitwise XOR
    | expression op = '|' expression                   // bitwise OR
    | expression '&' '&' expression              // Use '&' '&' instead of '&&'
    | expression '|' '|' expression              // Use '|' '|' instead of '||'
    | lambdaExpr
    | lambdaCall
    | expression '.' methodCall;

methodCall: 'to_string' '(' ')' | 'to_owned' '(' ')';
lambdaExpr:
	'|' paramList? '|' ('->' typeAnnotation)? (
		expression
		| blockStmt
	);
lambdaCall: IDENTIFIER '(' argList? ')';
paramList:
	IDENTIFIER (':' typeAnnotation)? (
		',' IDENTIFIER (':' typeAnnotation)?
	)*;
argList: expression (',' expression)*;

typeAnnotation:
	'bool'
	| 'char'
	| '&str' // implements copy
	| 'String' // implements move
	| 'i64'
	| '()'
	| '&' typeAnnotation // Immutable reference
    | '&' 'mut' typeAnnotation; // Mutable reference

literal: INT | BOOL | CHAR | STRING;
INT: [0-9]+;
BOOL: 'true' | 'false';
CHAR: '\'' . '\'';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
STRING: '"' ( ~["\\] | '\\' .)* '"';

WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;