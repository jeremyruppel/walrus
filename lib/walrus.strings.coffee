Walrus = if require? and exports? then require './walrus' else window.Walrus

###*
 * *:squish*
 * Removes all leading and trailing whitespace, then condenses any internal whitespace
 * groups to a single space each.
 *
 * Parameters: none
 *
 * Usage:
 *
 *  {{ " foo    bar \n baz"  | :squish }} // => "foo bar baz"
###
Walrus.Filters.add 'squish', ( string ) ->

  string.replace( /^\s+|\s+$/g, '' ).replace( /\s+/g, ' ' )

###*
 * *:truncate*
 * Truncates a string to the specified `length`, optionally breaking at a separator
 * or providing a custom string to denote an omission.
 *
 * Parameters:
 *  length (int) - the number of characters to keep, at most
 *  separator (string) - Optional: a specified string to break on
 *  omission (string) - Optional: a string to denote an omission
 *
 * Usage:
 *
 *  {{ "Once upon a time in a world far far away" | :truncate( 27, ' ' ) }} // => "Once upon a time in a..."
###
Walrus.Filters.add 'truncate', ( string, length, separator=false, omission='...' ) ->

  chars = length - omission.length

  stop = if separator then string.lastIndexOf( separator, chars ) || chars else chars

  return if string.length > length then string.substr( 0, stop ) + omission else string
