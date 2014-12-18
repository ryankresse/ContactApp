describe('UT: handleResponse()', function() {
    
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
    	ctrl.newContact.info = {
		  name: 'John',
		  email: '',
		  address: '',
		  phone: '',
		  category: 'Family',
		  _id: undefined
		};
		ctrl.newContact.addSuccessful = false;
		ctrl.newContact.addError = false;
  	 }));

	describe('testing intial values', function() {
	   it('contacts should be empty before we call the function', function() { 
	   		expect(ctrl.contacts).to.have.length(0); 
	   	});
	 });

	describe('testing "Error loading user doc" error', function() {
	   it('should set the error indicator to true and not add anything to the contacts array', function() { 
	   		ctrl.newContact.handleAddResponse({data: 'error loading user doc'});
	   		expect(ctrl.contacts).to.have.length(0); 
	   		expect(ctrl.newContact.addError).to.equal(true);
	   		expect(ctrl.newContact.addSuccessful).to.equal(false);
	   	});
	 });

	describe('testing "error saving contact" error', function() {
	   it('should set the error indicator to true and not add anything to the contacts array', function() { 
	   		ctrl.newContact.handleAddResponse({data: 'error saving contact'});
	   		expect(ctrl.contacts).to.have.length(0); 
	   		expect(ctrl.newContact.addError).to.equal(true);
	   		expect(ctrl.newContact.addSuccessful).to.equal(false);
	   	});
	 });

	describe('testing success response with new contact id', function() {
	   it('should set the add successful message to true and add the contac to the array', function() { 
	   		ctrl.newContact.handleAddResponse({data: '"1erers"'});
	   		expect(ctrl.contacts).to.have.length(1); 
	   		expect(ctrl.newContact.addError).to.equal(false);
	   		expect(ctrl.newContact.addSuccessful).to.equal(true);
	   	});
	 });

	describe('hide success message functionality', function() {
	   it('addSuccessful should be false after calling the hide success message', function() { 
	   		ctrl.newContact.handleAddResponse({data: '"1erers"'}); 
	   		expect(ctrl.newContact.addSuccessful).to.equal(true);
	   		ctrl.hideSuccessMessage('newContact', 'addSuccessful');
	   		expect(ctrl.newContact.addSuccessful).to.equal(false);
	   	});
	 });


});

