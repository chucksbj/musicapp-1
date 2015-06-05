'use strict';

describe('Controller: SheetMusicDisplayCtrl', function () {

  // load the controller's module
  beforeEach(module('musicappApp'));

  var SheetMusicDisplayCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SheetMusicDisplayCtrl = $controller('SheetMusicDisplayCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
