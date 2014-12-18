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
    	ctrl.contacts = [
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
    	];

    	ctrl.viewContact.contact = {
    		name: 'Ryan',
		  	email: 'rkresse53@gmail.com',
		  	address: '',
		  	phone: '',
		  	category: 'Family',
		  	_id: '222bbb'
		};
    	
		
  	 }));

	describe('testing intial values', function() {
	   it('contacts success and failure messages should be false, contacts array email address should be empty', function() { 
	   		expect(ctrl.viewContact.editSuccessful).to.equal(false); 
	   		expect(ctrl.viewContact.editUnsuccessful).to.equal(false);
	   		expect(ctrl.contacts[1].email).to.equal(''); 
	   	});
	 });

	describe('error handling', function() {
	   it('when anything other than "edit successful", the unsuccessful message should be set to true and the contact should remain the same', function() { 
	   		ctrl.viewContact.handleEditResponse({data: 'error loading user doc'});
	   		expect(ctrl.viewContact.editUnsuccessful).to.equal(true);
	   		expect(ctrl.viewContact.editSuccessful).to.equal(false);
	   		expect(ctrl.contacts[1].email).to.equal(''); 
	   	});
	 });

	describe('success handling', function() {
	   it('with response "edit successful", the successful message should be set to true and the contact should be updated', function() { 
	   		ctrl.viewContact.handleEditResponse({data: 'edit successful'});
	   		expect(ctrl.viewContact.editUnsuccessful).to.equal(false);
	   		expect(ctrl.viewContact.editSuccessful).to.equal(true)
	   		expect(ctrl.contacts[1].email).to.equal('rkresse53@gmail.com'); 
	   	});
	 });


	describe('hide success message', function() {
	   it('editSuccessful should be false after calling hide success message', function() { 
	   		ctrl.viewContact.handleEditResponse({data: 'edit successful'});
	   		expect(ctrl.viewContact.editSuccessful).to.equal(true);
	   		ctrl.hideSuccessMessage('viewContact', 'editSuccessful');
	   		expect(ctrl.viewContact.editSuccessful).to.equal(false);
	   	});
	 });
});

