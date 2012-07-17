{Walrus} = require '../bin/walrus'
{expect} = require 'chai'
helper   = require './support/test_helpers'

describe 'Walrus.i18n', ->
  before ->
    Walrus.i18n.en.spec = {
      translation   : 'Yup this works'
      interpolation : 'Why, hello %{name}!'
    }

  helper.pass './test/examples/i18n'

  describe 'locale', ->
    it 'should be defined', -> expect( Walrus.i18n.locale ).to.be.ok

  describe 't', ->

    before -> Walrus.i18n.locale = 'en'
    before -> Walrus.i18n.en.whatever = { greeting : 'Sup %{name}!', array : [ 1, 2, 3 ] }

    it 'should look up the proper value in the current locale', ->
      expect( Walrus.i18n.t( 'whatever.greeting' ) ).to.equal( 'Sup %{name}!' )

    it 'should interpolate the context into the string if given', ->
      expect( Walrus.i18n.t( 'whatever.greeting', name : 'broseph' ) ).to.equal( 'Sup broseph!' )

    it 'should return the value straight up if not a string', ->
      expect( Walrus.i18n.t( 'whatever.array' ) ).to.eql [ 1, 2, 3 ]

    it 'should throw an error on a missing keypath', ->
      expect( ->
        Walrus.i18n.t 'whatever.nothings.here'
      ).to.throw( 'Missing translation: en.whatever.nothings.here' )
