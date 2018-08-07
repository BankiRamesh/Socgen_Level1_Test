app.controller('sgOrderController', ['$scope','$state','$http','$location','$rootScope','$filter','sgService', function($scope,$state,$http,$location,$rootScope,$filter,sgService)
	{		
	$scope.numhot=null;
	$scope.numcold=null;
	$scope.coldCoffe=false;
	$scope.hotCoffee=false;
	$scope.showBill=false;
	$scope.total=null;
	$scope.totalA=0;
	$scope.totalB=0;
	$scope.order= function(){
  if($scope.coldCoffe!=false || $scope.hotCoffee!=false ){
	  $scope.showBill=true;
	  if($scope.hotCoffee==true){
		  $scope.hotCoffeerate=10;
		  $scope.totalA=$scope.numhot*$scope.hotCoffeerate;
	  }if($scope.coldCoffe==true){
		  $scope.hotCoffeerate=12; 
		  $scope.totalB=$scope.numcold*$scope.hotCoffeerate;
	  }
	  $scope.total=$scope.totalA+$scope.totalB;
	  $scope.totalA=0;
	  $scope.totalB=0;
  }
  else{
	  $scope.showBill=false;
	  $scope.total=null;
	  alert("Please select atleat one item");
  }
 
	}
	
	 $scope.total=null;
	 $scope.cancle= function(){
		 $scope.showBill=false; 
		  $scope.total=null;
			$scope.numhot=1;
			$scope.numcold=1;
			$scope.coldCoffe=false;
			$scope.hotCoffee=false;
			$scope.custName=null;
	 }
	 
	 $scope.submit= function(){ 
		 sessionStorage.ids++;
		 $scope.id=$scope.custName+sessionStorage.ids;
		 
		 if($scope.hotCoffee==true){
			 $scope.priceHot=$scope.numhot*10;
		 }
		 else{
			 $scope.numhot=0;
			 $scope.priceHot=0;
		 }
		   if($scope.coldCoffe==true){
			   $scope.priceCold=$scope.numcold*12;
		   }
		   else{
			   $scope.numcold=0;
			   $scope.priceCold=0;
		   }
		   $scope.status="open";
		 
			sgService.saveOrder($rootScope.loginuser,$scope.id,$scope.hotCoffee,$scope.numhot,$scope.priceHot,$scope.coldCoffe,$scope.numcold,$scope.priceCold,$scope.status).then(function(response) 
					   {
				   $scope.data=response.data;
				   if($scope.data!=null){
						 $scope.showBill=false; 
						  $scope.total=null;
							$scope.numhot=1;
							$scope.numcold=1;
							$scope.coldCoffe=false;
							$scope.hotCoffee=false;
							$scope.custName=null;
							alert("Oreder placed successfully----Order ID:"+$scope.id);
							$scope.id=null;	   
				   }
				   else{
						 $scope.showBill=false; 
						  $scope.total=null;
							$scope.numhot=1;
							$scope.numcold=1;
							$scope.coldCoffe=false;
							$scope.hotCoffee=false;
							$scope.custName=null;
							$scope.id=null;
					   aleart("Order failed");
				   }
			    });
	 }
	
}]);