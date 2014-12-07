(function (){
angular
	.module('app')
	.controller('homeViewController', ['$http', 'getContactsDataService',  homeViewController]);
	
	
	

	function homeViewController ($http, getContactsDataService) {
		console.log('home view controller');
		this.letters = ['a', 'b', 'c', 'd'];
		this.contacts = [];
		this.category = "Family";
		var that = this;
		var data;
		
		this.getContacts = function () {
			getContactsDataService.getData().then(function (results) {
				data = results.data;
				console.log(data);
				that.setContacts(data);
			});
		
		};

		this.setContacts = function (data) {
			console.log(data);
			that.contacts = data;
			console.log(that.contacts);
		}

		this.getContacts();
	

		this.setCategory = function (category) {
			that.category = category;
		}


	}



			

	




})(); 

