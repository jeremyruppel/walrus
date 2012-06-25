require '../bin/walrus'
require '../bin/walrus.strings'

should = require 'should'
helper = require './support/test_helpers'

describe 'Walrus.Strings', -> helper.pass './test/examples/strings'
