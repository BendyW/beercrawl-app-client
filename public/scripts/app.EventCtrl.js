console.log('event ctrl connected');

var wickerParkCenter = {
    lat: 41.909086,
    lng: -87.6778288
};
var wickerParkBars = [
    // {
    //     name: 'The Violet Hour',
    //     address:'1520 N Damen Ave, Chicago, IL 60622',
    //     challenge1: 'dope speakeasy bar thing',
    //     challenge2: 'lotzzz of maps',
    //     challenge3: 'lotzzz of maps',
    //     lat: '41.909086',
    //     lng: '-87.6778288'
    // },
    {
        name: 'The Map Room',
        address:'1949 N Hoyne Ave, Chicago, IL 60647',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.9175993',
        lng: '-87.6797941'
    },
    {
        name: 'Double Door',
        address:'1551 N Damen Ave, Chicago, IL 60622',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.909812',
        lng: '-87.6772703'
    },
    {
        name: 'Big Star',
        address:'1531 N Damen Ave, Chicago, IL 60622',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.909172',
        lng: '-87.6771055'
    },
    {
        name: 'Nick\'s Beer Garden',
        address:'1516 N Milwaukee Ave, Chicago, IL 60622',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.9090275',
        lng: '-87.6755526'
    },
    {
        name: 'Emporium Arcade Bar',
        address:'1366 N Milwaukee Ave, Chicago, IL 60622',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.9065508',
        lng: '-87.6717221'
    }
];
var loganSquareCenter = {
    lat: 41.9251539,
    lng: -87.699606
};
var loganSquareBars = [
    {
        name: 'Slippery Slope',
        address:'2357 N Milwaukee Ave, Chicago, IL 60647',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.9242',
        lng: '-87.7011724'
    },
    {
        name: 'Revolution',
        address:'2323 N Milwaukee Ave, Chicago, IL 60647',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.9251539',
        lng: '-87.699606'
    },
    {
        name: 'The Owl',
        address:'2521 N Milwaukee Ave, Chicago, IL 60647',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.9273108',
        lng: '-87.7061927'
    },
    {
        name: 'The Whistler',
        address:'2421 N Milwaukee Ave, Chicago, IL 60647',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.925377',
        lng: '-87.701037'
    },
    {
        name: 'Cole\'s Bar',
        address:'2338 N Milwaukee Ave, Chicago, IL 60647',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.923664',
        lng: '-87.7009998'
    }
];
var lincolnParkCenter = {
    lat: 41.9286498,
    lng:-87.6490313
};
var lincolnParkBars = [
    {
        name: 'Burwood Tap',
        address:'724 W Wrightwood Ave, Chicago, IL 60614',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.9291918',
        lng: '-87.6475312'
    },
    {
        name: 'Kingston Mines',
        address:'2548 N Halsted St, Chicago, IL 60614',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.9286498',
        lng: '-87.6490313'
    },
    {
        name: 'Halligans',
        address:'2274 N Lincoln Ave, Chicago, IL 60614',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.923374',
        lng: '-87.6461126'
    },
    {
        name: 'Irish Eyes',
        address:'2519 N Lincoln Ave, Chicago, IL 60614',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.9277631',
        lng: '-87.6516236'
    },
    {
        name: 'Delilahs',
        address:'2771 N Lincoln Ave, Chicago, IL 60614',
        challenge1: 'dope speakeasy bar thing',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.93224',
        lng: '-87.658136'
    }
];

var riverNorthCenter = {
    lat:41.8906568,
    lng: -87.6291764
};
var riverNorthBars = [
    {
        name: 'Rossi\'s',
        address:'412 N State St, Chicago, IL 60654',
        challenge1: 'yaa',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.8897633',
        lng: '-87.630389'
    },
    {
        name: 'Howl at the Moon',
        address:'26 W Hubbard St, Chicago, IL 60654',
        challenge1: 'get a bucket of something',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.8902781',
        lng: '-87.6290777'
    },
    {
        name: 'Local 22',
        address:'22 E Hubbard St, Chicago, IL 60611',
        challenge1: 'beeeer',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.8903802',
        lng: '-87.6278882'
    },
    {
        name: 'Three Dots and a Dash',
        address:'435 N Clark St, Chicago, IL 60654',
        challenge1: 'get tiki drink',
        challenge2: 'lotzzz of maps',
        challenge3: 'lotzzz of maps',
        lat: '41.89032',
        lng: '-87.6327767'
    },
    {
        name: 'Headquarters',
        address:'213 W Institute Pl, Chicago, IL 60610',
        challenge1: 'Challenge 1: play a game',
        challenge2: 'Challenge 2',
        challenge3: 'lotzzz of maps',
        lat: '41.8971809',
        lng: '-87.6352357'
    }
];

angular.module('beerCrawl')
    .controller('EventCtrl', function($scope, $http, $rootScope) {
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
        // var bars = wickerParkBars
        // var mapCenter = wickerCenter

        // document.getElementById('submit').addEventListener('click', function() {
        //     loadMap();
        // });

        var mapCenter = {
            lat: 41.8781,
            lng: -87.6298
        };

        var mapOptions = {
            zoom: 14,
            //change center based on bar crawl location
            center: new google.maps.LatLng(mapCenter.lat, mapCenter.lng),
            mapTypeId: 'terrain'
        };

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.reloadMap = function(){
        var bars, mapCenter;
        var neighborhood = document.getElementById('neighborhood').value;
        if ( neighborhood === 'WP'){
            bars = wickerParkBars;
            mapCenter = wickerParkCenter;
        }
        else if ( neighborhood === 'LS'){
            bars = loganSquareBars;
            mapCenter = loganSquareCenter;
        }
        else if ( neighborhood === 'LP'){
            bars = lincolnParkBars;
            mapCenter = lincolnParkCenter;
        }
        else if ( neighborhood === 'RN'){
            bars = riverNorthBars;
            mapCenter = riverNorthCenter;
        }
        else{
            console.log('idk what happened')
        }

        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});

        var waypoints = [];

        for (var j = 1; j < bars.length -1; j++){
            waypoints.push({location: new google.maps.LatLng(bars[j].lat, bars[j].lng),
                            stopover: true})
        }
        console.log(waypoints);
        directionsService.route({
            origin: new google.maps.LatLng(bars[0].lat, bars[0].lng),
            destination: new google.maps.LatLng(bars[4].lat, bars[4].lng),
            waypoints: waypoints,
            optimizeWaypoints: false,
            travelMode: 'WALKING'
        }, function(response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                console.log(response)
                }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });

        directionsDisplay.setMap($scope.map);

        $scope.markers = [];
        console.log($scope.markers, ' this is scope markersssssssssssssss');

        var infoWindow = new google.maps.InfoWindow();
        var createMarker = function (info) {

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.lng),
                title: info.name,
                address: info.address
            });

            marker.content = '<div class="infoWindowContent">' + info.challenge1 + '<br>' + info.challenge2 + '<br>' + info.challenge3 + '</div>';
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + '<h4>' + marker.address + '</h4>'+ marker.content);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);

            };

            for (var i = 0; i < bars.length; i++){
                createMarker(bars[i]);
            }
            $scope.openInfoWindow = function(e, selectedMarker){
                e.preventDefault();
                google.maps.event.trigger(selectedMarker, 'click');
            };

            console.log($scope.markers)
        }



    });
