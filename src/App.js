import { useState } from 'react';

import './App.css';
import black_pawn from "./black_pawn.png";
import white_pawn from "./white_pawn.png";


let matrix = [
  [null, null, null, null, null, null, null, null],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null]
];

function Board() {
  const [secondClick, setSecondClick] = useState(false);
  const [squareClicked, setSquareClicked] = useState();
  const [squares, setSquares] = useState(matrix);

  let b = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      b.push(<Square figure={squares[row][col]} onSquareClick={() => handleClick(row, col)} />);
    }
  }

  function handleClick(row, col) {
    if (secondClick === false) {
      if (squares[row][col] === "P") {
        setSecondClick(true);
        setSquareClicked([row, col]);
      }
    } else {
      if (row !== squareClicked[0] || col !== squareClicked[1]) {
        const nextSquares = squares.slice();
        setSecondClick(false);
        nextSquares[row][col] = "P";
        nextSquares[squareClicked[0]][squareClicked[1]] = null;
        setSquares(nextSquares);
      }

    }
  }

  return (
    <div className='board'>
      {b}
    </div>
  );
}

function Square({ figure, onSquareClick }) {
  let f;

  if (figure === "P") {
    f = <Pawn />;
  } else {
    f = "";
  }

  return (
    <div className="square" onClick={onSquareClick}>
      {f}
    </div>
  );
}

function Pawn() {
  return (
    <img className="pawn" src={black_pawn} alt="pawn" />
  );
}

export default Board;
