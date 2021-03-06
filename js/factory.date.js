(function () {
    angular
        .module('dstore')
        .factory('dateFactory', dateFactory);

    function dateFactory() {
        return {

            getMonthStr: function (mNum) {
                return this.monthsArr()[mNum];
            },

            monthsArr: function () {
                var month = [];
                month[0] = "January";
                month[1] = "February";
                month[2] = "March";
                month[3] = "April";
                month[4] = "May";
                month[5] = "June";
                month[6] = "July";
                month[7] = "August";
                month[8] = "September";
                month[9] = "October";
                month[10] = "November";
                month[11] = "December";
                return month
            },

            daysInMonth: function (month, year) {
                return new Date(year, month + 1, 0).getDate();
            },

            getPDate: function (year, month, day) {
                return year + "-" + month + "-" + day;
            }
        }
    }

})();