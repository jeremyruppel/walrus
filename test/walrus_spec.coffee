Walrus = require '../bin/walrus'
should = require 'should'
helper = require './support/test_helpers'

describe 'Walrus.Parser', ->

  it 'should be defined', -> should.exist Walrus.Parser

  describe '#parse', ->

    it 'should be defined', -> should.exist Walrus.Parser.parse

    # TODO there's got to be a better place to put these spec-only filters
    Walrus.Filters.add 'append',  ( value, something ) -> "#{value}, #{something}"
    Walrus.Filters.add 'prepend', ( value, something ) -> "#{something}, #{value}"
    Walrus.Filters.add 'exclaim', ( value ) -> "#{value}!!"
    Walrus.Filters.add 'confuse', ( value ) -> "#{value}??"

    helper.pass './test/examples'
