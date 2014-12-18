describe('UT: validating add contact inputs', function() {
    
	var scope;
  	var ctrl;
  	var $httpBackend;
    beforeEach(module('ngTouch'));
    beforeEach(module('app'));
   
	 beforeEach(inject(function($rootScope, $controller, _ContactsDataService_, _$q_) {
    	scope = $rootScope.$new();
    	$q = _$q_
    	ctrl = $controller('contactBookController', {$scope: scope});
    	ctrl.newContact.noNameError = false;
    	ctrl.newContact.info = {
		  name: '',
		  email: '',
		  address: '',
		  phone: '',
		  category: 'Family',
		  _id: undefined
		};
		ContactsDataService = _ContactsDataService_;
		sinon.stub(ContactsDataService, 'addContact', function () {
			var deferred = $q.defer();
			deferred.resolve('resolved');
			return deferred.promise;
		});
  	 }));

	/*describe('testing intial values', function() {
	   it('the function should not be called and error should be false', function() { 
	   		expect(ctrl.newContact.noNameError).to.equal(false); 
	   		expect(ContactsDataService.addContact.callCount).to.equal(0);
	   	});
	 });

	describe('handling no name input', function() {
	   it('error should be true, function should not be called', function() { 
	   		ctrl.newContact.addContact(ctrl.newContact.info);
	   		expect(ctrl.newContact.noNameError).to.equal(true); 
	   		expect(ContactsDataService.addContact.callCount).to.equal(0);
	   	});
	 });

	describe('calling add function with name input', function() {
	   it('error should be false, function should be called', function() { 
	   		ctrl.newContact.info.name = "Ryan";
	   		ctrl.newContact.addContact(ctrl.newContact.info);
	   		expect(ctrl.newContact.noNameError).to.equal(false); 
	   		expect(ContactsDataService.addContact.callCount).to.equal(1);
	   	});
	 });
*/

});

