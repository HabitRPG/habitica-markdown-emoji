'use strict';

var specialCases = {
  '+1': '%2B1', // s3 urls can't have a + sign in them, use the html encoded version
  watch: 'watch-icon', // Firefox renders "watch" as the text `function watch() {[native code]}`. Maybe an Angular issue?
};

module.exports = function parseEmoji (emoji) {
  if (emoji in specialCases) {
    emoji = specialCases[emoji];
  }

  return emoji;
};
