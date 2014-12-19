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


userContactsSchema.index({username: 1});
userContactsSchema.set('autoIndex', false);

var userContactsModel = mongoose.model('userContactsModel', userContactsSchema);

module.exports = userContactsModel;

