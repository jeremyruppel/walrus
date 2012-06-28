Walrus.i18n = {
  t : ( keypath, context={} ) ->
    try
      string = Walrus.Utils.keypath keypath, @[ @locale ]
      Walrus.Utils.interpolate string, context
    catch error
      throw new Error "Missing translation: #{@locale}.#{keypath}"

  locale : 'en' # default for now
  en : { }
}
