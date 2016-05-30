/**
 * Created by princesoni on 11/13/15.
 */
'use strict';

(function (angular) {
  //configuration object
  function config() {
    var configuration =  {
      ENV: 'PRODUCTION',

      ENVIRONMENTS: {

        STAGING: {
          URL: 'https://staging.com'
        },

        PRODUCTION: {
          URL: 'https://production.com'
        },

        DEVELOPMENT: {
          URL: 'https://development.com'
        }
      },

      getHost: function () {
        return this.ENVIRONMENTS[this.ENV] && this.ENVIRONMENTS[this.ENV].URL;
      }

    }
    return configuration;
  }

  //factory declaration
  angular.module('angularJsSeedApp')
    .factory('Config', config)

})(angular);
