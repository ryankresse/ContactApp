var mongoose = require('mongoose');

var EditedContact = require('./contactsModel'); 


exports.save = function (req, res) {
  console.log('trying to save edits');
  console.log(req.body);

  EditedContact.findByIdAndUpdate(req.body.contact._id, { $set: { name: req.body.contact.name, category: req.body.contact.category, email: req.body.contact.email, phone: req.body.contact.phone, address: req.body.contact.address}}, function (err, editedContact) {
    if (err) res.send(err);
    console.log(editedContact);
    res.send('edit successful');
  });
   
};



