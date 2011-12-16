Walrus = require '../lib/walrus'

describe 'Walrus.Parser', ->

  it 'should be defined', -> expect( Walrus.Parser ).toBeDefined( )

  describe '#parse', ->

    it 'should be defined', -> expect( Walrus.Parser.parse ).toBeDefined( )

    it 'should parse all examples correctly', ->

      fs   = require 'fs'
      path = require 'path'

      test = ( basename ) ->

        tmpl = fs.readFileSync "#{basename}.wal",  'utf8'
        json = fs.readFileSync "#{basename}.json", 'utf8'
        html = fs.readFileSync "#{basename}.html", 'utf8'

        Walrus.Parser.parser.yy = Walrus.AST

        console.log Walrus.Parser.parse tmpl

      fs.readdir './spec/examples', ( err, files ) ->

        test "./spec/examples/#{path.basename file, '.wal'}" for file in files when path.extname( file ) is '.wal'
