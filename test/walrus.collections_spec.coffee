require '../bin/walrus'
require '../bin/walrus.collections'

should = require 'should'
helper = require './support/test_helpers'

describe 'Walrus.Collections', -> helper.pass './test/examples/collections'
