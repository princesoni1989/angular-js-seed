'use strict';

describe('Controller: SignupCtrl', function () {


  // load the controller's module
  beforeEach(module('angularJsSeedApp'));

  var SignupCtrl, scope, User, q, $location, $window, $httpBackend, fakeLocation;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _$location_, _$window_, _$httpBackend_) {
    scope = _$rootScope_.$new();
    fakeLocation = {
      path: function (url) {
        return url;
      }
    };
    q = _$q_;
    $location = fakeLocation;
    $window = _$window_;
    $httpBackend = _$httpBackend_;
    User = jasmine.createSpyObj('User', ['createWooCommerceUser']);
    $httpBackend.expectGET('app/user/login/login.html').respond(200);
    $httpBackend.flush();
    SignupCtrl = _$controller_('SignupCtrl', {
      $scope: scope,
      User: User,
      $location: $location,
      $window: $window
    });
  }));

  //This is success
  describe('Should be defined', function () {
    it('$location should exist', function () {
      expect($location).toBeDefined();
    });
    it('$window should exist', function () {
      expect($window).toBeDefined();
    });
    it('User should exist', function () {
      expect(User).toBeDefined();
    });
    it('SignupCtrl should exist', function () {
      expect(SignupCtrl).toBeDefined();
    });
  });

  xdescribe('Unit: function scope.loginOauth()', function () {
    it('scope.loginOauth should exist and be a function', function () {
      expect(scope.loginOauth).toBeDefined();
      expect(typeof scope.loginOauth).toEqual('function');
    });

    it('Should invoked', function () {
      scope.loginOauth('facebook');
      scope.$digest();
      expect($window.location.href).toBeDefined();
    });
  });

  describe('Unit: function scope.register()', function () {
    it('scope.register should exist and be a function', function () {
      expect(scope.register).toBeDefined();
      expect(typeof scope.register).toEqual('function');
    });

    it('Should invoke User.createUser success', function () {
      User.createUser.andCallFake(function (obj, success, failure) {
        success();
      });
      var fakeForm = {$valid: true};
      scope.user = {
        firstName: 'Rahul',
        lastName: 'Dev',
        email: 'rahul_dev@xyz.com',
        totalAccountPurchased: 0,
        phoneNumber: 1236547890,
        address1: 'Main Road',
        address2: 'Near hospital',
        city: 'Delhi',
        country: {code: 'IND'},
        state: 'Delhi',
        zip: 96110085,
        practiceName: 'abc',
        primaryContactPerson: 'xyz',
        practicePrimaryEmail: 'abc@gmail.com',
        practiceType: 'yyy',
        doctorNames: ['asd', 'fgh']
      };

      scope.register(fakeForm);
      scope.$digest();
      expect($location.path('/login')).toEqual('/login');
    });

    it('Should invoke User.createUser failure', function () {
      User.createUser.andCallFake(function (obj, success, failure) {
        failure({data: {errors: []}, message: 'Internal Server Error'});
      });
      var fakeForm = {$valid: true};
      scope.user = {
        firstName: 'Rahul',
        lastName: 'Dev',
        email: 'rahul_dev@xyz.com',
        totalAccountPurchased: 0,
        phoneNumber: 1236547890,
        address1: 'Main Road',
        address2: 'Near hospital',
        city: 'Delhi',
        country: {code: 'IND'},
        state: 'Delhi',
        zip: 96110085,
        practiceName: 'abc',
        primaryContactPerson: 'xyz',
        practicePrimaryEmail: 'abc@gmail.com',
        practiceType: 'yyy',
        doctorNames: ['asd', 'fgh']
      };
      scope.register(fakeForm);
      scope.$digest();
      expect(scope.errors).not.toBeUndefined();
    });
  });

});
