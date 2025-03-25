grammar Crust;

prog: (expression ';')+ EOF; // A program is one or more expressions, each ending with a semicolon.

expression:
	literal
	| expression op = ('*' | '/') expression // Note: Reordered for proper precedence
	| expression op = ('+' | '-') expression
	| expression op = ('<' | '<=' | '>' | '>=') expression
	| expression op = ('==' | '!=') expression
	| expression op = ('&&' | '||') expression
	| INT
	| BOOL
	| '(' expression ')';

literal: INT | BOOL | CHAR;
INT: [0-9]+;
BOOL: 'true' | 'false';
CHAR: '\'' . '\'';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;

WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;