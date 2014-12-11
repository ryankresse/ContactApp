(function (){
angular
	.module('app')
	.controller('addContactController', ['$http', 'ContactsDataService',  addContactController]);
	
	
	

	function addContactController($http, ContactsDataService) {
		console.log('add contact controller');
		




		if (ContactsDataService.dataLoaded < 2) {
			ContactsDataService.loadData().then(function (results) {
				if (results === "success") {
					console.log('a success')
				}
				else {
					console.log('error');
				}
			});
		}





	}



			

	




})(); 

