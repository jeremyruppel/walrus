{Walrus} = require '../bin/walrus'

require '../bin/walrus.currencies'

should = require 'should'
helper = require './support/test_helpers'

describe 'Walrus.Currencies', -> helper.pass './test/examples/currencies'
