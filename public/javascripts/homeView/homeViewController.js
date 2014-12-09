(function (){
angular
	.module('app')
	.controller('homeViewController', ['$http', 'ContactsDataService', '$scope',  homeViewController]);
	

	function homeViewController ($http, ContactsDataService) {
		console.log('home view controller');
		this.letters = ['a', 'b', 'c', 'd'];
		this.contacts = ContactsDataService.contacts;


		this.category = "Family";
		
		var that = this;
		var data;

		
		if (ContactsDataService.dataLoaded < 2) {
			ContactsDataService.loadData().then(function (results) {
				if (results === "success") {
					console.log('a success')
					console.log(that.contacts);
					that.contacts = ContactsDataService.contacts;
				}
				else {
					console.log('error');
				}
			});
		}

		

		
		this.setContacts = function (data) {
			console.log(data);
			that.contacts = data;
			console.log(that.contacts);
		};

	

		this.setCategory = function (category) {
			that.category = category;
		};


	}



			

	




})(); 

