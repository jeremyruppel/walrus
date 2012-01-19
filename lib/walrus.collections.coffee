Walrus = if require? and exports? then require './walrus' else window.Walrus

###
TODO
- More enumerable stuff?
- Write :count/:size
- Write :any?/:empty?
- Write :group_by
- Write :pluck
###

Walrus.Filters.add 'first', ( array, count ) ->

  if count? then array.slice 0, count else array[ 0 ]

Walrus.Filters.add 'last', ( array, count ) ->

  if count? then array.slice -count else array[ array.length - 1 ]
