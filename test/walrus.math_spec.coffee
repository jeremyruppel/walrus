require '../bin/walrus'
require '../bin/walrus.math'

should = require 'should'
helper = require './support/test_helpers'

describe 'Walrus.Math', -> helper.pass './test/examples/math'
