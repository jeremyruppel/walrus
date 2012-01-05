AST =
  trim    : ( str ) -> str.replace /^\s+|\s+$/g, ''

class AST.NodeCollection
  constructor : ( @nodes ) ->

  compile : ( context, root ) -> AST.trim ( node.compile context, root for node in @nodes ).join ''

class AST.Template extends AST.NodeCollection
  compile : ( context ) -> super( context, context ) + "\n"

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

class AST.ExpressionNode
  constructor : ( @paths, @filters ) -> # TODO add in filters here

  compile : ( context, root ) -> @filters.apply @paths.compile( context, root )

class AST.BlockNode
  constructor : ( @helper, @expression, @block ) ->

  compile : ( context, root ) -> Walrus.Helpers[ @helper ] @expression, context, root, @block

class AST.FilterCollection
  constructor : ( @names ) ->

  apply : ( expression ) ->

    # feels like this might be cleaners with an #inject helper
    value = expression

    ( value = Walrus.Filters[ name ] value ) for name in @names

    value


Walrus.AST = AST
