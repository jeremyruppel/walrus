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
    var extend, isArray, item, toString, _i, _len;
    toString = Object.prototype.toString;
    isArray = function(obj) {
      return toString.call(obj) === '[object Array]';
    };
    extend = function(foo, bar) {
      var key, value, _results;
      _results = [];
      for (key in bar) {
        value = bar[key];
        _results.push(foo[key] = value);
      }
      return _results;
    };
    if (isArray(value)) {
      for (_i = 0, _len = value.length; _i < _len; _i++) {
        item = value[_i];
        extend(item, Walrus.Domain[name]);
      }
    } else {
      console.log('WE GOT AN OBJECT');
    }
    return value;
  });

}).call(this);
