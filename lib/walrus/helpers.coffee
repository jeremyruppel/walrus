Helpers = add : ( name, fn ) -> @[ name ] = fn

Helpers.add 'if', ( expression, context, root, block ) ->

  if expression.compile context, root then block.compile context, root else ''

Helpers.add 'unless', ( expression, context, root, block ) ->

  if not expression.compile context, root then block.compile context, root else ''

Helpers.add 'each', ( expression, context, root, block ) ->

  items = for item in expression.compile context, root

    block.compile item, root

  items.join ''

Helpers.add 'with', ( expression, context, root, block ) ->

  block.compile ( expression.compile context, root ), root

Walrus.Helpers = Helpers
