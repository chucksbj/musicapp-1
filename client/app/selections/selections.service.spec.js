'use strict';

describe('Service: selections', function () {

  // load the service's module
  beforeEach(module('musicappApp'));

  // instantiate service
  var selections;
  beforeEach(inject(function (_selections_) {
    selections = _selections_;
  }));

  it('should do something', function () {
    expect(!!selections).toBe(true);
  });

});
