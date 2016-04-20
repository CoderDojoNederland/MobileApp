angular.module('coderdojonederland')

    .factory('DatePresentation', function() {
        function DatePresentation (timeStamp) {

            var d = new Date(timeStamp);

            this.getPresentation = function() {
                var day = this.translatedDay(d.getDay());
                var month = this.translatedMonth(d.getMonth());

                return day + ' ' + d.getDate() + ' ' + month + ' ' + d.getFullYear();
            }

            this.translatedDay = function (day) {
                switch(day){
                    case 0:
                        return 'Zondag';
                    case 1:
                        return 'Maandag';
                    case 2:
                        return 'Dinsdag';
                    case 3:
                        return 'Woensdag';
                    case 4:
                        return 'Donderdag';
                    case 5:
                        return 'Vrijdag';
                    case 6:
                        return 'Zaterdag';
                }
            }

            this.translatedMonth = function (month) {
                switch(month){
                    case 0:
                        return 'Januari';
                    case 1:
                        return 'Februari';
                    case 2:
                        return 'Maart';
                    case 3:
                        return 'April';
                    case 4:
                        return 'Mei';
                    case 5:
                        return 'Juni';
                    case 6:
                        return 'Juli';
                    case 7:
                        return 'Augustus';
                    case 8:
                        return 'September';
                    case 9:
                        return 'Oktober';
                    case 10:
                        return 'November';
                    case 11:
                        return 'December';
                }
            }
        }

        return DatePresentation;
    });

