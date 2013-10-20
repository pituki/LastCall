LastCall
========
[![Build Status](https://travis-ci.org/pituki/LastCall.png)](https://travis-ci.org/pituki/LastCall)

Tool for asynchronous javascript calls. To be used when there are multiple callbacks to be registered and only the last one needs to be called.

### Branches  
We are setting up branches that are library specific that will implement based on the needs of that library. This is currently very early in development.  

1. [Backbone.js Branch](https://github.com/pituki/LastCall/tree/feature-backbone)


Basic Example:

```
var lastCall = new LastCall();

// functions 
var log = function(x){
  console.log("log "+x);
}
var greet = function(y, z){
  console.log(""+y+" was "+ z);
}


var l = lastCall.register(log);

l("yep"); // will log 'log yep' because it was registered last

var g = lastCall.register(greet);

l("yep"); // will not execute log
g("alex","here");  // will log 'alex was here' because it was registered last
l("yep");// will not execute log

```