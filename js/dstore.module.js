(function () {
    angular
        .module('dstore', []);

    angular
        .module('dstore')
        .run(helperFunction);

    function helperFunction($rootScope) {
        $rootScope.createStaticArr = function (num) {
            var arr = [];
            arr[num - 1] = 1;
            return arr;
        }
    }

})();