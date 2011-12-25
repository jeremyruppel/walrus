%start document

%%

document
  : text EOF { return new yy.Template( $1 ) }
  ;

text
  : statements { $$ = $1 }
  ;

statements
  : statements statement { $1.push( $2 ); $$ = $1 }
  | statement { $$ = [ $1 ] }
  ;

statement
  : blockstache { $$ = $1 }
  | mustache { $$ = $1 }
  | CONTENT { $$ = new yy.ContentNode( $1 ) }
  ;

blockstache
  : OPEN mustachery OPEN_BLOCK CLOSE text CLOSE_BLOCK { $$ = new yy.BlockNode( $2, $5 ) }
  ;

mustache
  : OPEN mustachery CLOSE { $$ = $2 }
  ;

mustachery
  : expression { $$ = $1 }
  ;

expression
  : ATTR paths { $$ = new yy.PathNode( $2, false ) }
  | paths { $$ = new yy.PathNode( $1, true ) }
  ;

paths
  : paths DELIMETER path { $1.push( $3 ); $$ = $1 }
  | path { $$ = [ $1 ] }
  ;

path
  : method { $$ = $1 }
  | member { $$ = $1 }
  ;

method
  : MEMBER OPEN_PAREN arguments CLOSE_PAREN { $$ = new yy.MethodNode( $1, $3 ) }
  | MEMBER OPEN_PAREN CLOSE_PAREN { $$ = new yy.MethodNode( $1, [ ] ) }
  ;

arguments
  : arguments COMMA argument { $1.push( $3 ); $$ = $1 }
  | argument { $$ = [ $1 ] }
  ;

argument
  : expression { $$ = $1 }
  | SINGLE_QUOTE_STRING_LITERAL { $$ = new yy.PrimitiveNode( $1 ) }
  | DOUBLE_QUOTE_STRING_LITERAL { $$ = new yy.PrimitiveNode( $1 ) }
  | BOOLEAN_FALSE { $$ = new yy.PrimitiveNode( false ) }
  | BOOLEAN_TRUE { $$ = new yy.PrimitiveNode( true ) }
  | NUMBER { $$ = new yy.PrimitiveNode( parseFloat( $1 ) ) }
  ;

member
  : MEMBER { $$ = new yy.MemberNode( $1 ) }
  ;
