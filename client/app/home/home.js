'use strict';

(function (angular) {

angular.module('angularJsSeedApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'Home',
        authenticate: true,
        resolve: {
          LoggedInUser: function (Auth, $q) {
            var deferred = $q.defer();
            Auth.isLoggedInAsync(function (success) {
              deferred.resolve();
            }, function (error) {
              return deferred.reject();
            });
            return deferred.promise;
          }
        }
      })
  });

})(angular)
