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
	  var that = this;
	
	  this.signUp = function () {
	  	console.log(that.newUser);
	  	signUpService.sendCreds(that.newUser).then(function (data){
	  		var response = data.data;
	  		if (response === "user created") {
	  			location.href = '/';
	  		}
	  	});
	  };
	


	}



			

	




})(); 

