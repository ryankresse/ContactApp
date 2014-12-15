var User = require('./userModel'); 
var bcrypt = require('bcrypt');

exports.tryLogin = function (req, res) {
 console.log('trying login');
 console.log(req.body);
 
 User.findOne({ 'username' :  req.body.creds.username }, function(err, user) {
    // In case of any error, return using the done method
    if (err){
        console.log('Error in logging in: '+err);
        res.send('Login error');
    }
    // already exists
    if (!user) {
        console.log('User does not exist '+req.body.creds.username);
        res.send("No user found");
     } 
     else {
      checkPassword(user);
     }

  });
  

  function checkPassword (user) {
    console.log(user);
    bcrypt.compare(req.body.creds.password, user.password, function(err, passCheck) {
      if (err) {
        console.log(err);
        res.send("error checking password");
      }
     if (passCheck === true) {
       console.log('pass correct');
       req.session.username = user.username;
       console.log("user name " + req.session.username);
       res.send('verified');
       
     }
     else {
       console.log('pass incorrect');
       res.send('pass incorrect');
      
     }
   
  });  

}


};

