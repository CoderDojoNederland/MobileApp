angular.module('coderdojonederland')

    .factory('Dojo', function() {
        function Dojo (id, name, image, website, email, address, venue, postalcode, city, phone) {
            this.id = id;
            this.name = name;
            this.image = image;
            this.website = website;
            this.email = email;
            this.address = address;
            this.venue = venue;
            this.postalcode = postalcode;
            this.city = city;
            this.phone = phone;
        }

        Dojo.prototype = {
            getImageUrl: function() {
                return '/img/avatars/'+this.image+'.png';
            }
        };

        return Dojo;
    });
