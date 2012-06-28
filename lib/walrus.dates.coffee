Walrus = (global ? @).Walrus

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
 *                 preceded by a blank.
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
      when '%a' then Walrus.i18n.l( 'dates.abbr_daynames'   )[ date.getDay( )   ]
      when '%A' then Walrus.i18n.l( 'dates.full_daynames'   )[ date.getDay( )   ]
      when '%b' then Walrus.i18n.l( 'dates.abbr_monthnames' )[ date.getMonth( ) ]
      when '%B' then Walrus.i18n.l( 'dates.full_monthnames' )[ date.getMonth( ) ]
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
      when '%M' then pad( date.getMinutes( ) )
      when '%m' then pad( ( date.getMonth( ) + 1 ) )
      when '%n' then "\n"
      when '%p'
        if date.getHours( ) > 12 then Walrus.i18n.t( 'dates.pm' ) else Walrus.i18n.t( 'dates.am' )
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

###*
 * returns whether or not the given year is a leap year
###
Walrus.Utils.isLeapYear = ( year ) -> new Date( year, 1, 29 ).getDate( ) is 29

###*
 * returns the number of leap years between the two given years
###
Walrus.Utils.leapYearsBetween = ( from, to ) ->

  return 0 if from > to

  count = 0
  count++ for year in [from..to] when @isLeapYear( year )
  count

###*
 * returns the distance between two times in words
###
Walrus.Utils.distanceOfTimeInWords = ( ftime, ttime=0, includeSeconds=false ) ->

  t = ( keypath, count=1 ) ->
    amount = if count is 1 then 'one' else 'other'
    Walrus.i18n.t "dates.distance_in_words.#{keypath}.#{amount}", count : count

  fdate = new Date ftime
  tdate = new Date ttime

  diff  = ( tdate - fdate ) / 1000 # javascript Date returns milliseconds, ruby Time returns seconds

  distanceInMinutes = Math.round( Math.abs( diff ) / 60 )
  distanceInSeconds = Math.round( Math.abs( diff ) )

  d = ( divisor=1 ) -> Math.round( distanceInMinutes / divisor )

  switch
    when 0        <= distanceInMinutes <= 1

      unless includeSeconds
        if distanceInMinutes is 0 then t( 'less_than_x_minutes' ) else t( 'x_minutes' )

      else
        switch
          when 0  <= distanceInSeconds <= 4      then t( 'less_than_x_seconds', 5  )
          when 5  <= distanceInSeconds <= 9      then t( 'less_than_x_seconds', 10 )
          when 10 <= distanceInSeconds <= 19     then t( 'less_than_x_seconds', 20 )
          when 20 <= distanceInSeconds <= 39     then t( 'half_a_minute' )
          when 40 <= distanceInSeconds <= 59     then t( 'less_than_x_minutes' )
          else "1 minute"

    when 2        <= distanceInMinutes <= 44     then t( 'x_minutes', d( ) )
    when 45       <= distanceInMinutes <= 89     then t( 'about_x_hours' )
    when 90       <= distanceInMinutes <= 1439   then t( 'about_x_hours', d( 60 ) )
    when 1440     <= distanceInMinutes <= 2519   then t( 'x_days' )
    when 2520     <= distanceInMinutes <= 43199  then t( 'x_days', d( 1440 ) )
    when 43200    <= distanceInMinutes <= 86399  then t( 'about_x_months' )
    when 86400    <= distanceInMinutes <= 525599 then t( 'x_months', d( 43200 ) )
    else
      fyear  = fdate.getFullYear( )
      fyear += 1 if fdate.getMonth( ) >= 2
      tyear  = tdate.getFullYear( )
      tyear -= 1 if tdate.getMonth( ) < 2

      leapYears = Walrus.Utils.leapYearsBetween fyear, tyear

      minuteOffsetForLeapYear = leapYears * 1440

      minutesWithOffset = distanceInMinutes - minuteOffsetForLeapYear
      remainder         = minutesWithOffset % 525600
      distanceInYears   = Math.floor( minutesWithOffset / 525600 )

      if remainder < 131400
        t( 'about_x_years', distanceInYears )
      else if remainder < 394200
        t( 'over_x_years', distanceInYears )
      else
        t( 'almost_x_years', distanceInYears + 1 )

###*
 * *:time_ago_in_words*
 * Returns a human-readable relative time phrase from the given date.
 *
 * Parameters:
 *  includeSeconds - (Optional) whether or not to include results for less than one minute
 *
 * Usage:
 *
 *  {{ created_at | :time_ago_in_words( true ) }} // => "less than a minute"
###
Walrus.addFilter 'time_ago_in_words', ( dateish, includeSeconds ) ->

  Walrus.Utils.distanceOfTimeInWords dateish, new Date( ), includeSeconds
