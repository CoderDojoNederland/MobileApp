angular.module('coderdojonederland')

    /**
     * Shows the list of dojos and handles search
     */
    .controller('LocationsController', ['$scope', 'DojoList', function($scope, DojoList) {

        DojoList.getDojos().then(function(dojos){
            $scope.locations = dojos;
        });

        $scope.doSearch = function(searchKey) {
            $scope.locations = DojoList.searchDojo(searchKey);
        }
    }])

    /**
     * Shows a single dojo with it's info
     */
    .controller('SingleLocationController', ['$scope', '$stateParams', 'DojoList', function($scope, $stateParams, DojoList) {
        $scope.dojo = DojoList.getDojo($stateParams.locationId);
    }]);
