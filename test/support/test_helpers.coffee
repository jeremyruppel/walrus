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

        spec = "#{base}#{suffix}"

        text = @read "#{specs}/#{base}.wal"
        json = @read "#{specs}/#{base}.js"
        html = @read "#{specs}/#{spec}.html"

        # if we can't find the suffixed version, try and find
        # one without the suffix and use that instead.
        if not html
          spec = base
          html = @read "#{specs}/#{spec}.html"

        # if _that_ one doesn't exist, throw a helpful error.
        throw "Can't find example html at #{specs}/#{base}#{suffix}.html or #{specs}/#{base}.html" if not html

        tmpl = Walrus.Parser.parse text

        it "should pass the #{spec} example", ( done ) ->

          comp = tmpl.compile( eval( "(#{json})" ) )

          if comp is html
            done( )
          else

            cmd = """
            printf "#{comp}" | diff --unified #{specs}/#{spec}.html -
            """

            exec cmd, ( error, stdout, stderr ) ->

              done new Error "Expected did not match actual:\n" + stdout


module.exports = TestHelpers
