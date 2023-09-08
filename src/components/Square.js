import { useState } from "react";

function Square({ value, onSquareClick }) {
  // the component html
  return (
    <>
      <button onClick={onSquareClick} className="square">
        {value}
      </button>
    </>
  );
}

export default Square;
