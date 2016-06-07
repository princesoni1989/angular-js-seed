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
        authenticate: true
      })
  });

})(angular)
