(function () {
    angular.module('app').factory('dataservices', getData);

    /* @ngInject */
    function getData($q,$timeout) {
        var dataItems = [
            {
                name: 'Hose',
                lastName: 'Horche',
                tel: '30123128321',
                img: 'img/srcImg.png',
                id: 1,
                job: 'Manager'
            },
            {
                name: 'Don',
                lastName: 'Carlione',
                tel: '51231266666',
                img: 'img/srcImg.png',
                id: 2,
                job: 'Project manager'
            },
            {
                name: 'Alex',
                lastName: 'Bob',
                tel: '33333666',
                img: 'img/srcImg.png',
                id: 3,
                job: 'Driver'
            }
        ];

        var itemTable = {
            headers: [
                'id',
                'job',
                'Name',
                'Last name',
                'tel'
            ],
            data: dataItems
        };

        function getItems() {
            // var deferred = $q.defer();
            // $timeout(function () {
            //     deferred.resolve(itemTable);
            // }, 1000);
            //
            // return deferred.promise;

            return itemTable;
        }

        function update(id, data) {
            console.log('update', arguments);
            dataItems[id] = data;
            return dataItems;
        }
        function deleteItem(i) {
            console.log('deleteItem', i);
            dataItems.splice(i, 1);
            return dataItems;
        }

        return {
            getItems: getItems,
            deleteItem: deleteItem,
            update: update
        }
    }

})();
