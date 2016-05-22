'use strict';

var unicode = require('markdown-it-emoji/lib/data/full.json');
var vendoredShortcuts = require('markdown-it-emoji/lib/data/shortcuts.js');

var shortcuts = {};

function addValues (set) {
  Object.keys(set).forEach(function addKey (key) {
    var emojis = set[key];

    shortcuts[key] = shortcuts[key] || [];

    if (typeof emojis === 'string') {
      emojis = [emojis];
    }

    shortcuts[key].push.apply(shortcuts[key], emojis); // eslint-disable-line prefer-spread
  });
}

addValues(unicode);
addValues(vendoredShortcuts);

module.exports = shortcuts;
