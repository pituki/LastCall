/* Author: Pituki */
var LastCall = function(){
  var index = 0;
  this.register = function(success){
    var i = index++;
    return function(){
      if(i==index-1){
        return success.apply(this, Array.prototype.slice.call(arguments) );
      } else {
        return;
      }
    };
  };
};
