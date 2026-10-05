import { useState } from "react";
function Input() {
  const [val, setVal] = useState("");
  return (
    <div>
      <h1>Input Component</h1>
      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
        placeholder="Enter text..."
      />
      <button onClick={() => setVal("")}>Clear Data</button>
      <h1>{val}</h1>
    </div>
  );
}

export default Input;
