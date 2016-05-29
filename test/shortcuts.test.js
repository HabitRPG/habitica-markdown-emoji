'use strict';

let shortcuts = require('../lib/shortcuts');

describe('shortcuts', () => {
  it('has arrays of values', function () {
    expect(shortcuts.smile).to.be.an('array');
  });

  it('returns an object that includes unicode characters', () => {
    expect(shortcuts.blush).to.include('😊');
  });
});
