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
 *  format - The format string, according to these tokens, taken almost directly
 *           from `man 3 strftime`:
 *
 *           %A    is replaced by national representation of the full weekday name.
 *
 *           %a    is replaced by national representation of the abbreviated weekday name.
 *
 *           %B    is replaced by national representation of the full month name.
 *
 *           %b    is replaced by national representation of the abbreviated month name.
 *
 *           %C    is replaced by (year / 100) as decimal number; single digits are preceded by a
 *                 zero.
 *
 *           %c    is replaced by national representation of time and date.
 *
 *           %D    is equivalent to ``%m/%d/%y''.
 *
 *           %d    is replaced by the day of the month as a decimal number (01-31).
 *
 *           %E* %O*
 *                 POSIX locale extensions.  The sequences %Ec %EC %Ex %EX %Ey %EY %Od %Oe %OH %OI
 *                 %Om %OM %OS %Ou %OU %OV %Ow %OW %Oy are supposed to provide alternate represen-
 *                 tations.
 *
 *                 Additionly %OB implemented to represent alternative months names (used stand-
 *                 alone, without day mentioned).
 *
 *           %e    is replaced by the day of month as a decimal number (1-31); single digits are
 *                      preceded by a blank.
 *
 *           %F    is equivalent to ``%Y-%m-%d''.
 *
 *           %G    is replaced by a year as a decimal number with century.  This year is the one
 *                 that contains the greater part of the week (Monday as the first day of the
 *                 week).
 *
 *           %g    is replaced by the same year as in ``%G'', but as a decimal number without cen-
 *                 tury (00-99).
 *
 *           %H    is replaced by the hour (24-hour clock) as a decimal number (00-23).
 *
 *           %h    the same as %b.
 *
 *           %I    is replaced by the hour (12-hour clock) as a decimal number (01-12).
 *
 *           %j    is replaced by the day of the year as a decimal number (001-366).
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
 *           %O*   the same as %E*.
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
 *           %s    is replaced by the number of seconds since the Epoch, UTC (see mktime(3)).
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
 *           %V    is replaced by the week number of the year (Monday as the first day of the
 *                 week) as a decimal number (01-53).  If the week containing January 1 has four
 *                 or more days in the new year, then it is week 1; otherwise it is the last week
 *                 of the previous year, and the next week is week 1.
 *
 *           %v    is equivalent to ``%e-%b-%Y''.
 *
 *           %W    is replaced by the week number of the year (Monday as the first day of the
 *                 week) as a decimal number (00-53).
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
 *
 *           %z    is replaced by the time zone offset from UTC; a leading plus sign stands for
 *                 east of UTC, a minus sign for west of UTC, hours and minutes follow with two
 *                 digits each and no delimiter between them (common form for RFC 822 date head-
 *                 ers).
 *
 *           %+    is replaced by national representation of the date and time (the format is sim-
 *                 ilar to that produced by date(1)).
 *
 *           %%    is replaced by `%'.
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
      when '%n' then 'TODO'
      when '%O' then 'TODO'
      when '%p' then 'TODO'
      when '%R' then 'TODO'
      when '%r' then 'TODO'
      when '%S' then 'TODO'
      when '%s' then 'TODO'
      when '%T' then 'TODO'
      when '%T' then 'TODO'
      when '%U' then 'TODO'
      when '%u' then 'TODO'
      when '%V' then 'TODO'
      when '%v' then 'TODO'
      when '%W' then 'TODO'
      when '%w' then 'TODO'
      when '%X' then 'TODO'
      when '%x' then 'TODO'
      when '%Y' then date.getFullYear( )
      when '%y' then date.getFullYear( ).toString( ).slice -2 # TODO this kinda sucks, do math much?
      when '%Z' then 'TODO'
      when '%z' then 'TODO'
      when '%+' then 'TODO'
      when '%%' then 'TODO'

      # when '%c' then date.toLocaleString( )
      # when '%d' then date.getDate( )
      # when '%H' then date.getHours( )
      # when '%I' then date.getHours( ) % 12
      # # TODO %j
      # when '%m' then date.getMonth( ) + 1
      # when '%M' then date.getMinutes( )
      # when '%p' then "#{if date.getHours( ) < 12 then 'A' else 'P'}M"
      # when '%S' then date.getSeconds( )
      # # TODO %U
      # # TODO %W
      # when '%w' then date.getDay( )
      # # TODO %x
      # # TODO %X
      # when '%y' then date.getFullYear( ).toString( ).slice -2 # TODO this kinda sucks, do math much?
      # when '%Y' then date.getFullYear( )
      # # TODO %Z
      # # TODO %%
