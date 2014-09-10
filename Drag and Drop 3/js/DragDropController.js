angular.module("DragDropController" , [] )


.controller ('DragController', ['$scope', function ($scope){

	  $scope.cnt = 0;

	  if(localStorage.getItem(["local2"])){
		$scope.imgs = JSON.parse(localStorage.getItem(["local2"]));
	
	}

	else{

	$scope.imgs = [{
			id: 0,
			url: "imgs/1.png"
			
		},
		{
			id:1,
			url:"imgs/3.png"
			
		},

		{
			id:2,
			url:"imgs/2.png"
			
		},
		{
			id:3,
			url:"imgs/5.png"
			
		},
		{
			id:4,
			url:"imgs/6.png"
			
		},
		{
			id:5,
			url:"imgs/4.png"
			
		}
	];
}

	if(localStorage.getItem(["local"])){
		$scope.imgs2 = JSON.parse(localStorage.getItem(["local"]));
		
	}

	else{

	$scope.imgs2 = [
		{
			id: 0,
			url:"" 
			
		},
		{
			id:1,
			url:""
			
		},

		{
			id:2,
			url:""
			
		},
		{
			id:3,
			url:""
			
		},
		{
			id:4,
			url:""
			
		},
		{
			id:5,
			url:""

			
		}
			
	]; 
	}
	
	$scope.$on('count', function(){
   $scope.cnt++;
   console.log($scope.cnt );
   if($scope.cnt === 6){
   return alert("You Win");
  }


 
 

  })

	 $scope.$on('localsto', function(){

  	localStorage.setItem("local",JSON.stringify($scope.imgs2));  
  	localStorage.setItem("local2",JSON.stringify($scope.imgs));
  	
  })


}]);
