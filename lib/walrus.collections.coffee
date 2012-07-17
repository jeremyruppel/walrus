{Walrus} = (if exports? then require('./walrus') else @)

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

###*
 * *:join*
 * Joins an array into a string, optionally with a separator
 *
 * Parameters:
 *  separator - (Optional) string to join on
 *
 * Usage:
 *
 *  var numbers [ 1, 2, 3 ];
 *
 *  {{ numbers | :join }} // => "123"
 *  {{ numbers | :join( ', ' ) }} // => "1, 2, 3"
###
Walrus.addFilter 'join', ( array, separator='' ) -> array.join separator

###*
 * *:sort*
 * Sorts the members of an array, optionally by a specific field
 *
 * Parameters:
 *  field - (Optional) field to compare by
 *
 * Usage:
 *
 *  var names = [ 'Billy', 'Alex', 'Don' ]
 *
 *  {{ names | :sort }} // => [ 'Alex', 'Billy', 'Don' ]
 *  {{ names | :sort( 'length' ) }} // [ 'Don', 'Billy', 'Alex' ]
###
Walrus.addFilter 'sort', ( array, field ) ->
  if field?
    array.sort ( one, two ) -> one[ field ] > two[ field ]
  else
    array.sort( )

###*
 * *:in_groups_of*
 * Splits the given array into sub-arrays with at most `count` items apiece
 *
 * Parameters:
 *  count - the number of items to be placed in each group
 *
 * Usage:
 *
 *  var numbers = [ 1, 2, 3, 4, 5 ];
 *
 *  {{ :each numbers | :in_groups_of( 3 ) }} // => [ [ 1, 2, 3 ], [ 4, 5 ] ]
###
Walrus.addFilter 'in_groups_of', ( array, count ) ->
  Walrus.Utils.reduce array, [ [ ] ], ( memo, item ) ->
    group = memo[ memo.length - 1 ]
    if group.length < count
      group.push item
    else
      memo.push [ item ]
    memo
