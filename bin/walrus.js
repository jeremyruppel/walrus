(function() {
  var AST, Filters, Helpers, Walrus,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Walrus = {
    VERSION: '0.0.3'
  };

  /* Jison generated parser */
var walrus = (function(){

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"document":3,"text":4,"EOF":5,"statements":6,"statement":7,"OPEN":8,"helper":9,"mustache":10,"OPEN_BLOCK":11,"CLOSE_BLOCK":12,"CLOSE":13,"CONTENT":14,"expression":15,"PIPE":16,"filters":17,"ATTR":18,"paths":19,"DOT":20,"HELP":21,"MEMBER":22,"filter":23,"path":24,"method":25,"member":26,"OPEN_PAREN":27,"arguments":28,"CLOSE_PAREN":29,"COMMA":30,"argument":31,"SINGLE_QUOTE_STRING_LITERAL":32,"DOUBLE_QUOTE_STRING_LITERAL":33,"BOOLEAN_FALSE":34,"BOOLEAN_TRUE":35,"NUMBER":36,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"OPEN",11:"OPEN_BLOCK",12:"CLOSE_BLOCK",13:"CLOSE",14:"CONTENT",16:"PIPE",18:"ATTR",20:"DOT",21:"HELP",22:"MEMBER",27:"OPEN_PAREN",29:"CLOSE_PAREN",30:"COMMA",32:"SINGLE_QUOTE_STRING_LITERAL",33:"DOUBLE_QUOTE_STRING_LITERAL",34:"BOOLEAN_FALSE",35:"BOOLEAN_TRUE",36:"NUMBER"},
productions_: [0,[3,2],[4,1],[6,2],[6,1],[7,7],[7,3],[7,1],[10,3],[10,1],[15,2],[15,1],[15,1],[9,2],[17,2],[17,1],[23,2],[19,3],[19,1],[24,1],[24,1],[25,4],[25,3],[28,3],[28,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,1],[26,1]],
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
case 5: this.$ = new yy.BlockNode( $$[$0-5], $$[$0-4], new yy.NodeCollection( $$[$0-2] ) ) 
break;
case 6: this.$ = $$[$0-1] 
break;
case 7: this.$ = new yy.ContentNode( $$[$0] ) 
break;
case 8: this.$ = new yy.ExpressionNode( $$[$0-2], new yy.FilterCollection( $$[$0] ) ) 
break;
case 9: this.$ = new yy.ExpressionNode( $$[$0], new yy.FilterCollection( [ ] ) ) 
break;
case 10: this.$ = new yy.PathNode( $$[$0], false ) 
break;
case 11: this.$ = new yy.PathNode( $$[$0], true ) 
break;
case 12: this.$ = new yy.ThisNode( ) 
break;
case 13: this.$ = $$[$0] 
break;
case 14: $$[$0-1].push( $$[$0] ); this.$ = $$[$0-1] 
break;
case 15: this.$ = [ $$[$0] ] 
break;
case 16: this.$ = $$[$0] 
break;
case 17: $$[$0-2].push( $$[$0] ); this.$ = $$[$0-2] 
break;
case 18: this.$ = [ $$[$0] ] 
break;
case 19: this.$ = $$[$0] 
break;
case 20: this.$ = $$[$0] 
break;
case 21: this.$ = new yy.MethodNode( $$[$0-3], $$[$0-1] ) 
break;
case 22: this.$ = new yy.MethodNode( $$[$0-2], [ ] ) 
break;
case 23: $$[$0-2].push( $$[$0] ); this.$ = $$[$0-2] 
break;
case 24: this.$ = [ $$[$0] ] 
break;
case 25: this.$ = $$[$0] 
break;
case 26: this.$ = new yy.PrimitiveNode( $$[$0] ) 
break;
case 27: this.$ = new yy.PrimitiveNode( $$[$0] ) 
break;
case 28: this.$ = new yy.PrimitiveNode( false ) 
break;
case 29: this.$ = new yy.PrimitiveNode( true ) 
break;
case 30: this.$ = new yy.PrimitiveNode( parseFloat( $$[$0] ) ) 
break;
case 31: this.$ = new yy.MemberNode( $$[$0] ) 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:[1,5],14:[1,6]},{1:[3]},{5:[1,7]},{5:[2,2],7:8,8:[1,5],12:[2,2],14:[1,6]},{5:[2,4],8:[2,4],12:[2,4],14:[2,4]},{9:9,10:10,15:12,18:[1,13],19:14,20:[1,15],21:[1,11],22:[1,19],24:16,25:17,26:18},{5:[2,7],8:[2,7],12:[2,7],14:[2,7]},{1:[2,1]},{5:[2,3],8:[2,3],12:[2,3],14:[2,3]},{10:20,15:12,18:[1,13],19:14,20:[1,15],22:[1,19],24:16,25:17,26:18},{13:[1,21]},{22:[1,22]},{11:[2,9],13:[2,9],16:[1,23]},{19:24,22:[1,19],24:16,25:17,26:18},{11:[2,11],13:[2,11],16:[2,11],20:[1,25],29:[2,11],30:[2,11]},{11:[2,12],13:[2,12],16:[2,12],29:[2,12],30:[2,12]},{11:[2,18],13:[2,18],16:[2,18],20:[2,18],29:[2,18],30:[2,18]},{11:[2,19],13:[2,19],16:[2,19],20:[2,19],29:[2,19],30:[2,19]},{11:[2,20],13:[2,20],16:[2,20],20:[2,20],29:[2,20],30:[2,20]},{11:[2,31],13:[2,31],16:[2,31],20:[2,31],27:[1,26],29:[2,31],30:[2,31]},{11:[1,27]},{5:[2,6],8:[2,6],12:[2,6],14:[2,6]},{18:[2,13],20:[2,13],22:[2,13]},{17:28,21:[1,30],23:29},{11:[2,10],13:[2,10],16:[2,10],20:[1,25],29:[2,10],30:[2,10]},{22:[1,19],24:31,25:17,26:18},{15:35,18:[1,13],19:14,20:[1,15],22:[1,19],24:16,25:17,26:18,28:32,29:[1,33],31:34,32:[1,36],33:[1,37],34:[1,38],35:[1,39],36:[1,40]},{4:41,6:3,7:4,8:[1,5],14:[1,6]},{11:[2,8],13:[2,8],21:[1,30],23:42},{11:[2,15],13:[2,15],21:[2,15]},{22:[1,43]},{11:[2,17],13:[2,17],16:[2,17],20:[2,17],29:[2,17],30:[2,17]},{29:[1,44],30:[1,45]},{11:[2,22],13:[2,22],16:[2,22],20:[2,22],29:[2,22],30:[2,22]},{29:[2,24],30:[2,24]},{29:[2,25],30:[2,25]},{29:[2,26],30:[2,26]},{29:[2,27],30:[2,27]},{29:[2,28],30:[2,28]},{29:[2,29],30:[2,29]},{29:[2,30],30:[2,30]},{12:[1,46]},{11:[2,14],13:[2,14],21:[2,14]},{11:[2,16],13:[2,16],21:[2,16]},{11:[2,21],13:[2,21],16:[2,21],20:[2,21],29:[2,21],30:[2,21]},{15:35,18:[1,13],19:14,20:[1,15],22:[1,19],24:16,25:17,26:18,31:47,32:[1,36],33:[1,37],34:[1,38],35:[1,39],36:[1,40]},{13:[1,48]},{29:[2,23],30:[2,23]},{5:[2,5],8:[2,5],12:[2,5],14:[2,5]}],
defaultActions: {7:[2,1]},
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
case 0: this.begin( 'mu' ); if( yy_.yytext ) return 14; 
break;
case 1: return 14; 
break;
case 2: this.begin( 'INITIAL' ); return 11; 
break;
case 3: return 12; 
break;
case 4: return 8; 
break;
case 5: this.begin( 'INITIAL' ); return 13; 
break;
case 6: return 18; 
break;
case 7: return 21; 
break;
case 8: return 16; 
break;
case 9: return 20; 
break;
case 10: return 30; 
break;
case 11: /* ignore whitespace */ 
break;
case 12: yy_.yytext = yy_.yytext.substr( 1, yy_.yyleng - 2 ); return 32; 
break;
case 13: yy_.yytext = yy_.yytext.substr( 1, yy_.yyleng - 2 ); return 33; 
break;
case 14: return 27; 
break;
case 15: return 29; 
break;
case 16: return 35; 
break;
case 17: return 34; 
break;
case 18: return 36; 
break;
case 19: return 22; 
break;
case 20: return 5; 
break;
}
};
lexer.rules = [/^[^\x00]*?(?=(\{\{))/,/^[^\x00]+/,/^do\s*\}\}/,/^\{\{\s*end\b/,/^\{\{/,/^\}\}/,/^@/,/^:/,/^\|/,/^\./,/^,/,/^\s+/,/^'[^\']*?'/,/^"[^\"]*?"/,/^\(/,/^\)/,/^true\b/,/^false\b/,/^\d+(\.\d+)?/,/^[a-zA-Z0-9\_]+/,/^$/];
lexer.conditions = {"mu":{"rules":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"inclusive":false},"INITIAL":{"rules":[0,1,20],"inclusive":true}};return lexer;})()
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
};

  /*
  AST
  */

  AST = {
    trim: function(str) {
      return str.replace(/^\s+|\s+$/g, '');
    }
  };

  AST.NodeCollection = (function() {

    function NodeCollection(nodes) {
      this.nodes = nodes;
    }

    NodeCollection.prototype.compile = function(context, root) {
      var node;
      return AST.trim(((function() {
        var _i, _len, _ref, _results;
        _ref = this.nodes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          node = _ref[_i];
          _results.push(node.compile(context, root));
        }
        return _results;
      }).call(this)).join(''));
    };

    return NodeCollection;

  })();

  AST.Template = (function(_super) {

    __extends(Template, _super);

    function Template() {
      Template.__super__.constructor.apply(this, arguments);
    }

    Template.prototype.compile = function(context) {
      return Template.__super__.compile.call(this, context, context) + "\n";
    };

    return Template;

  })(AST.NodeCollection);

  AST.ContentNode = (function() {

    function ContentNode(content) {
      this.content = content;
    }

    ContentNode.prototype.compile = function(context, root) {
      return this.content;
    };

    return ContentNode;

  })();

  AST.MemberNode = (function() {

    function MemberNode(path) {
      this.path = path;
    }

    MemberNode.prototype.compile = function(index, context, root) {
      return index[this.path];
    };

    return MemberNode;

  })();

  AST.MethodNode = (function() {

    function MethodNode(path, _arguments) {
      this.path = path;
      this.arguments = _arguments;
    }

    MethodNode.prototype.compile = function(index, context, root) {
      var argument;
      return index[this.path].apply(index, (function() {
        var _i, _len, _ref, _results;
        _ref = this.arguments;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          argument = _ref[_i];
          _results.push(argument.compile(context, root));
        }
        return _results;
      }).call(this));
    };

    return MethodNode;

  })();

  AST.ThisNode = (function() {

    function ThisNode() {}

    ThisNode.prototype.compile = function(context, root) {
      return context;
    };

    return ThisNode;

  })();

  AST.PathNode = (function() {

    function PathNode(paths, local) {
      this.paths = paths;
      this.local = local;
    }

    PathNode.prototype.compile = function(context, root) {
      var index, paths;
      index = this.local ? context : root;
      paths = this.paths.concat();
      while (paths.length !== 0) {
        index = (paths.shift()).compile(index, context, root);
      }
      return index;
    };

    return PathNode;

  })();

  AST.PrimitiveNode = (function() {

    function PrimitiveNode(value) {
      this.value = value;
    }

    PrimitiveNode.prototype.compile = function(context, root) {
      return this.value;
    };

    return PrimitiveNode;

  })();

  AST.ExpressionNode = (function() {

    function ExpressionNode(paths, filters) {
      this.paths = paths;
      this.filters = filters;
    }

    ExpressionNode.prototype.compile = function(context, root) {
      return this.filters.apply(this.paths.compile(context, root));
    };

    return ExpressionNode;

  })();

  AST.BlockNode = (function() {

    function BlockNode(helper, expression, block) {
      this.helper = helper;
      this.expression = expression;
      this.block = block;
    }

    BlockNode.prototype.compile = function(context, root) {
      return Walrus.Helpers[this.helper](this.expression, context, root, this.block);
    };

    return BlockNode;

  })();

  AST.FilterCollection = (function() {

    function FilterCollection(names) {
      this.names = names;
    }

    FilterCollection.prototype.apply = function(expression) {
      var name, value, _i, _len, _ref;
      value = expression;
      _ref = this.names;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        name = _ref[_i];
        value = Walrus.Filters[name](value);
      }
      return value;
    };

    return FilterCollection;

  })();

  Walrus.AST = AST;

  /*
  Core Helpers
  */

  Helpers = {
    add: function(name, fn) {
      return this[name] = fn;
    }
  };

  Helpers.add('if', function(expression, context, root, block) {
    if (expression.compile(context, root)) {
      return block.compile(context, root);
    } else {
      return '';
    }
  });

  Helpers.add('each', function(expression, context, root, block) {
    var item, items;
    items = (function() {
      var _i, _len, _ref, _results;
      _ref = expression.compile(context, root);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(block.compile(item, root));
      }
      return _results;
    })();
    return items.join('');
  });

  Helpers.add('with', function(expression, context, root, block) {
    return block.compile(expression.compile(context, root), root);
  });

  Walrus.Helpers = Helpers;

  /*
  Core Filters
  */

  Filters = {
    add: function(name, fn) {
      return this[name] = fn;
    }
  };

  Filters.add('reverse', function(value) {
    return value.split('').reverse().join('');
  });

  Filters.add('downcase', function(value) {
    return value.toLowerCase();
  });

  Filters.add('upcase', function(value) {
    return value.toUpperCase();
  });

  Walrus.Filters = Filters;

  /*
  Setup
  */

  Walrus.Parser = {
    parser: walrus,
    parse: function() {
      return walrus.parse.apply(walrus, arguments);
    }
  };

  Walrus.Parser.parser.yy = Walrus.AST;

  /*
  Export
  */

  if ((typeof require !== "undefined" && require !== null) && (typeof exports !== "undefined" && exports !== null)) {
    module.exports = Walrus;
  } else {
    window.Walrus = Walrus;
  }

}).call(this);
