/**
 * Walrus.js 0.7.0
 * (c) 2012 Jeremy Ruppel
 * Walrus.js is freely distributable under the terms of the MIT license.
 * https://raw.github.com/jeremyruppel/walrus/master/LICENSE
 */
(function() {
  var Walrus, addCommas;

  Walrus = (typeof require !== "undefined" && require !== null) && (typeof exports !== "undefined" && exports !== null) ? require('./walrus') : window.Walrus;

  addCommas = function(nStr) {
    var rgx, x, x1, x2;
    nStr += "";
    x = nStr.split(".");
    x1 = x[0];
    x2 = (x.length > 1 ? "." + x[1] : "");
    rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
  };

  /**
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
  */


  Walrus.addFilter('dollar', function(value, decimalPlace) {
    if (decimalPlace != null) {
      return '$' + addCommas(value.toFixed(decimalPlace));
    } else {
      return '$' + addCommas(value);
    }
  });

}).call(this);
