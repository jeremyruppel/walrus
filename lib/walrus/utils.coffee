Utils = { }

class Utils.PathResolver

  constructor : ( @object ) ->

  resolve : ( paths ) ->

    context = @object

    while paths.length
      path    = paths.shift( )
      context = context[ path ]

    context

module.exports = Utils
