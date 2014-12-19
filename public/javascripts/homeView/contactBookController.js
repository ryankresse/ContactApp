(function (){
'use strict';
angular
	.module('app')
	.controller('contactBookController', ['ContactsDataService', '$scope', '$location', '$timeout', 'viewContactRedirectService', '$rootScope', contactBookController]);
	
	// a flag we'll use to know if our data has already been loaded from the server.
	var loaded = false;

	function contactBookController (ContactsDataService, $scope, $location, $timeout, viewContactRedirectService, $rootScope) {
		console.log('contact book controller');
		
		this.contacts = [];
		this.category = "Family";
		this.loadError = false;
		this.orderItem = 'name';
		this.loadError = false;
		
		this.viewClass = '';
	

		var that = this;
		

		
			var path = $location.path();
			console.log(path);
			this.setViewClass = function () {
			if (path == '/') {
				that.viewClass = 'home-view';
			}
			else if (path == '/add-contact') {
				that.viewClass = 'add-contact-view';
			}
			else {
				that.viewClass = 'view-contact-view';
			}
			console.log(that.viewClass);
	
			};
			this.setViewClass();

		

		this.hideMessage = function (obj, msg) {
		  return $timeout(function ()  {
		  	 that[obj][msg] = false;
		  }, 2000);
		};

		
	
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
		  category: 'Family',
		  _id: undefined
		};
		this.newContact.addSuccessful = false;
		this.newContact.addError = false;
		//trying to save our new contact to the db.
		

		this.newContact.addContact = function (contact) {
		  console.log('trying to add contact');
		  
		  console.log(contact);
		  ContactsDataService.addContact(contact).then(function (response) {
		    that.newContact.handleAddResponse(response);
		  });
		};

		this.newContact.handleAddResponse = function (response) {
			console.log(response);
		    var data = response.data;
		    console.log(data);
		    if (data === 'error saving contact' || data === 'error loading user doc') {
		     //handling errors from the server.
		      console.log('no data');
		      that.newContact.addError = true;
		      return 'add contact failure';
		      
		    }
		    
		    else {
		      //if the new contact has been succesfully saved to the db, we push it to the contacts array, which will add the new contact to the view.
		    	var dataParsed = JSON.parse(data);
		    	console.log(dataParsed);
		    	that.newContact.info._id = dataParsed;
		    	that.contacts.push(that.newContact.info);
		        console.log(that.contacts);
		        $location.path('/');
		        that.newContact.addSuccessful = true;
		        that.hideMessage('newContact', 'addSuccessful');
		        
		        that.newContact.info = {
				  name: '',
				  email: '',
				  address: '',
				  phone: '',
				  category: 'Family'
				};
		      }

		};




		////////// VIEW CONTACT FUNCTIONALITY /////////////


		this.viewContact = {};
		this.viewContact.contact = '';
		this.viewContact.editSuccessful = false;
		this.viewContact.editUnsuccessful = false;
		this.viewContact.deleteSuccessful = false;
		this.viewContact.deleteError = false;
		this.viewContact.deleteConfirm = false;

		// when the user clicks a contact from the home view, we need to populate the viewContact view with that contact's information.
		this.viewContact.init = function (contact) {
		  console.log(contact);
		  // this clones the contact object. if we simply set it with '=', they'll refer to the same object, and our home view data will be automatically updates when the user update the viewContact view data--we only want that updated after the updates are saved to the database.
		  that.viewContact.contact = JSON.parse(JSON.stringify(contact));
		  $location.path('/view-contact');
		};




		// saving the user's edits in the database
		this.viewContact.saveEdits = function () {
		 console.log('trying to save edits');
		 console.log(that.viewContact.contact);		
		 ContactsDataService.editContact(that.viewContact.contact).then(function (response) {
			that.viewContact.handleEditResponse(response);
		  });
		};


		this.viewContact.handleEditResponse = function (response) {
			 var i = 0,
			 	 len = that.contacts.length;
			// if the updates have been saved successfully, we update that contact's information in our contacts array, which will update the view.
			if (response.data === "edit successful") {
			  console.log('edit successful');
			  for ( ; i < len; i++) {
			  	if (that.viewContact.contact._id === that.contacts[i]._id) {
			  	  that.contacts[i] = that.viewContact.contact;
			  	  break;
			  	}
			  }
			that.viewContact.editSuccessful = true;
		    that.hideMessage('viewContact', 'editSuccessful');
			}
			else {
				// handling errors from the server.
		  	  console.log('no data');
			  that.viewContact.editUnsuccessful = true;
			  that.hideMessage('viewContact', 'editUnsuccessful');
			}

		};

		

		this.viewContact.showDeleteConfirm = function() {
			that.viewContact.deleteConfirm = true;
		};


		this.viewContact.hideDeleteConfirm = function() {
			that.viewContact.deleteConfirm = false;
		};
		
		this.viewContact.deleteContact = function () {
		  
		  console.log('deleting contact');
		  ContactsDataService.deleteContact(that.viewContact.contact._id).then(function (response) {
		   	that.viewContact.handleDeleteResponse(response);
		  });
		};

		this.viewContact.handleDeleteResponse = function (response) {
			var i = that.contacts.length - 1;
		  //if the contact has been deleted successfully in the db, we delete it from the contacts array, which will update the view.
		    if (response.data === "delete successful") {
			    for ( ; i > -1 ; i--) {
			    	if (that.viewContact.contact._id === that.contacts[i]._id) {
			    	  var deletedContact = that.contacts.splice(i, 1);
			    	  break;
			    	}
			    }

		    	$location.path('/');
		    	that.viewContact.deleteSuccessful = true;
		    	that.viewContact.deleteConfirm = false;
		    	// need to reset the view contact object.
		    	that.hideMessage('viewContact', 'deleteSuccessful');
		    }
		  	else {
		  	 that.viewContact.deleteError = true;
		  	 that.hideMessage('viewContact', 'deleteError');
		  	}
		};


		////////// LOADING DATA ON PAGE LOAD /////////////
		

		this.init = function () {
		  ContactsDataService.loadData().then(function (response) {
			that.handleLoadResponse(response);
		 });
		};

	    this.handleLoadResponse = function (response) {
		    var data = response.data;
		    console.log(data);

		    if (data === "error loading contacts") {
		    	that.loadError = true;
		    }
		    else {
		      // populating our contacts array with the contacts retrieved from the DB.
		      that.contacts = data;
		      viewContactRedirectService.check(that.viewContact.contact);
		      // setting our loaded flag to true so that we don't try to load all the data again.	  
		      loaded = true;
		    }
		};

		this.setSlide = function () {
			 if (path === "/") {
            $rootScope.slide = 'fromLeft'; 
          }
          else {
            $rootScope.slide = 'fromRight'; 
          }
		};
        // we initialize the app by loading data from the server if it hasn't been loaded already.
        if (loaded === false) {
	      this.init();
	      //this.setSlide();
        }
		//$rootScope.loaded += 1;
	}

})(); 

