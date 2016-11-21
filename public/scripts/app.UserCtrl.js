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
                $location.url('/')
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
                        console.log(response.data);
                        $rootScope.session = {
                            loggedIn: true,
                            user_id: response.data[4][1],
                            user_name: response.data[3][1]
                        }
                        $location.url('/account/home');


                        console.log($rootScope);
                    }
                    else{
                        $location.url('/account/login');
                        $scope.wrongPassword = true;
                        console.log('wrong password = '+ $scope.wrongPassword);
                        console.log($location);
                    }

            })
        };
        // $scope.logIn = function(user){
        //     user = null;
        //     console.log(user, ' --------this is user');
        //     if (user != null){ // change to if user is found
        //         $location.url('/account/home');
        //         $scope.loggedIn = true;
        //         // return false;
        //     }
        //     else if (user != null){ // password wrong
        //         $location.url('/account/login');
        //         $scope.wrongPassword = true;
        //         console.log('wrong passport = '+ $scope.wrongPassword);
        //         console.log($location);
        //         // show wrong password
        //         // return false;
        //     }
        //     else { // no user found
        //
        //         $scope.userNotFound = true;
        //         $location.url('/account/register');
        //         console.log($scope);
        //         console.log(this, ' this is is thisssssssssssss')
        //         console.log('user not found = ' + $scope.userNotFound);
        //         console.log($location);
        //         // show please register
        //
        //     }
        //}

    });