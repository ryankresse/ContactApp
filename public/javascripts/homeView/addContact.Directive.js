(function (){
  
  angular
      .module('app')
      .directive('enabledisable', function() {
        return {
          restrict: 'EA',
          replace: false,
          scope: {
	  		name: '=name',
	  	  },
          link: function(scope, $element, attrs) {
             function enableDisable () {
             	console.log('enableDisable');
               if (scope.name.length === 0) {
               	console.log('disabling');
               		 angular.element($element).prop('disabled', true);
               }
               else {
               	console.log('enabling');
               		angular.element($element).prop('disabled', false);
               }
             }
         	enableDisable();
         	scope.$watch('name.length', function(value, oldValue) {
	   			enableDisable();
	   		});
		  }
         
       };
	});
})();