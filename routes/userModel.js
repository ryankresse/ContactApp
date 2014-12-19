var mongoose = require('mongoose');
 

 var userSchema = mongoose.Schema({
      username: String,
      password: String
    });


userSchema.index({username: 1});
userSchema.set('autoIndex', false);

var userModel = mongoose.model('userModel', userSchema);


module.exports = userModel;

