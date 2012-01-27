Walrus = require '../bin/walrus'
should = require 'should'

describe 'Walrus.Parser', ->

  it 'should be defined', -> should.exist Walrus.Parser

  describe '#parse', ->

    it 'should be defined', -> should.exist Walrus.Parser.parse

    # TODO there's got to be a better place to put these spec-only filters
    Walrus.Filters.add 'append',  ( value, something ) -> "#{value}, #{something}"
    Walrus.Filters.add 'prepend', ( value, something ) -> "#{something}, #{value}"

    fs    = require 'fs'
    path  = require 'path'
    specs = './test/examples'

    for file in fs.readdirSync specs when path.extname( file ) is '.wal'

      do ( file ) ->

        base = path.basename file, '.wal'

        text = fs.readFileSync "#{specs}/#{base}.wal",  'utf8'
        json = fs.readFileSync "#{specs}/#{base}.js",   'utf8'
        html = fs.readFileSync "#{specs}/#{base}.html", 'utf8'

        tmpl = Walrus.Parser.parse text

        it "should pass the #{base} example", -> tmpl.compile( eval( "(#{json})" ) ).should.equal html
