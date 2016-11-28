
angular.module('beerCrawl')
    .controller('LogOut', function($scope, $rootScope) {
        console.log($rootScope.session);
         $scope.logOutClick = function () {
            console.log("You Logged Out!");
            $rootScope.session = null;
             console.log($rootScope.session);
             document.getElementById('logged').style.display = 'none';
             document.getElementById('notLogged').style.display = 'block'
        }
    });