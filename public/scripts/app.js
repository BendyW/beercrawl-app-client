console.log('connected');

angular.module('beerCrawl', [ 'ngRoute','angular.filter'

]).config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/', {
                templateUrl: 'ngViews/home.html',
                controller: 'HomeCtrl'
            })
            .when('/account/register', {
                templateUrl: 'ngViews/register.html',
                controller: 'UserCtrl'
            })
            .when('/account/login', {
                templateUrl: 'ngViews/login.html',
                controller: 'UserCtrl'
            })
            .when('/account/home', {
                templateUrl: 'ngViews/account.html',
                controller: 'UserCtrl'
            })
            .when('/account/registerTeam', {
                templateUrl: 'ngViews/registerTeam.html',
                controller: 'TeamCtrl'
            })
            .when('/account/team', {
                templateUrl: 'ngViews/team.html',
                controller: 'TeamCtrl'
            })
            .when('/account/event', {
                templateUrl: 'ngViews/event.html',
                controller: 'EventCtrl'
            })
            .when('/about', {
                templateUrl: 'ngViews/about.html',
                controller: 'HomeCtrl'
            });

        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);