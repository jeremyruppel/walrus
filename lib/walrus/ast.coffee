AST = { }

class AST.Template
  constructor : ( @nodes ) ->

  compile : ( context ) -> ( node.compile context for node in @nodes ).join ''

class AST.ContentNode
  constructor : ( @content ) ->

  compile : ( context ) -> @content

class AST.PathNode
  constructor : ( @paths ) ->

  compile : ( context ) ->

    curr  = context
    paths = @paths.concat( )

    while paths.length

      path = paths.shift( )

      curr = if typeof curr[ path ] is 'function'
        curr[ path ]( )
      else
        curr[ path ]

    curr

module.exports = AST
