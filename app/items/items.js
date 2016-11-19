(function () {
    angular.module('app.items.module')
        .controller('ItemsController', ItemsController);

    function ItemsController($scope, $rootScope, $http, $state) {
        var vm = this;
        $http.get('/items-table').then(function(response) {
            vm.items = response.data.data;
            vm.headerTable = response.data.headers;

            vm.$state = $state;
            // console.log('state', vm.$state);
        });
    }
})();