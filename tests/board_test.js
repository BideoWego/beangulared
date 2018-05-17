import { expect } from 'chai';
import Board from '../src/lib/board';

describe('Board', () => {

  describe('#constructor', () => {
    it('builds a state when instantiated without one', () => {
      const board = new Board();
      expect(board.state).to.be.an('array');
    });
  });

  describe('#matches', () => {
    it('returns the number of matches', () => {
      const board = new Board([
        [1, 1, 1, 3, 4, 5, 6, 2],
        [1, 2, 3, 4, 5, 6, 6, 2],
        [1, 3, 4, 5, 6, 7, 6, 2],
        [3, 4, 5, 6, 7, 0, 1, 2],
        [4, 5, 6, 7, 0, 1, 2, 3],
        [5, 6, 7, 7, 7, 2, 3, 4],
        [6, 7, 0, 1, 2, 3, 4, 5],
        [7, 0, 1, 2, 3, 3, 3, 3]
      ]);
      const matches = board.matches();
      console.log(JSON.stringify(matches, null, 2));
      expect(matches).to.be.null;
    });
  });
});
