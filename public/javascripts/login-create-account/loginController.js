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
	  var that = this;
	
	  this.attemptLogin = function () {
	  	console.log(that.creds);
	  	checkCredsService.check(that.creds).then(function (data) {
	  		var response = data.data;
	  		if (response === "verified") {
	  			location.href = '/';
	  		}	
	  	});

	  }
	


	}



			

	




})(); 

