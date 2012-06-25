require '../bin/walrus'

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

  describe '#reduce', ->

    it 'should be defined', -> should.exist Walrus.Utils.reduce

    it 'should reduce the list into a single value', ->

      array  = [ 1, 2, 3 ]
      memo   = 1
      method = ( memo, item ) -> memo + item

      Walrus.Utils.reduce( array, memo, method ).should.equal 7

  describe '#toString', ->

    it 'should be defined', -> should.exist Walrus.Utils.toString

    it 'should correctly identify an array', ->

      Walrus.Utils.toString( [ ] ).should.equal '[object Array]'

    it 'should correctly identify an object', ->

      Walrus.Utils.toString( { } ).should.equal '[object Object]'

  describe '#isArray', ->

    it 'should be defined', -> should.exist Walrus.Utils.isArray

    it 'should return true for an array', ->

      Walrus.Utils.isArray( [ ] ).should.be.true

    it 'should return false for an object', ->

      Walrus.Utils.isArray( { } ).should.be.false

  describe '#extend', ->

    it 'should be defined', -> should.exist Walrus.Utils.extend

    it 'should apply all properties from one object to another', ->

      foo = a : 123, b : 'asdf'
      bar = a : 456, c : 'qwer'

      Walrus.Utils.extend foo, bar

      foo.a.should.equal 456
      foo.b.should.equal 'asdf'
      foo.c.should.equal 'qwer'

  describe '#escape', ->

    it 'should be defined', -> should.exist Walrus.Utils.escape

    it 'should escape ampersands',           -> Walrus.Utils.escape( '&' ).should.equal '&amp;'
    it 'should escape single quotes',        -> Walrus.Utils.escape( "'" ).should.equal '&#x27;'
    it 'should escape double quotes',        -> Walrus.Utils.escape( '"' ).should.equal '&quot;'
    it 'should escape left angle brackets',  -> Walrus.Utils.escape( '<' ).should.equal '&lt;'
    it 'should escape right angle brackets', -> Walrus.Utils.escape( '>' ).should.equal '&gt;'

    it 'should simply pass back values that are not strings', ->
      Walrus.Utils.escape( 123 ).should.equal 123

    it 'should simply pass back `undefined`', ->
      should.equal Walrus.Utils.escape( undefined ), undefined

    it 'should simply pass back `null`', ->
      should.equal Walrus.Utils.escape( null ), null
