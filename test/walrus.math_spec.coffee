{Walrus} = require '../bin/walrus'
helper   = require './support/test_helpers'

require '../bin/walrus.math'

describe 'Walrus.Math', -> helper.pass './test/examples/math'
