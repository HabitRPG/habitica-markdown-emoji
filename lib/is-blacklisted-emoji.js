'use strict';

var BLACKLIST = {
  bomb: true,
  gun: true,
};

module.exports = function isBlacklistedEmoji (emoji) {
  return emoji in BLACKLIST;
};
