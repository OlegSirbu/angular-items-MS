(function () {
    angular.module('app.items-tile.module')
        .controller('ItemsTile', ItemsTile);

    /* @ngInject */
    function ItemsTile($scope, $rootScope, $http) {
        var vm = this;

        $http.get('/items/view=table').then(function(response) {
            vm.itemsTile = response.data;
        });
    }
})();