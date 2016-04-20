angular.module('coderdojonederland')

    .factory('EventList', ['$http', 'DojoEvent', 'DojoList', '$q', function EventList($http, DojoEvent, DojoList, $q) {
        var defferrer = $q.defer();
        var eventList = [];

        return {
            /**
             * Retrieve a specific event from the list
             *
             * @param eventId
             * @returns {*}
             */
            getEvent: function (eventId) {
                eventId = parseInt(eventId);

                for (var i = 0; i < eventList.length; i++) {
                    if (eventId === eventList[i].id) {
                        return eventList[i];
                    }
                }

                return false;
            },

            /**
             * Retrieve the entire event list
             */
            getEvents: function () {
                if (0 === eventList.length) {
                    $http.get('https://www.coderdojo.nl/api/events')
                        .success(function(response) {
                            for (var i = 0; i<response.length; i++) {
                                eventList.push(new DojoEvent(
                                    response[i].id,
                                    DojoList.getDojo(response[i].dojo),
                                    response[i].date,
                                    response[i].url
                                ));
                            }
                            defferrer.resolve(eventList);
                        });
                } else {
                    defferrer.resolve(eventList);
                }

                return defferrer.promise;
            },

            /**
             * Search the list of events by name, city and venue
             *
             * @param searchKey
             * @returns {Array}
             */
            searchEvent: function (searchKey) {
                searchKey = searchKey.toLowerCase();
                found = [];

                for (var i = 0; i < eventList.length; i++) {
                    name = eventList[ i ].dojo.name.toLowerCase();
                    city = eventList[ i ].dojo.city.toLowerCase();
                    venue = eventList[ i ].dojo.venue.toLowerCase();
                    dateTime = eventList[ i ].getDatePresentation().toLowerCase();

                    if (
                        0 <= name.search(searchKey) ||
                        0 <= city.search(searchKey) ||
                        0 <= venue.search(searchKey) ||
                        0 <= dateTime.search(searchKey)
                    ) {
                        found.push(eventList[i]);
                    }
                }

                return found;
            }
        };
    }]);