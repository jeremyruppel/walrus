AST = { }

class AST.Template
  constructor : ( @nodes ) ->

  compile : ( data ) ->

    ( node.compile data for node in @nodes ).join ''

class AST.ContentNode
  constructor : ( @content ) ->

  compile : ( data ) -> @content

class AST.MemberNode
  constructor : ( @member ) ->

  compile : ( data ) -> data[ @member ]

module.exports = AST
