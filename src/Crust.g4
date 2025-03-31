grammar Crust;

// A program is one or more statements ending with EOF.
prog: (statement)+ EOF;

// A statement can be an expression statement, variable declaration, if, while, or block.
statement:
	exprStmt
	| varDecl
	| assignmentStmt
	| ifStmt
	| whileStmt
	| breakStmt
	| printStmt
	| printStmt
	| printlnStmt
	| blockStmt;

// An expression statement is an expression followed by a semicolon.
exprStmt: expression ';';

// A variable declaration: using 'let' similar to Rust.
varDecl: 'let' ('mut')? IDENTIFIER ('=' expression)? ';';

// Assignment statement now supports both plain assignment and compound assignment.
assignmentStmt: IDENTIFIER assignOp expression ';';

// Define the assignment operator: a plain '=' or any of the compound assignment operators.
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

// A break statement.
breakStmt: 'break' ';';

// An if statement with optional else.
ifStmt: 'if' '(' expression ')' statement ('else' statement)?;

// A while loop.
whileStmt: 'while' '(' expression ')' statement;

// A block is a sequence of statements enclosed in braces.
blockStmt: '{' statement* '}'; // have not implemented scope yet

// Macros: 

// format!: formats a string with arguments.
formatExpr: 'format!' '(' STRING (',' expression)* ')';

// print!: prints without a newline.
printStmt: 'print!' '(' STRING (',' expression)* ')' ';';

// println!: prints with a newline. Also allows no arguments.
printlnStmt:
	'println!' '(' STRING (',' expression)* ')' ';'
	| 'println!' '(' ')' ';';

expression:
	formatExpr
	| literal
	| IDENTIFIER
	| '(' expression ')'
	| '-' expression // unary minus
	| '!' expression // logical not
	| expression op = ('*' | '/' | '%') expression // multiplicative: *, /, %
	| expression op = ('+' | '-') expression // additive: +, -
	| expression op = ('<<' | '>>') expression // bit-shift: <<, >>
	| expression op = ('<' | '<=' | '>' | '>=') expression // relational: <, <=, >, >=
	| expression op = ('==' | '!=') expression // equality: ==, !=
	| expression op = '&' expression // bitwise AND
	| expression op = '^' expression // bitwise XOR
	| expression op = '|' expression // bitwise OR
	| expression op = ('&&' | '||') expression; // logical AND/OR

literal: INT | BOOL | CHAR | STRING;
INT: [0-9]+;
BOOL: 'true' | 'false';
CHAR: '\'' . '\'';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
STRING: '"' ( ~["\\] | '\\' .)* '"';

WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;