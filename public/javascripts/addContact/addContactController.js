(function (){
angular
	.module('app')
	.controller('addContactController', ['$http', 'ContactsDataService',  addContactController]);
	
	
	

	function addContactController($http, ContactsDataService) {
		console.log('add contact controller');
		
		this.success = false;
		this.category = "Friends";
		this.contactName = '';
		var that = this;




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




		this.addContact = function (name, category) {
			console.log('trying to add contact');
			console.log(name);
			console.log(category);
			ContactsDataService.addContact(name, category).then(function (results) {
				if (results === "success") {
					console.log('a success');
					that.success = true;
					that.contactName = '';
					that.category = "Family";
				}
				else {
					console.log('error');
				}
				console.log('hello');

			});
		};

	}



			

	




})(); 

