var mongoose = require('mongoose');

var contactToDelete = require('./contactsModel'); 


exports.del = function (req, res) {
  console.log('trying to delete contact');
  console.log(req.body);

  contactToDelete.findById(req.body.id).remove(function (err, deletedContact) {
    if (err) res.send(err);
    console.log(deletedContact);
    res.send('delete successful');
  }); 
  

};



