/**
 * Walrus.js 0.3.0
 * Mon Feb 06 2012
 * (c) 2012 Jeremy Ruppel
 * Walrus.js is freely distributable under the terms of the MIT license.
 * https://raw.github.com/jeremyruppel/walrus/master/LICENSE
 */
(function() {
  var Walrus;

  Walrus = (typeof require !== "undefined" && require !== null) && (typeof exports !== "undefined" && exports !== null) ? require('./walrus') : window.Walrus;

  /**
   * *:plus*
   * Returns the sum of two numbers
   *
   * Parameters:
   *  number - the number to add to the expression
   *
   * Usage:
   *
   *  {{ 15 | :plus( 6 ) }} // => 21
  */

  Walrus.addFilter('plus', function(value, number) {
    return value + number;
  });

}).call(this);
