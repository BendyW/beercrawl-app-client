console.log('event ctrl connected');

var wickerParkCenter = {
    lat: 41.909086,
    lng: -87.6778288
};
var wickerParkBars = [
    {
        name: 'The Violet Hour',
        desc: 'dope speakeasy bar thing',
        lat: '41.909086',
        lng: '-87.6778288'
    },
    {
        name: 'The Map Room',
        desc: 'lotzzz of maps',
        lat: '41.9175993',
        lng: '-87.6797941'
    },
    {
        name: 'Big Star',
        desc: 'for when ur drunk and want tacos',
        lat: '41.909172',
        lng: '-87.6771055'
    }
];
var lincolnParkCenter = {
    lat: 41.9286498,
    lng:-87.6490313
};
var lincolnParkBars = [
    {
        name: 'Kingston Mines',
        desc: 'BLueeeezzz',
        lat: '41.9286498',
        lng: '-87.6490313'
    },
    {
        name: 'Burwood Tap',
        desc: 'beer',
        lat: '41.9291918',
        lng: '-87.6475312'
    },
    {
        name: 'Halligans',
        desc: 'bro',
        lat: '41.923378',
        lng: '-87.6483013'
    }
];


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



        var mapOptions = {
            zoom: 14,
            //change center based on bar crawl location
            center: new google.maps.LatLng(lincolnParkCenter.lat, lincolnParkCenter.lng),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();
        var createMarker = function (info) {

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.lng),
                title: info.name
            });

            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);
            };


            for (var i = 0; i < lincolnParkBars.length; i++){
                createMarker(lincolnParkBars[i]);
            }
            $scope.openInfoWindow = function(e, selectedMarker){
                e.preventDefault();
                google.maps.event.trigger(selectedMarker, 'click');
            }

    });
