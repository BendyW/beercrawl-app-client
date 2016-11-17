console.log('connected');

angular.module('beerCrawl', [ 'ngRoute'
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
            .when('/register', {
                templateUrl: 'ngViews/register.html',
                controller: 'UserCtrl'
            })
            .when('/login', {
                templateUrl: 'ngViews/login.html',
                controller: 'UserCtrl'
            })
            .when('/account', {
                templateUrl: 'ngViews/account.html',
                controller: 'UserCtrl'
            });
        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);