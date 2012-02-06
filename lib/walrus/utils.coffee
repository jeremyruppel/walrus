Utils =
  ###*
   * trims leading and trailing whitespace
  ###
  trim : ( str ) -> str.replace /^\s+|\s+$/g, ''

# Export those utils, son.
Walrus.Utils = Utils
