### Einführung



![Prop Drilling vs Context](https://www.carlrippon.com/static/0d1f722d0fe4c2bc4c3d71595dbe67dd/ca682/prop-drilling-v-context.png)

### Lokaler Zustand (local state)
- Lokaler Zustand in React bezieht sich auf Daten/State, die spezifisch für eine einzelne Komponente sind
- Lokaler Zustand wird innerhalb einer Komponente verwaltet, kann aber über Props weitergegeben werden


    ```jsx
    const Counter = () => {
	    // wird nur in dieser Component benötigt => locale state
        const [count, setCount] = useState(0); 

        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Add one</button>
            </div>
        )
    }
    ```
### Globaler Zustand
- Daten, die von mehreren Komponenten geteilt bzw. benötigt werden
    - Oftmals von allen Komponenten, daher "global"
    - konzeptuell vergleichbar mit globalen Variablen

- Du könntest jede Zustandsvariable (state variable) global machen
    - Gib sie einfach an jede einzelne Komponente weiter!
    - Problem: Es wird sehr umständlich, wenn wir tief verschachtelte Strukturen haben 
    	- => es kommt zu prop drilling (siehe Bild oben links)

- Prop Drilling
    - Daten durch tief verschachtelte Komponentenbäume weitergeben
    - Schwer zu warten
    - Erfordert viel Schreibarbeit
    - Wenn eine Komponente eine Prop nicht benötigt, muss sie sie trotzdem weitergeben

```jsx
    const App = () => {
        const data = "Hello, prop drilling!"
        return <ParentComponent data={data} />
    }

    const ParentComponent = ({ data }) => {
        return <ChildComponent data={data} />
    }

    const ChildComponent = ({ data }) => {
        return <Target data={data} />
    }

    const Target = ({ data }) => {
        return <p>{data}</p>
    }

```


**Der obere Code visualisiert**
```js
<App> (enthält data = "Hello, prop drilling!")
│
├── <ParentComponent> (erhält "data" als prop)
│     │
│     ├── <ChildComponent> (erhält "data" als prop)
│           │
│           └── <Target> (erhält "data" als prop)
│                   └── Output: <p>Hello, prop drilling!</p>

```

- Hier haben wir "data" von "App" zu Target weitergegeben
	- ParentComponent kümmert sich nicht darum, muss es aber trotzdem weitergeben
	- ChildComponent kümmert sich nicht darum, muss es aber trotzdem weitergeben


## Context API
- Die React Context API kann verwendet werden, um das **prop drilling** zu vermeiden
- Daten werden allen Komponenten im Baum zur Verfügung gestellt,
    - ...ohne explizit props auf jeder Ebene zu übergeben

- Wir haben zwei Hauptteile: `Provider` und `Consumer`

- `Provider`
    - Dieser enthält die Zustandsvariable
    - Er ermöglicht den Zugriff auf seine Zustandsvariable für alle seine verschachtelten Komponenten
    - => Stellt den State bzw. die Daten zur Verfügung

- `Consumer`
    - Jede Komponente, die den Zustand von einem Provider abruft, ist ein Consumer
    - Dies geschieht durch  einen Hook (`useContext`)

**Oberes Code-Beispiel mit Context API**
```jsx
import React, { createContext, useContext } from "react";

const DataContext = createContext();

const App = () => {
    const data = "Hello, prop drilling";

    return (
        <DataContext.Provider value={data}>
            <ParentComponent>
        </DataContext.Provider>
    )
}

const ParentComponent = () => {
    return <ChildComponent />;
};

const ChildComponent = () => {
    return <Target />;
};

const Target = () => {

    // Hiermit holen wir uns den Context
    const data = useContext(DataContext);
    return <p>{data}</p>;
};
// Hinweis: Natürlich würden wir auch hier nicht alles in eine Datei packen
```


**Jetzt: Siehe Live Code**
Live Code Komponentstruktur visualisiert:
```js
[ MyContext.Provider (in App) ]  <-- Stellt Daten bereit 🛠️
    │
    ├── [ Layout ]  <--- Ein Container 🌌 (rendert die Kinder-Komponenten )
    │      │
    │      ├── [ Musicians ]  <--- 🎶 (Konsumiert Kontext: erhält `count` & `setCount` über Kontext)
    │      │       ⬇️
    │      │   "Klick die Cards, um den Zähler zu erhöhen!"
    │      │   
    │      └── [ Gigs ]  <--- 🎸 (Konsumiert Kontext: erhält `count` über Kontext)
    │              ⬇️
    │          "Zeigt an, wie oft die Karten geklickt wurden"

```

Oder anders:

```jsx
+---------------------------------------------------+
| `MyContext.Provider (in App.jsx)`                 |
|   [ Stellt bereit: count, setCount, message ]     |
|                                                   |
|   +-----------------------------------------+     |
|   | `Layout Komponente`                     |     |
|   |  [ keine Verwendung von Context ]       |     |
|   |                                         |     |
|   |   +--------------------+  +----------+  |     |
|   |   | `Musicians`        |  |  `Gigs`  |  |     |
|   |   | [Verwendet count & |  |[Verwendet|  |     |
|   |   |  setCount, um      |  | count zum|  |     |
|   |   |  Wert zu ändern]   |  | Anzeigen]|  |     |
|   |   +--------------------+  +----------+  |     |
|   +-----------------------------------------+     |
+---------------------------------------------------+
```

### Context auslagern

In der Regel wird der Context in einer eigenen Datei ausgelagert:

```js
project-root/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
│   ├── context/
│   │   ├── MyContext.js       // Die Datei, in der der Kontext erstellt wird
│   │   └── AnotherContext.js  // Ein weiterer Kontext, falls benötigt
│   │
│   ├── App.js                 // Hauptkomponente (mit dem Context-Provider)
│   ├── index.js               // Einstiegspunkt der Anwendung
│   ├── App.css                // Stilanweisungen für die Anwendung
│   └── utils/
│       └── helpers.js         // Hilfsfunktionen, die projektweit genutzt werden
│
└── package.json


```


Das sehe im Code zu Beispiel so aus:

Contexts -> ScoreContext.jsx
```jsx
import {useState, createContext} from 'react';

export const CounterContext = createContext();

function ScoreContextProvider(props) {
    const [score, setScore] = useState(0);

...
    
    return (
        <CounterContext.Provider value={{score,...}}>
            {props.children}
        </CounterContext.Provider>
    )
    
}

export default CounterContextProvider;
```

App.jsx

```jsx
import ScoreContextProvider from './Contexts/ScoreContext';
...

function App() {
  return (
    <ScoreContextProvider>
    // hier kann jetzt jede Komponente auf den Context zugreifen
	   ...
    </ScoreContextProvider>
  );
}

export default App;
```

### Anwendungsfälle
- Kann jemand Anwendungsfälle für globalen Zustand (und daher Context API) nennen?
    - Aktuell eingeloggte Benutzerdetails
    - Sprachauswahl
    - Theme / Dark Mode Umschalter
    - Einkaufskorb
    - Premium/Free Version einer Website/App

## Zusammenfassung
- **Lokaler Zustand**: Nur innerhalb einer Komponente verfügbar, kann an ihre Kinder weitergegeben werden.
- **Globaler Zustand**: Von vielen (oder sogar allen) Komponenten zugänglich und gemeinsam genutzt.
- **Prop Drilling**: Daten werden über viele Zwischenschritte als Props weitergegeben – aufwändig und schwer zu warten.
- **Context API**: Ermöglicht globalen Zustand in React, stellt Daten für alle untergeordneten Komponenten bereit und vermeidet Prop Drilling.