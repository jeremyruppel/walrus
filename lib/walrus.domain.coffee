Walrus = if require? and exports? then require './walrus' else window.Walrus

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

  toString = Object.prototype.toString

  isArray = ( obj ) -> toString.call( obj ) is '[object Array]'

  extend = ( foo, bar ) -> foo[ key ] = value for key, value of bar

  if isArray value

    for item in value
      extend item, Walrus.Domain[ name ]
  else
    console.log 'WE GOT AN OBJECT'

  value

