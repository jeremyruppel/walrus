Walrus = require '../../bin/walrus'

TestHelpers =

  pass : ( specs, suffix='' ) ->

    fs    = require 'fs'
    path  = require 'path'
    exec  = require( 'child_process' ).exec

    for file in fs.readdirSync specs when path.extname( file ) is '.wal'

      do ( file ) ->

        base = path.basename file, '.wal'

        text = fs.readFileSync "#{specs}/#{base}.wal",           'utf8'
        json = fs.readFileSync "#{specs}/#{base}.js",            'utf8'
        html = fs.readFileSync "#{specs}/#{base}#{suffix}.html", 'utf8'

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
