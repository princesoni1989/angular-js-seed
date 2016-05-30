'use strict';

describe('Controller: LoginCtrl', function () {
  var LoginCtrl, q, rootScope, scope, fakeLocation, Auth, $state, fakeForm;
  beforeEach(module('angularJsSeedApp'));
  beforeEach(inject(function ($q, $controller, $rootScope, $httpBackend) {
      q = $q,
        rootScope = $rootScope,
        scope = rootScope.$new();
      $httpBackend.whenGET('app/user/login/login.html')
        .respond(200);
      Auth = jasmine.createSpyObj('Auth', ['login']);
      $state = jasmine.createSpyObj('$state', ['go']);
      $state.go.andCallFake(function (url) {

      });
      $state.params = {
        loginSuccess: false,
        sessionExpired: false
      };
      fakeForm = {
        '$valid': true
      };

      LoginCtrl = $controller('LoginCtrl', {
        $scope: scope,
        $q: q,
        Auth: Auth,
        $state: $state
        //$location: fakeLocation,
        //$routeParams: routeParams
      });
      rootScope.$digest();
    }
  ));
//This is success
  it('should have a LoginCtrl controller', function () {
    expect('angularJsSeedApp.LoginCtrl').toBeDefined();
  });

  describe('Function:login', function () {
    it('should redirect to home  Auth.login promise get resolved ', function () {
      Auth.login.andCallFake(function (data) {
        var deferred = q.defer();
        deferred.resolve({userData: {}});
        //deferred.$promise = deferred.promise;
        return deferred.promise;
      });
      LoginCtrl.user.email = 'lancomTest@cloud.com';
      LoginCtrl.user.password = 'lancomTest';
      LoginCtrl.login(fakeForm);
      scope.$apply();
      expect($state.go).toHaveBeenCalledWith('home');
    });
    it('should show error message when Auth.login promise get rejected with message "notActive"', function () {
      Auth.login.andCallFake(function (data) {
        var deferred = q.defer();
        deferred.reject({message: 'notActive'});
        return deferred.promise;
      });
      LoginCtrl.user.email = 'lancomTest@cloud.com';
      LoginCtrl.user.password = 'lancomTest';
      LoginCtrl.login(fakeForm);
      scope.$apply();
      expect(LoginCtrl.notActivated).toEqual(true);
    });
    it('should show error message when Auth.login promise get rejected ', function () {
      Auth.login.andCallFake(function (data) {
        var deferred = q.defer();
        deferred.reject({message: 'Authentication failure'});
        return deferred.promise;
      });
      LoginCtrl.user.email = 'lancomTest@cloud.com';
      LoginCtrl.user.password = 'lancomTest';
      LoginCtrl.login(fakeForm);
      scope.$apply();
      expect(LoginCtrl.errors.other).toEqual('Authentication failure');
    });
  });
  describe('Function:signUp', function () {
    it('should redirect to signUp when signUp is called ', function () {
      LoginCtrl.signUp();
      scope.$apply();
      expect($state.go).toHaveBeenCalledWith('signup');
    });
  });
  describe('Function:forgotPassword', function () {
    it('should redirect to forgotPassword when forgotPassword is called ', function () {
      LoginCtrl.forgotPassword();
      scope.$apply();
      expect($state.go).toHaveBeenCalledWith('forgotPassword');
    });
  });
});
