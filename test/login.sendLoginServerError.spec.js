describe('UT: ryLogin.sendLoginServerError()', function() {
    var login = require('../routes/login');
    var tryLogin = login.tryLogin;
    var chai = require('chai');
    var sinon = require('sinon');
    var mongoose = require('mongoose');
	var expect = chai.expect;
    var bcrypt = require('bcrypt');
    var req;
    var res = {
        send : function (err, response) {}
    };
    beforeEach(function(){
        sinon.stub(bcrypt, 'compare', function () {});
        
    });
       

	describe('testing that res.send is called with right arguments', function() {
	   it('send should send "Login error', function(done) { 
            tryLogin.checkPassword(); 
            done();
            expect(bcrypt.compare.calledOnce).to.equal(true); 
	   	});
	 });



});

