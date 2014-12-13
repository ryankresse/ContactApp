(function (){
'use strict';
angular
	.module('app')
	.controller('contactBookController', ['ContactsDataService', '$scope', '$location', '$timeout', contactBookController]);
	
	// a flag we'll use to know if our data has already been loaded from the server.
	var loaded = false;

	function contactBookController (ContactsDataService, $scope, $location, $timeout) {
		console.log('contact book controller');
		
		this.contacts = [];
		this.category = "Family";
		this.loadError = false;
		this.orderItem = 'name';
		var that = this;
		
		

		function hideSuccessMessage (obj, msg) {
		  that[obj][msg] = false;
		}

		
	
		// changing the category of contacts displayed when the user clicks on one of the categories.	
		this.setCategory = function (category) {
			that.category = category;
		};




		////////// NEW CONTACT FUNCTIONALITY /////////////


		this.newContact = {};
		this.newContact.info = {
		  name: '',
		  email: '',
		  address: '',
		  phone: '',
		  category: 'Family'
		};
		this.newContact.addSuccessful = false;
		this.newContact.addError = false;
		
		//trying to save our new contact to the db.
		

		this.newContact.addContact = function (contact) {
		  console.log('trying to add contact');
		  console.log(contact);
		  ContactsDataService.addContact(contact).then(function (data) {
		    var data = data.data;
		    console.log(data);
		    if (data === 'could not add contact') {
		     //handling errors from the server.
		      console.log('no data');
		      that.newContact.addError = true;
		      return 'add contact failure';
		      
		    }
		    
		    else {
		      //if the new contact has been succesfully saved to the db, we push it to the contacts array, which will add the new contact to the view.
		    	that.contacts.push(data);
		        console.log(that.contacts);
		        $location.path('/');
		        that.newContact.addSuccessful = true;
		        $timeout(function ()  {hideSuccessMessage('newContact', 'addSuccessful')}, 2000);
		        
		        that.newContact.info = {
				  name: '',
				  email: '',
				  address: '',
				  phone: '',
				  category: 'Family'
				};
		      }
		  });
		};





		////////// VIEW CONTACT FUNCTIONALITY /////////////


		this.viewContact = {};
		this.viewContact.contact = '';
		this.viewContact.editSuccessful = false;
		this.viewContact.editUnsuccessful = false;
		this.viewContact.deleteSuccessful = false;
		this.viewContact.deleteUnsuccessful = false;
		this.viewContact.inputNameError = false;

		// when the user clicks a contact from the home view, we need to populate the viewContact view with that contact's information.
		this.viewContact.init = function (contact) {
		  console.log(contact);
		  // this clones the contact object. if we simply set it with '=', they'll refer to the same object, and our home view data will be automatically updates when the user update the viewContact view data--we only want that updated after the updates are saved to the database.
		  that.viewContact.contact = JSON.parse(JSON.stringify(contact));
		  $location.path('/view-contact');
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
			that.viewContact.editSuccessful = true;
		    $timeout(function ()  {hideSuccessMessage('viewContact', 'editSuccessful')}, 2000);
			}
			else {
				// handling errors from the server.
		  	  console.log('no data');
			  that.viewContact.editUnsuccessful = true;
			}
			
		  });
		};

		

		
		
		this.viewContact.deleteContact = function () {
		  var i = that.contacts.length - 1;
		  console.log('deleting contact');
		  ContactsDataService.deleteContact(that.viewContact.contact._id).then(function (data) {
		     console.log(data);
		  //if the contact has been deleted successfully in the db, we delete it from the contacts array, which will update the view.
		    if (data.data === "delete successful") {
		    for ( ; i > -1 ; i--) {
		    	if (that.viewContact.contact._id === that.contacts[i]._id) {
		    	  var deletedContact = that.contacts.splice(i, 1);
		    	  break;
		    	}
		    }
		    $location.path('/');
		    that.viewContact.deleteSuccessful = true;
		    $timeout(function ()  {hideSuccessMessage('viewContact', 'deleteSuccessful')}, 2000);

		  }
		  else {
		  	// handling errors from the server.
		    console.log('no delete unsuccesful');
		  }
			
		  });
		};

		////////// LOADING DATA ON PAGE LOAD /////////////
		

		this.init = function () {
		  ContactsDataService.loadData().then(function (data) {
		    
		    // 
		    var data = data.data;
		    console.log(data);
		    if (!data.length) {
		    	that.loadError = true;
		    	return 'no data';
		    }
		    else {
		      // populating our contacts array with the contacts retrieved from the DB.
		      that.contacts = data;
		    	var path = $location.path();
		      // checking to see if the user has landed on the /view-contact view. If so, we redirect them to the home view--otherwise they wouldn't have selected a contact to view, and the /view-contact view would be empty 
		  	  if (path === '/view-contact' && that.viewContact.contact === '') {
		  	    $location.path('/');
		  	    console.log('changing location');
		  	  }
		      // setting our loaded flag to true so that we don't try to load all the data again.	  
		      loaded = true;

		    }
		  
		  });
  
	    };
        
        // we initialize the app by loading data from the server if it hasn't been loaded already.
        if (loaded === false) {
	      this.init();
        }
	
	}



			

	




})(); 

