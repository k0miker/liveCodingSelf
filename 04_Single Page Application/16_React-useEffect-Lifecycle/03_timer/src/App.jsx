import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(true);
  console.log("Mounted: App.jsx");
  

  return (
    <>
      <button onClick={() => setShowTimer(!showTimer)}>Stop Timer</button>
      {showTimer && <Timer />}
    </>
  );
}

export default App;
