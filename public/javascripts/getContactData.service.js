(function (){
angular
	.module('app')
	.service('getContactsDataService', ['$http', getContactsDataService]);
	
	
	function getContactsDataService ($http) {
		this.getData = function () {
			console.log('getting contacts');
			var data;
			return $http.get("/getContactData");
		};
	}		

})(); 