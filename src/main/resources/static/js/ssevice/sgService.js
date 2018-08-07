	app.factory('sgService',sgService)
	sgService.$inject=['$http'];
			function sgService($http){
				return { 
					createUser:createUser,
					loginUser:loginUser,
					saveOrder:saveOrder,
					getOrderList:getOrderList,
					   };
					   
					   
			function createUser(userName,user,pword,dob,mobileno){  
				var  searchdata ={
						userName:userName,
						userId:user,
						password:pword,
						dob:dob,
						mobileNumber:mobileno
				            };
				return $http({
				    method: 'POST',
				    url: '/sg/user/id/',
				    data: JSON.stringify(searchdata),
				    headers: {
				        'Content-Type': 'application/json'
				    },
				    });
					};
					
					function loginUser(user,pword){  
						return $http({
						    method: 'GET',
						    url: '/sg/user/login/',
			                params:{
			                	userId:user,
			                	password:pword
			                },
						    });
							};	
							
							
							
							function saveOrder(loginuser,id,hotCoffee,numhot,priceHot,coldCoffe,numcold,priceCold,status){  
								var  searchdata ={
										loginuser:loginuser,
										id:id,
										coffeeName:[{
											 hotCoffee:hotCoffee,
											 coldCoffee:null,
											 quantity:numhot,
											 price:priceHot,
											 },
											 {
												     hotCoffee:null,
													 coldCoffee:coldCoffe,
													 quantity:numcold,
													 price:priceCold,
											 }
											 ],
										status:status
								            };
								return $http({
								    method: 'POST',
								    url: '/sg/user/order/',
								    data: JSON.stringify(searchdata),
								    headers: {
								        'Content-Type': 'application/json'
								    },
								    });
									};
									
				function getOrderList(loginuser){  
					return $http({
						 method: 'GET',
						 url: '/sg/user/getorderlist/',
						 params:{
							 loginuser:loginuser
			                },
						});
					};
			};
