/**
 * Walrus.js 0.4.2
 * (c) 2012 Jeremy Ruppel
 * Walrus.js is freely distributable under the terms of the MIT license.
 * https://raw.github.com/jeremyruppel/walrus/master/LICENSE
 */
(function() {
  var AST, Utils, Walrus,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; },
    __slice = Array.prototype.slice;

  Walrus = {
    VERSION: '0.4.2'
  };

  /* Jison generated parser */
var walrus = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"document":3,"text":4,"EOF":5,"statements":6,"statement":7,"OPEN":8,"helper":9,"mustache":10,"OPEN_BLOCK":11,"CLOSE_BLOCK":12,"CLOSE":13,"CONTENT":14,"expression":15,"PIPE":16,"filters":17,"ATTR":18,"paths":19,"DOT":20,"primitive":21,"HELP":22,"MEMBER":23,"filter":24,"OPEN_PAREN":25,"arguments":26,"CLOSE_PAREN":27,"path":28,"method":29,"member":30,"COMMA":31,"argument":32,"SINGLE_QUOTE_STRING_LITERAL":33,"DOUBLE_QUOTE_STRING_LITERAL":34,"BOOLEAN_FALSE":35,"BOOLEAN_TRUE":36,"NUMBER":37,"SAFE":38,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"OPEN",11:"OPEN_BLOCK",12:"CLOSE_BLOCK",13:"CLOSE",14:"CONTENT",16:"PIPE",18:"ATTR",20:"DOT",22:"HELP",23:"MEMBER",25:"OPEN_PAREN",27:"CLOSE_PAREN",31:"COMMA",33:"SINGLE_QUOTE_STRING_LITERAL",34:"DOUBLE_QUOTE_STRING_LITERAL",35:"BOOLEAN_FALSE",36:"BOOLEAN_TRUE",37:"NUMBER",38:"SAFE"},
productions_: [0,[3,2],[4,1],[6,2],[6,1],[7,7],[7,3],[7,1],[10,3],[10,1],[15,2],[15,1],[15,1],[15,1],[9,2],[17,2],[17,1],[24,5],[24,2],[19,3],[19,1],[28,1],[28,1],[29,4],[29,3],[26,3],[26,1],[32,1],[21,1],[21,1],[21,1],[21,1],[21,1],[30,2],[30,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return new yy.DocumentNode( $$[$0-1] ) 
break;
case 2: this.$ = $$[$0] 
break;
case 3: $$[$0-1].push( $$[$0] ); this.$ = $$[$0-1] 
break;
case 4: this.$ = [ $$[$0] ] 
break;
case 5: this.$ = new yy.BlockNode( $$[$0-5], $$[$0-4], new yy.JoinedNodeCollection( $$[$0-2] ) ) 
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
case 14: this.$ = $$[$0] 
break;
case 15: $$[$0-1].push( $$[$0] ); this.$ = $$[$0-1] 
break;
case 16: this.$ = [ $$[$0] ] 
break;
case 17: this.$ = new yy.FilterNode( $$[$0-3], new yy.NodeCollection( $$[$0-1] ) ) 
break;
case 18: this.$ = new yy.FilterNode( $$[$0], new yy.NodeCollection( [ ] ) ) 
break;
case 19: $$[$0-2].push( $$[$0] ); this.$ = $$[$0-2] 
break;
case 20: this.$ = [ $$[$0] ] 
break;
case 21: this.$ = $$[$0] 
break;
case 22: this.$ = $$[$0] 
break;
case 23: this.$ = new yy.MethodNode( $$[$0-3], new yy.NodeCollection( $$[$0-1] ) ) 
break;
case 24: this.$ = new yy.MethodNode( $$[$0-2], new yy.NodeCollection( [ ] ) ) 
break;
case 25: $$[$0-2].push( $$[$0] ); this.$ = $$[$0-2] 
break;
case 26: this.$ = [ $$[$0] ] 
break;
case 27: this.$ = $$[$0] 
break;
case 28: this.$ = new yy.PrimitiveNode( $$[$0] ) 
break;
case 29: this.$ = new yy.PrimitiveNode( $$[$0] ) 
break;
case 30: this.$ = new yy.PrimitiveNode( false ) 
break;
case 31: this.$ = new yy.PrimitiveNode( true ) 
break;
case 32: this.$ = new yy.PrimitiveNode( parseFloat( $$[$0] ) ) 
break;
case 33: this.$ = new yy.MemberNode( $$[$0], true ) 
break;
case 34: this.$ = new yy.MemberNode( $$[$0], false ) 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:[1,5],14:[1,6]},{1:[3]},{5:[1,7]},{5:[2,2],7:8,8:[1,5],12:[2,2],14:[1,6]},{5:[2,4],8:[2,4],12:[2,4],14:[2,4]},{9:9,10:10,15:12,18:[1,13],19:14,20:[1,15],21:16,22:[1,11],23:[1,25],28:17,29:23,30:24,33:[1,18],34:[1,19],35:[1,20],36:[1,21],37:[1,22],38:[1,26]},{5:[2,7],8:[2,7],12:[2,7],14:[2,7]},{1:[2,1]},{5:[2,3],8:[2,3],12:[2,3],14:[2,3]},{10:27,15:12,18:[1,13],19:14,20:[1,15],21:16,23:[1,25],28:17,29:23,30:24,33:[1,18],34:[1,19],35:[1,20],36:[1,21],37:[1,22],38:[1,26]},{13:[1,28]},{23:[1,29]},{11:[2,9],13:[2,9],16:[1,30]},{19:31,23:[1,25],28:17,29:23,30:24,38:[1,26]},{11:[2,11],13:[2,11],16:[2,11],20:[1,32],27:[2,11],31:[2,11]},{11:[2,12],13:[2,12],16:[2,12],27:[2,12],31:[2,12]},{11:[2,13],13:[2,13],16:[2,13],27:[2,13],31:[2,13]},{11:[2,20],13:[2,20],16:[2,20],20:[2,20],27:[2,20],31:[2,20]},{11:[2,28],13:[2,28],16:[2,28],27:[2,28],31:[2,28]},{11:[2,29],13:[2,29],16:[2,29],27:[2,29],31:[2,29]},{11:[2,30],13:[2,30],16:[2,30],27:[2,30],31:[2,30]},{11:[2,31],13:[2,31],16:[2,31],27:[2,31],31:[2,31]},{11:[2,32],13:[2,32],16:[2,32],27:[2,32],31:[2,32]},{11:[2,21],13:[2,21],16:[2,21],20:[2,21],27:[2,21],31:[2,21]},{11:[2,22],13:[2,22],16:[2,22],20:[2,22],27:[2,22],31:[2,22]},{11:[2,34],13:[2,34],16:[2,34],20:[2,34],25:[1,33],27:[2,34],31:[2,34]},{23:[1,34]},{11:[1,35]},{5:[2,6],8:[2,6],12:[2,6],14:[2,6]},{18:[2,14],20:[2,14],23:[2,14],33:[2,14],34:[2,14],35:[2,14],36:[2,14],37:[2,14],38:[2,14]},{17:36,22:[1,38],24:37},{11:[2,10],13:[2,10],16:[2,10],20:[1,32],27:[2,10],31:[2,10]},{23:[1,25],28:39,29:23,30:24,38:[1,26]},{15:43,18:[1,13],19:14,20:[1,15],21:16,23:[1,25],26:40,27:[1,41],28:17,29:23,30:24,32:42,33:[1,18],34:[1,19],35:[1,20],36:[1,21],37:[1,22],38:[1,26]},{11:[2,33],13:[2,33],16:[2,33],20:[2,33],27:[2,33],31:[2,33]},{4:44,6:3,7:4,8:[1,5],14:[1,6]},{11:[2,8],13:[2,8],22:[1,38],24:45},{11:[2,16],13:[2,16],22:[2,16]},{23:[1,46]},{11:[2,19],13:[2,19],16:[2,19],20:[2,19],27:[2,19],31:[2,19]},{27:[1,47],31:[1,48]},{11:[2,24],13:[2,24],16:[2,24],20:[2,24],27:[2,24],31:[2,24]},{27:[2,26],31:[2,26]},{27:[2,27],31:[2,27]},{12:[1,49]},{11:[2,15],13:[2,15],22:[2,15]},{11:[2,18],13:[2,18],22:[2,18],25:[1,50]},{11:[2,23],13:[2,23],16:[2,23],20:[2,23],27:[2,23],31:[2,23]},{15:43,18:[1,13],19:14,20:[1,15],21:16,23:[1,25],28:17,29:23,30:24,32:51,33:[1,18],34:[1,19],35:[1,20],36:[1,21],37:[1,22],38:[1,26]},{13:[1,52]},{15:43,18:[1,13],19:14,20:[1,15],21:16,23:[1,25],26:53,28:17,29:23,30:24,32:42,33:[1,18],34:[1,19],35:[1,20],36:[1,21],37:[1,22],38:[1,26]},{27:[2,25],31:[2,25]},{5:[2,5],8:[2,5],12:[2,5],14:[2,5]},{27:[1,54],31:[1,48]},{11:[2,17],13:[2,17],22:[2,17]}],
defaultActions: {7:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                var errStr = "";
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + this.terminals_[symbol] + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
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
case 2: this.begin( 'INITIAL' ); return 11; 
break;
case 3: return 12; 
break;
case 4: return 8; 
break;
case 5: this.begin( 'INITIAL' ); return 13; 
break;
case 6: return 38; 
break;
case 7: return 18; 
break;
case 8: return 22; 
break;
case 9: return 16; 
break;
case 10: return 20; 
break;
case 11: return 31; 
break;
case 12: /* ignore whitespace */ 
break;
case 13: yy_.yytext = yy_.yytext.substr( 1, yy_.yyleng - 2 ); return 33; 
break;
case 14: yy_.yytext = yy_.yytext.substr( 1, yy_.yyleng - 2 ); return 34; 
break;
case 15: return 25; 
break;
case 16: return 27; 
break;
case 17: return 36; 
break;
case 18: return 35; 
break;
case 19: return 37; 
break;
case 20: return 23; 
break;
case 21: return 5; 
break;
}
};
lexer.rules = [/^[^\x00]*?(?=(\{\{))/,/^[^\x00]+/,/^do\s*\}\}/,/^\{\{\s*end\b/,/^\{\{/,/^\}\}/,/^=/,/^@/,/^:/,/^\|/,/^\./,/^,/,/^\s+/,/^'[^\']*?'/,/^"[^\"]*?"/,/^\(/,/^\)/,/^true\b/,/^false\b/,/^-?\d+(\.\d+)?/,/^[a-zA-Z0-9\_\$]+/,/^$/];
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
};

  /**
   * Utils
  */

  Utils = {
    /**
     * trims leading and trailing whitespace
    */
    trim: function(str) {
      return str.replace(/^\s+|\s+$/g, '');
    },
    /**
     * reduces a list into a single result
    */
    reduce: function(array, initial, method) {
      var item, memo, _i, _len;
      memo = initial;
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        item = array[_i];
        memo = method(memo, item);
      }
      return memo;
    },
    /**
     * returns the string representation of `foo`
    */
    toString: function(foo) {
      return Object.prototype.toString.call(foo);
    },
    /**
     * returns whether or not `foo` is an array
    */
    isArray: function(foo) {
      return this.toString(foo) === '[object Array]';
    },
    /**
     * applies all properties from `bar` onto `foo`
    */
    extend: function(foo, bar) {
      var key, value, _results;
      _results = [];
      for (key in bar) {
        value = bar[key];
        _results.push(foo[key] = value);
      }
      return _results;
    },
    /**
     * all of the nasty html characters to escape
    */
    escapees: /[&'"<>]/g,
    escapes: {
      '&': '&amp;',
      "'": '&#x27;',
      '"': '&quot;',
      '<': '&lt;',
      '>': '&gt;'
    },
    /**
     * escapes nasty html characters
    */
    escape: function(string) {
      var _this = this;
      return string.replace(this.escapees, function(c) {
        return _this.escapes[c] || c;
      });
    }
  };

  Walrus.Utils = Utils;

  /**
   * AST
  */

  AST = {};

  /**
   * AST.NodeCollection
   * A collection of nodes with the #compile interface, simply compiles
   * each of its nodes and returns the resulting array.
  */

  AST.NodeCollection = (function() {

    function NodeCollection(nodes) {
      this.nodes = nodes;
    }

    NodeCollection.prototype.compile = function(context, root) {
      var node, _i, _len, _ref, _results;
      _ref = this.nodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        _results.push(node.compile(context, root));
      }
      return _results;
    };

    return NodeCollection;

  })();

  /**
   * AST.JoinedNodeCollection
   * Compiles all of its nodes, then joins and trims them.
  */

  AST.JoinedNodeCollection = (function(_super) {

    __extends(JoinedNodeCollection, _super);

    function JoinedNodeCollection(nodes) {
      this.nodes = nodes;
    }

    JoinedNodeCollection.prototype.compile = function(context, root) {
      return Walrus.Utils.trim(JoinedNodeCollection.__super__.compile.call(this, context, root).join(''));
    };

    return JoinedNodeCollection;

  })(AST.NodeCollection);

  /**
   * AST.DocumentNode
   * The root node of the document. Basically inherits from `AST.JoinedNodeCollection`
   * and tacks on a CR (for version control style).
  */

  AST.DocumentNode = (function(_super) {

    __extends(DocumentNode, _super);

    function DocumentNode() {
      DocumentNode.__super__.constructor.apply(this, arguments);
    }

    DocumentNode.prototype.compile = function(context) {
      return DocumentNode.__super__.compile.call(this, context, context) + "\n";
    };

    return DocumentNode;

  })(AST.JoinedNodeCollection);

  /**
   * AST.ContentNode
   * A node with non-mustache content, probably HTML. We simply pass the content through.
  */

  AST.ContentNode = (function() {

    function ContentNode(content) {
      this.content = content;
    }

    ContentNode.prototype.compile = function(context, root) {
      return this.content;
    };

    return ContentNode;

  })();

  /**
   * AST.MemberNode
   * A node that refers to a member of the context. We don't explicitly check that this
   * member exists in case the developer wants to check that in a conditional.
   *
   * `{{member}}`, for instance, will compile to `index[ 'member' ]`.
  */

  AST.MemberNode = (function() {

    function MemberNode(path, safe) {
      this.path = path;
      this.safe = safe != null ? safe : false;
    }

    MemberNode.prototype.compile = function(index, context, root) {
      if (this.safe || typeof index[this.path] !== 'string') {
        return index[this.path];
      } else {
        return Walrus.Utils.escape(index[this.path]);
      }
    };

    return MemberNode;

  })();

  /**
   * AST.MethodNode
   * A node that refers to a member of the context, specifically a method, and will
   * call that method with any given arguments after they compile. We explicitly
   * check that the method exists to avoid 'foo is not a function' or other cryptic
   * errors.
   *
   * `{{member( )}}`, for instance, will compile to `index[ 'member' ]( )`.
  */

  AST.MethodNode = (function() {

    function MethodNode(path, _arguments) {
      this.path = path;
      this.arguments = _arguments;
    }

    MethodNode.prototype.compile = function(index, context, root) {
      if (index[this.path] == null) {
        throw "Cannot find any method named '" + this.path + "' in " + index + ".";
      }
      return index[this.path].apply(index, this.arguments.compile(context, root));
    };

    return MethodNode;

  })();

  /**
   * AST.ThisNode
   * A node that simply returns the current context to be evaluated. This is most useful
   * during implicit iteration and is denoted with a dot, like `{{.}}`.
   *
   * One example is when you've got an array of primitive types, like strings:
   *
   *  var names = [ 'Antonio', 'Ben', 'Curtis' ];
   *
   *  {{:each names do}}
   *  <li>{{.}}</li>
   *  {{end}}
   *
   * A similar use case is when the root view object is an array:
   *
   *  var view = [ { name : 'Antonio' }, { name : 'Ben' }, { name : 'Curtis' } ];
   *
   *  {{:each . do}}
   *  <li>{{name}}</li>
   *  {{end}}
  */

  AST.ThisNode = (function() {

    function ThisNode() {}

    ThisNode.prototype.compile = function(context, root) {
      return context;
    };

    return ThisNode;

  })();

  /**
   * AST.PathNode
   * A node that represents an object path. The path segments are typically
   * `AST.MemberNode`s and `AST.MethodNode`s.
   *
   * A `PathNode` may be evaluated in two contexts: the current "local" context
   * and the "root" context. For example, `{{foo.bar.baz}}` will try to evaluate
   * the object path from the current context, while `{{@foo.bar.baz}}` will
   * start back up at the root view object.
  */

  AST.PathNode = (function() {

    function PathNode(paths, local) {
      this.paths = paths;
      this.local = local;
    }

    PathNode.prototype.compile = function(context, root) {
      var paths, scope;
      paths = this.paths.concat();
      scope = this.local ? context : root;
      return Walrus.Utils.reduce(paths, scope, function(scope, path) {
        return path.compile(scope, context, root);
      });
    };

    return PathNode;

  })();

  /**
   * AST.PrimitiveNode
   * A node whose value is a javascript primitive or literal. Supported
   * primitives are:
   *
   * - Strings with "double quotes"
   * - Strings with 'single quotes'
   * - Numbers, like 45 or 987.654
   * - Booleans, true or false
   *
   * TODO These primitives are currently parsed in the lexing phase. I'm
   * kinda feeling like a bit of that logic should be moved to the AST instead.
   * Perhaps declare the literal type in the lexer and determine the conversion
   * here, or create distinct classes for each primitive type, like `BooleanNode`
   * and `NumberNode`.
  */

  AST.PrimitiveNode = (function() {

    function PrimitiveNode(value) {
      this.value = value;
    }

    PrimitiveNode.prototype.compile = function(context, root) {
      return this.value;
    };

    return PrimitiveNode;

  })();

  /**
   * AST.ExpressionNode
   * An expression is the main part of a mustache. It typically consists of a path,
   * which gets compiled, then passed to any filters to be manipulated further.
   * The subject of an expression may also be a primitive.
   *
   * The breakdown of a single-line mustache is:
   *
   *  {{ expression | :filter(s) }}
   *
   * And a block mustache with a helper, like:
   *
   *  {{ :helper expression | :filters(s) do }}
   *    // block content
   *  {{ end }}
  */

  AST.ExpressionNode = (function() {

    function ExpressionNode(paths, filters) {
      this.paths = paths;
      this.filters = filters;
    }

    ExpressionNode.prototype.compile = function(context, root) {
      return this.filters.apply(this.paths.compile(context, root), context, root);
    };

    return ExpressionNode;

  })();

  /**
   * AST.BlockNode
   * A node that contains other statements within a block. `BlockNode`s are denoted
   * by the use of a _:helper_, and the presence of `do`/`end` to signify the start
   * and end of the node's block. It is the helper's responsibility to determine
   * how to compile the block.
   *
   * Will throw an error if the named helper is not defined in `Walrus.Helpers`.
  */

  AST.BlockNode = (function() {

    function BlockNode(name, expression, block) {
      this.name = name;
      this.expression = expression;
      this.block = block;
      if (Walrus.Helpers[this.name] == null) {
        throw "Cannot find any helper named '" + this.name + "'.";
      }
    }

    BlockNode.prototype.compile = function(context, root) {
      return Walrus.Helpers[this.name](this.expression, context, root, this.block);
    };

    return BlockNode;

  })();

  /**
   * AST.FilterNode
   * A node that specifies a _filter_ used to post-process the result of the expression.
   * Filters may also accept arguments, just like methods. These arguments are determined
   * and handled by the filter itself.
   *
   * Will throw an error if the named filter is not defined in `Walrus.Filters`.
  */

  AST.FilterNode = (function() {

    function FilterNode(name, _arguments) {
      this.name = name;
      this.arguments = _arguments;
      if (Walrus.Filters[this.name] == null) {
        throw "Cannot find any filter named '" + this.name + "'.";
      }
    }

    FilterNode.prototype.apply = function(value, context, root) {
      var _ref;
      return (_ref = Walrus.Filters)[this.name].apply(_ref, [value].concat(__slice.call(this.arguments.compile(context, root))));
    };

    return FilterNode;

  })();

  /**
   * AST.FilterCollection
   * A collection of filters. Filters are applied to the expression
   * in order from left to right.
  */

  AST.FilterCollection = (function() {

    function FilterCollection(filters) {
      this.filters = filters;
    }

    FilterCollection.prototype.apply = function(expression, context, root) {
      return Walrus.Utils.reduce(this.filters, expression, function(memo, filter) {
        return filter.apply(memo, context, root);
      });
    };

    return FilterCollection;

  })();

  Walrus.AST = AST;

  /**
   * Core Helpers
  */

  Walrus.Helpers = {};

  Walrus.addHelper = function(name, fn) {
    if (this.Helpers[name] != null) {
      throw "Cannot override existing helper named '" + name + "'.";
    }
    return this.Helpers[name] = fn;
  };

  /**
   * *:if*
   * Evaluates a block only if the result of `expression` is truthy. Opposite of `:unless`.
   *
   * Usage:
   *
   *  {{:if expression do}}
   *    // block content
   *  {{end}}
  */

  Walrus.addHelper('if', function(expression, context, root, block) {
    if (expression.compile(context, root)) {
      return block.compile(context, root);
    } else {
      return '';
    }
  });

  /**
   * *:unless*
   * Evaluates a block only if the result of `expression` is falsy. Opposite of `:if`.
   *
   * Usage:
   *
   *  {{:unless expression do}}
   *    // block content
   *  {{end}}
  */

  Walrus.addHelper('unless', function(expression, context, root, block) {
    if (!expression.compile(context, root)) {
      return block.compile(context, root);
    } else {
      return '';
    }
  });

  /**
   * *:each*
   * Iterates over the array returned by `expression` and evaluates the block
   * for each member of the array. The compiled blocks are then joined.
  */

  Walrus.addHelper('each', function(expression, context, root, block) {
    var array, index, item, items;
    array = expression.compile(context, root);
    items = (function() {
      var _len, _results;
      _results = [];
      for (index = 0, _len = array.length; index < _len; index++) {
        item = array[index];
        item['$index'] = index;
        item['$parent'] = context;
        item['$length'] = array.length;
        _results.push(block.compile(item, root));
      }
      return _results;
    })();
    return items.join('');
  });

  /**
   * *:with*
   * Changes the local context of the block to the result of `expression`.
   *
   * Usage:
   *
   *  {{:with expression do}}
   *    <p>{{name}}</p>
   *  {{end}}
  */

  Walrus.addHelper('with', function(expression, context, root, block) {
    var subcontext;
    subcontext = expression.compile(context, root);
    subcontext['$parent'] = context;
    return block.compile(subcontext, root);
  });

  /**
   * Core Filters
  */

  Walrus.Filters = {};

  Walrus.addFilter = function(name, fn) {
    if (this.Filters[name] != null) {
      throw "Cannot override existing filter named '" + name + "'.";
    }
    return this.Filters[name] = fn;
  };

  /**
   * *:equals*
   * Returns whether the expression is strictly equal to the given value.
   *
   * Parameters:
   *  foo - the value to compare to the expression
   *
   * Usage:
   *
   *  {{ :if "foo" | :equals( "bar" ) do }}
   *    // block will not be evaluated
   *  {{ end }}
  */

  Walrus.addFilter('equals', function(value, foo) {
    return value === foo;
  });

  /**
   * *:or*
   * Returns the result of the expression if it is truthy, the given value if not.
   *
   * Parameters:
   *  foo - the value to default to if the expression is falsy.
   *
   * Usage:
   *
   *  {{ false | :or( "Not Specified" ) }} // => "Not Specified"
  */

  Walrus.addFilter('or', function(value, foo) {
    return value || foo;
  });

  /**
   * *:log*
   * Logs whatever you want to the console if `console.log` is available.
   * Helpful for debugging your view object especially if your console
   * supports object inspection.
   *
   * Parameters: any
   *
   * Usage:
   *
   *  {{ @root | :log( 'wtf' ) }} // => Console logs: [object Object], 'wtf'
  */

  Walrus.addFilter('log', function() {
    if ((typeof console !== "undefined" && console !== null) && (console.log != null)) {
      return console.log.apply(console, ['[Walrus]'].concat(__slice.call(arguments)));
    }
  });

  /**
   * Setup
  */

  Walrus.Parser = {
    parser: walrus,
    parse: function() {
      return walrus.parse.apply(walrus, arguments);
    }
  };

  Walrus.Parser.parser.yy = Walrus.AST;

  /**
   * Export
  */

  if ((typeof require !== "undefined" && require !== null) && (typeof exports !== "undefined" && exports !== null)) {
    module.exports = Walrus;
  } else {
    window.Walrus = Walrus;
  }

}).call(this);
