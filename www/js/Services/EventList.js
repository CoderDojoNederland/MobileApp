angular.module('coderdojonederland')

    .factory('EventList', ['$http', 'DojoEvent', 'DojoList', function EventList($http, DojoEvent, DojoList) {
        var eventList = [];

        eventList.push(new DojoEvent(
            1,
            DojoList.getDojo(1),
            1460208600,
            'http://codereventrdam.eventbrite.com'
        ));

        eventList.push(new DojoEvent(
            2,
            DojoList.getDojo(2),
            1463578200,
            'http://codereventrdam.eventbrite.com'
        ));

        eventList.push(new DojoEvent(
            3,
            DojoList.getDojo(2),
            1464269400,
            'http://codereventrdam.eventbrite.com'
        ));

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
                return eventList;
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
                    name = eventList[ i ].name.toLowerCase();
                    city = eventList[ i ].city.toLowerCase();
                    venue = eventList[ i ].location.toLowerCase();

                    if (
                        0 <= name.search(searchKey) ||
                        0 <= city.search(searchKey) ||
                        0 <= venue.search(searchKey)
                    ) {
                        found.push(eventList[i]);
                    }
                }

                return found;
            }
        };
    }]);