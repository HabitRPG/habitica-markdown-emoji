'use strict';

var unicodeSet = require('markdown-it-emoji/lib/data/full.json');

var shortcuts = {};

Object.keys(unicodeSet).forEach(function addKey (key) {
  var emojis = unicodeSet[key];

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

module.exports = shortcuts;
