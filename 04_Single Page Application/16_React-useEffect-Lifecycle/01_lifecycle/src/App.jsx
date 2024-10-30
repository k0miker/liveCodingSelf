import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [showCounter, setShowCounter] = useState(false);

  console.log("Mounted: App.jsx");

  return (
    <>
      <h1>Lifecycle</h1>
      <button onClick={() => setShowCounter(!showCounter)}> Toggle Me! </button>
      {showCounter ? <Counter /> : ""}
    </>
  );
}

export default App;

// 1.) Mounting - Einhängen - Komponente wird Gerendert
// 1.5) useEffect()
// 2.) Updating - Aktualisierung - Komponent wird bei änderung gerendert
// 3.) Unmount - Abhängen - Komponent wird entfernt

// useEffect() = wird genutzt um hauptsächlich zu fetchen
// Syntax:
// useEffect(() => {
// side-effect
// },[dependencies])
// Die dependencies sind "Optional"
// [] = useEffect nur 1x beim Rendern ausgeführt wird
// [counter] = der useEffect kann getriggert werden, wenn sich die variable verändert
