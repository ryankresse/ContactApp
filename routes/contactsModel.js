var mongoose = require('mongoose');
 



 var contactSchema = mongoose.Schema({
 	name: String,
	category: String,
	email: String,
	phone: String,
	address: String
});


 var userContactsSchema = mongoose.Schema({
    username: String,
    contacts: [contactSchema]
});

var userContactsModel = mongoose.model('userContactsModel', userContactsSchema);

module.exports = userContactsModel;

