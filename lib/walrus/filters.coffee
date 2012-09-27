Walrus.Filters = { }

Walrus.addFilter = ( name, fn ) ->
  throw "Cannot override existing filter named '#{name}'." if @Filters[ name ]?
  @Filters[ name ] = fn

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

###*
 * *:equals*
 * Returns whether the expression is strictly equal to the given value.
 *
 * Parameters:
 *  foo - the value to compare to the expression
 *
 * Usage:
 *
 *  {{ :if "foo" | :equals( "bar" ) do }}
 *    // block will not be evaluated
 *  {{ end }}
###
Walrus.addFilter 'equals', ( value, foo ) -> value is foo

###*
 * *:if*
 * Returns the expression if _condition_ is truthy, or nothing if _condition_ is falsy.
 *
 * Parameters:
 *
 *  condition - the condition to test against
 *
 * Usage:
 *
 *  {{ 'active' | :if( true ) }} // => "active"
###
Walrus.addFilter 'if', ( value, condition ) -> if condition then value else ''

###*
 * *:unless*
 * Returns the expression if _condition_ is falsy, or nothing if _condition_ is truthy.
 *
 * Parameters:
 *
 *  condition - the condition to test against
 *
 * Usage:
 *
 *  {{ 'active' | :unless( true ) }} // => ""
###
Walrus.addFilter 'unless', ( value, condition ) -> if not condition then value else ''

###*
 * *:or*
 * Returns the result of the expression if it is truthy, the given value if not.
 *
 * Parameters:
 *  foo - the value to default to if the expression is falsy.
 *
 * Usage:
 *
 *  {{ false | :or( "Not Specified" ) }} // => "Not Specified"
###
Walrus.addFilter 'or', ( value, foo ) -> value || foo

###*
 * *:log*
 * Logs whatever you want to the console if `console.log` is available.
 * Helpful for debugging your view object especially if your console
 * supports object inspection.
 *
 * Parameters: any
 *
 * Usage:
 *
 *  {{ @root | :log( 'wtf' ) }} // => Console logs: [object Object], 'wtf'
###
Walrus.addFilter 'log', -> if console? and console.log? then console.log '[Walrus]', arguments...
