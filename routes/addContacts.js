var mongoose = require('mongoose');
var UserContacts = require('./contactsModel'); 


exports.add = function (req, res) {
 console.log('trying to add contact');
 console.log(req.session.username);
 console.log(req.body);


 UserContacts.findOne({ 'username' :  req.session.username }, function(err, userDoc) {
    // In case of any error, return using the done method
    if (err){
        console.log('Error in loading user doc: '+err);
        res.send('Error loading user doc');
    }
   else {
     
      userDoc.contacts.push({name: req.body.contact.name, category: req.body.contact.category, phone: req.body.contact.phone, email: req.body.contact.email, address: req.body.contact.address});
     console.log(userDoc);
     var newContact = userDoc.contacts[userDoc.contacts.length - 1];
     console.log(newContact);
    userDoc.save(function (err, userDoc) {
          if (err) {
           console.log(err);
           res.send('error saving contact'); 
          }
          else {
            console.log(userDoc);
            console.log(newContact);
            console.log(newContact._id);
            res.send(newContact._id);
          }
    });
     }

  });
    //var contact = new Contact({user: req.session.username, name: req.body.contact.name, category: req.body.contact.category, phone: req.body.contact.phone, email: req.body.contact.email, address: req.body.contact.address});

   /* contact.save(function (err, contact) {
      if (err) {
        console.log(err);
        res.send('could not add contact');
        //Contact.disconnect();
      }
      else {
        console.log(contact);
        res.send(contact);
       // Contact.disconnect();
      }
    
    });*/

 





};



