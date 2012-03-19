Walrus = if require? and exports? then require './walrus' else window.Walrus

###*
 * *:first*
 * Selects the first _count_ items of the array. Defaults to only the first item.
 *
 * Parameters:
 *  count - Optional: how many items to include
 *
 * Usage:
 *
 *  {{ :each numbers | :first do}}
 *    // 1
 *  {{ end }}
 *
 *  {{ :each numbers | :first( 5 ) do }}
 *    // 1 2 3 4 5
 *  {{ end }}
###
Walrus.addFilter 'first', ( array, count ) ->

  if count? then array.slice 0, count else array[ 0 ]

###*
 * *:last*
 * Selects the last _count_ items of the array. Defaults to only the last item.
 *
 * Parameters:
 *  count - Optional: how many items to include
 *
 * Usage:
 *
 *  {{ :each numbers | :last do}}
 *    // 10
 *  {{ end }}
 *
 *  {{ :each numbers | :last( 5 ) do }}
 *    // 6 7 8 9 10
 *  {{ end }}
###
Walrus.addFilter 'last', ( array, count ) ->

  if count? then array.slice -count else array[ array.length - 1 ]

###*
 * *:after*
 * Selects all of the items in the array except for the first _count_.
 *
 * Parameters:
 *  count - how many items to omit from the beginning
 *
 * Usage:
 *
 *  {{ :each numbers | :after( 3 ) do }}
 *    // 4 5 6 7 8 9 10
 *  {{ end }}
###
Walrus.addFilter 'after', ( array, count ) -> array.slice count

###*
 * *:before*
 * Selects all of the items in the array except for the last _count_.
 *
 * Parameters:
 *  count - how many items to omit from the end
 *
 * Usage:
 *
 *  {{ :each numbers | :before( 3 ) do }}
 *    // 1 2 3 4 5 6 7
 *  {{ end }}
###
Walrus.addFilter 'before', ( array, count ) -> array.slice 0, -count

###*
 * *:count*
 * Returns the length of the given array.
 *
 * Parameters: none
 *
 * Usage:
 *
 *  var numbers = [ 1, 2, 3, 4, 5 ];
 *
 *  {{ numbers | :count }} // => 5
###
Walrus.addFilter 'count', ( array ) -> array.length

###*
 * *:any*
 * Returns true if the array is not empty. Opposite of `:empty`.
 *
 * Parameters: none
 *
 * Usage:
 *
 *  var numbers = [ 1, 2, 3, 4, 5 ];
 *
 *  {{ numbers | :any }} // => true
###
Walrus.addFilter 'any', ( array ) -> array.length > 0

###*
 * *:empty*
 * Returns true of the array is empty. Opposite of `:any`.
 *
 * Parameters: none
 *
 * Usage:
 *
 *  var numbers = [ 1, 2, 3, 4, 5 ];
 *
 *  {{ numbers | :empty }} // => false
###
Walrus.addFilter 'empty', ( array ) -> array.length is 0
