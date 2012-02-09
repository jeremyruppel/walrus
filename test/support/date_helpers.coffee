Walrus = require '../../bin/walrus'

class Duration

  constructor : ( @seconds ) ->
    @date = new Date( @seconds * 1000 )

  getTime : ( ) -> @date.getTime( )

  valueOf : ( ) -> @seconds

###*
 * only extend Number.prototype for use in tests
###
Walrus.Utils.extend Number.prototype,

  ###*
   *
  ###
  seconds : ( ) -> new Duration( @ )

  minutes : ( ) -> new Duration( @ * 60 )

  hours : ( ) -> new Duration( @ * 3600 )

  days : ( ) -> new Duration( @ * 24.hours( ) )

  weeks : ( ) -> new Duration( @ * 7.days( ) )

  months : ( ) -> new Duration( @ * 30.days( ) )

  years : ( ) -> new Duration( @ * 365.days( ) )

###*
 * only extend Date.prototype for use in tests
###
Walrus.Utils.extend Date.prototype,

  ###*
   *
  ###
  add : ( date ) -> new Date( @getTime( ) + date.getTime( ) )

  ###*
   *
  ###
  sub : ( date ) -> new Date( @getTime( ) - date.getTime( ) )
