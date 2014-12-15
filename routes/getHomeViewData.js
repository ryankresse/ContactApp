var mongoose = require('mongoose');
var UserContacts = require('./contactsModel'); 
 


exports.get = function (req, res) {
  console.log('in get function');
  
  UserContacts.findOne({ 'username' :  req.session.username }, function(err, userDoc) {
      if (err) {
        console.log(err);
        res.send('error loading contacts');
        //contacts.disconnect();
      
      }
      else {
        console.log('userDoc' , userDoc);
        res.send(userDoc.contacts);
        //contacts.disconnect();
      }
    });

 


}




