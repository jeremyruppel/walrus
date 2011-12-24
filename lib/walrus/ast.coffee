AST = { }

class AST.Template
  constructor : ( @nodes ) ->

  compile : ( context ) -> ( node.compile context for node in @nodes ).join ''

class AST.ContentNode
  constructor : ( @content ) ->

  compile : ( context ) -> @content

class AST.MemberNode
  constructor : ( @path ) ->

  compile : ( context ) -> context[ @path ]

class AST.MethodNode
  constructor : ( @path, @arguments ) ->

  compile : ( context, base ) -> context[ @path ] (argument.compile base for argument in @arguments)...

class AST.PathNode
  constructor : ( @paths ) ->

  compile : ( context ) ->

    curr = context
    paths = @paths.concat( )

    while paths.length

      path = paths.shift( )

      curr = path.compile curr, context

    curr

module.exports = AST
