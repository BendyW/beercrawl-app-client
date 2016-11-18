console.log('user ctrl connected');

angular.module('beerCrawl')
    .controller('UserCtrl', function($scope, $http, $location, $route, $rootScope) {
        console.log($scope);
        $scope.createUser = function(email, user_name, password_hash){
            $http({
                url: 'http://localhost:9292/api/users/',
                method: 'post',
                params: {email: email, user_name: user_name, password_hash: password_hash}
            }).success(function(results){
            }).error(function(err){
                console.log(err)
            })
        };
        $scope.findUser = function(user_name, password_hash){
            $http({
                url: 'http://localhost:9292/api/users/',
                method: 'post',
                params: {username: user_name, password_hash: password_hash}
            }).success(function(results){
            }).error(function(err){
                console.log(err)
            })
        };
        $scope.logIn = function(user){
            user = null;
            console.log(user, ' --------this is user');
            if (user == null){ // change to if user is found
                $location.path('/account/home');
                console.log('log in success' + $rootScope.loggedIn);
                $rootScope.loggedIn = true;
                // return false;
            }
            else if (user != null){ // password wrong
                $rootScope.wrongPassword = true;
                console.log('wrong passport = '+ $rootScope.wrongPassword);
                $location.path('/account/login');
            }
            else { // no user found
                $rootScope.userNotFound = true;
                console.log('user not found  = ' + $rootScope.userNotFound);
                // show please register
                $location.path('/account/register');
            }
        }
    });