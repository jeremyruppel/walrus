Walrus = if require? and exports? then require './walrus' else window.Walrus

addCommas = (nStr) ->
  nStr += ""
  x = nStr.split(".")
  x1 = x[0]
  x2 = (if x.length > 1 then "." + x[1] else "")
  rgx = /(\d+)(\d{3})/
  x1 = x1.replace(rgx, "$1" + "," + "$2")  while rgx.test(x1)
  x1 + x2
  

###*
 * *:dollar*
 * Returns a string formatted as US dollars
 *
 * Parameters:
 *  decimalPlace - the decimal place level to show cents
 *
 * Usage:
 *
 *  {{ 36000 | :dollar( 2 ) }} // => $36,000.00
 *  {{ 36000 | :dollar }} // => $36,000
###
Walrus.addFilter 'dollar', ( value, decimalPlace ) -> 
  if decimalPlace? then '$' + addCommas(value.toFixed decimalPlace) else '$' + addCommas value
  