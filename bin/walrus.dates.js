/**
 * Walrus.js 0.4.0
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
   *  format - The format string, according to these tokens, taken directly
   *           from `man 3 strftime` (with some omissions):
   *
   *           %A    is replaced by national representation of the full weekday name.
   *
   *           %a    is replaced by national representation of the abbreviated weekday name.
   *
   *           %B    is replaced by national representation of the full month name.
   *
   *           %b    is replaced by national representation of the abbreviated month name.
   *
   *           %D    is equivalent to ``%m/%d/%y''.
   *
   *           %d    is replaced by the day of the month as a decimal number (01-31).
   *
   *           %e    is replaced by the day of month as a decimal number (1-31); single digits are
   *                      preceded by a blank.
   *
   *           %F    is equivalent to ``%Y-%m-%d''.
   *
   *           %H    is replaced by the hour (24-hour clock) as a decimal number (00-23).
   *
   *           %I    is replaced by the hour (12-hour clock) as a decimal number (01-12).
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
   *           %p    is replaced by national representation of either "ante meridiem" or "post meri-
   *                 diem" as appropriate.
   *
   *           %R    is equivalent to ``%H:%M''.
   *
   *           %r    is equivalent to ``%I:%M:%S %p''.
   *
   *           %S    is replaced by the second as a decimal number (00-60).
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
   *           %v    is equivalent to ``%e-%b-%Y''.
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
          return "\n";
        case '%p':
          if (date.getHours() > 12) {
            return 'PM';
          } else {
            return 'AM';
          }
          break;
        case '%R':
          return _this.strftime(date, '%H:%M');
        case '%r':
          return _this.strftime(date, '%I:%M:%S %p');
        case '%S':
          return pad(date.getSeconds());
        case '%T':
          return _this.strftime(date, '%H:%M:%S');
        case '%t':
          return "\t";
        case '%u':
          return date.getDay() || 7;
        case '%v':
          return _this.strftime(date, '%e-%b-%Y');
        case '%w':
          return date.getDay();
        case '%X':
          return date.toTimeString();
        case '%x':
          return date.toDateString();
        case '%Y':
          return date.getFullYear();
        case '%y':
          return date.getFullYear().toString().slice(-2);
        case '%Z':
          return date.toString().match(/\((\w+)\)/)[1] || '';
      }
    });
  });

}).call(this);
