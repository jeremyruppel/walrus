Walrus.i18n = {
  ###*
   * the current locale key
  ###
  locale : 'en' # default for now

  ###*
   * looks up the translation at `keypath` for the current locale,
   * optionally interpolating values from `context`
  ###
  t : ( keypath, context={} ) ->
    try
      value = Walrus.Utils.keypath keypath, Walrus.i18n[ Walrus.i18n.locale ]
      if typeof value is 'string'
        Walrus.Utils.interpolate value, context
      else
        value
    catch error
      throw new Error "Missing translation: #{Walrus.i18n.locale}.#{keypath}"

  ###*
   * default en translations
   * TODO this hash should probably be opt-in, either explicitly
   * or by breaking it up and including each portion with its filter bundle
  ###
  en :
    currencies :
      symbol    : '$'
      precision : 2
      decimal   : '.'
      thousand  : ','
    dates :
      full_daynames : [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
      ]
      abbr_daynames : [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
      ]
      full_monthnames : [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ]
      abbr_monthnames : [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
      am : 'AM'
      pm : 'PM'
      distance_in_words :
        half_a_minute : 'half a minute'
        less_than_x_seconds :
          one : 'less than a second'
          other : 'less than %{count} seconds'
        less_than_x_minutes :
          one : 'less than a minute'
          other : 'less than %{count} minutes'
        x_minutes :
          one : '1 minute'
          other : '%{count} minutes'
        about_x_hours :
          one : 'about 1 hour'
          other : 'about %{count} hours'
        x_days :
          one : '1 day'
          other : '%{count} days'
        about_x_months :
          one : 'about 1 month'
          other : 'about %{count} months'
        x_months :
          one : '1 month'
          other : '%{count} months'
        about_x_years :
          one : 'about 1 year'
          other : 'about %{count} years'
        over_x_years :
          one : 'over 1 year'
          other : 'over %{count} years'
        almost_x_years :
          one : 'almost 1 year'
          other : 'almost %{count} years'

}

###*
 * Allow Walrus.Context to use the `t` method
###
Walrus.Context.t = Walrus.i18n.t
