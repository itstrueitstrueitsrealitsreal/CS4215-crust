grammar Crust;

// The entry point for a Crust program
program: statement* EOF;

// Statements: variable declarations, function declarations, blocks, if/else, while loops, return
// statements, and expression statements.
statement:
	variableDeclaration
	| functionDeclaration
	| block
	| ifStatement
	| whileStatement
	| returnStatement
	| expressionStatement;

// Variable declaration supports an optional 'mut' for mutability and an optional initializer.
variableDeclaration:
	'let' ('mut')? Identifier ('=' expression)? ';';

// Function declaration with a parameter list (parameters may have types) and a block body.
functionDeclaration:
	'fn' Identifier '(' parameterList? ')' block;

// A comma-separated list of parameters.
parameterList: parameter (',' parameter)*;

// Each parameter is an identifier, optionally annotated with a type.
parameter: Identifier (':' type)?;

// A block is a sequence of statements enclosed in braces.
block: '{' statement* '}';

// An if statement with an optional else branch.
ifStatement: 'if' '(' expression ')' block ('else' block)?;

// A while loop with a condition and block body.
whileStatement: 'while' '(' expression ')' block;

// A return statement may optionally return an expression.
returnStatement: 'return' expression? ';';

// An expression statement ends with a semicolon.
expressionStatement: expression ';';

// --- Expressions ---
// 
// The grammar below implements a simple expression language with assignment, logical operators,
// equality and relational operators, arithmetic, and unary operations. (Borrowing using '&' is
// handled as a unary operator.)

expression: assignment;

// Assignment: right-associative.
assignment: logicalOr ( '=' assignment)?;

// Logical OR.
logicalOr: logicalAnd ( '||' logicalAnd)*;

// Logical AND.
logicalAnd: equality ( '&&' equality)*;

// Equality operators.
equality: relational ( ( '==' | '!=') relational)*;

// Relational operators.
relational: additive ( ( '<' | '>' | '<=' | '>=') additive)*;

// Additive: addition and subtraction.
additive: multiplicative ( ( '+' | '-') multiplicative)*;

// Multiplicative: multiplication, division, and modulo.
multiplicative: unary ( ( '*' | '/' | '%') unary)*;

// Unary operations: negation, logical NOT, and address-of (borrow).
unary: ( '!' | '-' | '&')? primary;

// Primary expressions: integer literals, identifiers, or parenthesized expressions.
primary: Integer | Identifier | '(' expression ')';

// A simple type is just an identifier.
type: Identifier;

// --- Lexer rules ---

Identifier: [a-zA-Z_][a-zA-Z_0-9]*;

Integer: [0-9]+;

// Skip whitespace.
WS: [ \t\r\n]+ -> skip;