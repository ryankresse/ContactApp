describe('UT: HandleLoadResponse()', function() {
    
	var scope;
  	var ctrl;
  	var $httpBackend;
    beforeEach(module('ngTouch'));
    beforeEach(module('app'));
   
	 beforeEach(inject(function($rootScope, $controller, _$timeout_) {
    	scope = $rootScope.$new();
    	ctrl = $controller('contactBookController', {$scope: scope});
    	$timeout = _$timeout_;
    	ctrl.contacts = [];		
  	 }));

	describe('testing intial values', function() {
	   it('load error should be false, contacts should be empty, and loaded should be false', function() { 
	   		var loaded = false;
	   		expect(ctrl.loadError).to.equal(false); 
	   		expect(ctrl.contacts).to.have.length(0);
	   		expect(loaded).to.equal(false); 
	   	});
	 });
	describe('error handling', function() {
	   it('when response is "error loading contacts", the error message should be set to true and the contacts array should remain the same', function() { 
	   		var loaded = false;
	   		ctrl.handleLoadResponse({data: 'error loading contacts'});
	   		expect(ctrl.loadError).to.equal(true); 
	   		expect(loaded).to.equal(false);
	   		expect(ctrl.contacts).to.have.length(0); 
	   	});
	 });

	describe('success handling', function() {
	   it('should populate the contacts array with data', function() { 
	   		var loaded = false;
	   		ctrl.handleLoadResponse({data: [ 
    			{
		        	name: 'John',
		        	email: '',
		        	address: '',
		        	phone: '',
		        	category: 'Family',
		        	_id: '111aaa'
		        },
		        {
		        	name: 'Ryan',
		        	email: '',
		        	address: '',
		        	phone: '',
		        	category: 'Family',
		        	_id: '222bbb'
		        }
    			]});
	   		expect(ctrl.loadError).to.equal(false); 
	   		expect(ctrl.contacts).to.have.length(2); 
	   	});
	 });

});

