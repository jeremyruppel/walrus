Walrus.Helpers = { }

Walrus.addHelper = ( name, fn ) ->
  throw "Cannot override existing helper named '#{name}'." if @Helpers[ name ]?
  @Helpers[ name ] = fn

###*
 * *:if*
 * Evaluates a block only if the result of `expression` is truthy. Opposite of `:unless`.
 *
 * Usage:
 *
 *  {{:if expression do}}
 *    // block content
 *  {{end}}
###
Walrus.addHelper 'if', ( expression, context, root, safe, block ) ->

  if expression.compile context, root, safe then block.compile context, root, safe else ''

###*
 * *:unless*
 * Evaluates a block only if the result of `expression` is falsy. Opposite of `:if`.
 *
 * Usage:
 *
 *  {{:unless expression do}}
 *    // block content
 *  {{end}}
###
Walrus.addHelper 'unless', ( expression, context, root, safe, block ) ->

  if not expression.compile context, root, safe then block.compile context, root, safe else ''

###*
 * *:each*
 * Iterates over the array returned by `expression` and evaluates the block
 * for each member of the array. The compiled blocks are then joined.
###
Walrus.addHelper 'each', ( expression, context, root, safe, block ) ->

  array = expression.compile context, root, safe

  items = for item, index in array

    item[ '$index'  ] = index
    item[ '$parent' ] = context
    item[ '$length' ] = array.length

    block.compile item, root, safe

  items.join ''

###*
 * *:with*
 * Changes the local context of the block to the result of `expression`.
 *
 * Usage:
 *
 *  {{:with expression do}}
 *    <p>{{name}}</p>
 *  {{end}}
###
Walrus.addHelper 'with', ( expression, context, root, safe, block ) ->

  subcontext = ( expression.compile context, root, safe )

  subcontext[ '$parent' ] = context

  block.compile subcontext, root, safe
