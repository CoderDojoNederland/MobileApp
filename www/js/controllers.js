angular.module('coderdojonederland')

    .controller('AppCtrl', function (
        $scope,
        $ionicModal,
        $timeout
    ) {})

    .controller('InfoCtrl', function($scope){
        $scope.openWebsite = function() {
            cordova.InAppBrowser.open('https://www.coderdojo.nl', '_system', 'location=yes');
            return false;
        };
    })
;
