(function() {
  var Walrus;

  Walrus = (typeof require !== "undefined" && require !== null) && (typeof exports !== "undefined" && exports !== null) ? require('./walrus') : window.Walrus;

  /*
  TODO
  - Write :strip
  - Move :upcase here
  - Move :downcase here
  - Write :blank?
  */

  Walrus.Filters.add('squish', function(string) {
    return string.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
  });

  Walrus.Filters.add('truncate', function(string, length, separator, omission) {
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
