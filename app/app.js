(function () {
    angular.module('app',
        [
            'app.core',
            'app.items.module',
            'app.create-item.module',
            'app.items-table.module',
            'app.items-tile.module',
            'ngMockE2E'
        ]).config(
            /* @ngInject */
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('items', {
                        url: "/items",
                        abstract: true,
                        controller: "ItemsController",
                        templateUrl: "items.html"
                    })
                        .state('items.tile', {
                            url: "/view=tile",
                            templateUrl: "items-tile.html"
                        })
                        .state('items.table', {
                            url: "/view=table",
                            templateUrl: "items-table.html"
                        })
                        .state('items.create', {
                            url: "/:id",
                            resolve:{
                                id: ['$stateParams', function($stateParams){
                                    return $stateParams.id;
                                }]
                            },
                            controller: "CreateItem",
                            templateUrl: "create-item.html"
                        });

                $urlRouterProvider
                    .otherwise('/items/view=table');
            }
        )
        .run([
            '$rootScope','$state','$httpBackend',
            function ($rootScope, $state, $httpBackend) {
                var dataItems = [
                    {
                        val1: 'value 1',
                        val2: 'value 2',
                        val3: 'value 3',
                        title:'item 1',
                        img:'img/srcImg.png',
                        id: 1
                    },
                    {
                        val1: 'value 1',
                        val2: 'value 2',
                        val3: 'value 3',
                        title:'item 2',
                        img:'img/srcImg.png',
                        id: 2
                    },
                    {
                        val1: 'value 1',
                        val2: 'value 2',
                        val3: 'value 3',
                        title:'item 3',
                        img:'img/srcImg.png',
                        id: 3
                    }
                ];

                var itemTable = {
                    headers: [
                       'item title',
                        'Property #1 title',
                        'Property #2 title',
                        'Property #3 title'
                    ],
                    data : dataItems
                };

                $httpBackend.whenGET('/items-table').respond(itemTable);

            }
        ]);
})();
