console.log('event ctrl connected');

angular.module('beerCrawl')
    .controller('EventCtrl', function($scope, $http) {
        $scope.createEvent = function(event_name, bar_crawl, start_time){
            $http({
                url: 'http://localhost:9292/api/events/',
                method: 'post',
                params: {event_name: event_name, bar_crawl: bar_crawl, start_time: start_time}
                // store active user in sessions
            }).success(function(results){
            }).error(function(err){
                console.log(err)
            })
        };
        $scope.joinTeam = function(team_name, user_id){
            $http({
                url: 'http://localhost:9292/api/events/',
                method: 'patch',
                params: {team_name: team_name, user_id: user_id}
            }).success(function(results){
            }).error(function(err){
                console.log(err)
            })
        };
    });