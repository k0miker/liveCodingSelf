import { useEffect, useRef, useState } from "react";
import "./App.css";

const animations = [
  [
    { transform: "skew(0, 0)" },
    { transform: "skew(-15deg, -15deg)" },
    { transform: "skew(15deg, 15deg)" },
    { transform: "skew(0, 0)" },
  ],
  [{ rotate: "360deg" }],
  [{ filter: "hue-rotate(360deg)" }],
  [{ filter: "blur(0)" }, { filter: "blur(30px)" }, { filter: "blur(0px)" }],
  [
    { filter: "invert(100%)" },
    { filter: "invert(0%)" },
    { filter: "invert(100%)" },
    { filter: "invert(0%)" },
    { filter: "invert(100%)" },
    { filter: "invert(0%)" },
  ],
];
// Richtiges Keyframe format
const timing = { duration: 1000, iterations: 1 };

function App() {
  const [current, setCurrent] = useState(0);
  const target = useRef(null);

  const handleNext = () => {
    // if (current < 5) {
    //   setCurrent((prevCount) => prevCount + 1);
    // } else {
    //   setCurrent(0);
    // }
    setCurrent((prevCount) => (prevCount === 4 ? 0 : prevCount + 1));
  };

  useEffect(() => {
    target.current.animate(animations[current], timing);
    return () => {};
  }, [current]);

  return (
    <>
      <div className="buttons">
        <button onClick={handleNext}>Next</button>
      </div>
      <div>
        <h1>Animation {current}</h1>
      </div>

      <div ref={target} className="target"></div>
    </>
  );
}

export default App;
