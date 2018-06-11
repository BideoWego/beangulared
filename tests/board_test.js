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
        [0, 1, 2, 2, 2, 3, 4, 5]
      ]);
      const num = board.matches();
      expect(num).to.equal(2);
    });
  });

  describe('#moves', () => {
    it('recognizes an AABA in a row', () => {
      const board = new Board([
        [1, 1, 0, 1, 0, 3, 2, 1]
      ]);
      const num = board.moves();
      expect(num).to.equal(1);
    });

    it('recognizes an ABAA in a row', () => {
      const board = new Board([
        [1, 0, 1, 1, 0, 3, 2, 1]
      ]);
      const num = board.moves();
      expect(num).to.equal(1);
    });

    xit('returns a single move in a column', () => {
      const board = new Board([
        [0, 1],
        [0, 1],
        [0, 1]
      ]);
    });
  });
});
