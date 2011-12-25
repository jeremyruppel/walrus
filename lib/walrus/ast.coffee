AST =
  trim : ( str ) -> str.replace /^\s+|\s+$/g, ''

class AST.NodeCollection
  constructor : ( @nodes ) ->

  compile : ( context, root ) -> ( node.compile context, root for node in @nodes ).join ''

class AST.Template extends AST.NodeCollection
  compile : ( context ) -> super context, context

class AST.ContentNode
  constructor : ( @content ) ->

  compile : ( context, root ) -> @content

class AST.MemberNode
  constructor : ( @path ) ->

  compile : ( context, root ) -> context[ @path ]

class AST.MethodNode
  constructor : ( @path, @arguments ) ->

  compile : ( context, root ) -> context[ @path ] (argument.compile context, root for argument in @arguments)...

class AST.ThisNode
  compile : ( context, root ) -> context

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

class AST.MustacheNode
  constructor : ( @helper, @expression, @block ) ->

  compile : ( context, root ) ->

    context = @expression.compile context, root

    return context unless @block?

    # TODO i feel like there could be a better (faster) check here, but this works for now
    context = [ context ] unless context instanceof Array

    result = for item in context
      AST.trim ( node.compile item, root for node in @block ).join ''

    AST.trim result.join ''

module.exports = AST
