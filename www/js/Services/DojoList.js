angular.module('coderdojonederland')

    .factory('DojoList', ['$http', 'Dojo', '$q', function DojoList($http, Dojo, $q) {
        var defferrer = $q.defer();
        var dojoList = [];

        return {
            /**
             * Get the full list of dojo. Only touches api if we don't have the list yet
             * @returns {Promise}
             */
            getDojos: function() {
                if (0 === dojoList.length) {
                    $http.get('https://www.coderdojo.nl/api/dojos')
                    .success(function(response) {
                        for (var i = 0; i<response.length; i++) {
                            dojoList.push(new Dojo(
                                response[i].id,
                                response[i].name,
                                'blue',
                                response[i].website,
                                response[i].email,
                                response[i].street + ' ' + response[i].housenumber,
                                response[i].location,
                                response[i].postalcode,
                                response[i].city,
                                response[i].phone
                            ))
                        }
                        defferrer.resolve(dojoList);
                    });
                } else {
                    defferrer.resolve(dojoList);
                }

                return defferrer.promise;
            },

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
                    venue = dojoList[ i ].venue.toLowerCase();

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