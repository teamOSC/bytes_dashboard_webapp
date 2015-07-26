/**
 * Created by championswimmer on 26/7/15.
 */

var sidenavModule = angular.module('bytes.sidebar', []);

sidenavModule.controller("SidebarController", ['$mdSidenav', '$mdMedia', '$state',
    function($mdSidenav, $mdMedia, $state) {
    this.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
        console.log($state.current.name);
        console.log($state.current);
    };
}]);

sidenavModule.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('/1', {
        url: '/1',
        controller: 'SidebarController'
    });
    $stateProvider.state('/2', {
        url: '/2',
        controller: 'SidebarController'
    });
    $stateProvider.state('/3', {
        url: '/3',
        controller: 'SidebarController'
    });
    $stateProvider.state('/4', {
        url: '/4',
        controller: 'SidebarController'
    });
    $stateProvider.state('/5', {
        url: '/5',
        controller: 'SidebarController'
    });
}]);