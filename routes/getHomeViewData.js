var mongoose = require('mongoose');
var contacts = require('./contactsModel'); 

 


exports.get = function (req, res) {
  console.log('in get function');
  

    contacts.find(function (err, results) {
      if (err) {
        console.log(err);
        res.send(err);
        //contacts.disconnect();
      
      }
      else {
        console.log(' results' , results);
        res.send(results);
        //contacts.disconnect();
      }
    });

 


}




