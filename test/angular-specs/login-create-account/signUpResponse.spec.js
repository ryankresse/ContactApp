describe('UT: handleSignUpResponse()', function() {
    
	var scope;
  	var ctrl;
  	var $httpBackend;
    beforeEach(module('ngTouch'));
    beforeEach(module('loginCreateAccount'));
   
	 beforeEach(inject(function($rootScope, $controller, _checkCredsService_) {
    	scope = $rootScope.$new();
    	ctrl = $controller('signUpController', {$scope: scope});
  		ctrl.duplicateUser = false;
	  	ctrl.serverError = false;
	  	sinon.stub(ctrl, 'redirect', function () {});
		
  	 }));

	describe('testing duplicate user response', function() {
	   it('wrongCredentials should be true', function() { 
	   	ctrl.handleSignUpResponse({data: "duplicate user"});
	   	expect(ctrl.duplicateUser).to.equal(true);
	   	expect(ctrl.serverError).to.equal(false);
	 	
	   expect(ctrl.redirect.callCount).to.equal(0);
	   	});
	 });

	describe('testing server error response', function() {
	   it('serverError should be true', function() { 
	   	ctrl.handleSignUpResponse({data:"could not add contact"});
	   	expect(ctrl.duplicateUser).to.equal(false);
	   	expect(ctrl.serverError).to.equal(true);
	   	
	   	expect(ctrl.redirect.callCount).to.equal(0);
	   	});
	 });

	describe('testing success response', function() {
	   it('errors should be false, path should change', function() { 
	   	ctrl.handleSignUpResponse({data:"user created"});
	   	expect(ctrl.duplicateUser).to.equal(false);
	   	expect(ctrl.serverError).to.equal(false);
	  
	   expect(ctrl.redirect.callCount).to.equal(1);
	   	});
	 });
	
		

	
});

