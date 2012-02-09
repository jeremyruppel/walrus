Walrus = require '../bin/walrus'
should = require 'should'
helper = require './support/test_helpers'

require './support/date_helpers'

require '../bin/walrus.dates'

describe 'Walrus.Dates', ->

  ###
    TODO watch this fail when we hit daylight savings time :P
  ###
  suffix = new Date( ).getTimezoneOffset( ) / 60

  suffix = if suffix < 10 then "0#{suffix}" else "#{suffix}"

  helper.pass './test/examples/dates', "-#{suffix}00"

describe 'Walrus.Utils date additions', ->

  years = [
    [ 2002, false ],
    [ 2003, false ],
    [ 2004, true  ],
    [ 2005, false ],
    [ 2006, false ],
    [ 2007, false ],
    [ 2008, true  ],
    [ 2009, false ],
    [ 2010, false ],
    [ 2011, false ],
    [ 2012, true  ]
  ]

  describe '#isLeapYear', ->

    it 'should be defined', -> should.exist Walrus.Utils.isLeapYear

    for [ year, actual ] in years
      do ->

        it "should correctly identify the leapitude of the year #{year}", ->

          Walrus.Utils.isLeapYear( year ).should.equal actual

  describe '#leapYearsBetween', ->

    it 'should be defined', -> should.exist Walrus.Utils.leapYearsBetween

    it 'should identify the correct number of leap years between 2002 and 2012', ->

      Walrus.Utils.leapYearsBetween( 2002, 2012 ).should.equal 3

    it 'should return zero if the first year is greater than the second', ->

      Walrus.Utils.leapYearsBetween( 2012, 2002 ).should.equal 0

  describe '#durationOfTimeInWords', ->

    it 'should be defined', -> should.exist Walrus.Utils.distanceOfTimeInWords

    assertDistanceOfTimeInWords = ( from, to=from ) ->

      passing = ( from, to, includeSeconds ) -> Walrus.Utils.distanceOfTimeInWords from, to, includeSeconds

      describe "#{from}", ->

        describe '0..1 with includeSeconds', ->

          it 'should return lower bound of less than 5 seconds', ->
            passing( from, to.add( 0.seconds( ) ), true ).should.equal 'less than 5 seconds'
          it 'should return upper bound of less than 5 seconds', ->
            passing( from, to.add( 4.seconds( ) ), true ).should.equal 'less than 5 seconds'
          it 'should return lower bound of less than 10 seconds', ->
            passing( from, to.add( 5.seconds( ) ), true ).should.equal 'less than 10 seconds'
          it 'should return upper bound of less than 10 seconds', ->
            passing( from, to.add( 9.seconds( ) ), true ).should.equal 'less than 10 seconds'
          it 'should return lower bound of less than 20 seconds', ->
            passing( from, to.add( 10.seconds( ) ), true ).should.equal 'less than 20 seconds'
          it 'should return upper bound of less than 20 seconds', ->
            passing( from, to.add( 19.seconds( ) ), true ).should.equal 'less than 20 seconds'


        describe 'First case 0..1', ->

          it 'should return lower bound for less than a minute', ->
            passing( from, to.add( 0.seconds( ) ) ).should.equal 'less than a minute'
          it 'should return upper bound for less than a minute', ->
            passing( from, to.add( 29.seconds( ) ) ).should.equal 'less than a minute'
          it 'should return lower bound for 1 minute', ->
            passing( from, to.add( 30.seconds( ) ) ).should.equal '1 minute'
          it 'should return upper bound for 1 minute', ->
            passing( from, to.add( 1.minutes( ) ).add( 29.seconds( ) ) ).should.equal '1 minute'

        describe '2..44', ->

          it 'should return lower bound for minutes', ->
            passing( from, to.add( 1.minutes( ) ).add( 30.seconds( ) ) ).should.equal '2 minutes'
          it 'should return upper bound for minutes', ->
            passing( from, to.add( 44.minutes( ) ).add( 29.seconds( ) ) ).should.equal '44 minutes'

        describe '45..89', ->

          it 'should return lower bound for 1 hour', ->
            passing( from, to.add( 44.minutes( ) ).add( 30.seconds( ) ) ).should.equal 'about 1 hour'
          it 'should return upper bound for 1 hour', ->
            passing( from, to.add( 89.minutes( ) ).add( 29.seconds( ) ) ).should.equal 'about 1 hour'

        describe '90..1439', ->

          it 'should return lower bound for hours', ->
            passing( from, to.add( 89.minutes( ) ).add( 30.seconds( ) ) ).should.equal 'about 2 hours'
          it 'should return upper bound for hours', ->
            passing( from, to.add( 23.hours( ) ).add( 59.minutes( ) ).add( 29.seconds( ) ) ).should.equal 'about 24 hours'

        describe '1440..2519', ->

          it 'should return lower bound for 1 day', ->
            passing( from, to.add( 23.hours( ) ).add( 59.minutes( ) ).add( 30.seconds( ) ) ).should.equal '1 day'
          it 'should return upper bound for 1 day', ->
            passing( from, to.add( 41.hours( ) ).add( 59.minutes( ) ).add( 29.seconds( ) ) ).should.equal '1 day'

        describe '2520..43199', ->

          it 'should return lower bound for days', ->
            passing( from, to.add( 41.hours( ) ).add( 59.minutes( ) ).add( 30.seconds( ) ) ).should.equal '2 days'
          it 'should round up at 12 hours', ->
            passing( from, to.add( 2.days( ) ).add( 12.hours( ) ) ).should.equal '3 days'
          it 'should return upper bound for days', ->
            passing( from, to.add( 29.days( ) ).add( 23.hours( ) ).add( 59.minutes( ) ).add( 29.seconds( ) ) ).should.equal '30 days'

        describe '43200..86399', ->

          it 'should return lower bound for about 1 month', ->
            passing( from, to.add( 29.days( ) ).add( 23.hours( ) ).add( 59.minutes( ) ).add( 30.seconds( ) ) ).should.equal 'about 1 month'
          it 'should return upper bound for about 1 month', ->
            passing( from, to.add( 59.days( ) ).add( 23.hours( ) ).add( 59.minutes( ) ).add( 29.seconds( ) ) ).should.equal 'about 1 month'

        describe '86400..525599', ->

          it 'should return lower bound for months', ->
            passing( from, to.add( 59.days( ) ).add( 23.hours( ) ).add( 59.minutes( ) ).add( 30.seconds( ) ) ).should.equal '2 months'
          it 'should return upper bound for months', ->
            passing( from, to.add( 1.years( ) ).sub( 31.seconds( ) ) ).should.equal '12 months'

        describe '> 525599', ->

          it 'should return lower bound for about 1 year', ->
            passing( from, to.add( 1.years( ) ).sub( 30.seconds( ) ) ).should.equal 'about 1 year'
          it 'should return upper bound for about 1 year', ->
            passing( from, to.add( 1.years( ) ).add( 3.months( ) ).sub( 1.days( ) ) ).should.equal 'about 1 year'
          it 'should return lower bound for over 1 year', ->
            passing( from, to.add( 1.years( ) ).add( 6.months( ) ) ).should.equal 'over 1 year'

          it 'should return upper bound for almost 2 years', ->
            passing( from, to.add( 2.years( ) ).sub( 3.months( ) ).add( 4.days( ) ) ).should.equal 'almost 2 years'
          it 'should return lower bound for about 2 years', ->
            passing( from, to.add( 2.years( ) ).add( 3.months( ) ).sub( 4.days( ) ) ).should.equal 'about 2 years'
          it 'should return lower bound for over 2 years', ->
            passing( from, to.add( 2.years( ) ).add( 3.months( ) ).add( 4.days( ) ) ).should.equal 'over 2 years'
          it 'should return upper bound for over 2 years', ->
            passing( from, to.add( 2.years( ) ).add( 9.months( ) ).sub( 4.days( ) ) ).should.equal 'over 2 years'
          it 'should return lower bound for almost 3 years', ->
            passing( from, to.add( 2.years( ) ).add( 9.months( ) ).add( 4.days( ) ) ).should.equal 'almost 3 years'

          it 'should return upper bound for almost 5 years', ->
            passing( from, to.add( 5.years( ) ).sub( 3.months( ) ).add( 5.days( ) ) ).should.equal 'almost 5 years'
          it 'should return lower bound for about 5 years', ->
            passing( from, to.add( 5.years( ) ).add( 3.months( ) ).sub( 5.days( ) ) ).should.equal 'about 5 years'
          it 'should return lower bound for over 5 years', ->
            passing( from, to.add( 5.years( ) ).add( 3.months( ) ).add( 5.days( ) ) ).should.equal 'over 5 years'
          it 'should return upper bound for over 5 years', ->
            passing( from, to.add( 5.years( ) ).add( 9.months( ) ).sub( 5.days( ) ) ).should.equal 'over 5 years'
          it 'should return lower bound for almost 6 years', ->
            passing( from, to.add( 5.years( ) ).add( 9.months( ) ).add( 5.days( ) ) ).should.equal 'almost 6 years'

          it 'should return upper bound for almost 10 years', ->
            passing( from, to.add( 10.years( ) ).sub( 3.months( ) ).add( 6.days( ) ) ).should.equal 'almost 10 years'
          it 'should return lower bound for about 10 years', ->
            passing( from, to.add( 10.years( ) ).add( 3.months( ) ).sub( 6.days( ) ) ).should.equal 'about 10 years'
          it 'should return lower bound for over 10 years', ->
            passing( from, to.add( 10.years( ) ).add( 3.months( ) ).add( 6.days( ) ) ).should.equal 'over 10 years'
          it 'should return upper bound for over 10 years', ->
            passing( from, to.add( 10.years( ) ).add( 9.months( ) ).sub( 6.days( ) ) ).should.equal 'over 10 years'
          it 'should return lower bound for almost 11 years', ->
            passing( from, to.add( 10.years( ) ).add( 9.months( ) ).add( 6.days( ) ) ).should.equal 'almost 11 years'

        describe 'test to < from', ->

          it 'should be correct for 4 hours into the future', ->
            passing( from.add( 4.hours( ) ), to ).should.equal 'about 4 hours'
          it 'should be correct for a couple of seconds into the future', ->
            passing( from.add( 19.seconds( ) ), to, true ).should.equal 'less than 20 seconds'

    assertDistanceOfTimeInWords new Date( Date.UTC( 2004, 5, 6, 21, 45, 0 ) )



