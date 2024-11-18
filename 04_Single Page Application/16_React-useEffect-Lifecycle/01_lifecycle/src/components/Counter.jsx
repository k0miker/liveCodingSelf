import { useEffect, useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter.jsx: side-effect");
    return () => console.log("Unmount: Counter.jsx || cleanup");
  }, []); // Ein Leeres Array bedeuted, dass der useEffect nur 1x und zwar beim Rendern ausgeführt wird.

  console.log("Mounted: Counter.jsx | Count is: ", count);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
};

export default Counter;
