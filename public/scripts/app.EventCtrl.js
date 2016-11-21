console.log('event ctrl connected');
angular.module('beerCrawl')
    .controller('EventCtrl', function($scope, $http, uiGmapGoogleMapApi) {
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
        $scope.joinEvent = function(event_name, team_id){
            $http({
                url: 'http://localhost:9292/api/events/',
                method: 'patch',
                params: {event_name: event_name, team_id: user_id}
            }).success(function(results){
            }).error(function(err){
                console.log(err)
            })
        };
    });