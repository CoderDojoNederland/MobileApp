angular.module('coderdojonederland')

    /**
     * Shows the list of events and handles search
     */
    .controller('AgendaController', function($scope, EventList) {

        EventList.getEvents().then(function(dojoEvents){
            $scope.events = dojoEvents;
        });

        $scope.doSearch = function(searchKey) {
            $scope.events = EventList.searchEvent(searchKey);
        }
    })

    /**
     * Shows a single event with it's info
     */
    .controller('EventController', function($scope, $stateParams, EventList) {
        $scope.dojoEvent = EventList.getEvent($stateParams.eventId);

        $scope.openDojoSite = function(url) {
            cordova.InAppBrowser.open(url, '_system', 'location=yes');
            return false;
        };
    });
