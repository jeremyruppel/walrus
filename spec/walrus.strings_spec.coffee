Walrus = require '../bin/walrus'

require '../bin/walrus.strings'

describe 'walrus.strings', ->

  fs    = require 'fs'
  path  = require 'path'
  specs = './spec/examples/strings'

  for file in fs.readdirSync specs when path.extname( file ) is '.wal'

    do ( file ) ->

      base = path.basename file, '.wal'

      console.log '*****', base

      text = fs.readFileSync "#{specs}/#{base}.wal",  'utf8'
      json = fs.readFileSync "#{specs}/#{base}.js",   'utf8'
      html = fs.readFileSync "#{specs}/#{base}.html", 'utf8'

      tmpl = Walrus.Parser.parse text

      console.log file
      console.log tmpl
      console.log eval( "(#{json})" )
      console.log tmpl.compile( eval( "(#{json})" ) )

      it "should pass the #{base} example", -> expect( tmpl.compile eval( "(#{json})" ) ).toEqual html
