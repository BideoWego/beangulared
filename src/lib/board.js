
const _size = 8;
const _types = [0, 1, 2, 3, 4, 5, 6, 7];

class Board {
  constructor(state=null) {
    this._state = state ? state : this._build();
  }

  get state() {
    return this._state;
  }

  static get size() {
    return _size;
  }

  static get types() {
    return _types;
  }

  _build() {
    const result = [];

    for (let i = 0; i < Board.size; i++) {
      const row = [];
      for (let j = 0; j < Board.size; j++) {
        const rand = Math.random() * Board.types.length;
        const index = Math.floor(rand);
        const type = Board.types[index];
        row.push(type);
      }
      result.push(row);
    }

    return result;
  }
}

export default Board;
