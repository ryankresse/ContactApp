describe('UT: tryLogin.handleFindOneResult()', function() {
    var login = require('../routes/login');
    var tryLogin = login.tryLogin;
    var User = require('../routes/userModel');
    var chai = require('chai');
    var sinon = require('sinon');
    var mongoose = require('mongoose');
	var expect = chai.expect;
    var bcrypt = require('bcrypt');
    var req,
        res;
        sinon.stub(tryLogin, 'sendLoginServerError', function () {});
        sinon.stub(tryLogin, 'sendNoUserError', function () {});
        sinon.stub(tryLogin, 'checkPassword', function () {});
	beforeEach(function(){
        
    });

	describe('testing server error', function() {
	   it('sendLoginServerError should be called', function() { 
	   		tryLogin.handleFindOneResult(req, res, true, true);
            expect(tryLogin.sendLoginServerError.callCount).to.equal(1); 
	   	});
	 });


    describe('testing no user error', function() {
       it('no user error should be called', function() { 
            tryLogin.handleFindOneResult(req, res, false, false);
            expect(tryLogin.sendNoUserError.callCount).to.equal(1); 
        });
     });

     describe('testing that check password is called', function() {
       it('it should be called', function() { 
            tryLogin.handleFindOneResult(req, res, false, true);
            expect(tryLogin.checkPassword.callCount).to.equal(1); 
        });
     });

	


});

