var mongoose = require('mongoose');

var UserContacts = require('./contactsModel'); 


exports.save = function (req, res) {
  console.log('trying to save edits');
  console.log(req.body);
  if (req.body.contact === '') {
    res.send('error editing contact');
    return;
  }

  UserContacts.findOne({ 'username' :  req.session.username}, function(err, userDoc) {
  	if (err) {
  		console.log(err);
  		res.send('error editing contact');
  	}
  	else {
      var i = 0,
          len = userDoc.contacts.length;

      for ( ; i < len; i++) {
        if (userDoc.contacts[i]._id == req.body.contact._id) {
          userDoc.contacts.set(i, req.body.contact);
          break;
        }
      }
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



