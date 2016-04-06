angular.module('coderdojonederland')

    .factory('DojoList', ['$http', 'Dojo', function DojoList($http, Dojo) {
        var dojoList = [];

        dojoList.push(new Dojo(
            1,
            'CoderDojo Rotterdam',
            'green',
            'http://www.coderdojo-rotterdam.nl',
            'contact@coderdojo-rotterdam.nl',
            'Heer bokelweg 155',
            'Startup Foundation',
            '2321AH',
            'Rotterdam',
            '0107894827'
        ));

        dojoList.push(new Dojo(
            2,
            'CoderDojo Leiden',
            'blue',
            'http://www.coderdojo-leiden.nl',
            'contact@coderdojo-;eiden.nl',
            'Heer bokelweg 155',
            'B plus C',
            '2321AH',
            'Leiden',
            '0107894827'
        ));

        dojoList.push(new Dojo(
            3,
            'CoderDojo Delft',
            'yellow',
            'http://www.coderdojo-delft.nl',
            'contact@coderdojo-delft.nl',
            'Heer bokelweg 155',
            'Openbare Bibliotheek',
            '2321AH',
            'Delft',
            '0107894827'
        ));

        return {
            /**
             * Retrieve a specific dojo from the list
             *
             * @param dojoId
             * @returns {*}
             */
            getDojo: function (dojoId) {
                dojoId = parseInt(dojoId);

                for (var i = 0; i < dojoList.length; i++) {
                    if (dojoId === dojoList[i].id) {
                        return dojoList[i];
                    }
                }

                return false;
            },

            /**
             * Retrieve the entire dojo list
             */
            getDojos: function () {
                return dojoList;
            },

            /**
             * Search the list of dojos by name, city and venue
             *
             * @param searchKey
             * @returns {Array}
             */
            searchDojo: function (searchKey) {
                searchKey = searchKey.toLowerCase();
                found = [];

                for (var i = 0; i < dojoList.length; i++) {
                    name = dojoList[ i ].name.toLowerCase();
                    city = dojoList[ i ].city.toLowerCase();
                    venue = dojoList[ i ].location.toLowerCase();

                    if (
                        0 <= name.search(searchKey) ||
                        0 <= city.search(searchKey) ||
                        0 <= venue.search(searchKey)
                    ) {
                        found.push(dojoList[i]);
                    }
                }

                return found;
            }
        };
    }]);