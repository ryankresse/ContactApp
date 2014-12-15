var mongoose = require('mongoose');
 

 var userSchema = mongoose.Schema({
      username: String,
      password: String
    });

var userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;

