AST = { }

class AST.Template
  constructor : ( @nodes ) ->

  compile : ( data ) ->

    ( node.compile data for node in @nodes ).join ''

class AST.ContentNode
  constructor : ( @content ) ->

  compile : ( data ) -> @content

class AST.MemberNode
  constructor : ( @paths ) ->

  compile : ( data ) ->

    curr  = data
    paths = @paths.concat( )

    while paths.length

      path = paths.shift( )

      curr = curr[ path ]

    curr

module.exports = AST
