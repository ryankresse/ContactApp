describe('UT: deleteContactHandleResponse()', function() {
    
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
	   		expect(ctrl.viewContact.deleteSuccessful).to.equal(false); 
	   		expect(ctrl.viewContact.deleteError).to.equal(false);
	   		
	   	});
	 });

	describe('error handling', function() {
	   it('when anything other than "delete successful", the delete message should be set to true and the contacts array should remain the same', function() { 
	   		ctrl.viewContact.handleDeleteResponse({data: 'error deleting contact'});
	   		expect(ctrl.viewContact.deleteSuccessful).to.equal(false); 
	   		expect(ctrl.viewContact.deleteError).to.equal(true);
	   		expect(ctrl.contacts).to.have.length(2); 
	   	});
	 });


	describe('success handling', function() {
	   it('with response "edit successful", the successful message should be set to true and the contact should be updated. After calling the hideSuccessMessage, the success message should be false.', function() { 
	   		ctrl.viewContact.handleDeleteResponse({data: 'delete successful'});
	   		expect(ctrl.viewContact.deleteSuccessful).to.equal(true); 
	   		expect(ctrl.viewContact.deleteError).to.equal(false);
	   		expect(ctrl.contacts).to.have.length(1); 
	   		ctrl.hideSuccessMessage('viewContact', 'deleteSuccessful');
	   		expect(ctrl.viewContact.deleteSuccessful).to.equal(false); 
	   	});
	 });

});

