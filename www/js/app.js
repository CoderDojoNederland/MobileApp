// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('coderdojonederland', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

            /**
             * Locations Page
             */
            .state('app.locations', {
                url: '/locations',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/Locations/list.html',
                        controller: 'LocationsController'
                    }
                }
            })
            .state('app.location', {
                url: '/locations/:locationId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/Locations/single.html',
                        controller: 'SingleLocationController'
                    }
                }
            })

            /**
             * Agenda Page
             */
            .state('app.agenda', {
                url: '/agenda',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/Agenda/list.html',
                        controller: 'AgendaController'
                    }
                }
            })

            /**
             * Event Detail
             */
            .state('app.event', {
                url: '/agenda/:eventId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/Agenda/event.html',
                        controller: 'EventController'
                    }
                }
            })

            /**
             * Info Page
             */
            .state('app.info', {
                url: '/info',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/info.html'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/locations');
    });