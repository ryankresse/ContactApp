var mongoose = require('mongoose');

var Contact = require('./contactsModel'); 


exports.add = function (req, res) {
 console.log('trying to add contact');

    var newUser = new Contact({ name: req.body.contact.name, category: req.body.contact.category, phone: req.body.contact.phone, email: req.body.contact.email, address: req.body.contact.address});

    newUser.save(function (err, newUser) {
      if (err) {
        console.log(err);
        res.send('could not add contact');
        //Contact.disconnect();
      }
      else {
        console.log(newUser);
        res.send(newUser);
       // Contact.disconnect();
      }
    
    });

 





};



