'use strict';

describe('Controller: InstrumentCtrl', function () {

  // load the controller's module
  beforeEach(module('musicappApp'));

  var InstrumentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstrumentCtrl = $controller('InstrumentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
