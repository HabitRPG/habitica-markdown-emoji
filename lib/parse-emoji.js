'use strict';

var specialCases = {
  '+1': '%2B1', // s3 urls can't have a + sign in them, use the html encoded version
  watch: 'watch-icon', // Firefox has a watch function on the object prototype - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/watch
};

module.exports = function parseEmoji (emoji) {
  if (emoji in specialCases) {
    emoji = specialCases[emoji];
  }

  return emoji;
};
