/**
 * Created by o.syrbu on 10.11.2015.
 */
(function () {
    angular.module('app').directive('navigateBar', navigateBar);

    /* @ngInject */
    function navigateBar() {
        return {
            replace: true,
            restrict: "E",
            templateUrl: 'nav-bar.html',
            link: function (scope,el,attr,ItemsController ) {
                // scope.isActive = cntrl.$state.current.url;
                // console.log('current!!!',$state.current);
                // scope.isActive = $state.current;
                console.log('arg',arguments);
                scope.panels = [
                    {
                        "name": "Items table view",
                        "link": "items.table"
                    },
                    {
                        "name": "Items tile view",
                        "link": "items.tile"
                    },
                    {
                        "name": "Create/add view",
                        "link": "items.create"
                    }
                ]
            }
        }
    }
}());
