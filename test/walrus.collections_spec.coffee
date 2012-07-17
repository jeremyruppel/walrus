{Walrus} = require '../bin/walrus'
helper   = require './support/test_helpers'

require '../bin/walrus.collections'

describe 'Walrus.Collections', -> helper.pass './test/examples/collections'
