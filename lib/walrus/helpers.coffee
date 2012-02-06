Helpers = add : ( name, fn ) -> @[ name ] = fn

###*
 * *:if*
 * Evaluates a block only if the result of `expression` is truthy. Opposite of `:uness`.
 *
 * Usage:
 *
 *  {{:if expression do}}
 *    // block content
 *  {{end}}
###
Helpers.add 'if', ( expression, context, root, block ) ->

  if expression.compile context, root then block.compile context, root else ''

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
Helpers.add 'unless', ( expression, context, root, block ) ->

  if not expression.compile context, root then block.compile context, root else ''

###*
 * *:each*
 * Iterates over the array returned by `expression` and evaluates the block
 * for each member of the array. The compiled blocks are then joined.
###
Helpers.add 'each', ( expression, context, root, block ) ->

  items = for item, index in expression.compile context, root

    item[ '$index' ] = index

    block.compile item, root

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
Helpers.add 'with', ( expression, context, root, block ) ->

  block.compile ( expression.compile context, root ), root

# Export those helpers, son.
Walrus.Helpers = Helpers
