(function (){
angular
	.module('loginCreateAccount')
	.service('checkCredsService', ['$http', checkCredsService]);
	
	
	function checkCredsService ($http) {
	  var that = this;
	  
	  this.check = function (creds) {
	    console.log('checking creds');
	    console.log(creds);
	    return $http.post("/login", {creds: creds});
	  };  
	}		


})(); 