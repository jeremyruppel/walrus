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
