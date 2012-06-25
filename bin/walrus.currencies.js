(function() {
  var FORMATS, Walrus, separate;

  Walrus = (typeof global !== "undefined" && global !== null ? global : this).Walrus;

  FORMATS = {
    'en-US': {
      format: function(amount) {
        return "$" + amount;
      },
      separator: ','
    }
  };

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
  */

  Walrus.addFilter('dollar', function(value, precision) {
    var locale, moneys;
    locale = FORMATS['en-US'];
    moneys = precision != null ? value.toFixed(precision) : value.toString();
    return locale.format(separate(moneys, locale.separator));
  });

}).call(this);
