import {assert} from 'chai';
import {calculateScoredPoints, runTimer} from "./game-data";

describe(`calculateScoredPoints`, () => {
  it(`should return -1 - game over`, () => {
    assert.equal(-1, calculateScoredPoints(undefined, 0));
  });

  it(`should return -1 - game over`, () => {
    assert.equal(-1, calculateScoredPoints([0, 0, 0, 150, 50, 150, 150, 100, 50, 0], 0));
  });

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
    assert.equal(1150, calculateScoredPoints([100, 100, 100, 100, 100, 100, 100, 100, 100, 100]));
  });

  it(`should return 1650 - max score!`, () => {
    assert.equal(1650, calculateScoredPoints([150, 150, 150, 150, 150, 150, 150, 150, 150, 150]));
  });
});

describe(`runTimer`, () => {
  it(`should return 30 seconds`, () => {
    assert.equal(JSON.stringify({time: 30, gameOver: false}), JSON.stringify(runTimer()));
  });

  it(`should return 1 second`, () => {
    assert.equal(JSON.stringify({time: 1, gameOver: false}), JSON.stringify(runTimer(29)));
  });

  it(`should return 0 second and game over!`, () => {
    assert.equal(JSON.stringify({time: 0, gameOver: true}), JSON.stringify(runTimer(30)));
  });

  it(`should return 15 seconds`, () => {
    assert.equal(JSON.stringify({time: 15, gameOver: false}), JSON.stringify(runTimer(15)));
  });

  it(`should return 10 seconds`, () => {
    assert.equal(JSON.stringify({time: 10, gameOver: false}), JSON.stringify(runTimer(10, 20)));
  });
});
