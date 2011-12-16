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
  : OPEN mustachery CLOSE { $$ = $2 }
  ;

mustachery
  : ATTR paths { $$ = new yy.MemberNode( $2 ) }
  ;

paths
  : paths DELIMETER path { $1.push( $3 ); $$ = $1 }
  | path { $$ = [ $1 ] }
  ;

path
  : MEMBER { $$ = $1 }
  ;
