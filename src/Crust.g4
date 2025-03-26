grammar Crust;

prog: (expression ';')+ EOF; // A program is one or more expressions, each ending with a semicolon.

expression:
	literal
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

literal: INT | BOOL | CHAR;
INT: [0-9]+;
BOOL: 'true' | 'false';
CHAR: '\'' . '\'';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;

WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;