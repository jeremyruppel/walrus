Walrus
======

Members/Attributes
------------------

```
{
	"mustache" : "walrus!"
}

<p>This is how you {{@mustache}}</p>
```

Member Paths
------------

```
{
	"president" :
	{
		"name" : "Teddy Roosevelt"
	}
}

<p>{{@president.name}} rocked the walrus</p>
```

Loops
-----

You can still access the root context while in a loop by using `@`

```
{
	"country" : "United States",
	"presidents" :
	[
		{ "name" : "Teddy Roosevelt" },
		{ "name" : "Franklin Delano Roosevelt" }
	]
}

<ul>
	{{for president in @presidents}}
	<li>{{president.name}} was president of {{@country}}</li>
	{{end}}
</ul>
```