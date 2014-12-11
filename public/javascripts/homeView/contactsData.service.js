(function (){
angular
	.module('app')
	.service('ContactsDataService', ['$http', '$q', ContactsDataService]);
	
	
	function ContactsDataService ($http, $q) {
		
		this.contacts = [];
		this.dataLoaded = 0;
		var that = this;
		

		this.loadData = function () {
		  console.log('getting contacts');
		  return $http.get("/getContactData");
		};
	
		this.addContact = function (name, category) {
		  console.log('adding contact');
		  console.log(name);
		  return $http.post("/addContact", {name: name, category: category});
		};

		this.editContact = function (contact) {
		  console.log('editing contact');
		  console.log(contact);
		  return $http.post("/editContact", {contact: contact});
		};

	}		

})(); 