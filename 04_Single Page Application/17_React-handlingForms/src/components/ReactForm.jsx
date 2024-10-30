import { useState } from "react";

const ReactForm = () => {
  // 1. State-Verwaltung -> Zustand von Name wird mit dem setter setName verwaltet und nicht im DOM
  const [name, setName] = useState("");

  // 3. Ereignis Händler -> wenn input sich ändert, speichere den value in "name"
  const handleForm = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h2>1. Controlled Component</h2>
      <form action="">
        <label htmlFor="">Name:</label>
        {/* 2. Bindung von Value und State -> Value des Inputs wird an "name" gebunden */}
        <input type="text" value={name} onChange={handleForm} />
      </form>
    </div>
  );
};
// 4. Einheitliche Datenflüsse -> durch den State bietet die Component eine konsistenten Datenfluss
export default ReactForm;

// Vorteile

// React-Zustand als einzige Warheitsquelle.

// Einheitliche Datenquelle: Eine einzige Quelle für den Wert verbessert die Nachverfolgbarkeit.
// Erleichterte Validierung: Validierungen und Berechnungen basieren direkt auf dem State.
// Einfache Integration: Zentrale Steuerung erleichtert die Integration mit anderen Komponenten.