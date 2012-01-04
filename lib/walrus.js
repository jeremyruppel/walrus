var Walrus = { VERSION : '0.0.1' };

Walrus.Parser = require( './walrus/parser' );
Walrus.AST    = require( './walrus/ast' );

Walrus.Parser.parser.yy = Walrus.AST;

module.exports = Walrus;
