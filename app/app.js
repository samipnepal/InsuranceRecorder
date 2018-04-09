var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster', 'ui.bootstrap']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider
		.when('/home', {
			title: 'Home Page',
			templateUrl: 'directives/homePage/homePage.html',
			controller: 'homePageCtrl'
		})
        .when('/', {
            title: 'Home Page',
            templateUrl: 'directives/homePage/homePage.html',
            controller: 'homePageCtrl'
        })
		.when('/addInsurance', {
            title: 'Add Insurance',
            templateUrl:'directives/addInsurance/addInsurance.html',
            controller: 'insuranceCtrl'
        })
		.when('/expiringList', {
            title: 'Expiring Insurance List',
            templateUrl:'directives/insuranceList/insuranceList.html',
            controller: 'expiringListCtrl'
        })
        .when('/fullInsuranceList', {
            title: 'Full Insurance List',
            templateUrl:'directives/fullInsuranceList/fullInsuranceList.html',
            controller: 'fullInsuranceListCtrl'
        })
  }]);

