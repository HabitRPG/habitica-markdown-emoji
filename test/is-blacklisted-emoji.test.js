'use strict';

let isBlacklistedEmoji = require('../lib/is-blacklisted-emoji');

describe('isBlacklistedEmoji', () => {
  it('returns false for emojis not on the blacklist', function () {
    expect(isBlacklistedEmoji('smile')).to.eql(false);
    expect(isBlacklistedEmoji('lion')).to.eql(false);
    expect(isBlacklistedEmoji('heart')).to.eql(false);
    expect(isBlacklistedEmoji('camel')).to.eql(false);
  });

  it('returns true for gun', () => {
    expect(isBlacklistedEmoji('gun')).to.eql(true);
  });

  it('returns true for bomb', () => {
    expect(isBlacklistedEmoji('bomb')).to.eql(true);
  });
});
