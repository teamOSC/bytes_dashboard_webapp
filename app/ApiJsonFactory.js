/**
 * Created by championswimmer on 29/5/15.
 */

var commonFactories = angular.module('bytes');

commonFactories.factory('ApiJsonFactory', ['$q', '$http', function ($q, $http) {
    var baseUrl = 'http://tosc.in:8084/bytes';

    return {
        getJson: function ($apiEndpoint) {
                var deferred = $q.defer(),
                    httpPromise = $http.get(baseUrl + '/' + $apiEndpoint);
            httpPromise.then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.error(error);
            });

            return deferred.promise;
        }
    };
}]);