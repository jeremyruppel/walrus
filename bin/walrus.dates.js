/**
 * Walrus.js 0.3.3
 * (c) 2012 Jeremy Ruppel
 * Walrus.js is freely distributable under the terms of the MIT license.
 * https://raw.github.com/jeremyruppel/walrus/master/LICENSE
 */
(function() {
  var ABBR_DAYNAMES, ABBR_MONTHNAMES, FULL_DAYNAMES, FULL_MONTHNAMES, Walrus;

  Walrus = (typeof require !== "undefined" && require !== null) && (typeof exports !== "undefined" && exports !== null) ? require('./walrus') : window.Walrus;

  FULL_DAYNAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  ABBR_DAYNAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  FULL_MONTHNAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  ABBR_MONTHNAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  /**
   * *:strftime*
   * Formats a date into the string given by `format`. Accepts any value
   * that can be passed to `new Date( )`.
   *
   * Parameters:
   *  format - The format string, according to these tokens, taken almost directly
   *           from `man 3 strftime`:
   *
   *           %A    is replaced by national representation of the full weekday name.
   *
   *           %a    is replaced by national representation of the abbreviated weekday name.
   *
   *           %B    is replaced by national representation of the full month name.
   *
   *           %b    is replaced by national representation of the abbreviated month name.
   *
   *           %C    is replaced by (year / 100) as decimal number; single digits are preceded by a
   *                 zero.
   *
   *           %c    is replaced by national representation of time and date.
   *
   *           %D    is equivalent to ``%m/%d/%y''.
   *
   *           %d    is replaced by the day of the month as a decimal number (01-31).
   *
   *           %E* %O*
   *                 POSIX locale extensions.  The sequences %Ec %EC %Ex %EX %Ey %EY %Od %Oe %OH %OI
   *                 %Om %OM %OS %Ou %OU %OV %Ow %OW %Oy are supposed to provide alternate represen-
   *                 tations.
   *
   *                 Additionly %OB implemented to represent alternative months names (used stand-
   *                 alone, without day mentioned).
   *
   *           %e    is replaced by the day of month as a decimal number (1-31); single digits are
   *                      preceded by a blank.
   *
   *           %F    is equivalent to ``%Y-%m-%d''.
   *
   *           %G    is replaced by a year as a decimal number with century.  This year is the one
   *                 that contains the greater part of the week (Monday as the first day of the
   *                 week).
   *
   *           %g    is replaced by the same year as in ``%G'', but as a decimal number without cen-
   *                 tury (00-99).
   *
   *           %H    is replaced by the hour (24-hour clock) as a decimal number (00-23).
   *
   *           %h    the same as %b.
   *
   *           %I    is replaced by the hour (12-hour clock) as a decimal number (01-12).
   *
   *           %j    is replaced by the day of the year as a decimal number (001-366).
   *
   *           %k    is replaced by the hour (24-hour clock) as a decimal number (0-23); single dig-
   *                 its are preceded by a blank.
   *
   *           %l    is replaced by the hour (12-hour clock) as a decimal number (1-12); single dig-
   *                 its are preceded by a blank.
   *
   *           %M    is replaced by the minute as a decimal number (00-59).
   *
   *           %m    is replaced by the month as a decimal number (01-12).
   *
   *           %n    is replaced by a newline.
   *
   *           %O*   the same as %E*.
   *
   *           %p    is replaced by national representation of either "ante meridiem" or "post meri-
   *                 diem" as appropriate.
   *
   *           %R    is equivalent to ``%H:%M''.
   *
   *           %r    is equivalent to ``%I:%M:%S %p''.
   *
   *           %S    is replaced by the second as a decimal number (00-60).
   *
   *           %s    is replaced by the number of seconds since the Epoch, UTC (see mktime(3)).
   *
   *           %T    is equivalent to ``%H:%M:%S''.
   *
   *           %t    is replaced by a tab.
   *
   *           %U    is replaced by the week number of the year (Sunday as the first day of the
   *                 week) as a decimal number (00-53).
   *
   *           %u    is replaced by the weekday (Monday as the first day of the week) as a decimal
   *                 number (1-7).
   *
   *           %V    is replaced by the week number of the year (Monday as the first day of the
   *                 week) as a decimal number (01-53).  If the week containing January 1 has four
   *                 or more days in the new year, then it is week 1; otherwise it is the last week
   *                 of the previous year, and the next week is week 1.
   *
   *           %v    is equivalent to ``%e-%b-%Y''.
   *
   *           %W    is replaced by the week number of the year (Monday as the first day of the
   *                 week) as a decimal number (00-53).
   *
   *           %w    is replaced by the weekday (Sunday as the first day of the week) as a decimal
   *
   *           %X    is replaced by national representation of the time.
   *
   *           %x    is replaced by national representation of the date.
   *
   *           %Y    is replaced by the year with century as a decimal number.
   *
   *           %y    is replaced by the year without century as a decimal number (00-99).
   *
   *           %Z    is replaced by the time zone name.
   *
   *           %z    is replaced by the time zone offset from UTC; a leading plus sign stands for
   *                 east of UTC, a minus sign for west of UTC, hours and minutes follow with two
   *                 digits each and no delimiter between them (common form for RFC 822 date head-
   *                 ers).
   *
   *           %+    is replaced by national representation of the date and time (the format is sim-
   *                 ilar to that produced by date(1)).
   *
   *           %%    is replaced by `%'.
  */

  Walrus.addFilter('strftime', function(dateish, format) {
    var date, pad,
      _this = this;
    date = new Date(dateish);
    pad = function(value, to, padding) {
      if (to == null) to = 2;
      if (padding == null) padding = '0';
      if (("" + value).length < to) {
        return pad("" + padding + value, to, padding);
      } else {
        return value;
      }
    };
    return format.replace(/%(.)/g, function(input) {
      switch (input) {
        case '%a':
          return ABBR_DAYNAMES[date.getDay()];
        case '%A':
          return FULL_DAYNAMES[date.getDay()];
        case '%b':
          return ABBR_MONTHNAMES[date.getMonth()];
        case '%B':
          return FULL_MONTHNAMES[date.getMonth()];
        case '%D':
          return _this.strftime(date, '%m/%d/%y');
        case '%d':
          return pad(date.getDate());
        case '%e':
          return date.getDate();
        case '%F':
          return _this.strftime(date, '%Y-%m-%d');
        case '%H':
          return pad(date.getHours());
        case '%I':
          if (date.getHours() > 12) {
            return pad(date.getHours() - 12);
          } else {
            return pad(date.getHours());
          }
          break;
        case '%k':
          return date.getHours();
        case '%l':
          if (date.getHours() > 12) {
            return date.getHours() - 12;
          } else {
            return date.getHours();
          }
          break;
        case '%M':
          return date.getMinutes();
        case '%m':
          return pad(date.getMonth() + 1);
        case '%n':
          return 'TODO';
        case '%O':
          return 'TODO';
        case '%p':
          return 'TODO';
        case '%R':
          return 'TODO';
        case '%r':
          return 'TODO';
        case '%S':
          return 'TODO';
        case '%s':
          return 'TODO';
        case '%T':
          return 'TODO';
        case '%T':
          return 'TODO';
        case '%U':
          return 'TODO';
        case '%u':
          return 'TODO';
        case '%V':
          return 'TODO';
        case '%v':
          return 'TODO';
        case '%W':
          return 'TODO';
        case '%w':
          return 'TODO';
        case '%X':
          return 'TODO';
        case '%x':
          return 'TODO';
        case '%Y':
          return date.getFullYear();
        case '%y':
          return date.getFullYear().toString().slice(-2);
        case '%Z':
          return 'TODO';
        case '%z':
          return 'TODO';
        case '%+':
          return 'TODO';
        case '%%':
          return 'TODO';
      }
    });
  });

}).call(this);
