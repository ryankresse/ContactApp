(function (){

angular.module('app', ['ngRoute', 'ngTouch', 'ngTouch','ngAnimate'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'html/home-view.html',
        controller: 'homeViewController'
      }).
      when('/add-contact', {
        templateUrl: 'html/add-contact.html',
        controller: 'addContactController'
      })
      /*..
      when('/past-sets', {
        templateUrl: 'past-sets.html',
        controller: 'pastSetsCtrl'
      }).
       when('/reporting', {
        templateUrl: 'reporting.html',
        controller: 'reportingCtrl'
      })
      /*otherwise({
        redirectTo: '/phones'
      });*/
  }]);


})(); 


