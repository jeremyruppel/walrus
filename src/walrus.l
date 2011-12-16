
%x mu

%%

[^\x00]*?/("{{")            { this.begin( "mu" ); if( yytext ) return 'CONTENT'; }
[^\x00]+                    { return 'CONTENT'; }

<mu>"{{"                    { return 'OPEN'; }
<mu>"}}"                    { this.begin( "INITIAL" ); return 'CLOSE'; }

<mu>\@                      { return 'ATTR'; }
<mu>\.                      { return 'DELIMETER'; }
<mu>\s+                     { /* ignore whitespace */ }
<mu>\(                      { return 'OPEN_PAREN'; }
<mu>\)                      { return 'CLOSE_PAREN'; }
<mu>[a-zA-Z0-9]+            { return 'MEMBER'; }

<INITIAL,mu><<EOF>>         { return 'EOF'; }
