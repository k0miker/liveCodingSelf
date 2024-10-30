import { useState } from "react";
import "./App.css";
import User from "./components/User";

function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        Show user: {count}
      </button>
      <User id={count} />
    </>
  );
}

export default App;
