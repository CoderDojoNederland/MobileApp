angular.module('coderdojonederland')

    /**
     * Shows the list of dojos and handles search
     */
    .controller('LocationsController', function(
        $scope,
        DojoList
    ) {

        DojoList.getDojos().then(function(dojos){
            $scope.locations = dojos;
        });

        $scope.doSearch = function(searchKey) {
            $scope.locations = DojoList.searchDojo(searchKey);
        };
    })

    /**
     * Shows a single dojo with it's info
     */
    .controller('SingleLocationController', function(
        $scope,
        $stateParams,
        DojoList
    ) {
        $scope.dojo = DojoList.getDojo($stateParams.locationId);

        $scope.openDojoSite = function(url) {
            cordova.InAppBrowser.open(url, '_system', 'location=yes');
            return false;
        };
    });
