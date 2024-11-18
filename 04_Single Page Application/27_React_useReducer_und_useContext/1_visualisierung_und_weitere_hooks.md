## useReducer und Context API
Siehe live-coding Ordner

### State Änderung mittels useReducer
Eine simplifizierte Darstellung:

![useReducer Thumbnail](https://www.scaler.com/topics/images/usereducer_thumbnail.webp)

Auf unseren Live-Code bezogen (Profil Update):
- Die dispatch Funktion wird bei Klick auf Speichern ausgeführt
- Die dispatch Funktion führt unsere reducer Funktion aus
- Die reducer Funktion für den Code von case "UPDATE" aus und ändert State
- Ergebnis: Globaler State wurde verändert

#### Unser Live Code visualiert

```js
                        +----------------------------------+
                        |          Nutzerinteraktion       |
                        +----------------------------------+
                        | - Klick auf "Login" in Login     |
                        | - Klick auf "Save" in Profile    |
                        +----------------------------------+
                                    |
                                    |
                                    v
                        +-------------------------------+
                        |           dispatch            |
                        +-------------------------------+
                        |  dispatch({ type: ...,        |
                        |    payload: ... })            |
                        +-------------------------------+
                                    |
                                    |
                                    v
                      +-------------------------------+
                      |          Reducer              |
                      +-------------------------------+
                      | switch (action.type)          |
                      |                               |
                      | case "LOGIN":                 |
                      |   - user: action.payload      |
                      |   - isLoggedIn: true          |
                      |                               |
                      | case "LOGOUT":                |
                      |   - user: null                |
                      |   - isLoggedIn: false         |
                      |                               |
                      | case "UPDATE":                |
                      |   - user.name: action.payload |
                      +-------------------------------+
                                    |
                                    |
                                    v
                  +---------------------------------------+
                  |          Aktualisierter State         |
                  +---------------------------------------+
                  | UserContext Provider stellt           |
                  | aktualisierten State und dispatch     |
                  | an alle Komponenten bereit            |
                  +---------------------------------------+
                                    |
                                    |
                                    v
              +-----------------------------------------------+
              |         Komponenten erhalten Updates          |
              +-----------------------------------------------+
              | - App: Rendert Main oder Login                |
              | - Header: Zeigt Benutzernamen, bietet Logout  |
              | - Profile: Zeigt Benutzer-Details             |
              +-----------------------------------------------+

```

## Zwei fortgeschrittene React-Hooks

- Es gibt tatsächlich ziemlich viele Hooks
    - Du kannst sogar deine eigenen Hooks erstellen

- Hier sind zwei weitere Hooks für dich
    - Wir lehren diese, damit du von ihnen gehört hast
    - Wir lehren diese als Beispiele für andere Arten von Hooks



### Eindeutige IDs mit `useId`
- **`useId`** ist ein **React-Hook**, der verwendet wird, um **eindeutige IDs** zu generieren. 
- Das ist nützlich, um sicherzustellen, dass jeder Input eines Formularfeldes und jedes Label eine eindeutige ID besitzt.
    - Das wiederum ist besonders für **Barrierefreiheit (Accessibility)** wichtig, 
        damit Screenreader die Elemente korrekt erkennen können.


Schauen wir uns ein Formular an, das eine Jobbewerbung abbildet:


```jsx
const JobApplicationForm = () => {
    //... hier states für Inputs und Ähnliches
    
    // Beachte: <Input / > ist eine eigene Component, daher ungleich <input>
    return (
        <form>
            <Input type="text" value={firstName} setter={setFirstName} label="First name" />
            <Input type="text" value={lastName} setter={setLastName} label="Last name" />
            <Input type="text" value={position} setter={setPosition} label="Position applied for" />
            <Input type="tel" value={telephone} setter={setTelephone} label="Telephone" />
            <Input type="email" value={email} setter={setEmail} label="E-mail address" />
            <Input type="date" value={startDate} setter={setStartDate} label="Starting date" />
            <Input type="text" value={salary} setter={setSalary} label="Salary request" />
        </form>
    )
}
```

- Jetzt schauen wir uns die **`Input`-Komponente** genauer an:



```js
const Input = ({ type, val, setter, text }) => {
    // Verwenden von useId, um eine eindeutige ID für jedes Input-Feld zu erstellen
    const inputId = useId()
    return (
        <div class="form-field">
            {/* Das Label ist mit dem Input über die ID verbunden */}
            <label htmlFor={inputId}>{text}</label>
            <input id={inputId} type={type} value={val} onChange={setter} />
        </div>
    )
}
```


=> Somit hat also jedes `<input>` Element stets eine eindeutige ID

Mehr: https://react.dev/reference/react/useId


### Memoisierung mit `useMemo`
- **Memoisierung** ist eine Technik zur **Performance-Verbesserung** in React.
 - **`useMemo`** führt **aufwändige Berechnungen** nur dann aus, wenn sich die Abhängigkeiten ändern, was die Performance verbessert.
 - Das Ergebnis einer **aufwändigen Funktion** wird gespeichert und **wiederverwendet**, wenn dieselben Eingaben erneut auftreten.
    - Diese Technik ist eine Form von **Caching**, wodurch Ergebnisse später schneller verfügbar sind.


- Beispielanwendung: Eine TODO-Liste, bei der Elemente gefiltert und kommentiert werden können.
    - Das simple Beispiel verdeutlicht das Konzept von `useMemo`.



    ```jsx
    import { useState, useMemo } from 'react';

    export default function TodoList({ allTodos, typeToShow }) {
        const [text, setText] = useState("");
		    
		// Ohne useMemo
        const visibleWithoutMemo = allTodos.filter(todo => todo.type === typeToShow);

        // Verwenden von useMemo, um die Filterung der Todos zu optimieren
        const visible = useMemo(() => {
            console.log('Filter wird ausgeführt'); // Dies zeigt, wann die Funktion tatsächlich erneut ausgeführt wird
            return allTodos.filter(todo => todo.type === typeToShow);
        }, [allTodos, typeToShow]); // Nur wenn allTodos oder typeToShow sich ändern, wird die Filterung neu ausgeführt

        return (
            <div className="todoList">
                <ul>
                    {visible.map(todo => <li key={todo.id}>{todo.text}</li>)}
                </ul>

                <TodoListComments />
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button>Add comment</button>
            </div>
        );
    }
    ```

**Ohne `useMemo`**: 
 - Die Filterung (`visibleWithoutMemo`) würde bei jedem Rendern der Komponente ausgeführt, 
	 - selbst wenn sich die Todos oder der Filtertyp (`typeToShow`) nicht ändern. 
 - Dies könnte zu **Performance-Problemen** führen, besonders bei einer sehr großen Anzahl von Todos.

**Mit `useMemo`**: 
- Die Filterung (`visible`) wird nur dann ausgeführt, wenn sich die Eingaben ändern (`allTodos` oder `typeToShow`). 
- Dadurch werden **unnötige Berechnungen** vermieden, was zu einer effizienteren Anwendung führt.

#### **Wann wird `useMemo` verwendet?**
Wenn,
 - eine **aufwändige Berechnung** vorliegt,
 - die oft wiederholt wird, aber nicht immer neu ausgeführt werden muss.
 - Dies hilft, die **Performance** der Anwendung zu verbessern.

