import LifeCycle from "./LifeCycle";
import { useState } from "react";

function Counter() {
  const [count, setCounter] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true);

  // useEffect(() => {
  //   //callOnce();
  //   counterFunction();
  // }, [count]);

  // function counterFunction() {
  //   console.log("counterFunction", count);
  // }
  // function callOnce() {
  //   console.log("Call function");
  // }

  return (
    <div>
      {display ? <LifeCycle count={count} data={data} /> : null}
      <button onClick={() => setCounter(count + 1)}>Counter</button>
      <button onClick={() => setData(data + 1)}>data</button>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
    </div>
  );
}

export default Counter;
