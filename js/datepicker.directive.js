(function () {
    angular
        .module('dstore')
        .directive('datepicker', datepicker);

    function datepicker(dateFactory, helper) {
        var directive = {
            restrict: 'EA',
            scope: {
                dData: "=data"
            },
            templateUrl: 'templates/datepicker.html',
            link: function ($scope, element, attribute) {

            }
        }
        return directive;
    }
})();