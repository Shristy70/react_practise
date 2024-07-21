import { useState } from "react";

const Ludo = () => {
  const [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  const fun = () => {
    console.log(`moves = ${moves.blue}`);
    setMoves((move) => {
      return { ...move, blue: move.blue + 1 };
    });
  };
  const fun2 = () => {
    console.log(`moves = ${moves.red}`);
    setMoves((move) => {
      return { ...move, red: move.red + 1 };
    });
  };
  const fun3 = () => {
    console.log(`moves = ${moves.yellow}`);
    setMoves((move) => {
      return { ...move, yellow: move.yellow + 1 };
    });
  };
  const fun4 = () => {
    console.log(`moves = ${moves.green}`);
    setMoves((move) => {
      return { ...move, green: move.green + 1 };
    });
  };
  return (
    <>
      <h1>create ludo</h1>
      <div className="board">
        <p>Blue move : {moves.blue}</p>
        <button
          style={{ backgroundColor: "blue", color: "white", padding: "10px" }}
          onClick={fun}
        >
          +1
        </button>
        <p>red move : {moves.red}</p>
        <button
          style={{ backgroundColor: "red", color: "white", padding: "10px" }}
          onClick={fun2}
        >
          +1
        </button>
        <p>yellow move :{moves.yellow} </p>
        <button
          style={{ backgroundColor: "yellow", padding: "10px" }}
          onClick={fun3}
        >
          +1
        </button>
        <p>green move : {moves.green}</p>
        <button
          style={{ backgroundColor: "green", color: "white", padding: "10px" }}
          onClick={fun4}
        >
          +1
        </button>
      </div>
    </>
  );
};
export default Ludo;
