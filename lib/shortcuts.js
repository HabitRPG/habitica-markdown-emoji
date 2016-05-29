'use strict';

var unicode = require('markdown-it-emoji/lib/data/full.json');
var vendoredShortcuts = require('markdown-it-emoji/lib/data/shortcuts.js');

var shortcuts = {};

function addValues (set) {
  Object.keys(set).forEach(function addKey (key) {
    var emojis = set[key];

    if (key === 'watch') {
      // Special handling for Firefox where watch is on the object prototype - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/watch
      shortcuts[key] = [];
    } else {
      shortcuts[key] = shortcuts[key] || [];
    }

    if (typeof emojis === 'string') {
      emojis = [emojis];
    }

    shortcuts[key].push.apply(shortcuts[key], emojis); // eslint-disable-line prefer-spread
  });
}

addValues(unicode);
addValues(vendoredShortcuts);

module.exports = shortcuts;
