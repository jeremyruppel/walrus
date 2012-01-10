Walrus
======

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

Root References (all day erryday)
---------------------------------

With Walrus, you can always reference the root view object as a path context by using the `@` symbol before your path. Use this even if you're dereferenced, iterating, or even within the arguments to a method.

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

Methods
-------

One of the main focuses of Walrus is to treat methods on your view object like first-class citizens. You can call your methods with any number of arguments from the view object or javascript literals.

With a view object like:

``` js
{
	"captitalize" : function( str ){ return str.charAt( 0 ).toUpperCase( ) + str.slice( 1 ); },
	"city" : "detroit"
}
```

It's as easy as `{{capitalize( city )}}`.

> Note that since both of these members are at the root of the view object, you could also reference them like `{{@capitalize( @city )}}`, or any combination of local or root references.

Blocks/Helpers
--------------

In Walrus, blocks don't look like the `#member`/`/member` open/close pairs we see in mustache, handlebars, and others. Walrus decides to look a lot more like ruby and uses a simpler `do`/`end` mechanic.

Each block has a helper, preceded by `:`, that tells you what the block does. Walrus ships with a basic set of these built in.

So for instance, a conditional looks like:

``` html
{{:if @loggedIn do}}
<p>Welcome back, {{@username}}!</p>
{{end}}
```

And iteration looks like:

``` html
{{:each @player do}}
<li>{{name}}</li>
{{end}}
```

> Like several other templating solutions, you can implicitly iterate over a collection of values, like strings, and template in the current value with `{{.}}`.

Walrus can also be extended with your own custom block helpers.

Filters
-------

Walrus also supports the concept of filters, which look a lot like filters you might have used in liquid or ejs templates.

Filters also are preceded by `:`, but come after the main expression separated by a pipe, like `{{name | :upcase}}`.

Filters can be chained together, separated by whitespace. Filters can also be used with block helpers.

Walrus will not ship with any filters built in to the core parser. The idea is that Walrus can then be extended to use different sets of filters as the developer sees fit, but without bloating the library for those who don't want them.

Several bundles of filters are under development and will appear in this repo for easy distribution. The ones currently planned are:

- walrus.string: capitalization, casing, hyphenization, etc

- walrus.inflection: pluralization, etc

- walrus.date: date formatting

- walrus.domain: bring raw json objects into the client domain (theres got to be a better name for this)

Inspiration
-----------

Walrus was directly inspired by templating solutions like handlebars, but seeks to position itself a little differently. Handlebars' position is to [not fully support functions in templates](https://github.com/wycats/handlebars.js/pull/143). I rather like them myself, so I made Walrus.

I also really liked the filter behavior included in ejs and company, but I didn't like how the filters were all built-in when I'd probably never use half of them. That may be fine for the server-side, but not for the client-side, and that's where I make my dough.

