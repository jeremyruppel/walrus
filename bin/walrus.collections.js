(function() {
  var Walrus;

  Walrus = (typeof require !== "undefined" && require !== null) && (typeof exports !== "undefined" && exports !== null) ? require('./walrus') : window.Walrus;

  /*
  TODO
  - More enumerable stuff?
  - Write :any?/:empty?
  - Write :group_by
  - Write :pluck
  */

  Walrus.Filters.add('first', function(array, count) {
    if (count != null) {
      return array.slice(0, count);
    } else {
      return array[0];
    }
  });

  Walrus.Filters.add('last', function(array, count) {
    if (count != null) {
      return array.slice(-count);
    } else {
      return array[array.length - 1];
    }
  });

  Walrus.Filters.add('count', function(array) {
    return array.length;
  });

  Walrus.Filters.add('any', function(array) {
    return array.length > 0;
  });

  Walrus.Filters.add('empty', function(array) {
    return array.length === 0;
  });

}).call(this);
