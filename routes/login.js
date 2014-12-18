(function (req, res) {
  var User = require('./userModel'); 
  var bcrypt = require('bcrypt');

  var tryLogin = {};

  tryLogin.init = function (req, res) {
    console.log('trying login');
    //console.log(req.body);
  
    User.findOne({ 'username' :  req.body.creds.username}, function (err, user) {
      tryLogin.handleFindOneResult(req, res, err, user);
    });
 };

 
tryLogin.handleFindOneResult = function (req, res, err, user) {
    if (err){
        tryLogin.sendLoginServerError(err, res);
    }
    // already exists
    else if (!user) {
       tryLogin.sendNoUserError(req, res);
     } 
     else {
        tryLogin.checkPassword(req, res, user);
     }
  };


  tryLogin.sendLoginServerError = function (err, res) {
    console.log('Error in logging in: '+err);
    res.send('Login error');
  };

  tryLogin.sendNoUserError = function (req, res) {
     console.log('User does not exist '+req.body.creds.username);
     res.send("No user found");
  };
  
  tryLogin.checkPassword = function (req, res, user) {
    bcrypt.compare(req.body.creds.password, user.password, function(err, passCheck) {
        tryLogin.handlePassCheck(err, passCheck, req, res, user);
      }); 
  };


  tryLogin.handlePassCheck = function (err, passCheck, req, res, user) {
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
  }; 


 exports.tryLogin = tryLogin;
})();





