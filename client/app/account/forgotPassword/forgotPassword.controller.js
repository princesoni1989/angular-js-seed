'use strict';

(function (angular) {

  function forgotPassword(User, $state) {

    /**
     * Controller variables
     */
    var ForgotPassword = this;
    ForgotPassword.sent = false;
    ForgotPassword.posting = false;
    ForgotPassword.error = '';
    ForgotPassword.form = {
      email: ''
    };
    ForgotPassword.requestFailed = false;
    ForgotPassword.submitted = false;

    /**
     * Serves to submit a request for set password for provided user emailId.
     * @param form - formObject
     */
    ForgotPassword.forgotPassword = function (form) {
      ForgotPassword.submitted = true;
      if (form.$valid) {
        ForgotPassword.posting = true;
        ForgotPassword.requestFailed = false;
        User.forgotPassword({email: ForgotPassword.form.email}, function (data) {
          ForgotPassword.sent = true;
          ForgotPassword.goToLogin();
        }, function (err) {
          ForgotPassword.posting = false;
          ForgotPassword.error = err.code;
          ForgotPassword.requestFailed = true;
        })
      }
    };

    /**
     * navigate to login page
     */
    ForgotPassword.goToLogin = function () {
      $state.go('login');
    };
  };

  angular.module('angularJsSeedApp')
    .controller('ForgotPasswordCtrl', forgotPassword);

})(angular);
