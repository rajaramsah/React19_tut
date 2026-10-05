import React, { useState } from "react";
function State() {
  const [count, setCount] = useState(0);
  const [rCount, setRCount] = useState(10);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleReverse = () => {
    setRCount(rCount - 1);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>Reverse count: {rCount} times</p>

      <button
        style={{
          padding: "5px",
          backgroundColor: "darkgreen",
          color: "white",
          borderRadius: "5px",
          marginRight: "5px",
        }}
        onClick={handleClick}
      >
        Click me
      </button>
      <button
        style={{
          padding: "5px",
          backgroundColor: "darkred",
          color: "white",
          borderRadius: "5px",
        }}
        onClick={handleReverse}
      >
        Reverse
      </button>
    </div>
  );
}

export default State;
