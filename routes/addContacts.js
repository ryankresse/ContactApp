var mongoose = require('mongoose');

var Contact = require('./contactsModel'); 


exports.add = function (req, res) {
 console.log('trying to add contact');
 console.log(req.body.name);
 console.log(req.body.category);


   

    var newUser = new Contact({ name: req.body.name, category: req.body.category});

    newUser.save(function (err, newUser) {
      if (err) {
        res.send(err);
        //Contact.disconnect();
      }
      else {
        res.send('success');
       // Contact.disconnect();
      }
    
    });

 





};



