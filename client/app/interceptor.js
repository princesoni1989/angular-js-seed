'use strict';

(function(angular) {

  angular.module('angularJsSeedApp')
    .factory('authInterceptor', function ($rootScope, $q, $cookies, $injector) {
    var state;
    return {
      // Add authorization token to headers
      request: function(config) {
        config.headers = config.headers || {};
        if ($cookies && $cookies.get('token')) {
          config.headers.Authorization = 'Bearer ' + JSON.parse($cookies.get('token'));
        }
        return config;
      },

      // Intercept 401s and redirect you sto login
      responseError: function(response) {
        if (response.status === 401) {
          (state || (state = $injector.get('$state'))).go('login');
          // remove any stale tokens
          $cookies.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };

})

})(angular);
