(function (){
	angular
		.module('app')
		.filter('categoryFilter', categoryFilter);

		// in the homeview, we display the contacts by category. We're filtering out all the contacts that don't match the user's selected category.
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
