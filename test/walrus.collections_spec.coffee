Walrus = require '../bin/walrus'
should = require 'should'
helper = require './support/test_helpers'

require '../bin/walrus.collections'

describe 'walrus.collections', ->

  helper.pass './test/examples/collections'
