console.log('team ctrl connected');

angular.module('beerCrawl')
    .controller('TeamCtrl', function($scope, $http, $rootScope) {
        $scope.createTeam = function(team_name){
            $http({
                url: 'http://localhost:9292/api/teams/',
                method: 'post',
                params: {team_name: team_name, user_id: $rootScope.session.user_id}
            }).success(function(results){
                console.log(results);
            }).error(function(err){
                console.log(err);
            });
        };
        $scope.joinTeam = function(team_name){
            $http({
                url: 'http://localhost:9292/api/teams/',
                method: 'post',
                params: {team_name: team_name, user_id: $rootScope.session.user_id}
            }).success(function(results){
            }).error(function(err){
                console.log(err);
            });
        };
    });