'use strict';

describe('Controller: SheetMusicCtrl', function () {

  // load the controller's module
  beforeEach(module('musicappApp'));

  var SheetMusicCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SheetMusicCtrl = $controller('SheetMusicCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
