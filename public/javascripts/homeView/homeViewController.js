(function (){
'use strict';
angular
	.module('app')
	.controller('contactBookController', ['ContactsDataService', '$scope', contactBookController]);
	

	function contactBookController (ContactsDataService, $scope) {
		console.log('contact book controller');
		
		this.contacts = [];
		this.category = "Family";
		this.loadError = false;
		var that = this;
		
		ContactsDataService.loadData().then(function (data) {
			var data = data.data;
			console.log(data);
			if (!data.length) {
				that.loadError = true;
				return 'no data';
			}
			else {
		  		that.contacts = data;
			}
		});
		
	
		this.setCategory = function (category) {
			that.category = category;
		};




		////////// NEW CONTACT FUNCTIONALITY /////////////


		this.newContact = {};
		this.newContact.contactName = '';
		this.newContact.contactCategory = "Family";
		this.newContact.addSuccessful = false;
		this.newContact.addError = false;
		
		

		this.newContact.addContact = function (name, category) {
			console.log('trying to add contact');
			console.log(name);
			console.log(category);
			ContactsDataService.addContact(name, category).then(function (data) {
				var data = data.data;
				console.log(data);
				console.log('hello');
				if (!data) {
					console.log('no data');
					that.newContact.addError = true;
					return 'add contact failure';
				}
				else {
		  			that.contacts.push(data);
		  			console.log(that.contacts);
		  		}
			});
		};





		////////// EDIT CONTACT FUNCTIONALITY /////////////


		this.viewContact = {};
		this.viewContact.contactName = '';
		this.viewContact.contactCategory = "Family";
		this.viewContact.editSuccessful = false;
		this.viewContact.editUnsuccessful = false;
		
		this.viewContact.setInfo = function (contact) {
		  console.log(contact);
		  that.viewContact.contactName = contact.name;
		  that.viewContact.contactCategory = contact.category;
		  
		};


		this.viewContact.saveEdits = function () {
			console.log('trying to save edits');
			/*ContactsDataService.addContact(name, category).then(function (data) {
				var data = data.data;
				console.log(data);
				console.log('hello');
				if (!data) {
					console.log('no data');
					that.newContact.addError = true;
					return 'add contact failure';
				}
				else {
		  			that.contacts.push(data);
		  			console.log(that.contacts);
		  		}
			});*/
		};


	

	}



			

	




})(); 

