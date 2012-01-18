(function() {
  var Walrus;

  Walrus = (typeof require !== "undefined" && require !== null) && (typeof exports !== "undefined" && exports !== null) ? require('./walrus') : window.Walrus;

  Walrus.Filters.add('squish', function(string) {
    return string.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
  });

}).call(this);
