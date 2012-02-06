Utils =
  ###*
   * trims leading and trailing whitespace
  ###
  trim : ( str ) -> str.replace /^\s+|\s+$/g, ''

  ###*
   * reduces a list into a single result
  ###
  reduce : ( array, initial, method ) ->

    memo = initial
    memo = method memo, item for item in array
    memo

# Export those utils, son.
Walrus.Utils = Utils
