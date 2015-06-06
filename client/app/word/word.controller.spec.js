'use strict';

describe('Controller: WordCtrl', function () {

  // load the controller's module
  beforeEach(module('musicappApp'));

  var WordCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WordCtrl = $controller('WordCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
