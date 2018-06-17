import {assert} from 'chai';

const calculatePoints = (arrayScorePoints, lives) => {
  const lostLevels = [];
  let sum = 0;
  arrayScorePoints.forEach((level) => {
    if (level === 0) {
      lostLevels.push(level);
    } else {
      sum = sum + level;
    }
  });

  if (lostLevels.length >= 4) {
    return -1;
  } else {
    return sum + lives * 50;
  }
};

const runTimer = (startTime, updates) => {
  const timerObject = {time: startTime, gameOver: false};
  const tick = () => {
    timerObject.time--;
    if (timerObject.time === 0) {
      timerObject.gameOver = true;
    }
  };
  for (let i = 0; i < updates; i++) {
    tick();
  }
  return timerObject;
};

describe(`calculateScorePoints`, () => {
  it(`should return -1 - game over`, () => {
    assert.equal(-1, calculatePoints([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0));
  });

  it(`should return -1 - game over`, () => {
    assert.equal(-1, calculatePoints([100, 0, 50, 50, 150, 0, 0, 0, 0, 0], 0));
  });

  it(`should return -1 - game over`, () => {
    assert.equal(-1, calculatePoints([0, 0, 0, 150, 50, 150, 150, 100, 50, 0], 0));
  });

  it(`should return 350 - min score`, () => {
    assert.equal(350, calculatePoints([50, 50, 50, 50, 50, 50, 50, 0, 0, 0], 0));
  });

  it(`should return 750`, () => {
    assert.equal(750, calculatePoints([100, 100, 100, 100, 100, 100, 100, 0, 0, 0], 1));
  });

  it(`should return 900`, () => {
    assert.equal(900, calculatePoints([150, 100, 50, 0, 100, 50, 150, 0, 100, 100], 2));
  });

  it(`should return 1150`, () => {
    assert.equal(1150, calculatePoints([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 3));
  });

  it(`should return 1650 - max score!`, () => {
    assert.equal(1650, calculatePoints([150, 150, 150, 150, 150, 150, 150, 150, 150, 150], 3));
  });
});

describe(`runTimer`, () => {
  it(`should return 30`, () => {
    assert.equal(JSON.stringify({time: 30, gameOver: false}), JSON.stringify(runTimer(30, 0)));
  });

  it(`should return 1`, () => {
    assert.equal(JSON.stringify({time: 1, gameOver: false}), JSON.stringify(runTimer(30, 29)));
  });

  it(`should return 0 and game over!`, () => {
    assert.equal(JSON.stringify({time: 0, gameOver: true}), JSON.stringify(runTimer(30, 30)));
  });

  it(`should return 15`, () => {
    assert.equal(JSON.stringify({time: 15, gameOver: false}), JSON.stringify(runTimer(30, 15)));
  });

  it(`should return 10`, () => {
    assert.equal(JSON.stringify({time: 10, gameOver: false}), JSON.stringify(runTimer(20, 10)));
  });
});
