{Walrus} = require '../bin/walrus'
helper   = require './support/test_helpers'

require '../bin/walrus.strings'

describe 'Walrus.Strings', -> helper.pass './test/examples/strings'
