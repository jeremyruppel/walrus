
%x mu

%%

[^\x00]*?/("{{")            { this.begin( 'mu' ); if( yytext ) return 'CONTENT'; }
[^\x00]+                    { return 'CONTENT'; }

<mu>"do"\s*"}}"             { this.begin( 'INITIAL' ); return 'OPEN_BLOCK'; }
<mu>"{{"\s*"end"            { return 'CLOSE_BLOCK'; }

<mu>"{{"                    { return 'OPEN'; }
<mu>"}}"                    { this.begin( 'INITIAL' ); return 'CLOSE'; }

<mu>\@                      { return 'ATTR'; }
<mu>\:                      { return 'HELP'; }
<mu>\|                      { return 'PIPE'; }
<mu>\.                      { return 'DOT'; }
<mu>\,                      { return 'COMMA'; }
<mu>\s+                     { /* ignore whitespace */ }
<mu>\'[^\']*?\'             { yytext = yytext.substr( 1, yyleng - 2 ); return 'SINGLE_QUOTE_STRING_LITERAL'; }
<mu>\"[^\"]*?\"             { yytext = yytext.substr( 1, yyleng - 2 ); return 'DOUBLE_QUOTE_STRING_LITERAL'; }
<mu>\(                      { return 'OPEN_PAREN'; }
<mu>\)                      { return 'CLOSE_PAREN'; }
<mu>"true"                  { return 'BOOLEAN_TRUE'; }
<mu>"false"                 { return 'BOOLEAN_FALSE'; }
<mu>\d+(\.\d+)?             { return 'NUMBER'; }
<mu>[a-zA-Z0-9\_]+          { return 'MEMBER'; }

<INITIAL,mu><<EOF>>         { return 'EOF'; }
