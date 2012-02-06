Utils =
  ###*
   *
  ###
  trim : ( str ) -> str.replace /^\s+|\s+$/g, ''

# Export those utils, son.
Walrus.Utils = Utils
