import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Aktualisiere den Zähler jede Sekunde (1000 ms)

    return () => {
        clearInterval(intervalId) 
        console.log("Unmounting Timer.jsx" )
    };
    ;
  }, []); // Das leere Array [] sorgt dafür, dass der Effekt nur einmal beim Mount ausgeführt wird.
  return <div>Timer: {count}</div>;
};

export default Timer;
