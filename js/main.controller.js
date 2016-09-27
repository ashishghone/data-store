(function () {
    angular
        .module('dstore')
        .controller('mainController', mainController);

    function mainController($scope, dateFactory, helper) {

        var cDate = new Date();
        $scope.pageDate = {};
        $scope.pageDate.day = cDate.getDate();
        $scope.pageDate.selMonth = dateFactory.monthsArr()[cDate.getMonth()];
        $scope.pageDate.year = cDate.getFullYear();

        $scope.months = dateFactory.monthsArr();
        $scope.daysInMonth = helper.createStaticArr(dateFactory.daysInMonth(cDate.getMonth(), cDate.getFullYear()));

        $scope.changeMonth = function () {
            $scope.daysInMonth = helper.createStaticArr(dateFactory.daysInMonth(dateFactory.monthsArr().indexOf($scope.pageDate.selMonth), $scope.pageDate.year));
        }

        $scope.pickDate = function (day) {
            $scope.pageDate.day = day;
            var pDate = dateFactory.getPDate($scope.pageDate.year, dateFactory.monthsArr().indexOf($scope.pageDate.selMonth) + 1, $scope.pageDate.day);
            $scope.dData = localStorage.getItem(pDate);
        }

        $scope.updateData = function (keyCode) {
            var pDate = dateFactory.getPDate($scope.pageDate.year, dateFactory.monthsArr().indexOf($scope.pageDate.selMonth) + 1, $scope.pageDate.day);
            localStorage.setItem(pDate, $scope.dData);
        }

    }
})();