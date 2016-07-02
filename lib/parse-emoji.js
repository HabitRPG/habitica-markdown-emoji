'use strict';

var specialCases = {
  watch: 'watch-icon', // Firefox has a watch function on the object prototype - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/watch

  '+1': 'thumbsup', // NOTE: s3 urls can't have a + sign in them, so if we ever reverse this, keep that in mind
  '-1': 'thumbsdown',
  boat: 'sailboat',
  book: 'open_book',
  boom: 'collision',
  car: 'red_car',
  couple: 'man_and_woman_holding_hands',
  email: 'envelope',
  exclamation: 'heavy_exclamation_mark',
  facepunch: 'punch',
  family: 'man-woman-boy',
  feet: 'paw_prints',
  flipper: 'dolphin',
  hand: 'raised_hand',
  hankey: 'poop',
  hocho: 'knife',
  honeybee: 'bee',
  lantern: 'izakaya_lantern',
  laughing: 'satisfied',
  memo: 'pencil',
  moon: 'waxing_gibbous_moon',
  phone: 'telephone',
  running: 'runner',
  shit: 'poop',
  uk: 'gb',
};

module.exports = function parseEmoji (emoji) {
  if (emoji in specialCases) {
    emoji = specialCases[emoji];
  }

  return emoji;
};
