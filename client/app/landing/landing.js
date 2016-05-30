'use strict';

(function (angular) {

angular.module('angularJsSeedApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: 'app/landing/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing'
      });
  });

})(angular)
