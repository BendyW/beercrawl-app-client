console.log('event ctrl connected');



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
        // $scope.joinEvent = function(event_id){
        //     $http({
        //         url: 'http://localhost:9292/api/teams/' + $rootScope.session.team_id,
        //         method: 'patch',
        //         params: {event_id: event_id}
        //     }).success(function(results){
        //         console.log(results);
        //         console.log(params);
        //     }).error(function(err){
        //         console.log(err)
        //     })
        // };

        var mapCenter = {
            lat: 41.8781,
            lng: -87.6298
        };

        var mapOptions = {
            zoom: 12,
            //change center based on bar crawl location
            center: new google.maps.LatLng(mapCenter.lat, mapCenter.lng),
            mapTypeId: 'terrain'
        };

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        $scope.markers = [];
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true, polylineOptions: {
            strokeColor: "#e9563a",
            strokeWeight: 5
        }});
        console.log(directionsDisplay.polylineOptions)

        $scope.reloadMap = function(){
            function reloadMarkers(){
                for (var i=0; i<$scope.markers.length; i++) {
                    $scope.markers[i].setMap(null);
                }
                $scope.markers = [];
            }
            reloadMarkers();
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

            // var pinColor = "FF00FF";
            // var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
            //     new google.maps.Size(150, 150),
            //     new google.maps.Point(0,0),
            //     new google.maps.Point(10, 34)
            // );

            mapOptions.zoom = 12;

            var waypoints = [];

            for (var j = 1; j < bars.length -1; j++){
                waypoints.push({location: new google.maps.LatLng(bars[j].lat, bars[j].lng),
                                stopover: true})
            }

            directionsService.route({
                origin: new google.maps.LatLng(bars[0].lat, bars[0].lng),
                destination: new google.maps.LatLng(bars[4].lat, bars[4].lng),
                waypoints: waypoints,
                optimizeWaypoints: false,
                travelMode: 'WALKING'
            }, function(response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                    // console.log(response)
                    }
                else {
                    window.alert('Directions request failed due to ' + status);
                }
            });

            directionsDisplay.setMap(null);
            directionsDisplay.setMap($scope.map);

            var infoWindow = new google.maps.InfoWindow();
            var createMarker = function (info) {
                var marker = new google.maps.Marker({
                    map: $scope.map,
                    position: new google.maps.LatLng(info.lat, info.lng),
                    animation: google.maps.Animation.DROP,
                    title: info.name,
                    address: info.address
                });

                marker.setIcon('../images/beer-icon.png');

                marker.content = '<div class="infoWindowContent">' + info.challenge1 + '<br>' + info.challenge2 + '<br>' + info.challenge3 + '</div>';

                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent('<h2>' + marker.title + '</h2>' + '<h4>' + marker.address + '</h4>' + marker.content);
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

            var locationList = document.getElementById('location-list');
            locationList.classList.add('list-background');
            };


    });
