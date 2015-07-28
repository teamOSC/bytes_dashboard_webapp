/**
 * Created by championswimmer on 26/7/15.
 */
'use strict';

var bytesApp = angular.module('bytes', [
    'ui.router',
    'ngMaterial',
    'ngStorage',
    'bytes.sidebar',
    'bytes.orderinfo'
]);
bytesApp.config(['$urlRouterProvider', '$httpProvider', function($urlRouterProvider, $httpProvider) {

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    //$urlRouterProvider.otherwise('/1');
}]);
bytesApp.controller('AppController',
    ['$mdSidenav', '$mdMedia', '$sessionStorage', '$state', 'ApiJsonFactory',
        function($mdSidenav, $mdMedia, $sessionStorage, $state, ApiJsonFactory) {
            var app = this;

            app.toggleSidenav = function(menuId) {
                $mdSidenav(menuId).toggle();
            };

            app.$storage = $sessionStorage;
            app.$storage.$reset();

            if ( app.$storage.orders === null ||
                typeof(app.$storage.orders) == 'undefined')
            {
                app.$storage.orders = [];
            }
            app.Orders = app.$storage.orders;

            if (app.Orders.length === 0) {
                ApiJsonFactory.getJson('outlets/orders/2')
                    .then(function (response) {
                        app.Orders = response.data;
                        app.$storage.orders = app.Orders;
                    }, function (error) {
                        console.error(error);
                    });
            }
        }]);