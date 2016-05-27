'use strict';

var markdownitEmoji = require('markdown-it-emoji');

var parseEmoji = require('./lib/parse-emoji');
// var shortcuts = require('./lib/shortcuts');
var customEmojis = require('./lib/custom-emojis');

// https://github.com/markdown-it/markdown-it-emoji/tree/4d5f6af1b6efb0975dae2ac51dbe6252636724aa#change-output
function emojiPlugin (md) {
  md.use(markdownitEmoji, {
    defs: customEmojis,
    // shortcuts: shortcuts,
    shortcuts: {},
  });

  md.renderer.rules.emoji = function markdownEmojiRules (token, idx) {
    var src;
    var style;
    var emoji = token[idx].markup;

    emoji = parseEmoji(emoji);

    src = 'https://s3.amazonaws.com/habitica-assets/cdn/emoji/' + emoji + '.png';
    style = 'height: 1.5em; width: 1.5em';

    return '<img class="habitica-emoji" style="' + style + '" src="' + src + '" alt="' + emoji + '">';
  };
}

module.exports = emojiPlugin;
