
%x mu

%%

[^\x00]*?/("{{")            { this.begin( "mu" ); if( yytext ) return 'CONTENT'; }
[^\x00]+                    { return 'CONTENT'; }

<mu>"{{"                    { return 'OPEN'; }
<mu>"}}"                    { this.begin( "INITIAL" ); return 'CLOSE'; }

<mu>\.                      { return 'DELIMETER'; }
<mu>[a-zA-Z0-9]+            { return 'MEMBER'; }

<INITIAL,mu><<EOF>>         { return 'EOF'; }
