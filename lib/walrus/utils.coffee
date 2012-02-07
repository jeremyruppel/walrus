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

  ###*
   * returns the string representation of `foo`
  ###
  toString : ( foo ) -> Object.prototype.toString.call foo

  ###*
   * returns whether or not `foo` is an array
  ###
  isArray : ( foo ) -> @toString( foo ) is '[object Array]'

  ###*
   * applies all properties from `bar` onto `foo`
  ###
  extend : ( foo, bar ) -> foo[ key ] = value for key, value of bar

# Export those utils, son.
Walrus.Utils = Utils
