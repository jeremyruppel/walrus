/**
 * Walrus.js 0.3.3
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

  /**
   * *:minus*
   * Returns the difference of two numbers
   *
   * Parameters:
   *  number - the number to subtract from the expression
   *
   * Usage:
   *
   *  {{ 15 | :minus( 6 ) }} // => 9
  */

  Walrus.addFilter('minus', function(value, number) {
    return value - number;
  });

  /**
   * *:gt*
   * Returns whether `value` is greater than the given number
   *
   * Parameters:
   *  number - the number to compare against
   *
   * Usage:
   *
   *  {{ 15 | :gt( 5 ) }} // => true
  */

  Walrus.addFilter('gt', function(value, number) {
    return value > number;
  });

  /**
   * *:gte*
   * Returns whether `value` is greater than or equal to the given number
   *
   * Parameters:
   *  number - the number to compare against
   *
   * Usage:
   *
   *  {{ 15 | :gte( 5 ) }} // => true
  */

  Walrus.addFilter('gte', function(value, number) {
    return value >= number;
  });

  /**
   * *:lt*
   * Returns whether `value` is less than the given number
   *
   * Parameters:
   *  number - the number to compare against
   *
   * Usage:
   *
   *  {{ 15 | :lt( 5 ) }} // => false
  */

  Walrus.addFilter('lt', function(value, number) {
    return value < number;
  });

  /**
   * *:lte*
   * Returns whether `value` is less than or equal to the given number
   *
   * Parameters:
   *  number - the number to compare against
   *
   * Usage:
   *
   *  {{ 15 | :lte( 5 ) }} // => false
  */

  Walrus.addFilter('lte', function(value, number) {
    return value <= number;
  });

}).call(this);
