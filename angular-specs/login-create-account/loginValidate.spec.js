describe('UT: validate login inputs', function() {
    
	var scope;
  	var ctrl;
  	var $httpBackend;
    beforeEach(module('ngTouch'));
    beforeEach(module('loginCreateAccount'));
   
	 beforeEach(inject(function($rootScope, $controller, _checkCredsService_) {
    	scope = $rootScope.$new();
    	ctrl = $controller('loginController', {$scope: scope});
    	checkCredsService = _checkCredsService_;
    	sinon.stub(checkCredsService, 'check', function () {
			var deferred = $q.defer();
			deferred.resolve('resolved');
			return deferred.promise;
		});
    	
    	ctrl.invalidInput = false;
		ctrl.creds = {
			username: 'rkresse53@gmail.com',
			password: '123'
		};
  	 }));

	describe('testing intial values', function() {
	   it('before user clicks login', function() { 
	   	expect(checkCredsService.check.withArgs({
			username: 'rkresse53@gmail.com',
			password: '123'
		}).calledOnce).to.equal(false);
			expect(ctrl.invalidInput).to.equal(false);
	   	});
	 });

	describe('invalid input handling', function() {
	   it('when function is called with invalid input', function() { 
	   		ctrl.attemptLogin(false);
	   		expect(checkCredsService.check.withArgs({
				username: 'rkresse53@gmail.com',
				password: '123'
				}).calledOnce).to.equal(false);
				expect(ctrl.invalidInput).to.equal(true); 
		   	});
	 });

		describe('valid input handling', function() {
	   it('when function is called with valid input', function() { 
	   		ctrl.attemptLogin(true);
	   		expect(checkCredsService.check.withArgs({
				username: 'rkresse53@gmail.com',
				password: '123'
				}).calledOnce).to.equal(true);
				expect(ctrl.invalidInput).to.equal(false); 
		   	});
	 });

	
});

