%start document

%%

document
  : text EOF { return new yy.DocumentNode( $1 ) }
  ;

text
  : statements { $$ = $1 }
  ;

statements
  : statements statement { $1.push( $2 ); $$ = $1 }
  | statement { $$ = [ $1 ] }
  ;

statement
  : OPEN helper mustache OPEN_BLOCK text CLOSE_BLOCK CLOSE { $$ = new yy.BlockNode( $2, $3, new yy.NodeCollection( $5 ) ) }
  | OPEN mustache CLOSE { $$ = $2 }
  | CONTENT { $$ = new yy.ContentNode( $1 ) }
  ;

mustache
  : expression PIPE filters { $$ = new yy.ExpressionNode( $1, new yy.FilterCollection( $3 ) ) }
  | expression { $$ = new yy.ExpressionNode( $1, new yy.FilterCollection( [ ] ) ) }
  ;

expression
  : ATTR paths { $$ = new yy.PathNode( $2, false ) }
  | paths { $$ = new yy.PathNode( $1, true ) }
  | DOT { $$ = new yy.ThisNode( ) }
  ;

helper
  : HELP MEMBER { $$ = $2 }
  ;

filters
  : filters filter { $1.push( $2 ); $$ = $1 }
  | filter { $$ = [ $1 ] }
  ;

filter
  : HELP MEMBER OPEN_PAREN arguments CLOSE_PAREN { $$ = new yy.FilterNode( $2, $4 ) }
  | HELP MEMBER { $$ = new yy.FilterNode( $2, [ ] ) }
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
