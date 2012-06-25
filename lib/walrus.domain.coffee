Walrus = (global ? @).Walrus

###*
 * Create a namespace for all of our domain methods
###
Walrus.Domain = { }

###*
 * *:as*
 * Decorates a view object or collection of view objects with
 * custom domain methods.
 *
 * Parameters:
 *  name - The key for the object on `Walrus.Domain` to decorate with
###
Walrus.addFilter 'as', ( value, name ) ->

  if Walrus.Utils.isArray value
    for item in value
      Walrus.Utils.extend item, Walrus.Domain[ name ]
  else
    Walrus.Utils.extend value, Walrus.Domain[ name ]

  value
