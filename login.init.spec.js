describe('UT: tryLogin.init()', function() {
    var login = require('../routes/login');
    var User = require('../routes/userModel');
    var chai = require('chai');
    var sinon = require('sinon');
    var mongoose = require('mongoose');
	var expect = chai.expect;
    var accountStub = sinon.stub(mongoose.Model, 'findOne', function () {return 0});

	beforeEach(function(){

    	// var mongoose = require('mongoose');
    	//sinon.stub(User.prototype.base.Model, 'findOne');
    	//var myStub3 = sinon.stub(mongoose.Model.prototype, 'findOne');
		//var myStub4 = sinon.stub(User.prototype, 'findOne');
    	var req = {
    		body: {
    			creds: 'foo'	
    		} 
    	};
    });

	describe('init', function() {
	   it('the find one function should be called', function() { 
	   		login.tryLogin.init();
	   		expect(myStub4.callCount).to.equal(1); 
	   	});
	 });

	


});

