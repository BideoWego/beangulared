const assert = require('assert');
const Game = require('../src/lib/game');

describe('Game', () => {
  it('has correct version number', () => {
    assert.equal(Game.VERSION, '0.1');
  });
});
