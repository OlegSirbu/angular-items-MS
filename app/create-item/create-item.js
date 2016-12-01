(function () {
    angular.module('app.create-item.module')
        .controller('CreateItem', CreateItem);

    /* @ngInject */
    function CreateItem($scope, id, dataservices) {
        var response = dataservices.getItems();

        console.log('ar',arguments, response.data);

        $scope.item = response.data[id-1];
        $scope.headerTable = response.headers;
        
        $scope.deleteClick = function (e) {
            dataservices.deleteItem(id-1);
            $scope.item = {};
        };

        $scope.updateItem = function () {
            console.log('updateItem', $scope.item);
            dataservices.update(id, $scope.item);
        };

    }
})();