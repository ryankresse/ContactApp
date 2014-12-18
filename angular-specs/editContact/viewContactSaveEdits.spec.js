describe('UT: viewContact.saveEdits()', function() {
    
	var scope;
  	var ctrl;
  	var $httpBackend;
    beforeEach(module('ngTouch'));
    beforeEach(module('app'));
   
	 beforeEach(inject(function($rootScope, $controller, _ContactsDataService_, _$q_) {
    	scope = $rootScope.$new();
    	$q = _$q_
    	ctrl = $controller('contactBookController', {$scope: scope});
    	ctrl.viewContact.contact = {
		  name: 'Ryan',
		  email: '',
		  address: '',
		  phone: '',
		  category: 'Family',
		  _id: undefined
		};
		ContactsDataService = _ContactsDataService_;
		sinon.stub(ContactsDataService, 'editContact', function () {
			var deferred = $q.defer();
			deferred.resolve('resolved');
			return deferred.promise;
		});
  	 	ctrl.viewContact.saveEdits();
  	 }));

	describe('testing that the ContactsDataService function is called with the right arguments', function() {
	   it('the function should be', function() { 
	   		expect(ContactsDataService.editContact.withArgs(ctrl.viewContact.contact).calledOnce).to.equal(true);
	   	});
	 });


});

