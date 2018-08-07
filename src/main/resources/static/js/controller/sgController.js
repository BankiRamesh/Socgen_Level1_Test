app.controller('sgController', ['$scope','$state','$http','$location','$rootScope','$filter','sgService', function($scope,$state,$http,$location,$rootScope,$filter,sgService)
	{	
	
	$scope.userName=null;
	$scope.user=null;
	$scope.pword=null;
	$scope.dob=null;
	$scope.mobileno=null;
	$scope.newUser = function () {
		if($scope.userName!=null && $scope.user!=null && $scope.pword!=null){
			sgService.createUser($scope.userName,$scope.user,$scope.pword,$scope.dob,$scope.mobileno).then(function(response) 
		{
				   $scope.data=response.data;
				   if($scope.data==null){
					   $scope.created=false;  
				   }else{
					   $scope.created=true;
					   $scope.userName=null;
						$scope.user=null;
						$scope.pword=null;
						$scope.dob=null;
						$scope.mobileno=null;
				   }  
			    });
		}
		else{
			alert("User Name & User Id & Password should not be empty");
		}
		

	}
	
	$scope.password=null;
	$scope.userid=null;
	$scope.userExitOrNot=false;
	$rootScope.hidelogin=true;
	$rootScope.hideHeader=false;
	
	$scope.login = function () {
		$scope.todayDate = new Date(); 
		$rootScope.loginuser=$scope.userid;
		if($scope.userid!=null && $scope.password!=null){
			sessionStorage.ids=0;
		sgService.loginUser($scope.userid,$scope.password).then(function(response) 
				   {
			   $scope.data=response.data;
			   if($scope.data==true){
				   $rootScope.hidelogin=false;
				   $rootScope.hideHeader=true;
			   }
			   else{
				   $scope.userExitOrNot=true;
				   $scope.userid=null;
				   $scope.password=null;
			   }
		    });
		}
		else{
			alert("Please enter the user id and password");
		}
		
	}
	$scope.logout= function () {
		 $rootScope.hidelogin=true;
		   $rootScope.hideHeader=false;
		$state.go('login');
		$rootScope.loginuser=null;
	}
	
	$scope.newOrder= function(){
		//$state.go('newOrder');
	}
	$scope.orderList= function(){
		sgService.getOrderList($rootScope.loginuser).then(function(response) 
			{
			   $scope.data=response.data;
		    });
		
	}
}]);