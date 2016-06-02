'use strict';

(function (angular) {

angular.module('angularJsSeedApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })
  .run(['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {
    // Redirect to login if route requires auth and the user is not logged in
    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        //check for user authentication
        if (!loggedIn && next.authenticate) {
          event.preventDefault();
          $state.go('login');
        }

        //navigate to home if user is already authenticated
        if(loggedIn && (next.name === 'login' || next.name === 'landing')){
          event.preventDefault();
          $state.go('home');
        }

        if (next.authenticate && !loggedIn) {
          event.preventDefault();
          $state.go('login');
        }
      });
    });
  }]);

})(angular);
