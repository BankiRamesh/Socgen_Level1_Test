var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login'); 

    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'login.html'
    })
    .state('newOrder', {
        url: '/newOrder',
        templateUrl: 'newOrder.html'
    })
    .state('orderList', {
        url: '/orderList',
        templateUrl: 'orderList.html'
    })
     .state('welcome', {
        url: '/welcome',
        templateUrl: 'welcome.html'
	});

});