console.log('user ctrl connected');


angular.module('beerCrawl')
    .controller('UserCtrl', function($scope, $http, $location, $rootScope) {

        $scope.createUser = function (email, user_name, password_hash) {
            $http({
                url: 'http://localhost:9292/api/users/',
                method: 'post',
                params: {email: email, user_name: user_name, password_hash: password_hash}
            }).success(function (response) {
                if(response.id !== undefined) {
                    $rootScope.session = {
                        loggedIn: true,
                        user_id: response.id,
                        user_name: response.user_name,
                        team_id: response.team_id,
                        exists: response.exists
                    }
                    console.log($rootScope.session);
                    //console.log(response);
                    $location.url('/account/registerTeam');
                }
                else{
                    $location.url('/account/register')
                    $scope.exists = true;
                    console.log($scope);
                }

            }).error(function (err) {
                console.log(err)
            })
        };
        $scope.findUser = function (user_name, password_hash) {
            console.log('hit-----');
            var data ={user_name: user_name, password_hash: password_hash}
            $http.post('http://localhost:9292/api/users/login', data )
                .then(function(response){
                    if(response.data[2][1] == true){
                        $location.url('/account/registerTeam');
                        console.log('this is response.data from find user')
                        console.log(response.data);
                        $rootScope.session = {
                            loggedIn: true,
                            user_id: response.data[4][1],
                            user_name: response.data[3][1],
                            team_id: response.data[5][1]

                        }
                    }
                    else {
                        $location.url('/account/login');
                        $rootScope.wrongPassword = true;
                        console.log('wrong password = ' + $rootScope.wrongPassword);
                        console.log($location);
                    }
                })
        };
});