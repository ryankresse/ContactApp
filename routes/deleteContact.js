var mongoose = require('mongoose');

var UserContacts = require('./contactsModel');


exports.del = function (req, res) {
  console.log('trying to delete contact');
  console.log(req.body);

   UserContacts.findOne({ 'username' :  req.session.username}, function(err, userDoc) {
  	if (err) {
  		console.log(err);
  		res.send('error editing contact');
  	}
  	else {
  		console.log(userDoc);
  		console.log(req.body.id);
      var contact = userDoc.contacts.id(req.body.id).remove();

  		userDoc.save(function(err, contacts) {
       if (err) {
        res.send('error deleting contact');
       }
       else {
         console.log(contacts);
         res.send('delete successful');
       }
     });
  

  }

  }); 
  

};



