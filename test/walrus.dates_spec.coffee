Walrus = require '../bin/walrus'
should = require 'should'
helper = require './support/test_helpers'

require '../bin/walrus.dates'

describe 'Walrus.Dates', ->

  ###
    TODO watch this fail when we hit daylight savings time :P
  ###
  suffix = new Date( ).getTimezoneOffset( ) / 60

  suffix = if suffix < 10 then "0#{suffix}" else "#{suffix}"

  helper.pass './test/examples/dates', "-#{suffix}00"

describe 'Walrus.Utils date additions', ->

  describe '#isLeapYear', ->

    it 'should be defined', -> should.exist Walrus.Utils.isLeapYear

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

    for tuple in years
      do ->
        [ year, actual ] = tuple

        it "should correctly identify the leapitude of the year #{year}", ->

          Walrus.Utils.isLeapYear( year ).should.equal actual



    # ree-1.8.7-2010.02 :031 > (2002..2012).each { |year| puts Date.leap?( year ) }
    # false
    # false
    # true
    # false
    # false
    # false
    # true
    # false
    # false
    # false
    # true