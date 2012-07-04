# Walrus

A bolder kind of mustache.

[![Build Status](https://secure.travis-ci.org/jeremyruppel/walrus.png)](http://travis-ci.org/jeremyruppel/walrus)

View this readme on [documentup](http://documentup.com/jeremyruppel/walrus).

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
is tested with [mocha][mocha]. **Walrus has no runtime dependencies.**

Since **walrus** is still pretty young, expect changes in the API, especially for filters and helpers.

The `/test/examples` directory is filled with plenty of self-documenting examples that comprise over half of
the test suite, so give those a once-over if you have a question that isn't answered in the readme.

## Core

The **walrus** core contains the walrus parser/compiler, several common helpers and filters, and a few internal utility methods.

### Usage in JavaScript

Like other [jison][jison]-based parsers, templating with **walrus** is a two-step process.

First, grab your template and parse it:

``` js
var template = Walrus.Parser.parse( $( '#my-template' ).html( ) );
```

`template` is a JavaScript object ready to accept a view object and kick out some text.

``` js
var htmlGoodness = template.compile( { data : 'foo bar baz' } );
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

### (Un-)Escaping

Like many other mustache-like languages, **walrus** escapes string members by default in an attempt
to get rid of HTML-unsafe characters.

If you want these characters included, use an equals sign before your expression, like: `{{=html}}`.

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

> While in an `:each` block, you can use the following special variables:
>
> **$index** provides the index of the current item in the collection
>
> **$length** provides the length of the collection
>
>	**$parent** provides access to the parent object of the collection
>
> Like several other templating solutions, you can implicitly iterate over a collection of values, like strings, and template in the current value with `{{.}}`.

### :with

`:with` can be used to force a change in context if you don't want to use tons of object paths.

``` html
{{:with @team.captain do}}
<p>Captain: {{name}}</p>
{{end}}
```

> While in a `:with` block, you can use the following special variables:
>
> **$parent** provides access to the parent object of the context

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

### :if

Returns the expression if _condition_ is truthy, or nothing if _condition_ is falsy.

Parameters:

	condition - the condition to test against

Usage:

	{{ 'active' | :if( true ) }} <!-- "active" -->

### :unless

Returns the expression if _condition_ is falsy, or nothing if _condition_ is truthy.

Parameters:

	condition - the condition to test against

Usage:

	{{ 'active' | :unless( true ) }} <!-- "" -->

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
{{ :each numbers | :first do }}
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
{{ :each numbers | :last do }}
	<!-- 10 -->
{{ end }}

{{ :each numbers | :last( 5 ) do }}
	<!-- 6 7 8 9 10 -->
{{ end }}
```

### :after

Selects all of the items in the array except for the first _count_.

Parameters:

	count - how many items to omit from the beginning

Usage:

``` html
{{ :each numbers | :after( 3 ) do }}
	<!-- 4 5 6 7 8 9 10 -->
{{ end }}
```

### :before

Selects all of the items in the array except for the last _count_.

Parameters:

	count - how many items to omit from the end

Usage:

``` html
{{ :each numbers | :before( 3 ) do }}
	<!-- 1 2 3 4 5 6 7 -->
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

## Walrus.Currencies

`walrus.currencies` contains helpers and filters that are useful when working with dolla bills.

### :currency

Returns a string formatted in the current locale's format.
Delegates to [accounting.js](http://josscrowcroft.github.com/accounting.js/) if present.

Parameters:
  symbol - (Optional) the currency symbol to use
	precision - (Optional) the decimal place level to show cents
	decimal - (Optional) the character used to delimit decimals
	thousand - (Optional) the character used to delimit thousands

Usage:

	{{ 36000 | :currency }} // => $36,000.00
	{{ 36000 | :currency( '$', 0 ) }} // => $36,000

## Walrus.Dates

`walrus.dates` contains helpers and filters that are useful when working with dates or timestamps.

### :strftime

Formats a date into the string given by `format`. Accepts any value that can be passed to `new Date( )`.

Parameters:

	format - The format string, according to these tokens, taken directly from `man 3 strftime` (with some omissions):

	%A		is replaced by national representation of the full weekday name.

	%a		is replaced by national representation of the abbreviated weekday name.

	%B		is replaced by national representation of the full month name.

	%b		is replaced by national representation of the abbreviated month name.

	%D		is equivalent to ``%m/%d/%y''.

	%d		is replaced by the day of the month as a decimal number (01-31).

	%e		is replaced by the day of month as a decimal number (1-31); single digits are
				preceded by a blank.

	%F		is equivalent to ``%Y-%m-%d''.

	%H		is replaced by the hour (24-hour clock) as a decimal number (00-23).

	%I		is replaced by the hour (12-hour clock) as a decimal number (01-12).

	%k		is replaced by the hour (24-hour clock) as a decimal number (0-23); single dig-
				its are preceded by a blank.

	%l		is replaced by the hour (12-hour clock) as a decimal number (1-12); single dig-
				its are preceded by a blank.

	%M		is replaced by the minute as a decimal number (00-59).

	%m		is replaced by the month as a decimal number (01-12).

	%n		is replaced by a newline.

	%p		is replaced by national representation of either "ante meridiem" or "post meri-
				diem" as appropriate.

	%R		is equivalent to ``%H:%M''.

	%r		is equivalent to ``%I:%M:%S %p''.

	%S		is replaced by the second as a decimal number (00-60).

	%T		is equivalent to ``%H:%M:%S''.

	%t		is replaced by a tab.

	%U		is replaced by the week number of the year (Sunday as the first day of the
				week) as a decimal number (00-53).

	%u		is replaced by the weekday (Monday as the first day of the week) as a decimal
				number (1-7).

	%v		is equivalent to ``%e-%b-%Y''.

	%w		is replaced by the weekday (Sunday as the first day of the week) as a decimal

	%X		is replaced by national representation of the time.

	%x		is replaced by national representation of the date.

	%Y		is replaced by the year with century as a decimal number.

	%y		is replaced by the year without century as a decimal number (00-99).

	%Z		is replaced by the time zone name.

Usage:

	{{created_at | :strftime( '%F' )}} <!-- 2012-02-10 -->

### :time_ago_in_words

Returns a human-readable relative time phrase from the given date.
Heavily adapted from the [ActionPack][actionpack] method of the same name.

Parameters:

	includeSeconds - (Optional) whether or not to include results for less than one minute

Usage:

	{{ created_at | :time_ago_in_words( true ) }} <!-- less than a minute -->

## Walrus.Domain

`walrus.domain` contains helpers and filters that help create your presentation-level domain.

### :as

Decorates a view object or collection of view objects with custom domain methods.

Parameters:

	name - The key for the object on `Walrus.Domain` to decorate with

Usage:

First, define some custom domain methods:

``` js
Walrus.Domain.person = { fullName : function( ){ return this.firstName + ' ' + this.lastName; } };
```

Then, selectively apply those to your view object at template-time:

``` html
<ul>
	{{:each employee | :as( 'person' ) do}}
	<li>{{fullName}}</li>
	{{do}}
</ul>
```

## Walrus.Inflections

`walrus.inflections` contains helpers and filters to help work with human-friendly text.

### :pluralize

Pluralizes the given word, optionally based on a _count_, and also optionally including the count in the result.
Heavily adapted from the [ActiveSupport][activesupport] method of the same name.

Parameters:

	word - the word to be pluralized
	count - Optional: count to base pluralization on
	includeCount - Optional: whether or not to include the count in the result

Usage:

	{{ "book" | :pluralize }} <!-- books -->

	{{ "book" | :pluralize( 1 ) }} <!-- book -->

	{{ "book" | :pluralize( 5, true ) }} <!-- 5 books -->

### :singularize

Singularizes the given word. You're probably looking for `pluralize`.
Heavily adapted from the [ActiveSupport][activesupport] method of the same name.

Parameters: none

Usage:

	{{ "books" | :singularize }} <!-- book -->

### :ordinalize

Turns a number into an ordinal string, like 1st, 2nd, 3rd, etc...
Heavily adapted from the [ActiveSupport][activesupport] method of the same name.

Parameters: none

Usage:

	{{ 5 | :ordinalize }} <!-- 5th -->

## Walrus.Math

`walrus.math` contains helpers and filters to help work with numbers.

### :plus

Returns the sum of two numbers.

Parameters:

	number - the number to add to the expression

Usage:

	{{ 15 | :plus( 6 ) }} <!-- 21 -->

### :minus

Returns the difference of two numbers.

Parameters:

	number - the number to subtract from the expression

Usage:

	{{ 15 | :minus( 6 ) }} <!-- 9 -->

### :gt

Returns whether `value` is greater than the given number.

Parameters:

	number - the number to compare against

Usage:

	{{ 15 | :gt( 5 ) }} <!-- true -->

### :gte

Returns whether `value` is greater than or equal to the given number.

Parameters:

	number - the number to compare against

Usage:

	{{ 15 | :gte( 5 ) }} <!-- true -->

### :lt

Returns whether `value` is less than the given number.

Parameters:

	number - the number to compare against

Usage:

	{{ 15 | :lt( 5 ) }} <!-- false -->

### :lte

Returns whether `value` is less than or equal to the given number.

Parameters:

	number - the number to compare against

Usage:

	{{ 15 | :lte( 5 ) }} <!-- false -->

### :floor

Returns the given number rounded down to the nearest integer.

Parameters: none

Usage:

	{{ 5.6 | :floor }} <!-- 5 -->

### :ceil

Returns the given number rounded up to the nearest integer.

Parameters: none

Usage:

	{{ 5.6 | :ceil }} <!-- 6 -->

### :round

Returns the given number rounded to the nearest integer.

Parameters: none

Usage:

	{{ 5.6 | :round }} <!-- 6 -->

## Walrus.Strings

`walrus.strings` contains helpers and filters to help work with strings.

### :reverse

Reverses a string.

Parameters: none

Usage:

	{{ "hello" | :reverse }} <!-- olleh -->

### :downcase

Converts a string to lowercase characters. Opposite of `:upcase`.

Parameters: none

Usage:

	{{ "HelLO!" | :downcase }} <!-- hello! -->

### :upcase

Converts a string to uppercase characters. Opposite of `:downcase`.

Parameters: none

Usage:

	{{ "HelLO!" | :upcase }} <!-- HELLO! -->

### :squish

Removes all leading and trailing whitespace, then condenses any internal whitespace
groups to a single space each.
Heavily adapted from the [ActiveSupport][activesupport] method of the same name.

Parameters: none

Usage:

	{{ " foo		bar \n baz"	 | :squish }} <!-- foo bar baz -->

### :truncate

Truncates a string to the specified `length`, optionally breaking at a separator or
providing a custom string to denote an omission.
Heavily adapted from the [ActiveSupport][activesupport] method of the same name.

Parameters:

	length (int) - the number of characters to keep, at most
	separator (string) - Optional: a specified string to break on
	omission (string) - Optional: a string to denote an omission

Usage:

	{{ "Once upon a time in a world far far away" | :truncate( 27, ' ' ) }} <!-- Once upon a time in a... -->

## Mad Props

If Walrus isn't quite your style, one of these other fine looks might suit you:

- [mustache][mustache]
- [handlebars][handlebars]
- [ejs][ejs]
- [liquid][liquid]

In any case, walrus borrows ideas from each of them, so they're all worth checking out!

Many of the filters in walrus are inspired or borrowed from [ActiveSupport][activesupport]. If walrus can
be half as helpful to developers as ActiveSupport has been, it'll be a great success.

## Contributors

- [Eddie Leffler](https://github.com/hershmire)
- [Curtis Steckel](https://github.com/steckel)

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
[actionpack]: https://github.com/rails/rails/tree/master/actionpack
