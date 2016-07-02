'use strict';

let parseEmoji = require('../lib/parse-emoji');

describe('parseEmoji', () => {
  it('renders watch as watch-icon (because watch is a function on the object prototype in Firefox)', () => {
    let result = parseEmoji('watch');

    expect(result).to.eql('watch-icon');
  });

  it('renders +1 as thumbsup', () => {
    let result = parseEmoji('+1');

    expect(result).to.eql('thumbsup');
  });

  it('renders -1 as thumbsdown', () => {
    let result = parseEmoji('-1');

    expect(result).to.eql('thumbsdown');
  });

  it('renders hocho as knife emoji', () => {
    let result = parseEmoji('hocho');

    expect(result).to.eql('knife');
  });

  it('renders uk as gb', () => {
    let result = parseEmoji('uk');

    expect(result).to.eql('gb');
  });

  it('renders uk as gb', () => {
    let result = parseEmoji('uk');

    expect(result).to.eql('gb');
  });

  it('renders moon as waxing_gibbous_moon', () => {
    let result = parseEmoji('moon');

    expect(result).to.eql('waxing_gibbous_moon');
  });

  it('renders running as runner', () => {
    let result = parseEmoji('running');

    expect(result).to.eql('runner');
  });

  it('renders lantern as izakaya_lantern', () => {
    let result = parseEmoji('lantern');

    expect(result).to.eql('izakaya_lantern');
  });

  it('renders honeybee as bee', () => {
    let result = parseEmoji('honeybee');

    expect(result).to.eql('bee');
  });

  it('renders flipper as dolphin', () => {
    let result = parseEmoji('flipper');

    expect(result).to.eql('dolphin');
  });

  it('renders feet as paw_prints', () => {
    let result = parseEmoji('feet');

    expect(result).to.eql('paw_prints');
  });

  it('renders facepunch as punch', () => {
    let result = parseEmoji('facepunch');

    expect(result).to.eql('punch');
  });

  it('renders family as man-woman-boy', () => {
    let result = parseEmoji('family');

    expect(result).to.eql('man-woman-boy');
  });

  it('renders couple as man_and_woman_holding_hands', () => {
    let result = parseEmoji('couple');

    expect(result).to.eql('man_and_woman_holding_hands');
  });

  it('renders boom as collision', () => {
    let result = parseEmoji('boom');

    expect(result).to.eql('collision');
  });

  it('renders hankey as poop', () => {
    let result = parseEmoji('hankey');

    expect(result).to.eql('poop');
  });

  it('renders shit as poop', () => {
    let result = parseEmoji('shit');

    expect(result).to.eql('poop');
  });

  it('renders book as open_book', () => {
    let result = parseEmoji('book');

    expect(result).to.eql('open_book');
  });

  it('renders memo as pencil', () => {
    let result = parseEmoji('memo');

    expect(result).to.eql('pencil');
  });

  it('renders laughing as satisfied', () => {
    let result = parseEmoji('laughing');

    expect(result).to.eql('satisfied');
  });

  it('renders car as red_car', () => {
    let result = parseEmoji('car');

    expect(result).to.eql('red_car');
  });

  it('renders phone as telephone', () => {
    let result = parseEmoji('phone');

    expect(result).to.eql('telephone');
  });

  it('renders boat as sailboat', () => {
    let result = parseEmoji('boat');

    expect(result).to.eql('sailboat');
  });

  it('renders hand as raised_hand', () => {
    let result = parseEmoji('hand');

    expect(result).to.eql('raised_hand');
  });

  it('renders email as envelope', () => {
    let result = parseEmoji('email');

    expect(result).to.eql('envelope');
  });

  it('renders exclamation as heavy_exclamation_mark', () => {
    let result = parseEmoji('exclamation');

    expect(result).to.eql('heavy_exclamation_mark');
  });
});
