%start document

%%

document
  : text EOF { return $1 }
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
  | CONTENT { $$ = $1 }
  ;

mustache
  : OPEN mustachery CLOSE { $$ = $2 }
  ;

mustachery
  : paths { $$ = $1 }
  ;

paths
  : paths . path { $1.push( $3 ); $$ = $1 }
  | path { $$ = [ $1 ] }
  ;

path
  : MEMBER { $$ = $1 }
  ;
