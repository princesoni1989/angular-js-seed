'use strict';

describe('Controller: ForgotCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsSeedApp'));

  var ForgotCtrl, scope, User, fakeState, q;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q, $httpBackend) {
    scope = $rootScope.$new();
    q = $q;
    $httpBackend.whenGET('app/user/login/login.html').respond(200);
    User = jasmine.createSpyObj('User', ['setPasswordRequest']);
    fakeState = {
      go: function (url) {
        fakeState.redirect = url;
      }
    };
    ForgotCtrl = $controller('ForgotPasswordCtrl', {
      $scope: scope,
      $q: q,
      User: User,
      $state: fakeState
    });
  }));

  //This is success
  it('should have a ForgotPasswordCtrl controller', function () {
    expect('practiceRetrieverApp.ForgotPasswordCtrl').toBeDefined();
  });
  describe('Function:forgotPassword', function () {
    var fakeForm = {};
    it('password should be sent successfully when User.setPasswordRequest calls success', function () {
      User.setPasswordRequest.andCallFake(function (data, success, failure) {
        success({userData: {}});
      });
      ForgotCtrl.form.email = 'lancomTest@cloud.com';
      fakeForm.$valid = true;
      ForgotCtrl.forgotPassword(fakeForm);
      scope.$apply();
      expect(ForgotCtrl.sent).toBeTruthy();
    });
    it('should show error message and request failed when User.setPasswordRequest promise calls failure ', function () {
      User.setPasswordRequest.andCallFake(function (data, success, failure) {
        failure({data: 'Email id not correct'});
      });
      ForgotCtrl.form.email = 'lancomTest@cloud.com';
      fakeForm.$valid = true;
      ForgotCtrl.forgotPassword(fakeForm);
      scope.$apply();
      expect(ForgotCtrl.requestFailed).toBeTruthy();
      expect(ForgotCtrl.sent).toBeFalsy();
    });
    it('should not call User.setPasswordRequest function when submitted form is invalid', function () {
      fakeForm.$valid = false;
      ForgotCtrl.forgotPassword(fakeForm);
      scope.$apply();
      expect(ForgotCtrl.posting).toBeFalsy();
      expect(User.setPasswordRequest).not.toHaveBeenCalled();
    });
  });
  describe('Function:goToLogin', function () {
    it('should redirect to login when goToLogin function is called', function () {
      ForgotCtrl.goToLogin();
      scope.$apply();
      expect(fakeState.redirect).toEqual('login');
    });
  });

});
