Walrus = require '../bin/walrus'

describe 'Walrus.Parser', ->

  it 'should be defined', -> expect( Walrus.Parser ).toBeDefined( )

  describe '#parse', ->

    it 'should be defined', -> expect( Walrus.Parser.parse ).toBeDefined( )

    # TODO there's got to be a better place to put these spec-only filters
    Walrus.Filters.add 'append',  ( value, something ) -> "#{value}, #{something}"
    Walrus.Filters.add 'prepend', ( value, something ) -> "#{something}, #{value}"

    fs    = require 'fs'
    path  = require 'path'
    specs = './spec/examples'

    for file in fs.readdirSync specs when path.extname( file ) is '.wal'

      do ( file ) ->

        base = path.basename file, '.wal'

        text = fs.readFileSync "#{specs}/#{base}.wal",  'utf8'
        json = fs.readFileSync "#{specs}/#{base}.js",   'utf8'
        html = fs.readFileSync "#{specs}/#{base}.html", 'utf8'

        tmpl = Walrus.Parser.parse text

        it "should pass the #{base} example", -> expect( tmpl.compile eval( "(#{json})" ) ).toEqual html
