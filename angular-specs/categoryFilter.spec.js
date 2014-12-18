describe('Category Filter', function() {
    
	var scope;
  	var ctrl;
    beforeEach(module('app'));
   
	 beforeEach(inject(function(_categoryFilterFilter_) {
    	categoryFilter = _categoryFilterFilter_;
  	 }));

	describe('the filter should filter the contacts passed to it using the category passed to it', function() {
	   
		var contacts = [{name: "John", category: "Family"},
						{name: "Greg", category: "Work"},
						{name: "James", category: "Friends"},
						{name: "Bob", category: "Other"},
						{name: "Sue", category: "Family"}
						];

	   it('should leave only the Friends contacts', function() { 
	   		expect(categoryFilter(contacts, "Friends")).to.have.length(1);
	   	});
	 	
	 	 it('should leave only the Family contacts', function() { 
	   		expect(categoryFilter(contacts, "Family")).to.have.length(2);
	   	});

	 });


});

