Walrus = (global ? @).Walrus

###*
 * *:reverse*
 * Reverses a string.
 *
 * Parameters: none
 *
 * Usage:
 *
 *  {{ "hello" | :reverse }} // => "olleh"
###
Walrus.addFilter 'reverse', ( value ) -> value.split( '' ).reverse( ).join( '' )

###*
 * *:downcase*
 * Converts a string to lowercase characters. Opposite of `:upcase`.
 *
 * Parameters: none
 *
 * Usage:
 *
 *  {{ "HelLO!" | :downcase }} // => "hello!"
###
Walrus.addFilter 'downcase', ( value ) -> value.toLowerCase( )

###*
 * *:upcase*
 * Converts a string to uppercase characters. Opposite of `:downcase`.
 *
 * Parameters: none
 *
 * Usage:
 *
 *  {{ "HelLO!" | :upcase }} // => "HELLO!"
###
Walrus.addFilter 'upcase', ( value ) -> value.toUpperCase( )

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
Walrus.addFilter 'squish', ( string ) ->

  Walrus.Utils.trim( string ).replace( /\s+/g, ' ' )

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
Walrus.addFilter 'truncate', ( string, length, separator=false, omission='...' ) ->

  chars = length - omission.length

  stop = if separator then string.lastIndexOf( separator, chars ) || chars else chars

  return if string.length > length then string.substr( 0, stop ) + omission else string

###*
 * *:titleize*
 * Capitalizes all words within a string
 *
 * Parameters: none
 *
 * Usage:
 *
 *  "man from the boondocks".titleize   // => "Man From The Boondocks"
 *  "x-men: the last stand".titleize    // => "X Men: The Last Stand"
 *  "TheManWithoutAPast".titleize       // => "The Man Without A Past"
 *  "raiders_of_the_lost_ark".titleize  // => "Raiders Of The Lost Ark"
###
Walrus.addFilter 'titleize', ( string ) ->
  title = string.replace /[ \-_]+/g, ' '
  words = Walrus.Utils.trim( title.replace /([A-Z])/g, " $&" ).split ' '

  capitalize = ( word ) -> word.charAt( 0 ).toUpperCase( ) + word.slice( 1 )

  ( capitalize word for word in words ).join ' '
