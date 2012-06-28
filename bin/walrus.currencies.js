(function() {
  var Walrus, separate;

  Walrus = (typeof global !== "undefined" && global !== null ? global : this).Walrus;

  separate = function(value, separator) {
    var decimal, whole, _ref;
    if (separator == null) separator = ',';
    _ref = value.split('.'), whole = _ref[0], decimal = _ref[1];
    whole = whole.replace(/(\d)(?=(\d{3})+$)/g, "$1" + separator);
    if (decimal) {
      return [whole, decimal].join('.');
    } else {
      return whole;
    }
  };

  /**
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
  */

  Walrus.addFilter('currency', function(value, precision) {
    var amount, moneys;
    moneys = precision != null ? value.toFixed(precision) : value.toString();
    amount = separate(moneys, Walrus.i18n.l('currencies.separator'));
    return Walrus.i18n.t('currencies.format', {
      amount: amount
    });
  });

}).call(this);
