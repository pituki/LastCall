
function helloWorld() {
	return "Hello world!";
}

describe('LastCall', function() {
	var lastCall,
		first = function(){return "first callback";},
		second = function(){return "second callback";},
		third = function(){return "third callback";},
		firstSpy= jasmine.createSpy("first Spy"),
		secondSpy= jasmine.createSpy("second Spy");
		
	beforeEach(function() {
		lastCall = new LastCall();
	});
	it("should call firstSpy when only registerin a function", function(){
		lastCall.register(firstSpy)();
		expect( firstSpy ).toHaveBeenCalled();
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
		expect( firstCallback() ).toEqual( undefined );
	});

	it('should not overwrite first function when 2nd callback is registered', function() {
		var firstCallback = lastCall.register( first );
		expect( firstCallback() ).toEqual( "first callback");
		expect( lastCall.register( second )() ).toEqual( "second callback");
		expect( firstCallback()).toEqual( undefined );
		expect( first() ).toEqual( "first callback" );
	});
	
	it('should overwrite 2nd callback when I call invalidateLast', function() {
		var firstCallback = lastCall.register( first );
		expect( firstCallback() ).toEqual( "first callback");
		expect( lastCall.register( second )() ).toEqual( "second callback");
		expect( firstCallback()).toEqual( undefined );
		lastCall.invalidateLast();
		expect( firstCallback()).toEqual( undefined );
	});
	it('should overwrite first function and 2nd callback when I call invalidateLast', function() {
		var firstCallback = lastCall.register( first );
		expect( firstCallback() ).toEqual( "first callback");
		var secondCallback = lastCall.register( second );
		expect( secondCallback()  ).toEqual( "second callback");
		lastCall.invalidateLast();
		expect( secondCallback()  ).toEqual( undefined );
		expect( firstCallback()).toEqual( undefined );
		lastCall.invalidateLast();
		expect( firstCallback()).toEqual( undefined );
	});
	it('should overwrite all calls except last registered call', function() {
		var firstCallback = lastCall.register( first );
		var secondCallback = lastCall.register( second );
		var thirdCallback = lastCall.register( third );
		expect( firstCallback()  ).toEqual( undefined );
		expect( secondCallback() ).toEqual( undefined);
		expect( thirdCallback()  ).toEqual( "third callback" );
		lastCall.invalidateLast();
		expect( thirdCallback()  ).toEqual( undefined );
	});
	
});
