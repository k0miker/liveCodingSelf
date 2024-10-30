import { useState } from "react";

function Room() {
  const [light, setLight] = useState(true);

  const className = light ? "lit" : "dark";
  const text = `The room is ${className}`;

  return (
    <div className={className}>
      <p>{text}</p>
      <button onClick={(e) => setLight(!light)}>Light switch</button>
    </div>
  );
}

export default Room;