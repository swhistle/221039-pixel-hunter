import {assert} from 'chai';
import {calculateScoredPoints} from "./game-data";

describe(`calculateScoredPoints`, () => {
  it(`should return 350 - min score`, () => {
    assert.equal(350, calculateScoredPoints([50, 50, 50, 50, 50, 50, 50, 0, 0, 0], 0));
  });

  it(`should return 750 score`, () => {
    assert.equal(750, calculateScoredPoints([100, 100, 100, 100, 100, 100, 100, 0, 0, 0], 1));
  });

  it(`should return 900 score`, () => {
    assert.equal(900, calculateScoredPoints([150, 100, 50, 0, 100, 50, 150, 0, 100, 100], 2));
  });

  it(`should return 1150 score`, () => {
    assert.equal(1150, calculateScoredPoints([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 3));
  });

  it(`should return 1650 - max score!`, () => {
    assert.equal(1650, calculateScoredPoints([150, 150, 150, 150, 150, 150, 150, 150, 150, 150], 3));
  });
});
