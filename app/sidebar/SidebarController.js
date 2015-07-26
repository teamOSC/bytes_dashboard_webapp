/**
 * Created by championswimmer on 26/7/15.
 */

var sidenavModule = angular.module('bytes.sidebar', []);

sidenavModule.controller("SidebarController", ['$mdSidenav', '$mdMedia', '$state', '$sessionStorage',
    function($mdSidenav, $mdMedia, $state, $sessionStorage) {
        this.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
            console.log($state.current.name);
            console.log($state.current);
        };
        this.showOrder = function(orderId) {
            this.toggleSidenav('left');
            $state.go('order', {oid: orderId});
            console.log($state.current.name);
            console.log($state.current);
            console.log(orderId);
        };

        var side = this;
        side.$storage = $sessionStorage;


    }]);

sidenavModule.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('order', {
        url: '/order/1/:oid',
        controller: 'SidebarController'
    });
}]);