'use strict';

let shortcuts = require('../lib/shortcuts');

describe('shortcuts', () => {
  it('has arrays of values', function () {
    expect(shortcuts.smile).to.be.an('array');
  });

  it('returns an object of shortcuts that includes the default shortcuts from `markdown-it-emoji`', () => {
    expect(shortcuts.blush).to.include(':")');
  });

  it('returns an object that includes unicode characters', () => {
    expect(shortcuts.blush).to.include('😊');
  });
});
