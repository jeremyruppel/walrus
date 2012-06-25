require '../bin/walrus'

should = require 'should'
helper = require './support/test_helpers'

describe 'Walrus.Parser', ->

  it 'should be defined', -> should.exist Walrus.Parser

  describe '#parse', ->

    it 'should be defined', -> should.exist Walrus.Parser.parse

    it 'should be able to parse an empty string', ->

      ( -> Walrus.Parser.parse '' ).should.not.throw( )

    # TODO there's got to be a better place to put these spec-only filters
    Walrus.addFilter 'append',  ( value, something ) -> "#{value}, #{something}"
    Walrus.addFilter 'prepend', ( value, something ) -> "#{something}, #{value}"
    Walrus.addFilter 'exclaim', ( value ) -> "#{value}!!"
    Walrus.addFilter 'confuse', ( value ) -> "#{value}??"

    helper.pass './test/examples'
