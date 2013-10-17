
function helloWorld() {
	return "Hello world!";
}
//console.log(LastCall);

describe('LastCall', function() {
	var lastCall,
		first = function(){return "first callback";},
		second = function(){return "second callback";};
	beforeEach(function() {
		lastCall = new LastCall();
	});
	it('should retun a function when registering a function', function() {
		expect(lastCall.register( first )() ).toEqual( "first callback");
	});

	it('should run callbacks when registered and called before registering next', function() {
		expect( lastCall.register( first )() ).toEqual( "first callback");
		expect( lastCall.register( second )() ).toEqual( "second callback");
	});
	
	it('should not run first callback when 2nd callback is registered', function() {
		var firstCallback = lastCall.register( first );
		expect( firstCallback() ).toEqual( "first callback");
		expect( lastCall.register( second )() ).toEqual( "second callback");
		expect( firstCallback()).toEqual( undefined );
	});

	it('should not overwrite first function when 2nd callback is registered', function() {
		var firstCallback = lastCall.register( first );
		expect( firstCallback() ).toEqual( "first callback");
		expect( lastCall.register( second )() ).toEqual( "second callback");
		expect( firstCallback()).toEqual( undefined );
		expect( first() ).toEqual( "first callback" );
	});

});