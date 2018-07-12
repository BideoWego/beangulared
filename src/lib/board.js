/**
 * @module board
 */


const _boardSize = 8;
const _cellTypes = [0, 1, 2, 3, 4, 5, 6];


/**
 * Create and returns a 2d array populated with numbers 0-6
 * @param {number} [size=8] - An integer to use as the width and height of the board
 * @returns {Array} The built board
 */
export function build(size = _boardSize) {
  const board = [];

  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const rand = Math.random() * _cellTypes.length;
      const index = Math.floor(rand);
      const cell = _cellTypes[index];
      row.push(cell);
    }
    board.push(row);
  }

  return board;
}
