console.log('team ctrl connected');
angular.module('beerCrawl')
    .controller('TeamCtrl', function($scope, $http, $rootScope, $location) {
        $scope.posts = [];
        $scope.createTeam = function(team_name){
            $http({
                url: 'http://localhost:9292/api/teams/',
                method: 'post',
                params: {team_name: team_name, user_id: $rootScope.session.user_id}
                // store active user in sessions
            }).success(function(response){
                console.log(response);
                $scope.showTeams();
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
            $http({
                url: 'http://localhost:9292/api/users/' + $rootScope.session.user_id,
                method: 'patch',
                params: {team_id: team_id, id: $rootScope.session.user_id}
            }).success(function(results){
                $scope.joinedTeam = true;
                console.log(results)

            }).error(function(err){
                console.log(err)
            })
        };
        $scope.showEvents = function(){
            $http.get('http://localhost:9292/api/events/').success(function (eventResults) {
                $scope.events = eventResults;
                console.log(eventResults);
                console.log('found events')
            }).error(function(err) {
                console.log('Fetch failed; it didn\'t happen');
                console.log(err);
            });
        };
        $scope.showEvents();
        $scope.joinEvent = function(event_id){
            console.log($rootScope.session);
            $http({
                url: 'http://localhost:9292/api/teams/' + $rootScope.session.team_id,
                method: 'patch',
                params: {event_id: event_id, user_id: $rootScope.session.user_id}
            }).success(function(results){
                console.log(results);
                console.log('youre here');
                $location.url('/account/event');

            }).error(function(err){
                console.log(err)
            })
        };
    });