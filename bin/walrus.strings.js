/**
 * Walrus.js 0.6.0
 * (c) 2012 Jeremy Ruppel
 * Walrus.js is freely distributable under the terms of the MIT license.
 * https://raw.github.com/jeremyruppel/walrus/master/LICENSE
 */
(function() {
  var Walrus;

  Walrus = (typeof require !== "undefined" && require !== null) && (typeof exports !== "undefined" && exports !== null) ? require('./walrus') : window.Walrus;

  /**
   * *:reverse*
   * Reverses a string.
   *
   * Parameters: none
   *
   * Usage:
   *
   *  {{ "hello" | :reverse }} // => "olleh"
  */

  Walrus.addFilter('reverse', function(value) {
    return value.split('').reverse().join('');
  });

  /**
   * *:downcase*
   * Converts a string to lowercase characters. Opposite of `:upcase`.
   *
   * Parameters: none
   *
   * Usage:
   *
   *  {{ "HelLO!" | :downcase }} // => "hello!"
  */

  Walrus.addFilter('downcase', function(value) {
    return value.toLowerCase();
  });

  /**
   * *:upcase*
   * Converts a string to uppercase characters. Opposite of `:downcase`.
   *
   * Parameters: none
   *
   * Usage:
   *
   *  {{ "HelLO!" | :upcase }} // => "HELLO!"
  */

  Walrus.addFilter('upcase', function(value) {
    return value.toUpperCase();
  });

  /**
   * *:squish*
   * Removes all leading and trailing whitespace, then condenses any internal whitespace
   * groups to a single space each.
   *
   * Parameters: none
   *
   * Usage:
   *
   *  {{ " foo    bar \n baz"  | :squish }} // => "foo bar baz"
  */

  Walrus.addFilter('squish', function(string) {
    return Walrus.Utils.trim(string).replace(/\s+/g, ' ');
  });

  /**
   * *:truncate*
   * Truncates a string to the specified `length`, optionally breaking at a separator
   * or providing a custom string to denote an omission.
   *
   * Parameters:
   *  length (int) - the number of characters to keep, at most
   *  separator (string) - Optional: a specified string to break on
   *  omission (string) - Optional: a string to denote an omission
   *
   * Usage:
   *
   *  {{ "Once upon a time in a world far far away" | :truncate( 27, ' ' ) }} // => "Once upon a time in a..."
  */

  Walrus.addFilter('truncate', function(string, length, separator, omission) {
    var chars, stop;
    if (separator == null) separator = false;
    if (omission == null) omission = '...';
    chars = length - omission.length;
    stop = separator ? string.lastIndexOf(separator, chars) || chars : chars;
    if (string.length > length) {
      return string.substr(0, stop) + omission;
    } else {
      return string;
    }
  });

}).call(this);
