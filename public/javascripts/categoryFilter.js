(function (){
	angular
		.module('app')
		.filter('categoryFilter', categoryFilter);


		function categoryFilter () {
			return function (contacts, category) {
				console.log(contacts);
				console.log(category);
					return contacts.filter(function (contact) {
						return contact.category === category;
					});
				}
			};
		
})(); 
