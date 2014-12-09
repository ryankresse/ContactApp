(function (){
angular
	.module('app')
	.service('ContactsDataService', ['$http', '$q', ContactsDataService]);
	
	
	function ContactsDataService ($http, $q) {
		
		this.contacts = [];
		var that = this;	
		this.dataLoaded = 0;

		this.loadData = function () {
			console.log('getting contacts');
			var deferred = $q.defer();
			$http.get("/getContactData")
			.success(function (results) {
				console.log(results);
				that.contacts = results;
				console.log(that.contacts);
				deferred.resolve('success');
			})
			.error(function (results) {
				deferred.resolve('error');
			});
			that.dataLoaded += 1;
			return deferred.promise;

		};
	
		this.addContact = function (name, category) {
			console.log('adding contact');
			console.log(name);
			var deferred = $q.defer();
			$http.post("/addContact", {name: name, category: category})
			.success(function (results) {
				var newContact = {name: name, category: category};
				that.contacts.push(newContact);
				deferred.resolve('success');
			})
			.error(function (results) {
				deferred.resolve('error');
			});

			return deferred.promise;

		};

	}		

})(); 