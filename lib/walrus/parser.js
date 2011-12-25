/* Jison generated parser */
var walrus = (function(){

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"document":3,"text":4,"EOF":5,"statements":6,"statement":7,"blockstache":8,"mustache":9,"CONTENT":10,"OPEN":11,"mustachery":12,"OPEN_BLOCK":13,"CLOSE":14,"CLOSE_BLOCK":15,"expression":16,"ATTR":17,"paths":18,"DELIMETER":19,"path":20,"method":21,"member":22,"MEMBER":23,"OPEN_PAREN":24,"arguments":25,"CLOSE_PAREN":26,"COMMA":27,"argument":28,"SINGLE_QUOTE_STRING_LITERAL":29,"DOUBLE_QUOTE_STRING_LITERAL":30,"BOOLEAN_FALSE":31,"BOOLEAN_TRUE":32,"NUMBER":33,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",10:"CONTENT",11:"OPEN",13:"OPEN_BLOCK",14:"CLOSE",15:"CLOSE_BLOCK",17:"ATTR",19:"DELIMETER",23:"MEMBER",24:"OPEN_PAREN",26:"CLOSE_PAREN",27:"COMMA",29:"SINGLE_QUOTE_STRING_LITERAL",30:"DOUBLE_QUOTE_STRING_LITERAL",31:"BOOLEAN_FALSE",32:"BOOLEAN_TRUE",33:"NUMBER"},
productions_: [0,[3,2],[4,1],[6,2],[6,1],[7,1],[7,1],[7,1],[8,6],[9,3],[12,1],[16,2],[16,1],[18,3],[18,1],[20,1],[20,1],[21,4],[21,3],[25,3],[25,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[22,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return new yy.Template( $$[$0-1] ) 
break;
case 2: this.$ = $$[$0] 
break;
case 3: $$[$0-1].push( $$[$0] ); this.$ = $$[$0-1] 
break;
case 4: this.$ = [ $$[$0] ] 
break;
case 5: this.$ = $$[$0] 
break;
case 6: this.$ = $$[$0] 
break;
case 7: this.$ = new yy.ContentNode( $$[$0] ) 
break;
case 8: this.$ = new yy.BlockNode( $$[$0-4], $$[$0-1] ) 
break;
case 9: this.$ = $$[$0-1] 
break;
case 10: this.$ = $$[$0] 
break;
case 11: this.$ = new yy.PathNode( $$[$0], false ) 
break;
case 12: this.$ = new yy.PathNode( $$[$0], true ) 
break;
case 13: $$[$0-2].push( $$[$0] ); this.$ = $$[$0-2] 
break;
case 14: this.$ = [ $$[$0] ] 
break;
case 15: this.$ = $$[$0] 
break;
case 16: this.$ = $$[$0] 
break;
case 17: this.$ = new yy.MethodNode( $$[$0-3], $$[$0-1] ) 
break;
case 18: this.$ = new yy.MethodNode( $$[$0-2], [ ] ) 
break;
case 19: $$[$0-2].push( $$[$0] ); this.$ = $$[$0-2] 
break;
case 20: this.$ = [ $$[$0] ] 
break;
case 21: this.$ = $$[$0] 
break;
case 22: this.$ = new yy.PrimitiveNode( $$[$0] ) 
break;
case 23: this.$ = new yy.PrimitiveNode( $$[$0] ) 
break;
case 24: this.$ = new yy.PrimitiveNode( false ) 
break;
case 25: this.$ = new yy.PrimitiveNode( true ) 
break;
case 26: this.$ = new yy.PrimitiveNode( parseFloat( $$[$0] ) ) 
break;
case 27: this.$ = new yy.MemberNode( $$[$0] ) 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:[1,7],11:[1,8]},{1:[3]},{5:[1,9]},{5:[2,2],7:10,8:5,9:6,10:[1,7],11:[1,8],15:[2,2]},{5:[2,4],10:[2,4],11:[2,4],15:[2,4]},{5:[2,5],10:[2,5],11:[2,5],15:[2,5]},{5:[2,6],10:[2,6],11:[2,6],15:[2,6]},{5:[2,7],10:[2,7],11:[2,7],15:[2,7]},{12:11,16:12,17:[1,13],18:14,20:15,21:16,22:17,23:[1,18]},{1:[2,1]},{5:[2,3],10:[2,3],11:[2,3],15:[2,3]},{13:[1,19],14:[1,20]},{13:[2,10],14:[2,10]},{18:21,20:15,21:16,22:17,23:[1,18]},{13:[2,12],14:[2,12],19:[1,22],26:[2,12],27:[2,12]},{13:[2,14],14:[2,14],19:[2,14],26:[2,14],27:[2,14]},{13:[2,15],14:[2,15],19:[2,15],26:[2,15],27:[2,15]},{13:[2,16],14:[2,16],19:[2,16],26:[2,16],27:[2,16]},{13:[2,27],14:[2,27],19:[2,27],24:[1,23],26:[2,27],27:[2,27]},{14:[1,24]},{5:[2,9],10:[2,9],11:[2,9],15:[2,9]},{13:[2,11],14:[2,11],19:[1,22],26:[2,11],27:[2,11]},{20:25,21:16,22:17,23:[1,18]},{16:29,17:[1,13],18:14,20:15,21:16,22:17,23:[1,18],25:26,26:[1,27],28:28,29:[1,30],30:[1,31],31:[1,32],32:[1,33],33:[1,34]},{4:35,6:3,7:4,8:5,9:6,10:[1,7],11:[1,8]},{13:[2,13],14:[2,13],19:[2,13],26:[2,13],27:[2,13]},{26:[1,36],27:[1,37]},{13:[2,18],14:[2,18],19:[2,18],26:[2,18],27:[2,18]},{26:[2,20],27:[2,20]},{26:[2,21],27:[2,21]},{26:[2,22],27:[2,22]},{26:[2,23],27:[2,23]},{26:[2,24],27:[2,24]},{26:[2,25],27:[2,25]},{26:[2,26],27:[2,26]},{15:[1,38]},{13:[2,17],14:[2,17],19:[2,17],26:[2,17],27:[2,17]},{16:29,17:[1,13],18:14,20:15,21:16,22:17,23:[1,18],28:39,29:[1,30],30:[1,31],31:[1,32],32:[1,33],33:[1,34]},{5:[2,8],10:[2,8],11:[2,8],15:[2,8]},{26:[2,19],27:[2,19]}],
defaultActions: {9:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + this.terminals_[symbol]+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){

var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0: this.begin( 'mu' ); if( yy_.yytext ) return 10; 
break;
case 1: return 10; 
break;
case 2: return 13; 
break;
case 3: this.begin( 'INITIAL' ); return 15; 
break;
case 4: return 11; 
break;
case 5: this.begin( 'INITIAL' ); return 14; 
break;
case 6: return 17; 
break;
case 7: return 19; 
break;
case 8: return 27; 
break;
case 9: /* ignore whitespace */ 
break;
case 10: yy_.yytext = yy_.yytext.replace( /^'|'$/g, '' ); return 29; 
break;
case 11: yy_.yytext = yy_.yytext.replace( /^"|"$/g, '' ); return 30; 
break;
case 12: return 24; 
break;
case 13: return 26; 
break;
case 14: return 32; 
break;
case 15: return 31; 
break;
case 16: return 33; 
break;
case 17: return 23; 
break;
case 18: return 5; 
break;
}
};
lexer.rules = [/^[^\x00]*?(?=(\{\{))/,/^[^\x00]+/,/^do\b/,/^\{\{end\}\}/,/^\{\{/,/^\}\}/,/^@/,/^\./,/^,/,/^\s+/,/^'[^\']*?'/,/^"[^\"]*?"/,/^\(/,/^\)/,/^true\b/,/^false\b/,/^\d+(\.\d+)?/,/^[a-zA-Z0-9]+/,/^$/];
lexer.conditions = {"mu":{"rules":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"inclusive":false},"INITIAL":{"rules":[0,1,18],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = walrus;
exports.parse = function () { return walrus.parse.apply(walrus, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}