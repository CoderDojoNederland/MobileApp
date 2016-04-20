angular.module('coderdojonederland')

    /**
     * Shows the list of events and handles search
     */
    .controller('AgendaController', ['$scope', 'EventList', function($scope, EventList) {

        EventList.getEvents().then(function(dojoEvents){
            $scope.events = dojoEvents;
        });

        $scope.doSearch = function(searchKey) {
            $scope.events = EventList.searchEvent(searchKey);
        }
    }])

    /**
     * Shows a single event with it's info
     */
    .controller('EventController', ['$scope', '$stateParams', 'EventList', function($scope, $stateParams, EventList) {
        $scope.dojoEvent = EventList.getEvent($stateParams.eventId);
    }]);
