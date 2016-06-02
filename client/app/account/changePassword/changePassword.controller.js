'use strict';

(function (angular) {

  function changePassword(Auth) {

    var ChangePassword = this;
    ChangePassword.errors = {};

    ChangePassword.reset = function (form) {
      ChangePassword.submitted = true;
      if (form.$valid) {
        Auth.changePassword(ChangePassword.user.oldPassword, ChangePassword.user.newPassword)
          .then(function () {
            ChangePassword.message = 'Password successfully changed.';
          })
          .catch(function () {
            ChangePassword.errors.other = 'Incorrect password';
            ChangePassword.message = 'Unable to change password, Please check current password';
          });
      }
    };
  };

  angular.module('angularJsSeedApp')
    .controller('ChangePasswordCtrl', changePassword)
})(angular);
