Walrus = (global ? @).Walrus

separate = ( value, separator=',' ) ->
  [whole, decimal] = value.split '.'

  whole = whole.replace /(\d)(?=(\d{3})+$)/g, "$1#{separator}"

  if decimal then [whole, decimal].join '.' else whole

###*
 * *:currency*
 * Returns a string formatted in the current locale's format
 *
 * Parameters:
 *  precision - the decimal place level to show cents, if applicable
 *
 * Usage:
 *
 *  {{ 36000 | :currency( 2 ) }} // => $36,000.00
 *  {{ 36000 | :currency }} // => $36,000
###
Walrus.addFilter 'currency', ( value, precision ) ->
  moneys = if precision? then value.toFixed( precision ) else value.toString( )
  amount = separate moneys, Walrus.i18n.l( 'currencies.separator' )
  Walrus.i18n.t( 'currencies.format', amount : amount )
