'use strict';

let parseEmoji = require('../lib/parse-emoji');

describe('parseEmoji', () => {
  it('returns %2B1 for +1 since s3 urls cannot handle the plus sign', () => {
    let result = parseEmoji('+1');

    expect(result).to.eql('%2B1');
  });

  it('returns watch-icon for watch because Firefox renders it as text', () => {
    let result = parseEmoji('watch');

    expect(result).to.eql('watch-icon');
  });
});
