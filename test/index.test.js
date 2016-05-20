'use strict';

let md = require('habitica-markdown');
let habiticaMarkdownEmojiPlugin = require('../');

md.use(habiticaMarkdownEmojiPlugin);

describe('habitica-markdown-emoji', () => {
  it('renders text emoji (:smile:) from s3', function () {
    let result = md.render('foo :smile: bar');

    expect(result).to.contain('foo <img class="habitica-emoji" style="height: 1.5em; width: 1.5em" src="https://s3.amazonaws.com/habitica-assets/cdn/emoji/smile.png" alt="smile"> bar');
  });

  it('renders unicode emoji from s3', function () {
    let result = md.render('foo 👍 bar');

    expect(result).to.contain('foo <img class="habitica-emoji" style="height: 1.5em; width: 1.5em" src="https://s3.amazonaws.com/habitica-assets/cdn/emoji/thumbsup.png" alt="thumbsup"> bar');
  });

  it('renders shortcut emoji from s3', function () {
    let result = md.render('foo :) bar');

    expect(result).to.contain('foo <img class="habitica-emoji" style="height: 1.5em; width: 1.5em" src="https://s3.amazonaws.com/habitica-assets/cdn/emoji/smiley.png" alt="smiley"> bar');
  });
});
