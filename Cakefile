fs    = require 'fs'
path  = require 'path'
exec  = require( 'child_process' ).exec

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

  sh 'jasmine-node --coffee spec'

task 'build', 'Build the walrus javascripts', ->

  ejs = require 'ejs'
  cof = require 'coffee-script'

  tmp = ejs.render fs.readFileSync( 'lib/walrus.coffee', 'utf8' ), fs : fs

  fs.writeFileSync 'bin/walrus.js', cof.compile tmp

task 'minify', 'Minify the walrus javascripts', ->

  ugl = require 'uglify-js'

  ast = ugl.parser.parse fs.readFileSync 'bin/walrus.js', 'utf8'
  ast = ugl.uglify.ast_mangle ast
  ast = ugl.uglify.ast_squeeze ast

  fs.writeFileSync 'bin/walrus.min.js', ugl.uglify.gen_code ast
