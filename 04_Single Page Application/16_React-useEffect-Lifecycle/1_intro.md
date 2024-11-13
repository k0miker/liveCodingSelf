
## Der Lebenszyklus einer Komponente

- Das Leben eines React-Komponenten-Lebenszyklus kann in drei Hauptphasen unterteilt werden:

    - Mounting (Einhängen): Das erste Mal, dass eine Komponentenfunktion ausgeführt wird
    - Updating (Aktualisierung): Etwas wie eine Zustandsänderung veranlasst eine Komponentenfunktion, erneut ausgeführt zu werden
    - Unmounting (Aushängen): Eine Komponente wird von einer Seite entfernt

- Mini-Code-Beispiel
    ```js
    const App = function() {
        const [showCounter, setShowCounter] = useState(false)
        console.log("App rendering, showCounter is " + showCounter)
        return (
            <main>
                <button onClick={() => setShowCounter(!showCounter)}>
                    Toggle counter
                </button>
                {showCounter ? <Counter /> : <p>---</p>}
            </main>
        )
    }

    const Counter = function() {
        const [count, setCount] = useState(0)
        console.log("Counter rendering, count is " + count)
        return (
            <p onClick={() => { setCount(count + 1) }}>{counter} clicks</p>
        )
    }
    ```

- Stellen wir uns das Leben einer `Counter` Komponente vor
    - Es sieht so aus, als ob immer entweder ein oder kein `Counter` sichtbar ist
    - Wenn die `App` zum ersten Mal rendert, ist `showCounter` false: Noch kein `Counter`
    - Wenn `showCounter` auf true wechselt, rendert `App` erneut und rendert `Counter`
    - Wenn `count` innerhalb von `Counter` ändert, rendert es erneut, aber App nicht
    - Wenn `showCounter` auf true wechselt, rendert `App` erneut und `Counter` wird entfernt

- Lernen wir einen neuen Hook, den wir verwenden können, um Aktionen zu verfolgen, die das Leben von `Counter` betreffen
    - Der `useEffect` Hook

- Mit `useEffect` können wir React sagen, dass es zu bestimmten Lebenszykluszeiten etwas tun soll

    ```js
    const Counter = function() {
        const [count, setCount] = useState(0)

        useEffect(() => {
            // Wenn du den nachfolgenden console.log zweimal siehst, 
            // liegt es wahrscheinlich an <StrictMode>
            // Versuche, ohn in main.jsx auszukommentieren
            console.log("Counter useEffect")
            return () => console.log("Counter useEffect cleanup")
        }, [])

        console.log("Counter rendering, count is " + count)
        return (
            <button onClick={() => { setCount(count + 1) }}>
                Clicked {count} times
            </button>
        )
    }
    ```

## Terminologie

- Wer erinnert sich an den Begriff "reine Funktion" aus PB?
    - Bei gleichen Eingaben erzeugt die Funktion immer die gleiche Ausgabe
    - Keine Nebenwirkungen: Die Funktion interagiert nicht mit externem Code

- Nebenwirkungen
    - Deshalb heißt `useEffect` useEffect
    - Es wird verwendet, um Nebenwirkungen in funktionalen Komponenten zu behandeln

- Im Kontext von React sind Nebenwirkungen Operationen, die nach dem Rendern stattfinden
    - Zum Beispiel Netzwerkanfragen stellen

- Eine der Hauptanwendungen von `useEffect` ist das Abrufen von Daten

    ```js
    function User({ id }) {
        const [details, setDetails] = useState({})

        fetch("/api/userdata/" + id).then(res => res.json()).then(data => {
            setDetails(data)
        })

        return <div>...</div>
    }
    ```

- Denk an den Lebenszyklus
    - Wenn `User` rendert, startet es einen `fetch`
    - Wenn der Fetch abgeschlossen ist, wird eine Zustandsvariable geändert
    - Dies verursacht ein erneutes Rendern
    - Dieses erneute Rendern veranlasst den `fetch` _wieder_ zu starten
    - Wenn der Fetch abgeschlossen ist, wird eine Zustandsvariable geändert
    - Dies verursacht erneut ein Rendern
    - **...unendliche Render-Schleife...**

- Ein `useEffect` kann so eingestellt werden, dass es **nur beim ersten Rendern** ausgeführt wird 
    - => Keine unendliche Schleife!

```js
    function User({ id }) {
        const [details, setDetails] = useState({})

        useEffect(() => {
            fetch("/api/userdata/" + id).then(res => res.json()).then(data => {
                setDetails(data)
            })
        }, [])

        return <div>...</div>
    }
```
### Das zweite Argument

- Das zweite Argument ist ein Array von Abhängigkeiten
- Dies macht die Ausführung des Effekts abhängig von Variablen
- Zum Beispiel

    ```js
    // Die User-Komponente kann mit verschiedenen IDs gerendert werden
    function User({ id }) {
        const [details, setDetails] = useState({})

        useEffect(() => {
            fetch("/api/userdata/" + id)
                .then(res => res.json())
                .then(data => {
                    setDetails(data)
                })
        }, [id]) // Ein useEffect kann von Zustandsvariablen oder Props-Variablen abhängen

        return <div>{details.name}</div>
    }
    ```

### Warum keine gewöhnlichen Variablen verwenden?
Wenn man eine "normale Variable" (z.B. `let someVar = 15`) in das Abhängigkeiten-Array mache, hätte es keine Wirkung, wenn diese geändert werden würde:

- React **verfolgt keine Änderungen an normalen Variablen**, die du mit `let` oder `const` deklarierst. 
- React erkennt und reagiert nur auf Änderungen von **Props** und **State** (also die Variablen, die mit `useState` oder aus den Props der Komponente kommen). Das liegt daran, dass React den Komponenten-Render-Prozess auf Basis dieser Variablen optimiert und kontrolliert.

### Beispiel:
```js
function MyComponent() {
    let someVar = 15;

    useEffect(() => {
        console.log("useEffect läuft", someVar);
    }, [someVar]); // Obwohl someVar im Array steht, wird es nicht neu getriggert

    someVar = 20; // Ändern der normalen Variable hat keine Wirkung auf den useEffect

    return <div>{someVar}</div>;
}
```

Selbst wenn du **`someVar`** im Abhängigkeitsarray platzierst und später änderst, wird der **`useEffect` nicht erneut ausgeführt**, weil **React die Änderung an der normalen Variable nicht erkennt**.

## Zusammenfassung

- Jede Komponente hat einen Lebenszyklus
- Erstes Rendern/Einhängen, erneutes Rendern, Aushängen (UnMounting)
- Mit useEffect kannst du Code zu Lebenszyklus-Momenten ausführen
- Mit useEffect kannst du Code bei Änderungen von State oder Props ausführen
- useEffect wird oft verwendet, wenn Daten abgerufen werden
