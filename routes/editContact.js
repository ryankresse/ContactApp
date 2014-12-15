var mongoose = require('mongoose');

var UserContacts = require('./contactsModel'); 


exports.save = function (req, res) {
  console.log('trying to save edits');
  console.log(req.body);

  UserContacts.findOne({ 'username' :  req.session.username}, function(err, userDoc) {
  	if (err) {
  		console.log(err);
  		res.send('error editing contact');
  	}
  	else {
      userDoc.contacts.set(0, req.body.contact);

  		userDoc.save(function(err, contacts) {
       if (err) {
        res.send('error editing contact');
       }
       else {
         console.log(contacts);
         res.send('edit successful');
       }
     });
  

  }

  });
};



