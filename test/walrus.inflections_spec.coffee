require '../bin/walrus'
require '../bin/walrus.inflections'

should = require 'should'
helper = require './support/test_helpers'

describe 'Walrus.Inflections', -> helper.pass './test/examples/inflections'
