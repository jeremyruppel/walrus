Walrus = (global ? @).Walrus

separate = ( value, thousands, decimal ) ->
  [whole, fraction] = value.split decimal

  whole = whole.replace /(\d)(?=(\d{3})+$)/g, "$1#{thousands}"

  if fraction then [whole, fraction].join decimal else whole

###*
 * *:currency*
 * Returns a string formatted in the current locale's format.
 * Delegates to [accounting.js](http://josscrowcroft.github.com/accounting.js/) if present.
 *
 * Parameters:
 *  precision - the decimal place level to show cents, if applicable
 *
 * Usage:
 *
 *  {{ 36000 | :currency( '$', 2 ) }} // => $36,000.00
 *  {{ 36000 | :currency }} // => $36,000
###
locale = Walrus.i18n.t 'currencies'

if accounting?
  accounting.settings.currency.symbol    = locale.symbol
  accounting.settings.currency.decimal   = locale.decimal
  accounting.settings.currency.precision = locale.precision
  accounting.settings.currency.thousand  = locale.thousand

  Walrus.addFilter 'currency',    -> accounting.formatMoney arguments...
  Walrus.addFilter 'formatMoney', -> accounting.formatMoney arguments ...
else
  Walrus.addFilter 'currency', ( value, symbol, precision, decimal, thousand ) ->

    symbol    ?= locale.symbol
    precision ?= locale.precision
    decimal   ?= locale.decimal
    thousand  ?= locale.thousand

    moneys = value.toFixed precision
    amount = separate moneys, thousand, decimal

    "#{symbol}#{amount}"
