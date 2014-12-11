(function (){

angular.module('app', ['ngRoute', 'ngTouch', 'ngTouch','ngAnimate'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'html/home-view.html',
        controller: 'contactBookController'
      }).
      when('/add-contact', {
        templateUrl: 'html/add-contact.html',
        controller: 'contactBookController'
      }).
       when('/view-contact', {
        templateUrl: 'html/view-contact.html',
        controller: 'contactBookController'
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


