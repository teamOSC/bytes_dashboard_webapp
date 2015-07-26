/**
 * Created by championswimmer on 26/7/15.
 */

var orderinfoModule = angular.module('bytes.orderinfo', []);

orderinfoModule.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('order', {
        url: '/order/1/:oid',
        templateUrl: 'app/orderinfo/orderinfo.html',
        controller: 'OrderInfoController'
    });
}]);

sidenavModule.controller("OrderInfoController", ['$mdSidenav', '$mdMedia', '$state', '$sessionStorage',
    function($mdSidenav, $mdMedia, $state, $sessionStorage) {

        var oim = this;
        oim.$storage = $sessionStorage;

        oim.thisOrder = oim.$storage.currentOrder;

    }]);
