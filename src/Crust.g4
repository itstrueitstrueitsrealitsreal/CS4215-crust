grammar Crust;

prog: (expression ';')+ EOF; // A program is one or more expressions, each ending with a semicolon.

expression
    : expression op=('*'|'/') expression  // Note: Reordered for proper precedence
    | expression op=('+'|'-') expression
    | INT
    | '(' expression ')'
    ;

INT: [0-9]+;
WS: [ \t\r\n]+ -> skip;