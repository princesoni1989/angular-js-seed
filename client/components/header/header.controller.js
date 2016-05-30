'use strict';

(function (angular) {

  function header($scope, Auth) {
    var Header = this;
    Header.menu = [{
      'title': 'Home',
      'state': 'home'
    }];

    Header.isCollapsed = true;
    Header.isLoggedIn = Auth.isLoggedIn;
    Header.isAdmin = Auth.isAdmin;
    Header.getCurrentUser = Auth.getCurrentUser;
  }

  //controller declaration
  angular.module('angularJsSeedApp')
    .controller('HeaderCtrl', header);

})(angular)
