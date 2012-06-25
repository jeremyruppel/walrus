Walrus = (global ? @).Walrus

FORMATS =
  'en-US'     :
    format    : ( amount ) -> "$#{amount}"
    separator : ','

separate = ( value, separator=',' ) ->
  [whole, decimal] = value.split '.'

  whole = whole.replace /(\d)(?=(\d{3})+$)/g, "$1#{separator}"

  if decimal then [whole, decimal].join '.' else whole

###*
 * *:dollar*
 * Returns a string formatted as US dollars
 *
 * Parameters:
 *  precision - the decimal place level to show cents
 *
 * Usage:
 *
 *  {{ 36000 | :dollar( 2 ) }} // => $36,000.00
 *  {{ 36000 | :dollar }} // => $36,000
###
Walrus.addFilter 'dollar', ( value, precision ) ->
  locale = FORMATS[ 'en-US' ] # for i18n later on...
  moneys = if precision? then value.toFixed( precision ) else value.toString( )
  locale.format separate( moneys, locale.separator )
