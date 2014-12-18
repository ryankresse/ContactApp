(function (){
angular
	.module('app')
	.service('viewContactRedirectService', ['$location', viewContactRedirectService]);
	
	
	function viewContactRedirectService ($location) {
		
		this.check = function (contact) {
		   var path = $location.path();
		   console.log(path);
		   console.log(contact);
		   if (path === '/view-contact' && contact === '') {
		   	$location.path('/');
		  }
		};
	
		
	}		

})(); 