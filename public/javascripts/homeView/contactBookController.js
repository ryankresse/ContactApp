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
		this.orderItem = 'name';
		var that = this;
		
		
		// loading our contacts on page load.
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
		
	
		// changing the category of contacts displayed when the user clicks on one of the categories.	
		this.setCategory = function (category) {
			that.category = category;
		};




		////////// NEW CONTACT FUNCTIONALITY /////////////


		this.newContact = {};
		this.newContact.contactName = '';
		this.newContact.contactCategory = "Family";
		this.newContact.addSuccessful = false;
		this.newContact.addError = false;
		
		
		//trying to save our new contact to the db.
		this.newContact.addContact = function (name, category) {
			console.log('trying to add contact');
			console.log(name);
			console.log(category);
			ContactsDataService.addContact(name, category).then(function (data) {
			  var data = data.data;
			  console.log(data);
			  console.log('hello');
			  if (data.data === 'add successful') {
			    //if the new contact has been succesfully saved to the db, we push it to the contacts array, which will add the new contact to the view.
			    that.contacts.push(data);
		  	    console.log(that.contacts);
			  }
			  
			  else {
			    //handling errors from the server.
			    console.log('no data');
			    that.newContact.addError = true;
			    return 'add contact failure';
		  	  }
			});
		};





		////////// VIEW CONTACT FUNCTIONALITY /////////////


		this.viewContact = {};
		this.viewContact.contact = {};
		this.viewContact.editSuccessful = false;
		this.viewContact.editUnsuccessful = false;
		this.viewContact.inputNameError = false;

		// when the user clicks a contact from the home view, we need to populate the viewContact view with that contact's information.
		this.viewContact.setInfo = function (contact) {
		  console.log(contact);
		  // this clones the contact object. if we simply set it with '=', they'll refer to the same object, and our home view data will be automatically updates when the user update the viewContact view data--we only want that updated after the updates are saved to the database.
		  that.viewContact.contact = JSON.parse(JSON.stringify(contact));
		};

		// saving the user's edits in the database
		this.viewContact.saveEdits = function () {
		  var i = 0;
		  var len = that.contacts.length;
		  console.log('trying to save edits');
		  console.log(that.viewContact.contact);		
		  
		  // we don't allow contacts without names
		  if (that.viewContact.contact.name.length === 0) {
		    console.log('input name error');
		    that.viewContact.inputNameError = true;
		    return;
		  }


		  ContactsDataService.editContact(that.viewContact.contact).then(function (data) {
		    console.log(data);
			// if the updates have been saved successfully, we update that contact's information in our contacts array, which will update the view.
			if (data.data === "edit successful") {
			  console.log('edit successful');
			  for ( ; i < len; i++) {
			  	if (that.viewContact.contact._id === that.contacts[i]._id) {
			  	  that.contacts[i] = that.viewContact.contact;
			  	  break;
			  	}
			  }
			}
			else {
				// handling errors from the server.
		  	  console.log('no data');
			  that.newContact.editUnsuccessful = true;
			}
			
		  });
		};


	

	}



			

	




})(); 

