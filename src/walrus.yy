%start document

%%

document
  : text EOF { return new yy.DocumentNode( $text ) }
  ;

text
  : statements { $$ = $statements }
  ;

statements
  : statements statement { $statements.push( $statement ); $$ = $statements }
  | statement { $$ = [ $statement ] }
  ;

statement
  : OPEN helper mustache OPEN_BLOCK text CLOSE_BLOCK CLOSE { $$ = new yy.BlockNode( $helper, $mustache, new yy.JoinedNodeCollection( $text ) ) }
  | OPEN mustache CLOSE { $$ = $mustache }
  | CONTENT { $$ = new yy.ContentNode( $CONTENT ) }
  ;

mustache
  : expression PIPE filters { $$ = new yy.ExpressionNode( $expression, new yy.FilterCollection( $filters ) ) }
  | expression { $$ = new yy.ExpressionNode( $expression, new yy.FilterCollection( [ ] ) ) }
  ;

expression
  : ATTR paths { $$ = new yy.PathNode( $paths, false ) }
  | paths { $$ = new yy.PathNode( $paths, true ) }
  | DOT { $$ = new yy.ThisNode( ) }
  | primitive { $$ = $primitive }
  ;

helper
  : HELP MEMBER { $$ = $MEMBER }
  ;

filters
  : filters filter { $filters.push( $filter ); $$ = $filters }
  | filter { $$ = [ $filter ] }
  ;

filter
  : HELP MEMBER OPEN_PAREN arguments CLOSE_PAREN { $$ = new yy.FilterNode( $MEMBER, new yy.NodeCollection( $arguments ) ) }
  | HELP MEMBER { $$ = new yy.FilterNode( $MEMBER, new yy.NodeCollection( [ ] ) ) }
  ;

paths
  : paths DOT path { $paths.push( $path ); $$ = $paths }
  | path { $$ = [ $path ] }
  ;

path
  : method { $$ = $method }
  | member { $$ = $member }
  ;

method
  : MEMBER OPEN_PAREN arguments CLOSE_PAREN { $$ = new yy.MethodNode( $MEMBER, new yy.NodeCollection( $arguments ) ) }
  | MEMBER OPEN_PAREN CLOSE_PAREN { $$ = new yy.MethodNode( $MEMBER, new yy.NodeCollection( [ ] ) ) }
  ;

arguments
  : arguments COMMA argument { $arguments.push( $argument ); $$ = $arguments }
  | argument { $$ = [ $argument ] }
  ;

argument
  : expression { $$ = $expression }
  ;

primitive
  : SINGLE_QUOTE_STRING_LITERAL { $$ = new yy.PrimitiveNode( $1 ) }
  | DOUBLE_QUOTE_STRING_LITERAL { $$ = new yy.PrimitiveNode( $1 ) }
  | BOOLEAN_FALSE { $$ = new yy.PrimitiveNode( false ) }
  | BOOLEAN_TRUE { $$ = new yy.PrimitiveNode( true ) }
  | NUMBER { $$ = new yy.PrimitiveNode( parseFloat( $1 ) ) }
  ;

member
  : SAFE MEMBER { $$ = new yy.MemberNode( $MEMBER, true ) }
  | MEMBER { $$ = new yy.MemberNode( $MEMBER, false ) }
  ;
