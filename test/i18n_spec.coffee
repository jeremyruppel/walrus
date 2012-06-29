require '../bin/walrus'

should = require 'should'
helper = require './support/test_helpers'

describe 'Walrus.i18n', ->
  before ->
    Walrus.i18n.en.spec = {
      translation   : 'Yup this works'
      interpolation : 'Why, hello %{name}!'
    }

  helper.pass './test/examples/i18n'

  describe 'locale', ->
    it 'should be defined', -> should.exist Walrus.i18n.locale

  describe 't', ->

    before -> Walrus.i18n.locale = 'en'
    before -> Walrus.i18n.en.whatever = { greeting : 'Sup %{name}!' }

    it 'should look up the proper value in the current locale', ->
      Walrus.i18n.t( 'whatever.greeting' ).should.equal( 'Sup %{name}!' )

    it 'should interpolate the context into the string if given', ->
      Walrus.i18n.t( 'whatever.greeting', name : 'broseph' ).should.equal( 'Sup broseph!' )

    it 'should throw an error on a missing keypath', ->
      ( ->
        Walrus.i18n.t 'whatever.nothings.here'
      ).should.throw( 'Missing translation: en.whatever.nothings.here' )

  describe 'l', ->
    before -> Walrus.i18n.locale = 'en'
    before -> Walrus.i18n.en.whatever = [ 'one', 'two', 'three' ]

    it 'should look up the proper value in the current locale', ->
      Walrus.i18n.l( 'whatever' ).should.eql [ 'one', 'two', 'three' ]

    it 'should throw an error on a missing keypath', ->
      ( ->
        Walrus.i18n.l 'whatever.nothings.here'
      ).should.throw( 'Missing translation: en.whatever.nothings.here' )
