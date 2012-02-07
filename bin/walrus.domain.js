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
   * Create a namespace for all of our domain methods
  */

  Walrus.Domain = {};

  /**
   * *:as*
   * Decorates a view object or collection of view objects with
   * custom domain methods.
   *
   * Parameters:
   *  name - The key for the object on `Walrus.Domain` to decorate with
  */

  Walrus.addFilter('as', function(value, name) {
    var item, _i, _len;
    if (Walrus.Utils.isArray(value)) {
      for (_i = 0, _len = value.length; _i < _len; _i++) {
        item = value[_i];
        Walrus.Utils.extend(item, Walrus.Domain[name]);
      }
    } else {
      Walrus.Utils.extend(value, Walrus.Domain[name]);
    }
    return value;
  });

}).call(this);
