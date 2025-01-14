import React from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <Square
          squares={squares[0]}
          handleClick={() => handleClick(0)}
        ></Square>
        <Square
          squares={squares[1]}
          handleClick={() => handleClick(1)}
        ></Square>
        <Square
          squares={squares[2]}
          handleClick={() => handleClick(2)}
        ></Square>
      </div>
      <div>
        <Square
          squares={squares[3]}
          handleClick={() => handleClick(3)}
        ></Square>
        <Square
          squares={squares[4]}
          handleClick={() => handleClick(4)}
        ></Square>
        <Square
          squares={squares[5]}
          handleClick={() => handleClick(5)}
        ></Square>
      </div>
      <div>
        <Square
          squares={squares[6]}
          handleClick={() => handleClick(6)}
        ></Square>
        <Square
          squares={squares[7]}
          handleClick={() => handleClick(7)}
        ></Square>
        <Square
          squares={squares[8]}
          handleClick={() => handleClick(8)}
        ></Square>
      </div>
    </div>
  );
}
