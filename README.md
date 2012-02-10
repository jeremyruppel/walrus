# Walrus

A bolder kind of mustache.

[![Build Status](https://secure.travis-ci.org/jeremyruppel/walrus.png)](http://travis-ci.org/jeremyruppel/walrus)

## About

**Walrus** is a templating library inspired by [mustache][mustache], [handlebars][handlebars], [ejs][ejs] and friends,
but with a couple of important differences in philosophy and style:

- **View logic is different than business logic (and that's okay!).**
	In modern web apps, there's often a good amount of presentation logic involved. This logic doesn't belong
	in your application code, your backbone models, or anywhere else but the presentation layer. The templating
	language is a good place to put this.

- **Reusable view helpers are super fun and helpful.**
	Rails had the right idea by shipping a bunch of view helpers with ActionView. Having commonly used view helpers
	come bundled with the framework keeps developers from spending time writing them (and testing them, or even worse,
	_not testing them_) again and again.

- **Keep the core library light.**
	While **walrus** ships with a bunch of filters and helpers you can use out-of-the-box, only the essentials
	are included in the core. This keeps client-side code as small as it can be, letting you opt-in to extras
	only as often as you need them. To extend **walrus** with new filters and helpers, just include the
	javascript you want and you're done, son.

- **Stop hashing and slashing.**
	Maybe it's just me, but opening and closing blocks with "hash-something" "slash-something" feels super redundant.
	Walrus uses do/end for its blocks, which should look a lot more familiar to ruby types.

The **walrus** parser is written in [jison][jison] and the rest in [coffeescript][coffeescript], and everything
is tested with [mocha][mocha].

Since **walrus** is still pretty young, expect changes in the API, especially for filters and helpers.

The `/test/examples` directory is filled with plenty of self-documenting examples that comprise over half of
the test suite, so give those a once-over if you have a question that isn't answered in the readme.

## Core

The **walrus** core contains the walrus parser/compiler, several common helpers and filters, and a few internal utility methods.

### Usage in JavaScript

Like other [jison][jison]-based parsers, templating with **walrus** is a two-step process.

First, grab your template and compile it:

``` js
var compiledTemplate = Walrus.Parser.parse( $( '#my-template' ).html( ) );
```

`compiledTemplate` is a JavaScript object ready to accept a view object and kick out some text.

``` js
var htmlGoodness = compiledTemplate.compile( { data : 'foo bar baz' } );
```

### Paths

Like some of the other templating solutions out there, Walrus will let you reference members using object paths.

If your view object is:

``` json
{
	"hello" :
	{
		"walrus" : "sweeet."
	}
}
```

Then `{{hello.walrus}}` will resolve to `sweeet.`.

### Root References (all day erryday)

With Walrus, you can always reference the root view object as a path context by using the `@` symbol before your path.
Use this even if you're dereferenced, iterating, or even within the arguments to a method.

So if you've got a view object like:

``` json
{
	"team" : "Detroit Red Wings",
	"players" :
	[
		{
			"name" : "Pavel Datsyuk"
		},
		{
			"name" : "Nicklas Lidström"
		},
		{
			"name" : "Darren Helm"
		}
	]
}
```

You can create your badass hockey roster like:

``` html
<ul>
	{{:each players do}}
	<li>{{name}} plays for the {{@team}}</li>
	{{end}}
</ul>
```

### Methods

One of the main focuses of Walrus is to treat methods on your view object like first-class citizens. You can
call your methods with any number of arguments from the view object or (most) javascript literals.

With a view object like:

``` js
{
	"captitalize" : function( str ){ return str.charAt( 0 ).toUpperCase( ) + str.slice( 1 ); },
	"city" : "detroit"
}
```

It's as easy as `{{capitalize( city )}}`.

> Note that since both of these members are at the root of the view object, you could also reference them like
> `{{@capitalize( @city )}}`, or any combination of local or root references.

## Core Blocks/Helpers

In Walrus, blocks don't look like the `#member`/`/member` hash/slash pairs we've seen elsewhere. Walrus looks
a lot more like ruby and uses a simpler `do`/`end` idiom.

Each block has a helper, preceded by `:`, that tells you what the block does. Walrus ships with a basic set of
these built in.

### :if and :unless

Conditionals can be represented by `:if` and `:unless` blocks. Both of these test the expression for truthiness
or falsiness respectively.

``` html
{{:if @loggedIn do}}
<p>Welcome back, {{@username}}!</p>
{{end}}

{{:unless @loggedIn do}}
<p>I don't believe we've met!</p>
{{end}}
```

### :each

`:each` can be used to iterate over a collection.

``` html
{{:each @player do}}
<li>{{name}}</li>
{{end}}
```

> Like several other templating solutions, you can implicitly iterate over a collection of values, like strings, and template in the current value with `{{.}}`.

### :with

`:with` can be used to force a change in context if you don't want to use tons of object paths.

``` html
{{:with @team.captain do}}
<p>Captain: {{name}}</p>
{{end}}
```

## Core Filters

Walrus also supports the concept of filters, which look a lot like filters you might have used in [liquid][liquid] or [ejs][ejs] templates.

Filters also are preceded by `:`, but come after the main expression separated by a pipe, like `{{name | :upcase}}`.

Filters can be chained together, separated by whitespace. Filters can be used with block helpers or in a standalone expression.

### :equals

`:equals` tests the expression for strict equality. This is most useful with the conditional block helpers.

``` html
{{:if status | :equals( 'pending' ) do}}
<p>We're still working on it.</p>
{{end}}
```

### :or

`:or` can be used to provide a default or fallback value if a member doesn't exist on your view object.

``` html
<h2>{{price | :or( 'N/A' )}}</h2>
```

### :log

`:log` is a helper method for developers that simply passes its argument to the console.

``` html
You can log a {{@member | :log}} of the view object,
while {{. | :log}} will log the whole thing,
and {{"arbitrary literals" | :log}} can be logged, too!
```

## Walrus.Collections

`walrus.collections` contains helpers and filters that are useful when working with arrays.

### :first

Selects the first _count_ items of the array. Defaults to only the first item.

Parameters:

	count - Optional: how many items to include

Usage:

``` html
{{ :each numbers | :first do}}
  <!-- 1 -->
{{ end }}

{{ :each numbers | :first( 5 ) do }}
  <!-- 1 2 3 4 5 -->
{{ end }}
```

### :last

Selects the last _count_ items of the array. Defaults to only the last item.

Parameters:

	count - Optional: how many items to include

Usage:

``` html
{{ :each numbers | :last do}}
	<!-- 10 -->
{{ end }}

{{ :each numbers | :last( 5 ) do }}
	<!-- 6 7 8 9 10 -->
{{ end }}
```

### :count

Returns the length of the given array.

Parameters: none

Usage:

``` html
var numbers = [ 1, 2, 3, 4, 5 ];

{{ numbers | :count }} <!-- 5 -->
```

### :any

Returns true if the array is not empty. Opposite of `:empty`.

Parameters: none

Usage:

``` html
var numbers = [ 1, 2, 3, 4, 5 ];

{{ numbers | :any }} <!-- true -->
```

### :empty

Returns true of the array is empty. Opposite of `:any`.

Parameters: none

Usage:

``` html
var numbers = [ 1, 2, 3, 4, 5 ];

{{ numbers | :empty }} <!-- false -->
```

## Walrus.Dates

TODO

## Walrus.Domain

TODO

## Walrus.Inflections

TODO

## Walrus.Math

TODO

## Walrus.Strings

TODO

## Mad Props

If Walrus isn't quite your style, one of these other fine looks might suit you:

- [mustache][mustache]
- [handlebars][handlebars]
- [ejs][ejs]
- [liquid][liquid]

In any case, walrus borrows ideas from each of them, so they're all worth checking out!

Many of the filters in walrus are inspired or borrowed from [ActiveSupport][activesupport]. If walrus can
be half as helpful to developers as ActiveSupport has been, it'll be a great success.

## License

Walrus is released under the MIT license.

[handlebars]: https://github.com/wycats/handlebars.js
[mustache]: https://github.com/janl/mustache.js
[ejs]: https://github.com/visionmedia/ejs
[liquid]: http://liquidmarkup.org/
[jison]: http://zaach.github.com/jison/
[coffeescript]: http://coffeescript.org/
[mocha]: http://visionmedia.github.com/mocha/
[activesupport]: http://as.rubyonrails.org/
