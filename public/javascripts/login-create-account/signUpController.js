(function (){
'use strict';
angular
	.module('loginCreateAccount')
	.controller('signUpController', ['$location', 'signUpService', signUpController]);
	

	function signUpController ($location, signUpService) {
	  console.log('sign up controller');
		
	  this.newUser = {};
	  this.newUser.username = '';
	  this.newUser.password = '';
	  this.invalidInput = false;
	  this.serverError = false;
	  this.duplicateUser = false;
	  var that = this;
	
	  this.signUp = function (valid) {
	  	that.invalidInput = false;
	  	that.serverError = false;
	  	that.duplicateUser = false;
	  	if (!valid) {
	  		that.invalidInput = true;
	  		console.log('invalid');
	  		return;
	  	}
	  	console.log(that.newUser);
	  	signUpService.sendCreds(that.newUser).then(function (response){
	  		that.handleSignUpResponse(response);
		});
	  };

	  this.handleSignUpResponse = function (response) {
		var response = response.data;
	  	if (response === "user created") {
	  		that.redirect();
	  	}
	  	else if (response === "duplicate user") {
	  		that.duplicateUser = true;
	  	}
	  	else {
	  		that.serverError = true;
	  	}
	  };

	  this.redirect = function () {
	  	location.href = '/';
	  };

	}



			

	




})(); 

