describe('Testing add contact controller', function() {
    
	var scope;
  	var ctrl;
  	var $httpBackend;
    var ContactsDataService;
    beforeEach(module('ngTouch'));
    beforeEach(module('app'));
	   
	 beforeEach(inject(function($rootScope, $controller, _$q_, _ContactsDataService_) {
       scope = $rootScope.$new();
       ctrl = $controller('contactBookController', {$scope: scope});
       ContactsDataService = _ContactsDataService_;
       $q = _$q_;
  	 }));

	describe('UT: addContacts()', function() {
	  it('should push a contact to the contacts array when it is called and receiveds data in return', function(done) { 
	    ctrl.contacts = [];
	    
	    var loadStub = sinon.stub(ContactsDataService, "loadData");
	    var loaddefer = $q.defer();
	    loadStub.returns(loaddefer.promise);
	    loaddefer.resolve({data: {
	   	  	  name: "Contact Name",
	   	  	  category: "Contact Category"
	   	  	}});

	    var successStub = sinon.stub(ContactsDataService, "addContact", function (name, category) {
	   	  
	   	  var deferred = $q.defer();

	   	  var data = {
	   	    data: {
	   	  	  name: "Contact Name",
	   	  	  category: "Contact Category"
	   	  	}
	   	  };
	   	 
	   	  	deferred.resolve(data);
	   	  
	   	  return deferred.promise;

	   	});

	   expect(ctrl.contacts).to.have.length(0);
	   ctrl.newContact.addContact('johnn', 'family');
	   scope.$apply();
	   expect(ctrl.contacts).to.have.length(1);
	   //expect(ctrl.category).to.equal('Family');
	   //expect(ctrl.success).to.equal(true); 
	   ContactsDataService.addContact.restore();
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

