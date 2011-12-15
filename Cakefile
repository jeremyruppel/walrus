fs = require 'fs'
path = require 'path'
jison = require 'jison'
exec  = require( 'child_process' ).exec

run = ( command, callback ) ->

  exec command, ( error, stdout, stderr ) ->

    console.log error  if error?
    console.log stdout if stdout?
    console.log stderr if stderr?

    callback( ) if callback?

task 'compile', 'Compile the walrus parser', ->

  console.log 'WOOO', jison

task 'test', 'Run the test suite', ->

  run 'jasmine-node --coffee spec'
