Walrus = if require? and exports? then require './walrus' else window.Walrus

Walrus.Filters.add 'squish', ( string ) ->

  string.replace( /\s+/g, ' ' ).replace( /^\s+|\s+$/g, '' )
