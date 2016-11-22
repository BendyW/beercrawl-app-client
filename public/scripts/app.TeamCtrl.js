console.log('team ctrl connected');
angular.module('beerCrawl')
    .controller('TeamCtrl', function($scope, $http, $rootScope) {
        $scope.posts = [];
        $scope.createTeam = function(team_name){
            $http({
                url: 'http://localhost:9292/api/teams/',
                method: 'post',
                params: {team_name: team_name, user_id: $rootScope.session.user_id}
            }).success(function(results){
                console.log(results);
                $scope.showTeams();
                $rootScope.teamJoiner = true;
                $rootScope.session.team_id = results.id
                console.log($rootScope);
            }).error(function(err){
                console.log(err);
            });
        };
        $scope.showTeams = function(){
            $http.get('http://localhost:9292/api/teams').success(function (results) {
                $scope.posts = results;
            }).error(function(err) {
                console.log('Fetch failed; it didn\'t happen');
                console.log(err);
            });
        };
        $scope.showTeams();
        $scope.joinTeam = function(team_id){
            //$scope.posts[team].id
            // $scope.data = {team_id: team_id, id: $rootScope.session.user_id};
            // console.log($scope.data);
            // $http.patch('http://localhost:9292/api/users/' + $rootScope.session.user_id, $scope.data)
            //     .then(function(response){
            //         console.log(response);
            //     });
            $http({
                url: 'http://localhost:9292/api/users/' + $rootScope.session.user_id,
                method: 'patch',
                params: {team_id: team_id, id: $rootScope.session.user_id}
            }).success(function(results){

                console.log(results)
            }).error(function(err){
                console.log(err)
            })
        };
    });