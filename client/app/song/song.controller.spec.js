'use strict';

describe('Controller: SongCtrl', function () {

  // load the controller's module
  beforeEach(module('musicappApp'));

  var SongCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SongCtrl = $controller('SongCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
