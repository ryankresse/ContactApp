(function (){

angular.module('app', ['ngRoute', 'ngTouch', 'ngTouch','ngAnimate'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'html/home-view.html',
        controller: 'homeViewController'
      })
      /*.
      when('/save-sets', {
        templateUrl: 'save-sets.html',
        controller: 'saveSetsCtrl'
      }).
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


