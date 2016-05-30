'use strict';

describe('Controller: SetPasswordCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsSeedApp'));
  var SetPasswordCtrl, scope, fakeLocation, User, q, $state;

 /* describe('When token is not a string', function () {
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $q, $httpBackend) {
      scope = $rootScope.$new();
      $httpBackend.whenGET('app/user/login/login.html').respond(200);
      fakeLocation = {
        search: function () {
          return {token: undefined};
        }
      };
      q = $q;
      User = jasmine.createSpyObj('User', ['setPassword', 'verifyToken']);
      User.verifyToken.andCallFake(function (data, success, failure) {
        success({email: 'lancomTest@cloud.com'});
      });
      $state = jasmine.createSpyObj('$state', ['go']);
      $state.go.andCallFake(function (url, params, options) {

      });
      SetPasswordCtrl = $controller('SetPasswordCtrl', {
        $scope: scope,
        $location: fakeLocation,
        $q: q,
        User: User,
        $state: $state
      });
    }));
  });*/

  describe('When token is a string but verifyToken calls failure', function () {
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $q, $httpBackend) {
      scope = $rootScope.$new();
      $httpBackend.whenGET('app/user/login/login.html').respond(200);
      fakeLocation = {
        search: function () {
          return {token: 'string'};
        }
      };
      q = $q;
      User = jasmine.createSpyObj('User', ['setPassword', 'verifyToken']);
      User.verifyToken.andCallFake(function (data, success, failure) {
        failure({data: {message: 'Invalid token'}});
      });
      $state = jasmine.createSpyObj('$state', ['go']);
      $state.go.andCallFake(function (url, params, options) {

      });
      SetPasswordCtrl = $controller('SetPasswordCtrl', {
        $scope: scope,
        $location: fakeLocation,
        $q: q,
        User: User,
        $state: $state
      });
    }));
    it('should have a SetPasswordCtrl controller', function () {
      expect('angularJsSeedApp.SetPasswordCtrl').toBeDefined();
    });
  });

  describe('When token is a string but verifyToken calls success', function () {
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $q, $httpBackend) {
      scope = $rootScope.$new();
      $httpBackend.whenGET('app/user/login/login.html').respond(200);
      fakeLocation = {
        search: function () {
          return {token: 'string'};
        }
      };
      q = $q;
      User = jasmine.createSpyObj('User', ['setPassword', 'verifyToken']);
      User.verifyToken.andCallFake(function (data, success, failure) {
        success({email: 'lancomTest@cloud.com'});
      });
      $state = jasmine.createSpyObj('$state', ['go','transitionTo']);
      $state.go.andCallFake(function (url, params, options) {

      });
      SetPasswordCtrl = $controller('SetPasswordCtrl', {
        $scope: scope,
        $location: fakeLocation,
        $q: q,
        User: User,
        $state: $state
      });
      $state.transitionTo.andCallFake(function (name, param) {

      })
    }));
    it('should have a SetPasswordCtrl controller', function () {
      expect('angularJsSeedApp.SetPasswordCtrl').toBeDefined();
    });
    xdescribe('Function:setPassword', function () {
      var fakeForm = {};
      it('password should be set successfully when User.setPassword promise get resolved ', function () {
        User.setPassword.andCallFake(function (data, success, failure) {
          success({userData: {}});
        });
        fakeForm.$valid = true;
        SetPasswordCtrl.setPassword(fakeForm);
        scope.$apply();
        expect($state.go).toHaveBeenCalled();
      });
      it('should show error when User.setPassword promise get rejected ', function () {
        User.setPassword.andCallFake(function (data, success, failure) {
          failure({data: {error: 'promise rejected'}});
        });
        fakeForm.$valid = true;
        SetPasswordCtrl.setPassword(fakeForm);
        scope.$apply();
        expect(SetPasswordCtrl.error).toBe('promise rejected');
      });
      it('should not call User.setPassword function when submitted form is invalid', function () {
        fakeForm.$valid = false;
        SetPasswordCtrl.setPassword(fakeForm);
        scope.$apply();
        expect(SetPasswordCtrl.posting).toBeFalsy();
        expect(User.setPassword).not.toHaveBeenCalled();
      });
      it('should not call User.setPassword function when password and confirmPassword do not match', function () {
        fakeForm.$valid = true;
        User.setPassword.andCallFake(function (data, success, failure) {

        });
        SetPasswordCtrl.password = 'password';
        SetPasswordCtrl.confirmPassword = 'confirm password';
        SetPasswordCtrl.setPassword(fakeForm);
        scope.$apply();
        expect(SetPasswordCtrl.error).toBe('Passwords do not match');
        expect(User.setPassword).not.toHaveBeenCalled();
      });
    });
    describe('Function:goToLogin', function () {
      it('should redirect to login when goToLogin function is called', function () {
        SetPasswordCtrl.goToLogin();
        scope.$apply();
        expect($state.go).toHaveBeenCalledWith('login');
      });
    });
  });
});
