import { expect } from 'chai';
import * as board from '../src/lib/board';


describe('board', () => {

  describe('#build', () => {
    it('builds and returns an array', () => {
      const state = board.build();
      expect(state).to.be.an('array');
    });
  });

  xdescribe('#matches', () => {
    it('returns the number of matches', () => {
      const state = [
        [1, 1, 1, 3, 4, 5, 6, 2],
        [0, 1, 2, 2, 2, 3, 4, 5]
      ];
      const num = board.matches(state);
      expect(num).to.equal(2);
    });
  });

  xdescribe('#moves', () => {
    it('returns 0 when there are no moves', () => {
      const state = [
        [0, 1, 2, 3, 4, 5, 6, 7]
      ];
      const num = board.moves(state);
      expect(num).to.equal(0);
    });

    it('returns 1 for an AAxA in a row', () => {
      const state = [
        [1, 1, 0, 1, 0, 3, 2, 1]
      ];
      const num = board.moves(state);
      expect(num).to.equal(1);
    });

    it('returns 1 for an AxAA in a row', () => {
      const state = [
        [1, 0, 1, 1, 0, 3, 2, 1]
      ];
      const num = board.moves(state);
      expect(num).to.equal(1);
    });

    it('returns 1 for an AxA,xAx across two adjacent rows', () => {
      const state = [
        [0, 1, 0, 4, 3, 2, 1, 0],
        [2, 0, 2, 4, 3, 2, 1, 0]
      ];
      const num = board.moves(state);
      expect(num).to.equal(1);
    });
  });
});
