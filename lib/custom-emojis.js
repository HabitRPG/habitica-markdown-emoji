var defaultEmojis = require('markdown-it-emoji/lib/data/full.json');
var emojis = JSON.parse(JSON.stringify(defaultEmojis));
var customEmojis = [
  'bowtie',
  'melchior',
  'metal',
  'neckbeard',
  'octocat',
  'shipit',
  'squirrel',
  'trollface',
];

customEmojis.forEach(function addToEmojis (emoji) {
  emojis[emoji] = emoji;
});

module.exports = emojis;
