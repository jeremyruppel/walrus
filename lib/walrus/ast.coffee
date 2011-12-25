AST = { }

class AST.Template
  constructor : ( @nodes ) ->

  compile : ( context ) -> ( node.compile context, context for node in @nodes ).join ''

class AST.ContentNode
  constructor : ( @content ) ->

  compile : ( context, root ) -> @content

class AST.MemberNode
  constructor : ( @path ) ->

  compile : ( context, root ) -> context[ @path ]

class AST.MethodNode
  constructor : ( @path, @arguments ) ->

  compile : ( context, root ) -> context[ @path ] (argument.compile context, root for argument in @arguments)...

class AST.PathNode
  constructor : ( @paths, @local ) ->

  compile : ( context, root ) ->

    index = if @local then context else root
    paths = @paths.concat( )
    index = ( paths.shift( ) ).compile index, root while paths.length isnt 0
    index

class AST.PrimitiveNode
  constructor : ( @value ) ->

  compile : ( context, root ) -> @value

class AST.BlockNode
  constructor : ( @mustache, @nodes ) ->

  compile : ( context, root ) ->

    context = @mustache.compile context, root

    ( node.compile context, root for node in @nodes ).join ''


module.exports = AST
