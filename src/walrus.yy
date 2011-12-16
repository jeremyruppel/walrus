%start document

%%

document
  : text EOF { return $1 }
  ;

text
  : CONTENT OPEN mustache CLOSE CONTENT { $$ = 'MUSTACHE YO' }
  | CONTENT { $$ = $1 }
  ;

mustache
  : path { $$ = $1 }
  ;

path
  : MEMBER { $$ = $1 }
  ;
