/*
In einigen Seltenen Fällen möchtest du vielleicht direkten Zugriff auf die DOM
z.b.:
  - Styling
  - Verwaltung eines Fokus
Du kannst auf das DOM zugreifen, indem du den useRef Hook verwendest um eine Referenz zu einem Element zu erstellen. 
Es gibt auch noch andere Anwendungsfälle für useRef. Wenn du Lust/Zeit hast, kannst du da gerne weiterforschen :) 

Wir bauen eine Anwendung zum testen von Farbverläufshintergründen
 - Die Anwendung fragt nach 2 Farben
- Sie hat einen Button um die Werte der Eingaben zu randomisieren
- Wenn die Anwendung startet, sollten die Werte randomisiert werden, und der erste Eingabefokus gesetzt werden. 
*/

import { useState, useEffect, useRef } from "react";
// import "./App.css";

// Helper Funktion die mir einen Farbwert zwischen 0 und 360 ausgibt.
const randomColor = () => {
  return Math.floor(Math.random() * 360);
};

function App() {
  const [colorA, setColorA] = useState(360);
  const [colorB, setColorB] = useState(360);
  const mainRef = useRef(null); // ich initialisiere meinen Ref mit null
  const inputRef = useRef(null);
  // bei dem ersten aufruf sollen die farben randomisiert werden und der fokus auf den ersten inputRef gesetzt werden. 
  useEffect(() => {
    randomize();
    if(inputRef) {
      inputRef.current.focus();
    }
  }, [])

  // immer wenn sich colorA oder colorB verändert, soll der style von unserem main div verändert werden.
  useEffect(() => {
    const a = `hsl(${colorA}, 50%, 70%)`;
    const b = `hsl(${colorB}, 50%, 70%)`;
    console.log(mainRef);
    // Falls mainRef defininiert ist, update den background Stil zu einem linearen Gradient.  
    if(mainRef) {
      console.log("if statement wird ausgeführt")
      console.log("a", a);
      console.log("b", b)
      mainRef.current.style.background = `linear-gradient(45deg, ${a}, ${b})`;
    }
  }, [colorA, colorB]); // wird immer ausgeführt wenn sich entweder colorA oder colorB verändern. 

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "colorA") {
      setColorA(value);
      console.log("colorA ", colorA);
    } else if (name === "colorB") {
      setColorB(value);
      console.log("colorB ", colorB);
    }
  };

  const randomize = () => {
    setColorA(randomColor());
    setColorB(randomColor());
  }
  return (
    <>
      <main ref={mainRef}>
        <div>
          <input
            ref={inputRef}
            type="range"
            min="0"
            max="360"
            step="1"
            name="colorA"
            value={colorA}
            onChange={handleChange}
          />
          <br />
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            name="colorB"
            value={colorB}
            onChange={handleChange}
          />
        </div>
        <button onClick={randomize}>Randomize</button>
      </main>
    </>
  );
}

export default App;
