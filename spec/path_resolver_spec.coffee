Walrus = require '../lib/walrus'

describe 'Walrus.Utils.PathResolver', ->

  it 'should be defined', -> expect( Walrus.Utils.PathResolver ).toBeDefined( )

  describe '#resolve', ->

    subject = null # keep `subject` in this scope

    beforeEach ->

      complexObject =
        key   : 'value'
        bool  : true
        child :
          key : 'child value'
          child :
            key : 'grandchild value'

      subject = new Walrus.Utils.PathResolver complexObject

    it 'should be defined', -> expect( subject.resolve ).toBeDefined( )

    it 'should find a key on the object root', ->
      expect( subject.resolve [ 'key' ] ).toEqual 'value'

    it 'should find another key on the object root', ->
      expect( subject.resolve [ 'bool' ] ).toEqual true

    it 'should find a key on a child object', ->
      expect( subject.resolve [ 'child', 'key' ] ).toEqual 'child value'

    it 'should find a key on a grandchild object', ->
      expect( subject.resolve [ 'child', 'child', 'key' ] ).toEqual 'grandchild value'
