const assert = require('assert');
const Film = require('../models/film.js');

describe('Film', function () {

  let moonlight;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
  });

  it('should have a title', function () {
    const actual = moonlight.title;
    strictEqual(actual, 'Moonlight');
  });

  it('should have a genre', function () {
    const actual = moonlight.genre;
    strictEqual(actual, 'drama');
  });

  it('should have a year', function () {
    const actual = moonlight.year;
    strictEqual(actual, 2016);
  });

  it('should have a length', function () {
    const actual = moonlight.length;
    strictEqual(actual, 111);
  });

});