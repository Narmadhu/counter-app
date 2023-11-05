import { Button } from "@mui/material";
import React, { useState } from "react";
import "../App.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const decreaseCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="content">
      <h1 style={{ color: "white" }}>Current Count: {count}</h1>
      <div className="btns">
        <Button
          className="btn"
          variant="outlined"
          onClick={decreaseCount}
          style={{ color: "white" }}
        >
          Decrease
        </Button>
        <Button
          className="btn"
          variant="outlined"
          onClick={increaseCount}
          style={{ color: "white" }}
        >
          Increase
        </Button>
        <Button
          className="btn"
          variant="outlined"
          onClick={resetCount}
          style={{ color: "white" }}
        >
          Reset
        </Button>
      </div>

      {/* <button onClick={decreaseCount}>Decrease</button> */}
      {/* <button onClick={increaseCount}>Increase</button> */}
      {/* <button onClick={resetCount}>Reset</button> */}
    </div>
  );
}
