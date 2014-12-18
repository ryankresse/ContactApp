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


router.post('/signUp', signUp.trySignUp.checkForUser);
router.post('/login', login.tryLogin.init);
   

router.get('/', isAuthenticated, getHomeView.get);
router.get('/getContactData', getHomeViewData.get);
router.post('/addContact', addContacts.add);  
router.post('/editContact', editContact.save);
router.post('/deleteContact', deleteContact.del);

/* Handle Logout */
  router.get('/signout', function(req, res) {
    req.session.username = null;
    res.redirect('/index');
  });


  
  return router;
}

