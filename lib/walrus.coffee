Walrus = VERSION : '<%= JSON.parse( fs.readFileSync( "package.json", "utf8" ) )[ "version" ] %>'

`<%- fs.readFileSync( 'lib/walrus/parser.js', 'utf8' ) %>`

###*
 * Utils
###
<%- fs.readFileSync( 'lib/walrus/utils.coffee', 'utf8' ) %>

###*
 * AST
###
<%- fs.readFileSync( 'lib/walrus/ast.coffee', 'utf8' ) %>

###*
 * Core Helpers
###
<%- fs.readFileSync( 'lib/walrus/helpers.coffee', 'utf8' ) %>

###*
 * Core Filters
###
<%- fs.readFileSync( 'lib/walrus/filters.coffee', 'utf8' ) %>

###*
 * Setup
###
Walrus.Parser           = parser : walrus, parse  : -> walrus.parse arguments...
Walrus.Parser.parser.yy = Walrus.AST

###*
 * Export
###
((root, factory) ->
  if typeof exports is "object"
    module.exports = factory()
  else if typeof define is "function" and define.amd
    define "walrus", [], factory()
  else
    root.Walrus = factory
) this, -> Walrus