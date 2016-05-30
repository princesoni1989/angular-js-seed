'use strict';

(function (angular) {

angular.module('angularJsSeedApp')
  .directive('header', function () {
    return {
      templateUrl: 'components/header/header.html',
      restrict: 'E',
      controller: 'HeaderCtrl'
    };
  });

})(angular)

