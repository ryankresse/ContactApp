var User = require('./userModel'); 
var UserContacts = require('./contactsModel'); 
var bcrypt = require('bcrypt');

exports.registerUser = function (req, res) {
 console.log('sign up user');
 console.log(req.body);
 
 User.findOne({ 'username' :  req.body.newUser.username }, function(err, user) {
    // In case of any error, return using the done method
    if (err){
        console.log('Error in SignUp: '+err);
        res.send(err);
    }
    // already exists
    if (user) {
        console.log('User already exists with username: '+req.body.newUser.username);
        res.send("User already exists")
     } 
     else {
      createUser();
     }

  });
  

  function createUser () {
   bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.newUser.password, salt, function(err, hash) {
          if (err) throw err;
          console.log(hash);
          var newUser = new User({ username: req.body.newUser.username, password: hash});
          newUser.save(function (err, newUser) {
          if (err) {
            console.log(err);
            res.send('could not add contact');
            //Contact.disconnect();
          }
          else {
            console.log(newUser);


            createUserDoc(newUser);
           
           // Contact.disconnect();
          }
        
        });

     });
   });
  }

  function createUserDoc (newUser) {
    console.log(newUser);
    var userDoc = new UserContacts({ username: newUser.username, contacts: []});
    userDoc.save(function (err, userDoc) {
          if (err) {
            console.log(err);
            res.send('error creating user doc');
            //Contact.disconnect();
          }
          else {
            console.log(userDoc);
            req.session.username = newUser.username;
            res.send('user created');
           // Contact.disconnect();
          }
        
        });

  } 

};

