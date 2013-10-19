var LastCall = LastCall || {};

LastCall = function() {

  if ( !(this instanceof LastCall) )
    return new LastCall();

  var index = 0;
  /*
  register will return a function, this function when executed will execute the function sent as a parameter.
  when register gets executed multiple times, previous callbacks will not execute only the last registered callback
  */
  var register = function(success) {
    var iterate = index++;

    return function() {
      if (iterate == index - 1) {
        var args = Array.prototype.slice.call(arguments);
        return success.apply(this, args);
      } else {
        return;
      }
    };
  };
  /*
  invalidateLast will last callback to return undefined.
  */
  var invalidateLast = function(){ 
      return index++;  
  };

  return {
    register: register,
    invalidateLast: invalidateLast
  };

};
