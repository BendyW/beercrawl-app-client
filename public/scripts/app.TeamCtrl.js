console.log('team ctrl connected');
angular.module('beerCrawl')
    .controller('TeamCtrl', function($scope, $http, $rootScope, $location) {
        $scope.posts = [];
        $scope.events = [];
        $scope.createTeam = function(team_name, user_id){
            console.log('ay');
            $http({
                url: 'http://localhost:9292/api/teams/',
                method: 'post',
                params: {team_name: team_name, user_id: $rootScope.session.user_id}
                // store active user in sessions
            }).success(function(response){
                console.log(response)
                $scope.showTeams();
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
        $scope.joinTeam = function(team_name, user_id){
            $http({
                url: 'http://localhost:9292/api/teams/',
                method: 'post',
                params: {team_name: team_name, user_id: $rootScope.session.user_id}
            }).success(function(response){
                console.log(response.team_name);
                $rootScope.session.team_name = response.team_name;
                console.log($rootScope.session.user_id + ' joined team ' + $rootScope.session.team_name);
                $scope.joinedTeam = true;
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
        $scope.joinEvent = function(event_name, team_id){
            $http({
                url: 'http://localhost:9292/api/events/',
                method: 'post',
                params: {event_name: event_name}
            })
        }
    });