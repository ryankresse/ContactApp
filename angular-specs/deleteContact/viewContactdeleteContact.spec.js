describe('UT: viewContact.deleteContact()', function() {
    
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
		  _id: "111bbdd"
		};
		ContactsDataService = _ContactsDataService_;
		sinon.stub(ContactsDataService, 'deleteContact', function () {
			var deferred = $q.defer();
			deferred.resolve('resolved');
			return deferred.promise;
		});
  	 	ctrl.viewContact.deleteContact();
  	 }));

	describe('testing that the ContactsDataService function is called with the right arguments', function() {
	   it('the function should be', function() { 
	   		expect(ContactsDataService.deleteContact.withArgs('111bbdd').calledOnce).to.equal(true);
	   	});
	 });


});

