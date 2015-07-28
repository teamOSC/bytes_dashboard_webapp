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

sidenavModule.controller("OrderInfoController", ['$mdSidenav', '$mdMedia', '$state', '$sessionStorage', 'ApiJsonFactory',
    function($mdSidenav, $mdMedia, $state, $sessionStorage, ApiJsonFactory) {

        var oim = this;
        oim.$storage = $sessionStorage;

        oim.thisOrder = oim.$storage.currentOrder;

        this.sendConfirm = function() {
            console.log("Sending Push");
            ApiJsonFactory.getJson('outlets/alarm/?msg=Order%20ready.%20Pleace%20 collect%20from%20counter')
                .then(function (response) {
                    app.$storage.orders = {};
                }, function (error) {
                    console.error(error);
                });
        }

    }]);
