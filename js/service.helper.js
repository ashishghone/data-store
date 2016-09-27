(function () {
    angular
        .module('dstore')
        .service('helper', helper);

    function helper() {

        this.createStaticArr = function (num) {
            var arr = [];
            arr[num - 1] = 1;
            return arr;
        }
    }
})();