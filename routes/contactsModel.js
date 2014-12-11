var mongoose = require('mongoose');
 

 var contactSchema = mongoose.Schema({
      name: String,
      category: String
    });

var contactModel = mongoose.model('ContactModel', contactSchema);

module.exports = contactModel;

