**Kleine Aufgabe**: 
- Lagere in unserer Lucky Numbers App (13_SPA-React-intro => 1_intro-app) die Anzeige von "Critical Success" (also der Zeile `{number === 20 ? <h2>Critical success</h2> : <p>Fun!</p>}`) in eine eigene Component aus. 
- Du musst also eine neue Datei mit einer neuen Component erstellen
- diese Component musst du dann importieren

Somit sehe unsere Haupt-Component ungefähr wie folgt aus:

```jsx
import CriticalSuccess from "./CriticalSuccess";

function App() {
  const number = Math.round(Math.random() * 20); // Zufallszahl zwischen 0 und 20

  return (
    <>
      <h1>Hello world</h1>
      <p>Your lucky number is {number}</p>
      <CriticalSuccess num={number} />
    </>
  )
}

export default App
```
