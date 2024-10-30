## State

- State Definition
    - Der Wert aller Variablen zu einem bestimmten Zeitpunkt
    - Stell dir ein Spiel vor:
        - Wo sind die Feinde?
        - Wie viel Leben haben die Feinde?
        - Wo ist der Spieler?
        - Wie viel Leben hat der Spieler?
        - Wie hoch ist die Punktzahl des Spielers?
        - Wie heißt der Spieler?
            - `let playerName = "TheViper"`
        - usw.

- In einem regulären JS-Programm wird der Zustand in einfachen Variablen verwaltet.
    - Du willst den Namen des Spielers ändern?
    - `playerName = "DauT"`

- In React ist der State etwas komplexer; er wird von React verwaltet.
    - Du willst den Namen des Spielers ändern?
    - Du musst React bitten, den State zu ändern.
    - `setPlayerName("DauT")`

- Zuerst konzentrieren wir uns nur auf den State von einzelnen Komponenten.
    - Wie oft wurde ein Button geklickt?
    - Welchen Textwert hat ein Eingabefeld?
    - usw.

- Der State einer Komponente besteht aus State-Variablen.
    - Du greifst auf den Wert wie bei normalen Variablen zu.
    - Aber du musst sie ändern, indem du React bittest, dies zu tun.

    ```jsx
    import { useState } from "react"

    const App = () => {
        const [count, setCount] = useState(0)

        return (
            <div>
                <p>Du hast {count} Mal geklickt</p>
                <button onClick={() => setCount(count + 1)}>Klick mich</button>
            </div>
        )
    }
    ```

- Beachte, dass `count` eine `const` ist.
    - State-Variablen sind "immutable" (unveränderlich).
    - Immutable bedeutet, sie können nicht direkt verändert werden.
    - Wir ändern den Wert über die Setter-Funktion.

- In unserem Beispiel ist `useState` ein React "Hook".
    - Hooks sind besondere Funktionen.
    - Wir werden später mehr über Hooks lernen :)

- Wenn wir `useState` aufrufen, führt React unsere Funktion tatsächlich erneut aus.
    - Es prüft dann den virtuellen DOM.
    - Welche Teile der Seite haben sich geändert?
        - Was ist anders im Vergleich zum vorherigen Rückgabewert?
    - Es aktualisiert dann diese Teile der Seite.
    - Dies nennt man "Re-rendering".
    - Das erste Mal, wenn eine Komponente rendert, ist es das "initial render".
    - Bei verschachtelten Komponenten, wenn das Elternteil neu rendert, tun das auch die Kinder.

## Event-Handler in React

- Genauso wie in regulärem JS änderst du den State normalerweise, indem du auf etwas reagierst.
    - Wie ein Click-Event!
    - Wir haben bereits `onClick` gesehen.

- React-Events sind SEHR ähnlich zu normalen Events.
    - Tatsächlich werden wir dieses Thema nicht vertiefen.
    - Du solltest nur wissen, dass es keine normalen Browser-Events sind.
    - Im Wesentlichen hängen wir sie an Elemente über Attribute wie `onClick`.

        - `<button onClick={() => alert('Du hast mich geklickt!')}>`
        - `<button onMouseEnter={() => alert('Du bist über mich gefahren!')}>`

- Du kannst auch separate benannte Funktionen verwenden.
    - Diese Funktionen nennt man Event-Handler.
    - Konventionell folgen die Namen der Event-Handler dem Namen des Events:
        - `onClick={handleClick}` oder `onMouseEnter={handleMouseEnter}`
    - Zum Beispiel:

    ```jsx
    const Greeter = ({ name }) => {
        function handleClick() {
            alert("Hallo " + name)
        }

        return <button onClick={handleClick}>Hi</button>
    }

    const App = () => {
        return (
            <main>
                <Greeter name="Gelatinewürfel" />
                <Greeter name="Karmischer Drachenschlüpfling" />
                <Greeter name="Sporewerfer" />
            </main>
        )
    }
    ```

- **WICHTIG**, rufe die Handler-Funktion nicht direkt auf.
    - JA: `onClick={handleClick}`
    - NEIN: `onClick={handleClick()}`

## React Developer Tools

- Unsere Komponenten werden jetzt komplexer.
- Es könnte hilfreich sein, spezialisierte React-Entwicklertools zu haben.

- [Chrome React devtools](https://chrome.google.com/webstore/detail/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox React devtools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools)