var mongoose = require('mongoose');
 

 var contactSchema = mongoose.Schema({
      name: String,
      category: String
    });

var connection = mongoose.createConnection('mongodb://localhost/mydb');


module.exports = connection.model('contacts', contactSchema);

