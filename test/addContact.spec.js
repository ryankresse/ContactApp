describe('Testing add contact', function() {
    
	var scope;
  	var ctrl;
  	var $httpBackend;
    beforeEach(module('ngTouch'));
    beforeEach(module('app'));
   
	 beforeEach(inject(function($rootScope, $controller) {
    	scope = $rootScope.$new();
    	ctrl = $controller('contactBookController', {$scope: scope});
    	ctrl.contacts = [];
  	 }));

	describe('UT: handleResponse()', function() {
	   it('contacts should be empty before we call the function', function() { 
	   		expect(ctrl.contacts).to.have.length(0); 
	   	});
	 });

	/*describe('setContacts()', function() {
	   it('contacts should be filled with the data we pass to setContacts()', function() { 
	   		ctrl.setContacts(["Ryan", "John"]);
	   		expect(ctrl.contacts).to.have.length(2); 
	   	});
	 });


	describe('checking the default category', function() {
	   it('the default category should be Family', function() { 
	   		expect(ctrl.category).to.equal('Family'); 
	   	});
	});

	describe('setCategory()', function() {
	   it('the calling the setCategory function should change the category to the category passed in to the function', function() { 
	   		ctrl.setCategory('Friends');
	   		expect(ctrl.category).to.equal('Friends'); 
	   	});
	});

	

/*
	describe('testing state of blankfield after undefined email or password', function() {
	 	 beforeEach(function() { 
	 	 	ctrl.email = undefined;
	 	 	ctrl.password = "hello";
	 	 	ctrl.createaccount();
	 	 });
	   
	   it('should be true', function() { 
	   		expect(ctrl.blankfield).to.be.true; 
	   	});
	 });


	describe('testing that it makes an http request', function() {
		beforeEach(inject(function(_$httpBackend_, _CreateAccountService_) {
	    	$httpBackend = _$httpBackend_;
	    	CreateAccountService = _CreateAccountService_;
	    	
	    	$httpBackend.expectPOST('/new-user')
	    		.respond(200, {status: 'user created'});
		     //.respond(200, {message: 'Ook.', id: 0});

	      	CreateAccountService.tryToCreate();
	      	$httpBackend.flush();
  		}));
	   	
	   	it('should send an http request', function() { 
		   $httpBackend.verifyNoOutstandingExpectation();
	       $httpBackend.verifyNoOutstandingRequest();
		});


	});


	describe('it should verify that a duplicate user has been detected', function() {
		beforeEach(inject(function(_$httpBackend_, _CreateAccountService_) {
	    	$httpBackend = _$httpBackend_;
	    	CreateAccountService = _CreateAccountService_;
	    }));
	   	
	   	it('duplicate user should be true', function() { 
			ctrl.isDuplicateUser('duplicate user');
			expect(ctrl.duplicateuser).to.be.true; 
		});
	});*/





});

