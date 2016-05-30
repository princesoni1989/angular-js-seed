'use strict';

(function (angular) {
angular.module('angularJsSeedApp')
  .config(function configuration($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'Login'
      })
      .state('logout', {
        url: '/logout?referrer',
        referrer: 'login',
        template: '',
        controller: function($state, Auth) {
          var referrer = $state.params.referrer || 'login';
          Auth.logout();
          $state.go(referrer);
        }
      })
      .state('signUp', {
        url: '/signup',
        templateUrl: 'app/account/signUp/signUp.html',
        controller: 'SignUpCtrl',
        controllerAs: 'SignUp'
      })
      .state('forgotPassword', {
        url: '/forgotpassword',
        templateUrl: 'app/account/forgotPassword/forgotPassword.html',
        controller: 'ForgotPasswordCtrl',
        controllerAs: 'ForgotPassword'
      });
  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      if (next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  });

})(angular)
