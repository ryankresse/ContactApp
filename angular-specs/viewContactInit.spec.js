describe('UT: viewContact.init()', function() {
    
	var scope;
  	var ctrl;
  	var $httpBackend;
    beforeEach(module('ngTouch'));
    beforeEach(module('app'));
   
	 beforeEach(inject(function($rootScope, $controller, _$timeout_, _$location_) {
    	scope = $rootScope.$new();
    	ctrl = $controller('contactBookController', {$scope: scope});
    	$location = _$location_;
    	sinon.stub($location, "path", function (){});
    	var contact = {name: "Ryan"};
  	 	ctrl.viewContact.init(contact);
  	 }));

	describe('testing that it sets the view contact correctly', function() {
	   it('viewContact should equal the object passed in', function() { 
	   		 expect(ctrl.viewContact.contact.name).to.equal("Ryan");
	   		 expect($location.path.callCount).to.equal(1);
	   	});
	 });

	

});

