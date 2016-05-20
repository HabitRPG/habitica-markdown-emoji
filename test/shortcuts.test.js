'use strict';

let shortcuts = require('../lib/shortcuts');

describe('shortcuts', () => {
  it('returns an object of shortcuts that includes the default shortcuts from `markdown-it-emoji`', () => {
    expect(shortcuts.blush).to.include(':")');
  });

  it('returns an object that includes unicode characters', () => {
    expect(shortcuts.blush).to.include('😊');
  });
});
