console.log('team ctrl connected');
angular.module('beerCrawl')
    .controller('TeamCtrl', function($scope, $http, $rootScope) {
        $scope.posts = [];
        $scope.createTeam = function(team_name, user_id){
            console.log('ay');
            $http({
                url: 'http://localhost:9292/api/teams/',
                method: 'post',
                params: {team_name: team_name, user_id: user_id}
                // store active user in sessions
            }).success(function(){
                $scope.showTeams();
                $rootScope.teamJoiner = true;
            }).error(function(err){
                console.log(err)
            })
        };
        $scope.showTeams = function(){
            $http.get('http://localhost:9292/api/teams').success(function (results) {
                $scope.posts = results;
                console.log('sucessful')
            }).error(function(err) {
                console.log('Fetch failed; it didn\'t happen');
                console.log(err);
            });
        };
        $scope.showTeams();
        $scope.showTeamJoin = function(){
            console.log('hit');
            console.log($scope.posts);
            $scope.teamJoiner = true;
        };
        $scope.joinTeam = function(team_name, user_id){
            $http({
                url: 'http://localhost:9292/api/teams/',
                method: 'patch',
                params: {team_name: team_name, user_id: user_id}
            }).success(function(results){
            }).error(function(err){
                console.log(err)
            })
        };
    });