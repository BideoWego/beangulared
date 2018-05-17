
const _size = 8;
const _types = [0, 1, 2, 3, 4, 5, 6, 7];
const _matchSize = 3;

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

  static get matchSize() {
    return _matchSize;
  }

  matches() {
    const matches = [];

    for (let i = 0; i < Board.size; i++) {
      const row = this._state[i];
      const column = this._state.map(r => r[i]);
      for (let j = 0; j <= Board.size - Board.matchSize; j++) {
        const [a, b, c] = row.slice(j, j + Board.matchSize);

        if (a === b && b === c) {
          matches.push({
            type: a,
            points: [{
              x: j,
              y: i
            }, {
              x: j + 1,
              y: i
            }, {
              x: j + 2,
              y: i
            }]
          });
        }

        const [e, f, g] = column.slice(j, j + Board.matchSize);

        if (e === f && f === g) {
          matches.push({
            type: e,
            points: [{
              x: i,
              y: j
            }, {
              x: i,
              y: j + 1
            }, {
              x: i,
              y: j + 2
            }]
          });
        }
      }
    }

    return matches;
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
