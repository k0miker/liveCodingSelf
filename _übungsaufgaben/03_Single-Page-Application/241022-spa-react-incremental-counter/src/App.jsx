import { useState } from "react";
import Text from "./components/Text";

function App() {
  const [counter, setCounter] = useState(0);

  const inCounter = () => {
    setCounter((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <Text count={counter} />
      <button onClick={inCounter}>Erhöhen</button>
    </div>
  );
}

export default App;
