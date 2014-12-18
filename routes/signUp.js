(function () {
var User = require('./userModel'); 
var UserContacts = require('./contactsModel'); 
var bcrypt = require('bcrypt');

var trySignUp = {};

trySignUp.checkForUser = function (req, res) {
 console.log('sign up user');
 console.log(req.body);
 User.findOne({ 'username' :  req.body.newUser.username }, function(err, user) {
  trySignUp.handleCheckForUserResponse(req, res, err, user);
  });
};

trySignUp.handleCheckForUserResponse = function (req, res, err, user) {
    // In case of any error, return using the done method
    if (err){
        console.log('Error in SignUp: '+err);
        res.send(err);
    }
    // already exists
    if (user) {
        console.log('User already exists with username: '+req.body.newUser.username);
        res.send("duplicate user")
     } 
     else {
      trySignUp.createHash(req, res);
     }

};

  trySignUp.createHash = function (req, res) {
   bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.newUser.password, salt, function(err, hash) {
          trySignUp.createUser(req, res, err, hash);
        });
   });
  };

  trySignUp.createUser= function (req, res, err, hash) {
          if (err) throw err;
          console.log(hash);
          var newUser = new User({ username: req.body.newUser.username, password: hash});
          newUser.save(function (err, newUser) {
            trySignUp.handleCreateUserResponse(req, res, err, newUser);
          });
  };

  trySignUp.handleCreateUserResponse = function (req, res, err, newUser) {
          if (err) {
            console.log(err);
            res.send('could not add contact');
          }
          else {
            console.log(newUser);
            trySignUp.createUserDoc(req, res, err, newUser);
          }
  };


  trySignUp.createUserDoc = function(req, res, err, newUser) {
    console.log(newUser);
    var userDoc = new UserContacts({ username: newUser.username, contacts: []});
    userDoc.save(function (err, userDoc) {
      trySignUp.handleCreateUserDocResponse(req, res, err, newUser, userDoc);
    });
  };
  
  trySignUp.handleCreateUserDocResponse = function(req, res, err, newUser, userDoc) {
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
        
       };

  exports.trySignUp = trySignUp;
})();

