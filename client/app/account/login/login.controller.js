'use strict';

(function (angular) {

function loginCtrl($scope, Auth, $state, $window) {

  /**
   * controller variables
   */
    var Login = this;
    Login.user = {};
    Login.errors = {};

  /**
   *Login user
   * @param form
   */
    Login.login = function(form) {
      Login.submitted = true;

      if (form.$valid) {
        Auth.login({
          email: Login.user.email,
          password: Login.user.password
        })
        .then(function() {
          // Logged in, redirect to home
          $state.go('home');
        })
        .catch(function(error) {
            Login.errors.other = error.message;
        });
      }
    };

  }

  angular.module('angularJsSeedApp')
    .controller('LoginCtrl',loginCtrl);
})(angular);
