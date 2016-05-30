/**
 * Created by princesoni on 11/13/15.
 */
'use strict';

(function (angular) {

  function constants() {

    return {
      //User roles
      roles: {
        BUSINESS_USER: 'businessUser',
        USER: 'user'
      },
      popup: {
        SUCCESS: 'SUCCESS',
        ERROR: 'ERROR'
      }
    }
  }

  //factory declaration
  angular.module('angularJsSeedApp')
    .factory('Constants', constants);

})(angular);
