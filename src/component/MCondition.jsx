import React, { useState } from "react";
function MCondition() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>Multiple Conditions:- {count}</h1>
      {count === 1 ? (
        <h2>Count is 1</h2>
      ) : count === 2 ? (
        <h2>Count is 2</h2>
      ) : (
        <h2>Count is not 1 or 2</h2>
      )}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MCondition;
