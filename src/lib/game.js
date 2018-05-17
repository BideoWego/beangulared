import Board from './board';

class Game {
  constructor(board=null) {
    this.board = new Board(board);
  }
}

export default Game;
