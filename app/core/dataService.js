// (function () {
//     angular.module('app').factory('dataservices', getData);
//
//     /* @ngInject */
//     function getData($http) {
//         var dataItems = [
//             {
//                 val1: 'value 1',
//                 val2: 'value 2',
//                 val3: 'value 3',
//                 title:'item 1',
//                 img:'img/srcImg.png',
//                 id: 1
//             },
//             {
//                 val1: 'value 1',
//                 val2: 'value 2',
//                 val3: 'value 3',
//                 title:'item 2',
//                 img:'img/srcImg.png',
//                 id: 2
//             },
//             {
//                 val1: 'value 1',
//                 val2: 'value 2',
//                 val3: 'value 3',
//                 title:'item 3',
//                 img:'img/srcImg.png',
//                 id: 3
//             }
//         ];
//
//         var itemTable = {
//             headers: [
//                 'item title',
//                 'Property #1 title',
//                 'Property #2 title',
//                 'Property #3 title'
//             ],
//             data : dataItems
//         };
//
//         function getItems() {
//             $http.get('/items-table').respond(itemTable);
//         }
//
//         return {
//             getItems: getItems
//         }
//     }
//
// })();
