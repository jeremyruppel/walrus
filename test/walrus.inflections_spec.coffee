Walrus = require '../bin/walrus'
should = require 'should'
helper = require './support/test_helpers'

require '../bin/walrus.inflections'

describe 'Walrus.Inflections', ->

  helper.pass './test/examples/inflections'
