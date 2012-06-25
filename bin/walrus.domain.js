(function() {
  var Walrus;

  Walrus = (typeof global !== "undefined" && global !== null ? global : this).Walrus;

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
