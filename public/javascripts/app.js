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
    }]);

       angular.module('app')
       .run(function($rootScope, $window, $location) {  
        $rootScope.slide = '';  
        $rootScope.loaded = 0;

        $rootScope.$on('$routeChangeSuccess', function() {  
            //event button to move backward  
             var path = $location.path();
             if ($rootScope.loaded > 0) {

             if (path === "/") {
            $rootScope.slide = 'fromLeft'; 
          }
          else if (path === "/add-contact"){
            $rootScope.slide = 'fromRight'; 
          }
          else if (path === "/view-contact") {
          $rootScope.slide = 'fromRight'; 
        }
      }
        $rootScope.loaded += 1;
         console.log($rootScope.loaded);
            /*$rootScope.back = function() {  
                $rootScope.slide = 'slide-right';  
                $window.history.back();  
            }  
            //event button item list to move forward  
            $rootScope.next = function() {  
                $rootScope.slide = 'slide-left';  
            }  */
        }); 
         
    });  
      /*..;
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



})(); 


