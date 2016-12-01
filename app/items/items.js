(function () {
    angular.module('app.items.module')
        .controller('ItemsController', ItemsController);

    function ItemsController($scope, dataservices) {
        console.log('items', arguments);

        var response = dataservices.getItems();
        $scope.items = response.data;
        $scope.headerTable = response.headers;

        $scope.changeModalItem = function () {
            
        };

        $scope.deleteClick = function (e) {
            $scope.items.splice(id, 1);

            console.log('$scope',$scope)
        };

        console.log('$scope.items',$scope.items)
    }
})();