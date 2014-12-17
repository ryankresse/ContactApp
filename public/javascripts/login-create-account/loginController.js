(function (){
'use strict';
angular
	.module('loginCreateAccount')
	.controller('loginController', ['$location', 'checkCredsService', loginController]);
	

	function loginController ($location, checkCredsService) {
	  console.log('login controller');
		
	  this.creds = {};
	  this.creds.username = '';
	  this.creds.password = '';
	  this.invalidInput = false;
	  this.wrongCredentials = false;
	  this.serverError = false;
	  var that = this;
	
	  this.attemptLogin = function (valid) {
	  	console.log(that.creds);
	  	console.log(valid);
	  	that.invalidInput = false;
	  	that.wrongCredentials = false;
	  	that.serverError = false;
	  	if (!valid) {
	  		console.log('invalid');
	  		that.invalidInput = true;
	  		return;
	  	}
	  	checkCredsService.check(that.creds).then(function (response) {
	  		that.handleLoginResponse(response);
	  	});

	  };
		
	  this.handleLoginResponse = function (response) {
	  	var response = response.data;
	  	if (response === "verified") {
	  		that.redirect();
	  	}
	    else if (response === "pass incorrect") {
	  		that.wrongCredentials = true;
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

