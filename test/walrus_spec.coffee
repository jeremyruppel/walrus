{Walrus} = require '../bin/walrus'
{expect} = require 'chai'
helper   = require './support/test_helpers'

describe 'Walrus.Parser', ->

  it 'should be defined', -> expect( Walrus.Parser ).to.be.ok

  describe '#parse', ->

    it 'should be defined', -> expect( Walrus.Parser.parse ).to.be.ok

    it 'should be able to parse an empty string', ->
      expect( -> Walrus.Parser.parse '' ).to.not.throw( Error )

    # TODO there's got to be a better place to put these spec-only filters
    Walrus.addFilter 'append',  ( value, something ) -> "#{value}, #{something}"
    Walrus.addFilter 'prepend', ( value, something ) -> "#{something}, #{value}"
    Walrus.addFilter 'exclaim', ( value ) -> "#{value}!!"
    Walrus.addFilter 'confuse', ( value ) -> "#{value}??"

    helper.pass './test/examples'
