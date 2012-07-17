{Walrus} = require '../bin/walrus'
{expect} = require 'chai'

describe 'Walrus.Utils', ->

  it 'should be defined', -> expect( Walrus.Utils ).to.be.ok

  describe '#trim', ->

    it 'should be defined', -> expect( Walrus.Utils.trim ).to.be.ok

    it 'should trim leading whitespace', ->
      expect( Walrus.Utils.trim( '   foo' ) ).to.equal 'foo'

    it 'should trim trailing whitespace', ->
      expect( Walrus.Utils.trim( 'foo   ' ) ).to.equal 'foo'

    it 'should trim leading and trailing whitespace', ->
      expect( Walrus.Utils.trim( '  foo  ' ) ).to.equal 'foo'

    it 'should leave internal whitespace alone', ->
      expect( Walrus.Utils.trim( 'foo   bar' ) ).to.equal 'foo   bar'

    it 'should trim newlines', ->
      expect( Walrus.Utils.trim( """

      foo

      """ ) ).to.equal 'foo'

  describe '#reduce', ->

    it 'should be defined', -> expect( Walrus.Utils.reduce ).to.be.ok

    it 'should reduce the list into a single value', ->

      array  = [ 1, 2, 3 ]
      memo   = 1
      method = ( memo, item ) -> memo + item

      expect( Walrus.Utils.reduce( array, memo, method ) ).to.equal 7

  describe '#toString', ->

    it 'should be defined', -> expect( Walrus.Utils.toString ).to.be.ok

    it 'should correctly identify an array', ->

      expect( Walrus.Utils.toString( [ ] ) ).to.equal '[object Array]'

    it 'should correctly identify an object', ->

      expect( Walrus.Utils.toString( { } ) ).to.equal '[object Object]'

  describe '#isArray', ->

    it 'should be defined', -> expect( Walrus.Utils.isArray ).to.be.ok

    it 'should return true for an array', ->

      expect( Walrus.Utils.isArray( [ ] ) ).to.be.true

    it 'should return false for an object', ->

      expect( Walrus.Utils.isArray( { } ) ).to.be.false

  describe '#extend', ->

    it 'should be defined', -> expect( Walrus.Utils.extend ).to.be.ok

    it 'should apply all properties from one object to another', ->

      foo = a : 123, b : 'asdf'
      bar = a : 456, c : 'qwer'

      Walrus.Utils.extend foo, bar

      expect( foo.a ).to.equal 456
      expect( foo.b ).to.equal 'asdf'
      expect( foo.c ).to.equal 'qwer'

  describe '#escape', ->

    it 'should be defined', -> expect( Walrus.Utils.escape ).to.be.ok

    it 'should escape ampersands',           -> expect( Walrus.Utils.escape( '&' ) ).to.equal '&amp;'
    it 'should escape single quotes',        -> expect( Walrus.Utils.escape( "'" ) ).to.equal '&#x27;'
    it 'should escape double quotes',        -> expect( Walrus.Utils.escape( '"' ) ).to.equal '&quot;'
    it 'should escape left angle brackets',  -> expect( Walrus.Utils.escape( '<' ) ).to.equal '&lt;'
    it 'should escape right angle brackets', -> expect( Walrus.Utils.escape( '>' ) ).to.equal '&gt;'

    it 'should simply pass back values that are not strings', ->
      expect( Walrus.Utils.escape( 123 ) ).to.equal 123

    it 'should simply pass back `undefined`', ->
      expect( Walrus.Utils.escape( undefined ) ).to.equal undefined

    it 'should simply pass back `null`', ->
      expect( Walrus.Utils.escape( null ) ).to.equal null

  describe '#keypath', ->

    it 'should be defined', -> expect( Walrus.Utils.keypath ).to.be.ok

    it 'should retrieve the value of a deeply nested property', ->

      foo = { bar : { baz : 'woot' } }

      expect( Walrus.Utils.keypath( 'bar.baz', foo ) ).to.equal 'woot'

  describe '#interpolate', ->

    it 'should be defined', -> expect( Walrus.Utils.interpolate ).to.be.ok

    before -> @context = foo : 'foo!', bar : 'bar!'

    it 'should fill in the named values', ->
      expect( Walrus.Utils.interpolate( 'sup %{foo}?', @context ) ).to.equal 'sup foo!?'

    it 'should fill in a value more than once', ->
      expect( Walrus.Utils.interpolate( '%{foo} %{foo}', @context ) ).to.equal 'foo! foo!'

    it 'should ignore missing keys', ->
      expect( Walrus.Utils.interpolate( '%{foo} %{wut}', @context ) ).to.equal 'foo! %{wut}'
