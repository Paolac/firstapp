angular.module('MyDirectives', [] )
.directive("droppable", function(){


	var linker = function(scope,element) {
     
     scope.onDropComplete1 = function(data,evt){
     	//onsole.log(element);
        
      var urlOr = data.url;
      var urlFin = scope.image.url;
      scope.image.url = urlOr;
      data.url = urlFin;

      element.css('border', 'none');

       if (data.id === scope.image.id ) {
   		scope.$emit('count');
    
      }
      scope.$emit('localsto');
    }
     
  }
	
	return {
		scope:{
			image:"="
		},

		restrict:'EA',
		templateUrl:'html/dropabblespace.html',
		link: linker
	};
})