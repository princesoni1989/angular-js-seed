'use strict';

(function (angular) {

angular.module('angularJsSeedApp')
  .factory('User', ['$resource', 'Config', function ($resource, Config) {
    return $resource(Config.getHost() + '/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      forgotPassword: {
        method: 'POST',
        params: {
          id:'forgotPassword'
        }
      },
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      }
    });
  }]);

})(angular);
