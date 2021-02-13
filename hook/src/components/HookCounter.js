import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Functional Component</h2>
      <h4>You hooked {count} times</h4>
      <button onClick={() => setCount(count + 1)}>Hook here</button>
    </div>
  );
}

export default HookCounter;
