Walrus = require '../../bin/walrus'

fs   = require 'fs'
path = require 'path'
exec = require( 'child_process' ).exec

TestHelpers =

  read : ( filename ) -> fs.readFileSync filename, 'utf8' if path.existsSync filename

  pass : ( specs, suffix='' ) ->

    for file in fs.readdirSync specs when path.extname( file ) is '.wal'

      do ( file ) =>

        base = path.basename file, '.wal'

        text = @read "#{specs}/#{base}.wal"
        json = @read "#{specs}/#{base}.js"
        html = @read "#{specs}/#{base}#{suffix}.html"

        # if we can't find the suffixed version, try and find
        # one without the suffix and use that instead.
        html = @read "#{specs}/#{base}.html" if not html

        # if _that_ one doesn't exist, throw a helpful error.
        throw "Can't find example html at #{specs}/#{base}#{suffix}.html or #{specs}/#{base}.html" if not html

        tmpl = Walrus.Parser.parse text

        it "should pass the #{base}#{suffix} example", ( done ) ->

          comp = tmpl.compile( eval( "(#{json})" ) )

          if comp is html
            done( )
          else

            cmd = """
            printf "#{comp}" | diff --unified #{specs}/#{base}#{suffix}.html -
            """

            exec cmd, ( error, stdout, stderr ) ->

              done new Error "Expected did not match actual:\n" + stdout


module.exports = TestHelpers
