{
  "now" : 
  {
    "minus" : function( )
    {
      var now = new Date( ).getTime( );
      
      for( var i = 0; i < arguments.length; i++ )
      {
        now -= arguments[ i ];
      }
      
      return now;
    }
  },
  
  // helper methods for testing
  "seconds" : function( n ){ return n * 1000; },
  "minutes" : function( n ){ return this.seconds( n * 60 ); },
  "hours"   : function( n ){ return this.minutes( n * 60 ); },
  "days"    : function( n ){ return this.hours( n * 24 ); },
  "months"  : function( n ){ return this.days( n * 30 ); },
  "years"   : function( n ){ return this.days( n * 365 ); }
}
