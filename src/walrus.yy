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
  : mustache { $$ = $1 }
  | CONTENT { $$ = new yy.ContentNode( $1 ) }
  ;

mustache
  : OPEN expression CLOSE { $$ = new yy.MustacheNode( $2 ) }
  | OPEN expression OPEN_BLOCK CLOSE text CLOSE_BLOCK { $$ = new yy.MustacheNode( $2, $5 ) }
  ;

expression
  : ATTR paths { $$ = new yy.PathNode( $2, false ) }
  | paths { $$ = new yy.PathNode( $1, true ) }
  | DOT { $$ = new yy.ThisNode( ) }
  ;

paths
  : paths DOT path { $1.push( $3 ); $$ = $1 }
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
