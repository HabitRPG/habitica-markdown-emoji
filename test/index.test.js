'use strict';

let MarkdownIt = require('markdown-it');
let habiticaMarkdownEmojiPlugin = require('../');
let md = new MarkdownIt();

md.use(habiticaMarkdownEmojiPlugin);

describe('habitica-markdown-emoji', () => {
  it('renders text emoji (:smile:) from s3', function () {
    let result = md.render('foo :smile: bar');

    expect(result).to.contain('foo <img class="habitica-emoji" style="height: 1.5em; width: 1.5em" src="https://s3.amazonaws.com/habitica-assets/cdn/emoji/smile.png" alt="smile"> bar');
  });

  xit('renders unicode emoji from s3', function () {
    let result = md.render('foo 👍 bar');

    expect(result).to.contain('foo <img class="habitica-emoji" style="height: 1.5em; width: 1.5em" src="https://s3.amazonaws.com/habitica-assets/cdn/emoji/thumbsup.png" alt="thumbsup"> bar');
  });

  xit('renders shortcut emoji from s3', function () {
    let result = md.render('foo :) bar');

    expect(result).to.contain('foo <img class="habitica-emoji" style="height: 1.5em; width: 1.5em" src="https://s3.amazonaws.com/habitica-assets/cdn/emoji/smiley.png" alt="smiley"> bar');
  });

  it('does not render emoji shortcuts in hyperlink', function () {
    let result = md.render('text http://example.com/foo:Preferences text');

    expect(result).to.contain('text http://example.com/foo:Preferences text');
  });

  it('renders melior emoji', function () {
    let result = md.render('foo :melior: bar');

    expect(result).to.contain('foo <img class="habitica-emoji" style="height: 1.5em; width: 1.5em" src="https://s3.amazonaws.com/habitica-assets/cdn/emoji/melior.png" alt="melior"> bar');
  });
});
