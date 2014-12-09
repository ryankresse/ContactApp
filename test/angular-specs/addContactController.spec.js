describe('Testing add contact controller', function() {
    
	var scope;
  	var ctrl;
  	var $httpBackend;
    var ContactsDataService;
    beforeEach(module('ngTouch'));
    beforeEach(module('app'));
	   
	 beforeEach(inject(function($rootScope, $controller, _$q_, _ContactsDataService_) {
    	scope = $rootScope.$new();
    	ctrl = $controller('addContactController', {$scope: scope});
    	ContactsDataService = _ContactsDataService_;
    	$q = _$q_;
  	 }));

	/*describe('addContacts()', function() {
	   it('should send a success message and empty out the form fields when the account is succesfully created ', function(done) { 
	   		var c = 0;
	   		/*var successStub = sinon.stub(ContactsDataService, "addContact", function (name, category) {
	   			var deferred = $q.defer();
	   			if (true) {
	   				deferred.resolve('success');
	   			}
	   			c = 1;
	   			return deferred.promise;
	   			
	   		});
	   		ctrl.addContact(done);
	   		expect(ctrl.contactName).to.have.length(0);
	   		expect(ctrl.category).to.equal('Family');
	   		expect(ctrl.success).to.equal(true); 
	   		ContactsDataService.addContact.restore();
	   	});*/
	 

	
	

	

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

