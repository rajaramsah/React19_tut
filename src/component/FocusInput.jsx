import { useRef } from "react";
function FocusInput() {
  const inputRef = useRef(null);
  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  };
  return (
    <div>
      <h1>FocusInput</h1>
      <input ref={inputRef} type="text" placeholder="Enter User Name" />
      <button onClick={inputHandler}>FocusInput</button>
    </div>
  );
}

export default FocusInput;
