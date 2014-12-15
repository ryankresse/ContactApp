var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var getHomeView = require('./getHomeView');
var getIndexPage = require('./getIndexPage');
var getHomeViewData = require('./getHomeViewData');
var addContacts = require('./addContacts');
var editContact = require('./editContact');
var deleteContact = require('./deleteContact');
var signUp = require('./signUp');
var login = require('./login');
//var passport = require('passport');

var isAuthenticated = function (req, res, next) {
  if (!req.session.username) {
    res.redirect('/index');
  }
  else {
    console.log('un '+req.session.username)
    next();
  }
}


module.exports = function(passport){

router.get('/index', getIndexPage);


router.post('/signUp', signUp.registerUser);
router.post('/login', login.tryLogin);
   

router.get('/', isAuthenticated, getHomeView.get);
router.get('/getContactData', getHomeViewData.get);
router.post('/addContact', addContacts.add);  
router.post('/editContact', editContact.save);
router.post('/deleteContact', deleteContact.del);

/* Handle Logout */
  router.get('/signout', function(req, res) {
    req.logout();
    res.redirect('/index');
  });
  /*var name,
  db = mongoose.connection;
  

  mongoose.connect('mongodb://localhost/mydb');
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function callback () {
    console.log('connected to database');
  	
  	var kittySchema = mongoose.Schema({
      name: String
    });

    kittySchema.methods.speak = function () {
      var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name"
      console.log(greeting);
    };

    
    var Kitten = mongoose.model('Kitten', kittySchema);

    var fluffy = new Kitten({ name: 'fluffy' });
    fluffy.speak();

    var silence = new Kitten({ name: 'Silence' });
    console.log(silence.name);

   fluffy.save(function (err, fluffy) {
     if (err) return console.error(err);
     fluffy.speak();
   });


   silence.save(function (err, fluffy) {
     if (err) return console.error(err);
     silence.speak();
   });

  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  });

  Kitten.findOne({ name: "fluffy" }, {name: 1, _id : 0}, function (err, kittens){
    if (err) return console.error(err);
    console.log(kittens.name);
    name = kittens.name;
  	res.render('index', { title: name });
  });




 });*/

  
  return router;
}

