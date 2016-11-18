console.log('team ctrl connected');

angular.module('beerCrawl')
    .controller('TeamCtrl', function($scope, $http) {
        $scope.createTeam = function(team_name, user_id){
            $http({
                url: 'http://localhost:9292/api/teams/',
                method: 'post',
                params: {team_name: team_name, user_id: user_id}
                // store active user in sessions
            }).success(function(results){
            }).error(function(err){
                console.log(err)
            })
        };
        $scope.joinTeam = function(team_name, user_id){
            $http({
                url: 'http://localhost:9292/api/users/',
                method: 'patch',
                params: {team_name: team_name, user_id: user_id}
            }).success(function(results){
            }).error(function(err){
                console.log(err)
            })
        };
    });