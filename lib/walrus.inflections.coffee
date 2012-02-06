Walrus = if require? and exports? then require './walrus' else window.Walrus

###*
 * Inflector code ported from https://github.com/jeremyruppel/underscore.inflection
###
plurals = [
  [ /$/,                         's'       ],
  [ /s$/,                        's'       ],
  [ /(ax|test)is$/,              '$1es'    ],
  [ /(octop|vir)us$/,            '$1i'     ],
  [ /(octop|vir)i$/,             '$1i'     ],
  [ /(alias|status)$/,           '$1es'    ],
  [ /(bu)s$/,                    '$1ses'   ],
  [ /(buffal|tomat)o$/,          '$1oes'   ],
  [ /([ti])um$/,                 '$1a'     ],
  [ /([ti])a$/,                  '$1a'     ],
  [ /sis$/,                      'ses'     ],
  [ /(?:([^f])fe|([lr])f)$/,     '$1$2ves' ],
  [ /(hive)$/,                   '$1s'     ],
  [ /([^aeiouy]|qu)y$/,          '$1ies'   ],
  [ /(x|ch|ss|sh)$/,             '$1es'    ],
  [ /(matr|vert|ind)(?:ix|ex)$/, '$1ices'  ],
  [ /([m|l])ouse$/,              '$1ice'   ],
  [ /([m|l])ice$/,               '$1ice'   ],
  [ /^(ox)$/,                    '$1en'    ],
  [ /^(oxen)$/,                  '$1'      ],
  [ /(quiz)$/,                   '$1zes'   ],

  [ 'person', 'people'                     ],
  [ 'man',    'men'                        ],
  [ 'child',  'children'                   ],
  [ 'sex',    'sexes'                      ],
  [ 'move',   'moves'                      ],
  [ 'cow',    'kine'                       ]
].reverse( )

singulars = [
  [ /s$/,                                                            ''        ],
  [ /(n)ews$/,                                                       '$1ews'   ],
  [ /([ti])a$/,                                                      '$1um'    ],
  [ /((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/, '$1$2sis' ],
  [ /(^analy)ses$/,                                                  '$1sis'   ],
  [ /([^f])ves$/,                                                    '$1fe'    ],
  [ /(hive)s$/,                                                      '$1'      ],
  [ /(tive)s$/,                                                      '$1'      ],
  [ /([lr])ves$/,                                                    '$1f'     ],
  [ /([^aeiouy]|qu)ies$/,                                            '$1y'     ],
  [ /(s)eries$/,                                                     '$1eries' ],
  [ /(m)ovies$/,                                                     '$1ovie'  ],
  [ /(x|ch|ss|sh)es$/,                                               '$1'      ],
  [ /([m|l])ice$/,                                                   '$1ouse'  ],
  [ /(bus)es$/,                                                      '$1'      ],
  [ /(o)es$/,                                                        '$1'      ],
  [ /(shoe)s$/,                                                      '$1'      ],
  [ /(cris|ax|test)es$/,                                             '$1is'    ],
  [ /(octop|vir)i$/,                                                 '$1us'    ],
  [ /(alias|status)es$/,                                             '$1'      ],
  [ /^(ox)en/,                                                       '$1'      ],
  [ /(vert|ind)ices$/,                                               '$1ex'    ],
  [ /(matr)ices$/,                                                   '$1ix'    ],
  [ /(quiz)zes$/,                                                    '$1'      ],
  [ /(database)s$/,                                                  '$1'      ],

  [ 'cow',    'kine'                                                           ],
  [ 'move',   'moves'                                                          ],
  [ 'sex',    'sexes'                                                          ],
  [ 'child',  'children'                                                       ],
  [ 'man',    'men'                                                            ],
  [ 'person', 'people'                                                         ]
].reverse( )

uncountables = [ 'equipment', 'information', 'rice', 'money', 'species', 'series', 'fish', 'sheep', 'jeans' ]

gsub = ( word, rule, replacement ) ->

  pattern = new RegExp rule.source || rule, 'gi'

  word.replace pattern, replacement if pattern.test word

inflect = ( word, rules ) ->

  result = word

  for rule in rules
    sub = gsub word, rule[ 0 ], rule[ 1 ]
    result = sub if sub
    break if sub

  result

singularize = ( word ) ->

  return word if word in uncountables

  inflect word, singulars

pluralize = ( word, count, includeCount=false ) ->

  if count?

    result = if count is 1 then singularize word else pluralize word
    result = if includeCount then [ count, result ].join ' ' else result

  else

    return word if word in uncountables

    inflect word, plurals

###*
 * *:pluralize*
 * Pluralizes the given word, optionally based on a _count_, and also optionally
 * including the count in the result.
 *
 * Parameters:
 *  word - the word to be pluralized
 *  count - Optional: count to base pluralization on
 *  includeCount - Optional: whether or not to include the count in the result
 *
 * Usage:
 *
 *  {{ "book" | :pluralize }} // => "books"
 *
 *  {{ "book" | :pluralize( 1 ) }} // => "book"
 *
 *  {{ "book" | :pluralize( 5, true ) }} // => "5 books"
###
Walrus.Filters.add 'pluralize',   pluralize

###*
 * *:singularize*
 * Singularizes the given word. You're probably looking for `pluralize`.
 *
 * Parameters: none
 *
 * Usage:
 *
 *  {{ "books" | :singularize }} // => "book"
###
Walrus.Filters.add 'singularize', singularize
