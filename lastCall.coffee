lastCall = new LastCall()

# functions
log = (x) ->
 console.log "log #{x}"

greet = (y, z) ->
 console.log " #{y} was #{z}"

l = lastCall.register(log)

l("yep")

g = lastCall.register(greet)

l("yep")
g("alex","here")
l("yep")