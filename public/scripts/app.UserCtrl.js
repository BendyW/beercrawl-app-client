console.log('user ctrl connected');

angular.module('beerCrawl')
    .controller('UserCtrl', function($scope, $http) {
        $scope.createUser = function(email, username, password_hash){
            $http({
                url: 'http://localhost:9292/api/users/',
                method: 'post',
                params: {email: email, username: username, password_hash: password_hash}
            }).success(function(results){
            }).error(function(err){
                console.log(err)
            })
        };
        $scope.findUser = function(username, password_hash){
            $http({
                url: 'http://localhost:9292/api/users/',
                method: 'get',
                params: {username: username, password_hash: password_hash}
            }).success(function(results){
            }).error(function(err){
                console.log(err)
            })
        };

    });