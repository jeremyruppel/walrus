Filters = add : ( name, fn ) -> @[ name ] = fn

# TODO this filter is pretty dumb.
# let's think of something more useful to test against and include in core
Filters.add 'reverse', ( value ) -> value.split( '' ).reverse( ).join( '' )

module.exports = Filters
