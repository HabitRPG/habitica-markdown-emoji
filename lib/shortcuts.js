'use strict';

var unicode = require('markdown-it-emoji/lib/data/full.json');
var vendoredShortcuts = require('markdown-it-emoji/lib/data/shortcuts.js');

var shortcuts = JSON.parse(JSON.stringify(unicode));

Object.keys(vendoredShortcuts).forEach(function appendShortcuts (key) {
  shortcuts[key] = shortcuts[key] || [];

  shortcuts[key] = shortcuts[key].concat(vendoredShortcuts[key]);
});

module.exports = shortcuts;
