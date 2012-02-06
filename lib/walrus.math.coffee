Walrus = if require? and exports? then require './walrus' else window.Walrus

###*
 * *:plus*
 * Returns the sum of two numbers
 *
 * Parameters:
 *  number - the number to add to the expression
 *
 * Usage:
 *
 *  {{ 15 | :plus( 6 ) }} // => 21
###
Walrus.addFilter 'plus', ( value, number ) -> value + number
