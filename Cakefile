fs       = require 'fs'
path     = require 'path'
exec     = require( 'child_process' ).exec
readline = require 'readline'

# Prepend path to package.json dependencies' binaries
process.env.PATH = "node_modules/.bin:#{process.env.PATH}"

sh = ( command, callback ) ->

  exec command, ( error, stdout, stderr ) ->

    console.log error  if error?
    console.log stdout if stdout?
    console.log stderr if stderr?

    callback( ) if callback?

mv = ( from, to ) -> fs.renameSync from, to

task 'compile', 'Compile the walrus parser', ->

  sh 'jison src/walrus.yy src/walrus.l', ->

    mv './walrus.js', './lib/walrus/parser.js'

task 'test', 'Run the test suite', ->

  sh 'mocha --reporter spec --colors'

task 'build', 'Build the walrus javascripts', ->

  ejs = require 'ejs'
  cof = require 'coffee-script'
  ugl = require 'uglify-js'

  hdr = ejs.render fs.readFileSync( 'lib/header.js', 'utf8' ), fs : fs

  for file in fs.readdirSync 'lib' when path.extname( file ) is '.coffee'

    tmp = ejs.render fs.readFileSync( "lib/#{file}", 'utf8' ), fs : fs

    dev = "bin/#{path.basename( file, '.coffee' )}.js"
    min = "bin/#{path.basename( file, '.coffee' )}.min.js"

    fs.writeFileSync dev, ( hdr + cof.compile tmp )

    ast = ugl.parser.parse fs.readFileSync dev, 'utf8'
    ast = ugl.uglify.ast_mangle ast
    ast = ugl.uglify.ast_squeeze ast

    fs.writeFileSync min, ( hdr + ugl.uglify.gen_code ast )

task 'all', 'Runs all build, compilation, and test tasks in order', ->

  invoke 'compile'
  invoke 'build'
  invoke 'test'

task 'example', 'Create a new example', ->

  io = readline.createInterface process.stdin, process.stdout, null

  io.question 'What is the name of the new example? ', ( example ) ->

    fs.writeFileSync "test/examples/#{example}.js", """
    // TODO: #{example}.js
    """

    fs.writeFileSync "test/examples/#{example}.wal", """
    <!-- TODO: #{example}.wal -->
    """

    fs.writeFileSync "test/examples/#{example}.html", """
    <!-- TODO: #{example}.html -->
    """

    io.close( )
    process.stdin.destroy( )