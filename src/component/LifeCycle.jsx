import { useEffect } from "react";

const LifeCycle = ({ count, data }) => {
  useEffect(() => {
    console.log("mounting phase only");
  }, []);
  useEffect(() => {
    console.log("updating phase only");
  }, [count]);
  return (
    <div>
      <h1>Counting{count}</h1>
      <h1>Data{data}</h1>
    </div>
  );
};

export default LifeCycle;
