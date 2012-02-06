Walrus = require '../bin/walrus'
should = require 'should'

describe 'Walrus.Utils', ->

  it 'should be defined', -> should.exist Walrus.Utils

  describe '#trim', ->

    it 'should be defined', -> should.exist Walrus.Utils.trim

    it 'should trim leading whitespace', ->
      Walrus.Utils.trim( '   foo' ).should.equal 'foo'

    it 'should trim trailing whitespace', ->
      Walrus.Utils.trim( 'foo   ' ).should.equal 'foo'

    it 'should trim leading and trailing whitespace', ->
      Walrus.Utils.trim( '  foo  ' ).should.equal 'foo'

    it 'should leave internal whitespace alone', ->
      Walrus.Utils.trim( 'foo   bar' ).should.equal 'foo   bar'

    it 'should trim newlines', ->
      Walrus.Utils.trim( """

      foo

      """ ).should.equal 'foo'