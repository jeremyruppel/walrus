###*
 * Setup
###
Walrus.Parser           = parser : walrus, parse  : -> walrus.parse arguments...
Walrus.Parser.parser.yy = Walrus.AST

###*
 * Export
###
(global ? @).Walrus = Walrus
