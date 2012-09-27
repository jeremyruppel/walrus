{Walrus} = require '../bin/walrus'
{expect} = require 'chai'
helper   = require './support/test_helpers'

describe 'Walrus.Domain', ->

  it 'should be defined', -> expect( Walrus.Domain ).to.be.ok

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
