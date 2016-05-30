'use strict';

(function (angular) {
  //Message constants
  function Constants() {
    return {
      api: {
        error: 'Error in getting data from server, Please try again later'
      }
    };
  };

  angular.module('angularJsSeedApp')
    .factory('Messages', Constants)
})(angular)
