Walrus = require '../lib/walrus'

describe 'Walrus.Parser', ->

  it 'should be defined', -> expect( Walrus.Parser ).toBeDefined( )

  describe '#parse', ->

    it 'should be defined', -> expect( Walrus.Parser.parse ).toBeDefined( )

    it 'should parse all examples correctly', ->

      fs   = require 'fs'
      path = require 'path'

      test = ( basename ) ->

        text = fs.readFileSync "#{basename}.wal",  'utf8'
        json = fs.readFileSync "#{basename}.js",   'utf8'
        html = fs.readFileSync "#{basename}.html", 'utf8'

        Walrus.Parser.parser.yy = Walrus.AST

        tmpl = Walrus.Parser.parse text

        console.log tmpl
        console.log eval( "(#{json})" )
        console.log tmpl.compile( eval( "(#{json})" ) )

        expect( tmpl.compile eval( "(#{json})" ) ).toEqual html

      for file in fs.readdirSync './spec/examples'

        test "./spec/examples/#{path.basename file, '.wal'}" if path.extname( file ) is '.wal'
