require 'icing'

path = require 'path'
fs   = require 'fs'

task 'jison', 'Compile the walrus parser', [ ],

  outputs : -> [ ]

  recipe : ->

    @exec [
      'jison src/walrus.yy src/walrus.l',
      'mv ./walrus.js ./lib/walrus/parser.js'
    ]

task 'compile', 'Compile the walrus javascripts', [ 'task(jison)', 'lib/*.coffee' ],

  outputs : -> path.basename file, '.coffee' for file in @filePrereqs

  recipe : ->

    ejs = require 'ejs'
    cof = require 'coffee-script'
    ugl = require 'uglify-js'

    for file in @filePrereqs #change to @modifiedPrereqs

      tmp = ejs.render fs.readFileSync( file, 'utf8' ), fs : fs

      dev = "bin/#{path.basename( file, '.coffee' )}.js"
      min = "bin/#{path.basename( file, '.coffee' )}.min.js"

      fs.writeFileSync dev, cof.compile tmp

      ast = ugl.parser.parse fs.readFileSync dev, 'utf8'
      ast = ugl.uglify.ast_mangle ast
      ast = ugl.uglify.ast_squeeze ast

      fs.writeFileSync min, ugl.uglify.gen_code ast

    @finished( )

task 'vows', 'Run the vows suite', [ 'task(compile)' ],

  outputs : -> [ ]

  recipe : ->

    console.log 'RUN THE VOWS', arguments
