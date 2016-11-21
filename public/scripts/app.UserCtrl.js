console.log('user ctrl connected');

angular.module('beerCrawl')
    .controller('UserCtrl', function($scope, $http, $location, $rootScope) {
        $scope.createUser = function(email, user_name, password_hash){
            $http({
                url: 'http://localhost:9292/api/users/',
                method: 'post',
                params: {email: email, user_name: user_name, password_hash: password_hash}
            }).success(function(results){
                console.log(results);
                $location.url('/');
            }).error(function(err){
                console.log(err)
            })
        };
        $scope.findUser = function(user_name, password_hash){
            console.log('hit-----');

            var data ={user_name: user_name, password_hash: password_hash}
            $http.post('http://localhost:9292/api/users/login', data )
                .then(function(response){
                    if(response.data[2][1] == true){
                        $location.url('/account/home');
                        $rootScope.loggedIn = true;
                        console.log($rootScope.loggedIn);
                        console.log(response.data);
                    }
                    else{
                        $location.url('/account/login');
                        $rootScope.wrongPassword = true;
                        console.log('wrong password = '+ $rootScope.wrongPassword);
                        console.log($location);
                    }

                })
        };
    });