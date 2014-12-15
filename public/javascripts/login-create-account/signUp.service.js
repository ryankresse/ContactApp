(function (){
angular
	.module('loginCreateAccount')
	.service('signUpService', ['$http', signUpService]);
	
	
	function signUpService ($http) {
	  var that = this;
	  
	  this.sendCreds = function (newUser) {
	    console.log('sending creds');
	    console.log(newUser);
	   return $http.post("/signUp", {newUser: newUser});
	  };  
	}		


})(); 