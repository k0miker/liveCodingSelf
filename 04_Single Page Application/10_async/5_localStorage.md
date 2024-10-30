## Speichern von Daten im Browser
- Wir möchten vielleicht die resultierenden Daten einer erfolgreichen Anfrage speichern
- Wenn wir eine Variable verwenden, was passiert, wenn die Seite aktualisiert wird?
    - Dann müssen die Daten erneut abgerufen werden!


- Vielleicht möchtest du auch ein Spiel machen und den Spielstand im Browser zwischen den Seitenaktualisierungen speichern

- Du kannst Daten mit der **Web Storage API** speichern
    - Speziell werden wir uns `localStorage` ansehen

```js
    const todosLS = localStorage.getItem("todos")
    let todos = []

    if (todosLS) {
        // Wenn Daten aus dem localStorage gefunden werden, verwende diese
        // Denke daran: Die Daten könnten mittlerweile auch veraltet sein
        todos = JSON.parse(todosLS)
    } else {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(json => {
                localStorage.setItem("todos", JSON.stringify(json))
                todos = json
            })
    }
    ```

- Es gibt auch ein Speichersystem namens `sessionStorage`
    - Es ist sehr ähnlich zu `localStorage`


- `LocalStorage`: Die Daten in LocalStorage sind dauerhaft und bleiben auch nach dem Schließen des Browsers erhalten. LocalStorage ist nützlich, um Daten zwischen verschiedenen Sitzungen oder Besuchen des Benutzers zu speichern.

- `SessionStorage`: Die Daten in SessionStorage sind nur für die Dauer einer Browser-Sitzung verfügbar. Sie werden gelöscht, sobald der Benutzer den Browser schließt oder die Sitzung beendet. SessionStorage ist nützlich, um Daten während einer einzelnen Sitzung oder einem Besuch des Benutzers zu speichern.