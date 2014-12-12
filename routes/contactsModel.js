var mongoose = require('mongoose');
 

 var contactSchema = mongoose.Schema({
      name: String,
      category: String,
      email: String,
      phone: String,
      address: String
    });

var contactModel = mongoose.model('ContactModel', contactSchema);

module.exports = contactModel;

