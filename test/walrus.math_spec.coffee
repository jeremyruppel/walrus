Walrus = require '../bin/walrus'
should = require 'should'
helper = require './support/test_helpers'

require '../bin/walrus.math'

describe 'Walrus.Math', ->

  helper.pass './test/examples/math'
