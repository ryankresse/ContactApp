describe('UT: handleLoginResponse()', function() {
    
	var scope;
  	var ctrl;
  	var $httpBackend;
    beforeEach(module('ngTouch'));
    beforeEach(module('loginCreateAccount'));
   
	 beforeEach(inject(function($rootScope, $controller, _checkCredsService_) {
    	scope = $rootScope.$new();
    	ctrl = $controller('loginController', {$scope: scope});
  		ctrl.wrongCredentials = false;
	  	ctrl.serverError = false;
		sinon.stub(ctrl, 'redirect', function () {});
  	 }));

	describe('testing incorrect password response', function() {
	   it('wrongCredentials should be true', function() { 
	   	ctrl.handleLoginResponse({data: "pass incorrect"});
	   	expect(ctrl.wrongCredentials).to.equal(true);
	   	
	   expect(ctrl.redirect.callCount).to.equal(0);
	   	});
	 });

	describe('testing server erro response', function() {
	   it('serverError should be true', function() { 
	   	ctrl.handleLoginResponse({data:"error checking password"});
	   	expect(ctrl.wrongCredentials).to.equal(false);
	   	expect(ctrl.serverError).to.equal(true);
	   	
	   expect(ctrl.redirect.callCount).to.equal(0);
	   	});
	 });

	describe('testing success response', function() {
	   it('errors should be false, path should change', function() { 
	   	ctrl.handleLoginResponse({data:"verified"});
	   	expect(ctrl.wrongCredentials).to.equal(false);
	   	expect(ctrl.serverError).to.equal(false);
	   
	   expect(ctrl.redirect.callCount).to.equal(1);
	   	});
	 });
	
		

	
});

