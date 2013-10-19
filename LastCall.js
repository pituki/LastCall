var LastCall = LastCall || {};

LastCall = function() {

  if ( !(this instanceof LastCall) )
    return new LastCall();

  var index = 0;

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

  return {
    register: register
  };

};
