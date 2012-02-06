Walrus = require '../bin/walrus'
should = require 'should'
helper = require './support/test_helpers'

require '../bin/walrus.strings'

describe 'Walrus.Strings', ->

  helper.pass './test/examples/strings'
