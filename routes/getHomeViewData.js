var mongoose = require('mongoose');
 

 var contactSchema = mongoose.Schema({
      name: String,
      category: String
    });
    


exports.get = function (req, res) {
  db = mongoose.connection;
  mongoose.connect('mongodb://localhost/mydb');
  
  db.on('error', console.error.bind(console, 'connection error:'));
  
  db.once('open', function callback () {
    console.log('connected to database');
    
   
    var contacts = mongoose.model('contacts', contactSchema);

    contacts.find(function (err, contacts) {
      if (err) return console.error(err);
      console.log(contacts);
      res.send(contacts);
    });

  });

}




