/* Author: Pituki */
var lastCall = function(){
  var index = 0;
  this.register = function(success){
    var i = index++;
    return function(){
      if(i==index-1){
        success.apply(this, Array.prototype.slice.call(arguments) );
      }
    };
  };
};
