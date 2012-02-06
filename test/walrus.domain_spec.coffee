Walrus = require '../bin/walrus'
should = require 'should'
helper = require './support/test_helpers'

require '../bin/walrus.domain'

describe 'Walrus.Domain', ->

  it 'should be defined', -> should.exist Walrus.Domain

  # test domain helper methods

  Walrus.Domain.person =
    fullName      : -> "#{@firstName} #{@lastName}"
    telephoneName : -> "#{@lastName}, #{@firstName}"

  Walrus.Domain.hockeyPlayer =
    positionName : ->
      switch @position
        when 'F' then 'Forward'
        when 'G' then 'Goaltender'

  helper.pass './test/examples/domain'
