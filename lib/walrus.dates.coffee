Walrus = if require? and exports? then require './walrus' else window.Walrus

FULL_DAYNAMES = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
ABBR_DAYNAMES = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]

FULL_MONTHNAMES = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
ABBR_MONTHNAMES = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]

###*
 * *:strftime*
 * Formats a date into the string given by `format`. Accepts any value
 * that can be passed to `new Date( )`.
 *
 * Parameters:
 *  format - The format string, according to these tokens, taken directly
 *           from `man 3 strftime` (with some omissions):
 *
 *           %A    is replaced by national representation of the full weekday name.
 *
 *           %a    is replaced by national representation of the abbreviated weekday name.
 *
 *           %B    is replaced by national representation of the full month name.
 *
 *           %b    is replaced by national representation of the abbreviated month name.
 *
 *           %D    is equivalent to ``%m/%d/%y''.
 *
 *           %d    is replaced by the day of the month as a decimal number (01-31).
 *
 *           %e    is replaced by the day of month as a decimal number (1-31); single digits are
 *                      preceded by a blank.
 *
 *           %F    is equivalent to ``%Y-%m-%d''.
 *
 *           %H    is replaced by the hour (24-hour clock) as a decimal number (00-23).
 *
 *           %I    is replaced by the hour (12-hour clock) as a decimal number (01-12).
 *
 *           %k    is replaced by the hour (24-hour clock) as a decimal number (0-23); single dig-
 *                 its are preceded by a blank.
 *
 *           %l    is replaced by the hour (12-hour clock) as a decimal number (1-12); single dig-
 *                 its are preceded by a blank.
 *
 *           %M    is replaced by the minute as a decimal number (00-59).
 *
 *           %m    is replaced by the month as a decimal number (01-12).
 *
 *           %n    is replaced by a newline.
 *
 *           %p    is replaced by national representation of either "ante meridiem" or "post meri-
 *                 diem" as appropriate.
 *
 *           %R    is equivalent to ``%H:%M''.
 *
 *           %r    is equivalent to ``%I:%M:%S %p''.
 *
 *           %S    is replaced by the second as a decimal number (00-60).
 *
 *           %T    is equivalent to ``%H:%M:%S''.
 *
 *           %t    is replaced by a tab.
 *
 *           %U    is replaced by the week number of the year (Sunday as the first day of the
 *                 week) as a decimal number (00-53).
 *
 *           %u    is replaced by the weekday (Monday as the first day of the week) as a decimal
 *                 number (1-7).
 *
 *           %v    is equivalent to ``%e-%b-%Y''.
 *
 *           %w    is replaced by the weekday (Sunday as the first day of the week) as a decimal
 *
 *           %X    is replaced by national representation of the time.
 *
 *           %x    is replaced by national representation of the date.
 *
 *           %Y    is replaced by the year with century as a decimal number.
 *
 *           %y    is replaced by the year without century as a decimal number (00-99).
 *
 *           %Z    is replaced by the time zone name.
###
Walrus.addFilter 'strftime', ( dateish, format ) ->

  date = new Date dateish

  pad = ( value, to=2, padding='0' ) ->

    if "#{value}".length < to then pad( "#{padding}#{value}", to, padding ) else value

  format.replace /%(.)/g, ( input ) =>

    switch input
      when '%a' then ABBR_DAYNAMES[ date.getDay( ) ]
      when '%A' then FULL_DAYNAMES[ date.getDay( ) ]
      when '%b' then ABBR_MONTHNAMES[ date.getMonth( ) ]
      when '%B' then FULL_MONTHNAMES[ date.getMonth( ) ]
      when '%D' then @strftime date, '%m/%d/%y'
      when '%d' then pad( date.getDate( ) )
      when '%e' then date.getDate( )
      when '%F' then @strftime date, '%Y-%m-%d'
      when '%H' then pad( date.getHours( ) )
      when '%I'
        if date.getHours( ) > 12 then pad( date.getHours( ) - 12 ) else pad( date.getHours( ) )
      when '%k' then date.getHours( )
      when '%l'
        if date.getHours( ) > 12 then date.getHours( ) - 12 else date.getHours( )
      when '%M' then date.getMinutes( )
      when '%m' then pad( ( date.getMonth( ) + 1 ) )
      when '%n' then "\n"
      when '%p'
        if date.getHours( ) > 12 then 'PM' else 'AM'
      when '%R' then @strftime date, '%H:%M'
      when '%r' then @strftime date, '%I:%M:%S %p'
      when '%S' then pad( date.getSeconds( ) )
      when '%T' then @strftime date, '%H:%M:%S'
      when '%t' then "\t"
      when '%u' then date.getDay( ) || 7
      when '%v' then @strftime date, '%e-%b-%Y'
      when '%w' then date.getDay( )
      when '%X' then date.toTimeString( )
      when '%x' then date.toDateString( )
      when '%Y' then date.getFullYear( )
      when '%y' then date.getFullYear( ).toString( ).slice -2
      when '%Z' then date.toString( ).match( /\((\w+)\)/ )[ 1 ] || ''
