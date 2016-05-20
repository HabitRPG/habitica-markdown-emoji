'use strict';

var unicode = require('markdown-it-emoji/lib/data/full.json');
var vendoredShortcuts = require('markdown-it-emoji/lib/data/shortcuts.js');

var shortcuts = {};

function addValues (set) {
  Object.keys(set).forEach(function addKey (key) {
    shortcuts[key] = shortcuts[key] || [];

    shortcuts[key] = shortcuts[key].concat(set[key]);
  });
}

addValues(unicode);
addValues(vendoredShortcuts);

module.exports = shortcuts;
