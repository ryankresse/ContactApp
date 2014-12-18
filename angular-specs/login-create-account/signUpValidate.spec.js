describe('UT: validate signup credentials', function() {
    
	var scope;
  	var ctrl;
  	var $httpBackend;
    beforeEach(module('ngTouch'));
    beforeEach(module('loginCreateAccount'));
   
	 beforeEach(inject(function($rootScope, $controller, _signUpService_) {
    	scope = $rootScope.$new();
    	ctrl = $controller('signUpController', {$scope: scope});
    	signUpService = _signUpService_;
    	sinon.stub(signUpService, 'sendCreds', function () {
			var deferred = $q.defer();
			deferred.resolve('resolved');
			return deferred.promise;
		});
    	
    	ctrl.invalidInput = false;
		ctrl.newUser = {
			username: 'rkresse53@gmail.com',
			password: '123'
		};
  	 }));

	describe('testing intial values', function() {
	   it('before user clicks login', function() { 
	   	expect(signUpService.sendCreds.withArgs({
			username: 'rkresse53@gmail.com',
			password: '123'
		}).calledOnce).to.equal(false);
			expect(ctrl.invalidInput).to.equal(false);
	   	});
	 });

	describe('invalid input handling', function() {
	   it('when function is called with invalid input', function() { 
	   		ctrl.signUp(false);
	   		expect(signUpService.sendCreds.withArgs({
				username: 'rkresse53@gmail.com',
				password: '123'
				}).calledOnce).to.equal(false);
				expect(ctrl.invalidInput).to.equal(true); 
		   	});
	 });

		describe('valid input handling', function() {
	   it('when function is called with valid input', function() { 
	   		ctrl.signUp(true);
	   		expect(signUpService.sendCreds.withArgs({
				username: 'rkresse53@gmail.com',
				password: '123'
				}).calledOnce).to.equal(true);
				expect(ctrl.invalidInput).to.equal(false); 
		   	});
	 });

	
});

