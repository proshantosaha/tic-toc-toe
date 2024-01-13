import React, { useState } from "react";

const History = ({ history, jumpTo }) => {
  const moves = history.map((squares, move) => {
    let discription;
    if (move > 0) {
      discription = ` go to the move # ${move}`;
    } else {
      discription = ` go to the first game # ${move}`;
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{discription}</button>
      </li>
    );
  });
  return (
    <div>
      <ol>{moves}</ol>
    </div>
  );
};

export default History;
