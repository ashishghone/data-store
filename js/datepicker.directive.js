(function () {
    angular
        .module('dstore')
        .directive('datepicker', datepicker);

    function datepicker(dateFactory) {
        var directive = {
            restrict: 'EA',
            scope: {
                dData: "=data"
            },
            templateUrl: 'templates/datepicker.html',
            link: function ($scope, element, attribute) {
                var cDate = new Date();
                $scope.pageDate = {};

                $scope.pageDate.selMonth = dateFactory.monthsArr()[cDate.getMonth()];
                $scope.pageDate.year = cDate.getFullYear();

                $scope.months = dateFactory.monthsArr();
                $scope.daysInMonth = $scope.createStaticArr(dateFactory.daysInMonth(cDate.getMonth(), cDate.getFullYear()));
                $scope.pickDate = function (day) {
                    var pDate = $scope.pageDate.year + "-" + (dateFactory.monthsArr().indexOf($scope.pageDate.selMonth) + 1) + "-" + day;
                    console.log($scope.dData)
                        //localStorage.setItem()
                }

                $scope.changeMonth = function () {
                    $scope.daysInMonth = $scope.createStaticArr(dateFactory.daysInMonth(dateFactory.monthsArr().indexOf($scope.pageDate.selMonth), $scope.pageDate.year));
                }
            }
        }
        return directive;
    }
})();