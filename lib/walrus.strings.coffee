Walrus = if require? and exports? then require './walrus' else window.Walrus

Walrus.Filters.add 'squish', ( string ) ->

  string.replace( /\s+/g, ' ' ).replace( /^\s+|\s+$/g, '' )

Walrus.Filters.add 'truncate', ( string, length, separator=false, omission='...' ) ->

  chars = length - omission.length

  stop = if separator then string.lastIndexOf( separator, chars ) || chars else chars

  return if string.length > length then string.substr( 0, stop ) + omission else string
