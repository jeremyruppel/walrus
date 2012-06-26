{sh,mv,concat,each} = require 'frosting'
readline            = require 'readline'

# Prepend path to package.json dependencies' binaries
process.env.PATH = "node_modules/.bin:#{process.env.PATH}"

task 'compile', 'Compile the walrus parser', ->
  sh 'jison src/walrus.yy src/walrus.l', -> mv './walrus.js', './lib/walrus/parser.js'

task 'test', 'Run the test suite', ->
  sh 'mocha --reporter spec --colors'

task 'build', 'Build the walrus javascripts', ->
  concat [
    './lib/walrus.coffee',
    '`',
    './lib/walrus/parser.js',
    '`',
    './lib/walrus/utils.coffee',
    './lib/walrus/ast.coffee',
    './lib/walrus/helpers.coffee',
    './lib/walrus/filters.coffee',
    './lib/walrus/export.coffee'
  ], ( f ) -> f.header './package.json', -> f.compile -> f.write './bin/walrus.js'

  each './lib/walrus.*.coffee', ( f ) -> f.compile -> f.write "./bin/#{f.basename( )}.js"

task 'all', 'Runs all build, compilation, and test tasks in order', ->
  invoke 'compile'
  invoke 'build'
  invoke 'test'
