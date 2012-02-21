AST = { }

###*
 * AST.SafeNode
 * A simple wrapper node to signify safe compilation for the rest of
 * the nodes in the tree.
###
class AST.SafeNode
  constructor : ( @node ) ->

  compile : ( context, root, safe ) -> @node.compile context, root, true

###*
 * AST.NodeCollection
 * A collection of nodes with the #compile interface, simply compiles
 * each of its nodes and returns the resulting array.
###
class AST.NodeCollection
  constructor : ( @nodes ) ->

  compile : ( context, root, safe ) -> node.compile context, root, safe for node in @nodes

###*
 * AST.JoinedNodeCollection
 * Compiles all of its nodes, then joins them.
###
class AST.JoinedNodeCollection extends AST.NodeCollection
  constructor : ( @nodes ) ->

  compile : ( context, root, safe ) -> super( context, root, safe ).join ''

###*
 * AST.DocumentNode
 * The root node of the document. Defaults to escaping its content.
###
class AST.DocumentNode extends AST.JoinedNodeCollection
  compile : ( context ) -> super context, context, false

###*
 * AST.ContentNode
 * A node with non-mustache content, probably HTML. We simply pass the content through.
###
class AST.ContentNode
  constructor : ( @content ) ->

  compile : ( context, root, safe ) -> @content

###*
 * AST.MemberNode
 * A node that refers to a member of the context. We don't explicitly check that this
 * member exists in case the developer wants to check that in a conditional.
 *
 * `{{member}}`, for instance, will compile to `index[ 'member' ]`.
###
class AST.MemberNode
  constructor : ( @path ) ->

  compile : ( index, context, root, safe ) ->

    if safe then index[ @path ] else Walrus.Utils.escape( index[ @path ] )

###*
 * AST.MethodNode
 * A node that refers to a member of the context, specifically a method, and will
 * call that method with any given arguments after they compile. We explicitly
 * check that the method exists to avoid 'foo is not a function' or other cryptic
 * errors.
 *
 * `{{member( )}}`, for instance, will compile to `index[ 'member' ]( )`.
###
class AST.MethodNode
  constructor : ( @path, @arguments ) ->

  compile : ( index, context, root, safe ) ->

    throw new Error "Cannot find any method named '#{@path}' in #{index}." unless index[ @path ]?

    index[ @path ] @arguments.compile( context, root, safe )...

###*
 * AST.ThisNode
 * A node that simply returns the current context to be evaluated. This is most useful
 * during implicit iteration and is denoted with a dot, like `{{.}}`.
 *
 * One example is when you've got an array of primitive types, like strings:
 *
 *  var names = [ 'Antonio', 'Ben', 'Curtis' ];
 *
 *  {{:each names do}}
 *  <li>{{.}}</li>
 *  {{end}}
 *
 * A similar use case is when the root view object is an array:
 *
 *  var view = [ { name : 'Antonio' }, { name : 'Ben' }, { name : 'Curtis' } ];
 *
 *  {{:each . do}}
 *  <li>{{name}}</li>
 *  {{end}}
###
class AST.ThisNode
  compile : ( context, root, safe ) -> context

###*
 * AST.PathNode
 * A node that represents an object path. The path segments are typically
 * `AST.MemberNode`s and `AST.MethodNode`s.
 *
 * A `PathNode` may be evaluated in two contexts: the current "local" context
 * and the "root" context. For example, `{{foo.bar.baz}}` will try to evaluate
 * the object path from the current context, while `{{@foo.bar.baz}}` will
 * start back up at the root view object.
###
class AST.PathNode
  constructor : ( @paths, @local ) ->

  compile : ( context, root, safe ) ->

    paths = @paths.concat( )
    scope = if @local then context else root

    Walrus.Utils.reduce paths, scope, ( scope, path ) -> path.compile scope, context, root, safe

###*
 * AST.PrimitiveNode
 * A node whose value is a javascript primitive or literal. Supported
 * primitives are:
 *
 * - Strings with "double quotes"
 * - Strings with 'single quotes'
 * - Numbers, like 45 or 987.654
 * - Booleans, true or false
 *
 * TODO These primitives are currently parsed in the lexing phase. I'm
 * kinda feeling like a bit of that logic should be moved to the AST instead.
 * Perhaps declare the literal type in the lexer and determine the conversion
 * here, or create distinct classes for each primitive type, like `BooleanNode`
 * and `NumberNode`.
###
class AST.PrimitiveNode
  constructor : ( @value ) ->

  compile : ( context, root, safe ) -> @value

###*
 * AST.ExpressionNode
 * An expression is the main part of a mustache. It typically consists of a path,
 * which gets compiled, then passed to any filters to be manipulated further.
 * The subject of an expression may also be a primitive.
 *
 * The breakdown of a single-line mustache is:
 *
 *  {{ expression | :filter(s) }}
 *
 * And a block mustache with a helper, like:
 *
 *  {{ :helper expression | :filters(s) do }}
 *    // block content
 *  {{ end }}
###
class AST.ExpressionNode
  constructor : ( @paths, @filters ) ->

  compile : ( context, root, safe ) -> @filters.apply @paths.compile( context, root, safe ), context, root, safe

###*
 * AST.BlockNode
 * A node that contains other statements within a block. `BlockNode`s are denoted
 * by the use of a _:helper_, and the presence of `do`/`end` to signify the start
 * and end of the node's block. It is the helper's responsibility to determine
 * how to compile the block.
 *
 * Will throw an error if the named helper is not defined in `Walrus.Helpers`.
###
class AST.BlockNode
  constructor : ( @name, @expression, @block ) ->

    throw new Error "Cannot find any helper named '#{@name}'." unless Walrus.Helpers[ @name ]?

  compile : ( context, root, safe ) -> Walrus.Helpers[ @name ] @expression, context, root, safe, @block

###*
 * AST.FilterNode
 * A node that specifies a _filter_ used to post-process the result of the expression.
 * Filters may also accept arguments, just like methods. These arguments are determined
 * and handled by the filter itself.
 *
 * Will throw an error if the named filter is not defined in `Walrus.Filters`.
###
class AST.FilterNode
  constructor : ( @name, @arguments ) ->

    throw new Error "Cannot find any filter named '#{@name}'." unless Walrus.Filters[ @name ]?

  apply : ( value, context, root, safe ) ->

    Walrus.Filters[ @name ] value, @arguments.compile( context, root, safe )...

###*
 * AST.FilterCollection
 * A collection of filters. Filters are applied to the expression
 * in order from left to right.
###
class AST.FilterCollection
  constructor : ( @filters ) ->

  apply : ( expression, context, root, safe ) ->

    Walrus.Utils.reduce @filters, expression, ( memo, filter ) -> filter.apply memo, context, root, safe

# Export that AST, son.
Walrus.AST = AST
