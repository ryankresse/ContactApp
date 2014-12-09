var expect = require("chai").expect;
var homeView = require("../routes/getHomeView.js");
var getData = require("../routes/getHomeViewData.js");

describe('make sure mocha is working', function() {

	 it('should equal 4', function() { 
	   var test = homeView.test();
	   expect(test).to.equal(4); 
	 });
	
});

describe('it should query the database and populate the array with some data', function() {
	
	 it('the array length should = 2', function(done) { 
	  var testContactArray;
	  getData.get(done);
	  
	  expect(testContactArray).to.have.length(2);
	});
	
});

