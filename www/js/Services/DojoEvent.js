angular.module('coderdojonederland')

    .factory('DojoEvent', ['DatePresentation', function(DatePresentation) {
        function DojoEvent (id, dojo, timeStamp, registration) {
            this.id = id;
            this.dojo = dojo;
            this.timeStamp = timeStamp;
            this.registration = registration;

            this.getDatePresentation = function() {
                var dp = new DatePresentation(this.timeStamp);
                return dp.getPresentation();
            }
        }

        return DojoEvent;
    }]);
