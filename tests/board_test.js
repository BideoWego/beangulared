import { expect } from 'chai';
import Board from '../src/lib/board';

describe('Board', () => {
  it('builds a state when instantiated without one', () => {
    const board = new Board();
    expect(board.state).to.be.an('array');
  });
});
