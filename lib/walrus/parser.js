/* Jison generated parser */
var walrus = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"document":3,"text":4,"EOF":5,"statements":6,"statement":7,"OPEN":8,"helper":9,"mustache":10,"block":11,"SAFE":12,"CLOSE":13,"CONTENT":14,"expression":15,"PIPE":16,"filters":17,"ATTR":18,"paths":19,"DOT":20,"primitive":21,"OPEN_BLOCK":22,"CLOSE_BLOCK":23,"HELP":24,"MEMBER":25,"filter":26,"OPEN_PAREN":27,"arguments":28,"CLOSE_PAREN":29,"path":30,"method":31,"member":32,"COMMA":33,"argument":34,"SINGLE_QUOTE_STRING_LITERAL":35,"DOUBLE_QUOTE_STRING_LITERAL":36,"BOOLEAN_FALSE":37,"BOOLEAN_TRUE":38,"NUMBER":39,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"OPEN",12:"SAFE",13:"CLOSE",14:"CONTENT",16:"PIPE",18:"ATTR",20:"DOT",22:"OPEN_BLOCK",23:"CLOSE_BLOCK",24:"HELP",25:"MEMBER",27:"OPEN_PAREN",29:"CLOSE_PAREN",33:"COMMA",35:"SINGLE_QUOTE_STRING_LITERAL",36:"DOUBLE_QUOTE_STRING_LITERAL",37:"BOOLEAN_FALSE",38:"BOOLEAN_TRUE",39:"NUMBER"},
productions_: [0,[3,2],[3,1],[4,1],[6,2],[6,1],[7,4],[7,3],[7,3],[7,1],[10,3],[10,1],[15,2],[15,1],[15,1],[15,1],[11,4],[9,2],[17,2],[17,1],[26,5],[26,2],[19,3],[19,1],[30,1],[30,1],[31,4],[31,3],[28,3],[28,1],[34,1],[21,1],[21,1],[21,1],[21,1],[21,1],[32,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return new yy.DocumentNode( $$[$0-1] ) 
break;
case 2: return new yy.DocumentNode( [ ] ) 
break;
case 3: this.$ = $$[$0] 
break;
case 4: $$[$0-1].push( $$[$0] ); this.$ = $$[$0-1] 
break;
case 5: this.$ = [ $$[$0] ] 
break;
case 6: this.$ = new yy.BlockNode( $$[$0-2], $$[$0-1], $$[$0] ) 
break;
case 7: this.$ = new yy.SafeNode( $$[$0-1] ) 
break;
case 8: this.$ = $$[$0-1] 
break;
case 9: this.$ = new yy.ContentNode( $$[$0] ) 
break;
case 10: this.$ = new yy.ExpressionNode( $$[$0-2], new yy.FilterCollection( $$[$0] ) ) 
break;
case 11: this.$ = new yy.ExpressionNode( $$[$0], new yy.FilterCollection( [ ] ) ) 
break;
case 12: this.$ = new yy.PathNode( $$[$0], false ) 
break;
case 13: this.$ = new yy.PathNode( $$[$0], true ) 
break;
case 14: this.$ = new yy.ThisNode( ) 
break;
case 15: this.$ = $$[$0] 
break;
case 16: this.$ = new yy.JoinedNodeCollection( $$[$0-2] ) 
break;
case 17: this.$ = $$[$0] 
break;
case 18: $$[$0-1].push( $$[$0] ); this.$ = $$[$0-1] 
break;
case 19: this.$ = [ $$[$0] ] 
break;
case 20: this.$ = new yy.FilterNode( $$[$0-3], new yy.NodeCollection( $$[$0-1] ) ) 
break;
case 21: this.$ = new yy.FilterNode( $$[$0], new yy.NodeCollection( [ ] ) ) 
break;
case 22: $$[$0-2].push( $$[$0] ); this.$ = $$[$0-2] 
break;
case 23: this.$ = [ $$[$0] ] 
break;
case 24: this.$ = $$[$0] 
break;
case 25: this.$ = $$[$0] 
break;
case 26: this.$ = new yy.MethodNode( $$[$0-3], new yy.NodeCollection( $$[$0-1] ) ) 
break;
case 27: this.$ = new yy.MethodNode( $$[$0-2], new yy.NodeCollection( [ ] ) ) 
break;
case 28: $$[$0-2].push( $$[$0] ); this.$ = $$[$0-2] 
break;
case 29: this.$ = [ $$[$0] ] 
break;
case 30: this.$ = $$[$0] 
break;
case 31: this.$ = new yy.PrimitiveNode( $$[$0] ) 
break;
case 32: this.$ = new yy.PrimitiveNode( $$[$0] ) 
break;
case 33: this.$ = new yy.PrimitiveNode( false ) 
break;
case 34: this.$ = new yy.PrimitiveNode( true ) 
break;
case 35: this.$ = new yy.PrimitiveNode( parseFloat( $$[$0] ) ) 
break;
case 36: this.$ = new yy.MemberNode( $$[$0], false ) 
break;
}
},
table: [{3:1,4:2,5:[1,3],6:4,7:5,8:[1,6],12:[1,7],14:[1,8]},{1:[3]},{5:[1,9]},{1:[2,2]},{5:[2,3],7:10,8:[1,6],12:[1,7],14:[1,8],23:[2,3]},{5:[2,5],8:[2,5],12:[2,5],14:[2,5],23:[2,5]},{9:11,10:12,15:14,18:[1,15],19:16,20:[1,17],21:18,24:[1,13],25:[1,27],30:19,31:25,32:26,35:[1,20],36:[1,21],37:[1,22],38:[1,23],39:[1,24]},{10:28,15:14,18:[1,15],19:16,20:[1,17],21:18,25:[1,27],30:19,31:25,32:26,35:[1,20],36:[1,21],37:[1,22],38:[1,23],39:[1,24]},{5:[2,9],8:[2,9],12:[2,9],14:[2,9],23:[2,9]},{1:[2,1]},{5:[2,4],8:[2,4],12:[2,4],14:[2,4],23:[2,4]},{10:29,15:14,18:[1,15],19:16,20:[1,17],21:18,25:[1,27],30:19,31:25,32:26,35:[1,20],36:[1,21],37:[1,22],38:[1,23],39:[1,24]},{13:[1,30]},{25:[1,31]},{13:[2,11],16:[1,32],22:[2,11]},{19:33,25:[1,27],30:19,31:25,32:26},{13:[2,13],16:[2,13],20:[1,34],22:[2,13],29:[2,13],33:[2,13]},{13:[2,14],16:[2,14],22:[2,14],29:[2,14],33:[2,14]},{13:[2,15],16:[2,15],22:[2,15],29:[2,15],33:[2,15]},{13:[2,23],16:[2,23],20:[2,23],22:[2,23],29:[2,23],33:[2,23]},{13:[2,31],16:[2,31],22:[2,31],29:[2,31],33:[2,31]},{13:[2,32],16:[2,32],22:[2,32],29:[2,32],33:[2,32]},{13:[2,33],16:[2,33],22:[2,33],29:[2,33],33:[2,33]},{13:[2,34],16:[2,34],22:[2,34],29:[2,34],33:[2,34]},{13:[2,35],16:[2,35],22:[2,35],29:[2,35],33:[2,35]},{13:[2,24],16:[2,24],20:[2,24],22:[2,24],29:[2,24],33:[2,24]},{13:[2,25],16:[2,25],20:[2,25],22:[2,25],29:[2,25],33:[2,25]},{13:[2,36],16:[2,36],20:[2,36],22:[2,36],27:[1,35],29:[2,36],33:[2,36]},{13:[1,36]},{11:37,22:[1,38]},{5:[2,8],8:[2,8],12:[2,8],14:[2,8],23:[2,8]},{18:[2,17],20:[2,17],25:[2,17],35:[2,17],36:[2,17],37:[2,17],38:[2,17],39:[2,17]},{17:39,24:[1,41],26:40},{13:[2,12],16:[2,12],20:[1,34],22:[2,12],29:[2,12],33:[2,12]},{25:[1,27],30:42,31:25,32:26},{15:46,18:[1,15],19:16,20:[1,17],21:18,25:[1,27],28:43,29:[1,44],30:19,31:25,32:26,34:45,35:[1,20],36:[1,21],37:[1,22],38:[1,23],39:[1,24]},{5:[2,7],8:[2,7],12:[2,7],14:[2,7],23:[2,7]},{5:[2,6],8:[2,6],12:[2,6],14:[2,6],23:[2,6]},{4:47,6:4,7:5,8:[1,6],12:[1,7],14:[1,8]},{13:[2,10],22:[2,10],24:[1,41],26:48},{13:[2,19],22:[2,19],24:[2,19]},{25:[1,49]},{13:[2,22],16:[2,22],20:[2,22],22:[2,22],29:[2,22],33:[2,22]},{29:[1,50],33:[1,51]},{13:[2,27],16:[2,27],20:[2,27],22:[2,27],29:[2,27],33:[2,27]},{29:[2,29],33:[2,29]},{29:[2,30],33:[2,30]},{23:[1,52]},{13:[2,18],22:[2,18],24:[2,18]},{13:[2,21],22:[2,21],24:[2,21],27:[1,53]},{13:[2,26],16:[2,26],20:[2,26],22:[2,26],29:[2,26],33:[2,26]},{15:46,18:[1,15],19:16,20:[1,17],21:18,25:[1,27],30:19,31:25,32:26,34:54,35:[1,20],36:[1,21],37:[1,22],38:[1,23],39:[1,24]},{13:[1,55]},{15:46,18:[1,15],19:16,20:[1,17],21:18,25:[1,27],28:56,30:19,31:25,32:26,34:45,35:[1,20],36:[1,21],37:[1,22],38:[1,23],39:[1,24]},{29:[2,28],33:[2,28]},{5:[2,16],8:[2,16],12:[2,16],14:[2,16],23:[2,16]},{29:[1,57],33:[1,51]},{13:[2,20],22:[2,20],24:[2,20]}],
defaultActions: {3:[2,2],9:[2,1]},
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
}};
/* Jison generated lexer */
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
less:function (n) {
        this._input = this.match.slice(n) + this._input;
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
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/\n.*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
            this.yytext += match[0];
            this.match += match[0];
            this.yyleng = this.yytext.length;
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
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
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0: this.begin( 'mu' ); if( yy_.yytext ) return 14; 
break;
case 1: return 14; 
break;
case 2: this.begin( 'INITIAL' ); return 22; 
break;
case 3: return 23; 
break;
case 4: return 12; 
break;
case 5: return 8; 
break;
case 6: this.begin( 'INITIAL' ); return 13; 
break;
case 7: return 18; 
break;
case 8: return 24; 
break;
case 9: return 16; 
break;
case 10: return 20; 
break;
case 11: return 33; 
break;
case 12: /* ignore whitespace */ 
break;
case 13: yy_.yytext = yy_.yytext.substr( 1, yy_.yyleng - 2 ); return 35; 
break;
case 14: yy_.yytext = yy_.yytext.substr( 1, yy_.yyleng - 2 ); return 36; 
break;
case 15: return 27; 
break;
case 16: return 29; 
break;
case 17: return 38; 
break;
case 18: return 37; 
break;
case 19: return 39; 
break;
case 20: return 25; 
break;
case 21: return 5; 
break;
}
};
lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:do\s*\}\}\n*)/,/^(?:\{\{\s*end\b)/,/^(?:\{\{=)/,/^(?:\{\{)/,/^(?:\}\}\n*)/,/^(?:@)/,/^(?::)/,/^(?:\|)/,/^(?:\.)/,/^(?:,)/,/^(?:\s+)/,/^(?:'[^\']*?')/,/^(?:"[^\"]*?")/,/^(?:\()/,/^(?:\))/,/^(?:true\b)/,/^(?:false\b)/,/^(?:-?\d+(\.\d+)?)/,/^(?:[a-zA-Z0-9\_\$]+)/,/^(?:$)/];
lexer.conditions = {"mu":{"rules":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],"inclusive":false},"INITIAL":{"rules":[0,1,21],"inclusive":true}};
return lexer;})()
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