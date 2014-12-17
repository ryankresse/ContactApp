(function (){
  
  angular
      .module('loginCreateAccount')
      .directive('enabledisable', function() {
        return {
          restrict: 'EA',
          replace: false,
          scope: {
	  		username: '=username',
        password: '=password',
        valid: '=valid'
	  	  },
          link: function(scope, $element, attrs) {
             function enableDisable () {
             	console.log('enableDisable');
              console.log(scope.valid);
               if (!(scope.username) || !(scope.password)) {
               	console.log('disabling');
               		 angular.element($element).prop('disabled', true);
               }
               else {
               	console.log('enabling');
               		angular.element($element).prop('disabled', false);
               }
             }
         	
         	scope.$watch('username.length', function(value, oldValue) {	
              enableDisable();
	   		    });
          scope.$watch('password.length', function(value, oldValue) {
          enableDisable();
        });
          enableDisable();
		  }
         
       };
	});
})();