import React, { useState } from "react";

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
    <>
      <h1>Current Count: {count}</h1>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={resetCount}>Reset</button>
    </>
  );
}
