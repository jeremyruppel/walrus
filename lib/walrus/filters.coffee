Filters = add : ( name, fn ) -> @[ name ] = fn

###*
 * *:reverse*
 * Reverses a string.
 *
 * Parameters: none
 *
 * Usage:
 *
 *  {{ "hello" | :reverse }} // => "olleh"
 *
 * TODO we have better filters in core now to test the filter mechanism.
 * Move this to walrus.strings
###
Filters.add 'reverse', ( value ) -> value.split( '' ).reverse( ).join( '' )

###*
 * *:downcase*
 * Converts a string to lowercase characters. Opposite of `:upcase`.
 *
 * Parameters: none
 *
 * Usage:
 *
 *  {{ "HelLO!" | :downcase }} // => "hello!"
 *
 * TODO we have better filters in core now to test the filter mechanism.
 * Move this to walrus.strings
###
Filters.add 'downcase', ( value ) -> value.toLowerCase( )

###*
 * *:upcase*
 * Converts a string to uppercase characters. Opposite of `:downcase`.
 *
 * Parameters: none
 *
 * Usage:
 *
 *  {{ "HelLO!" | :upcase }} // => "HELLO!"
 *
 * TODO we have better filters in core now to test the filter mechanism.
 * Move this to walrus.strings
###
Filters.add 'upcase', ( value ) -> value.toUpperCase( )

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
Filters.add 'equals', ( value, foo ) -> value is foo

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
Filters.add 'or', ( value, foo ) -> value || foo

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
Filters.add 'log', -> if console? and console.log? then console.log '[Walrus]', arguments...

# Export those filters, son.
Walrus.Filters = Filters
