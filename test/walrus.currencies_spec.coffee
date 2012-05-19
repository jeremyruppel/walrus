Walrus = require '../bin/walrus'
should = require 'should'
helper = require './support/test_helpers'

require '../bin/walrus.currencies'

describe 'Walrus.Currencies', ->

  helper.pass './test/examples/currencies'