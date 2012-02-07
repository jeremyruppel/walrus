/**
 * Walrus.js 0.3.3
 * (c) 2012 Jeremy Ruppel
 * Walrus.js is freely distributable under the terms of the MIT license.
 * https://raw.github.com/jeremyruppel/walrus/master/LICENSE
 */
(function() {
  var ABBR_DAYNAMES, ABBR_MONTHNAMES, FULL_DAYNAMES, FULL_MONTHNAMES, Walrus;

  Walrus = (typeof require !== "undefined" && require !== null) && (typeof exports !== "undefined" && exports !== null) ? require('./walrus') : window.Walrus;

  /*
  TODO
  - Finish :strftime
  - Write :relativetime (better name?)
  - Write :ordinal
  */

  /*
  
  %a - The abbreviated weekday name (``Sun'')
  %A - The  full  weekday  name (``Sunday'')
  %b - The abbreviated month name (``Jan'')
  %B - The  full  month  name (``January'')
  %c - The preferred local date and time representation
  %d - Day of the month (01..31)
  %H - Hour of the day, 24-hour clock (00..23)
  %I - Hour of the day, 12-hour clock (01..12)
  %j - Day of the year (001..366)
  %m - Month of the year (01..12)
  %M - Minute of the hour (00..59)
  %p - Meridian indicator (``AM''  or  ``PM'')
  %S - Second of the minute (00..60)
  %U - Week  number  of the current year,
          starting with the first Sunday as the first
          day of the first week (00..53)
  %W - Week  number  of the current year,
          starting with the first Monday as the first
          day of the first week (00..53)
  %w - Day of the week (Sunday is 0, 0..6)
  %x - Preferred representation for the date alone, no time
  %X - Preferred representation for the time alone, no date
  %y - Year without a century (00..99)
  %Y - Year with century
  %Z - Time zone name
  %% - Literal ``%'' character
  */

  FULL_DAYNAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  ABBR_DAYNAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  FULL_MONTHNAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  ABBR_MONTHNAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  Walrus.addFilter('strftime', function(dateish, format) {
    var date;
    date = new Date(dateish);
    return format.replace(/%(a|A|b|B|c|d|H|I|m|M|p|S|w|y|Y)/g, function(input) {
      switch (input) {
        case '%a':
          return ABBR_DAYNAMES[date.getDay()];
        case '%A':
          return FULL_DAYNAMES[date.getDay()];
        case '%b':
          return ABBR_MONTHNAMES[date.getMonth()];
        case '%B':
          return FULL_MONTHNAMES[date.getMonth()];
        case '%c':
          return date.toLocaleString();
        case '%d':
          return date.getDate();
        case '%H':
          return date.getHours();
        case '%I':
          return date.getHours() % 12;
        case '%m':
          return date.getMonth() + 1;
        case '%M':
          return date.getMinutes();
        case '%p':
          return "" + (date.getHours() < 12 ? 'A' : 'P') + "M";
        case '%S':
          return date.getSeconds();
        case '%w':
          return date.getDay();
        case '%y':
          return date.getFullYear().toString().slice(-2);
        case '%Y':
          return date.getFullYear();
      }
    });
  });

}).call(this);
