require '../../bin/walrus'

fs     = require 'fs'
dir    = require 'path'
should = require 'should'

TestHelpers =

  read : ( filename ) -> fs.readFileSync filename, 'utf8' if dir.existsSync filename

  find : ( specs, suffix='' ) ->

    for file in fs.readdirSync specs when dir.extname( file ) is '.wal'

      base = dir.basename file, '.wal'

      spec = "#{base}#{suffix}"

      path = "#{specs}/#{spec}.html"

      text = @read "#{specs}/#{base}.wal"
      json = @read "#{specs}/#{base}.js"
      html = @read path

      # if we can't find the suffixed version, try and find
      # one without the suffix and use that instead.
      if not html
        spec = base
        path = "#{specs}/#{spec}.html"
        html = @read path

      # if _that_ one doesn't exist, throw a helpful error.
      throw "Can't find example html at #{specs}/#{base}#{suffix}.html or #{specs}/#{base}.html" if not html

      name : spec, text : text, json : json, html : html, path : path


  pass : ( specs, suffix='' ) ->

    for spec in @find( specs, suffix )

      do ( spec ) =>

        tmpl = Walrus.Parser.parse spec.text

        it "should pass the #{spec.name} example", ->

          comp = tmpl.compile( eval( "(#{spec.json})" ) )

          comp.should.eql spec.html

module.exports = TestHelpers
