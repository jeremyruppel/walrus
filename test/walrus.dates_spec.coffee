Walrus = require '../bin/walrus'
should = require 'should'
helper = require './support/test_helpers'

require '../bin/walrus.dates'

describe 'walrus.dates', ->

  helper.pass './test/examples/dates'
