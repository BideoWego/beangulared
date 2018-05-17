import { expect } from 'chai';
import Game from '../src/lib/game';
import Board from '../src/lib/board';

describe('Game', () => {
  it('has a board', () => {
    const game = new Game();
    expect(game.board).to.not.be.null;
    expect(game.board).to.be.an.instanceof(Board);
  });
});
