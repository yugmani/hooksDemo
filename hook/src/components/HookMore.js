import React, { useState } from "react";

function HookMore() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
    // setCount((prevCount) => prevCount + 5);
  };
  return (
    <div className="hook-more">
      <h2>Hook using prevState</h2>
      <h4>Count: {count}</h4>
      <div>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Decrement
        </button>
        <button onClick={incrementByFive}>Increment by Five</button>
      </div>
    </div>
  );
}

export default HookMore;
