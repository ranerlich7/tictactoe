import { useState } from "react";

function Square({ value }) {
  // the component html
  return (
    <>
      <button className="square">{value}</button>
    </>
  );
}

export default Square;
