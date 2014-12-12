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
	
		this.addContact = function (contact) {
		  console.log('adding contact');
		  console.log(contact);
		  return $http.post("/addContact", {contact: contact});
		};

		this.editContact = function (contact) {
		  console.log('editing contact');
		  console.log(contact);
		  return $http.post("/editContact", {contact: contact});
		};


		this.deleteContact = function (id) {
		  console.log('deleting contact');
		  console.log(id);
		  return $http.post("/deleteContact", {id: id});
		};

	}		

})(); 