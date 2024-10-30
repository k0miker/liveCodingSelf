## Async/await

- Promises können knifflig sein!
- Angenommen, du willst eine Menge Daten für eine App wie Instagram laden:
    - Hole den aktuellen Nutzer
        - Hole Benachrichtigungen
        - Hole Posts von abonnierten Accounts
            - Hole Kommentare für jeden Post
                - Hole Upvotes für jeden Kommentar

    ```js
    fetch("/api/checkLogin").then(x => x.json())
        .then(user => {
            if (!user) { return alert("Bitte einloggen") }
            fetch("/api/subscriptions").then(x => x.json())
                .then(subscriptions => {
                    subscriptions.forEach(sub => {
                        fetch(`/api/posts/${sub.id}`).then(x => x.json())
                            .then(posts => {
                                posts.forEach(post => {
                                    fetch(`/api/comments/${post.id}`).then(x => x.json())
                                        .then(comments => {
                                            comments.forEach(comment => {
                                                fetch(`/api/upvotes/${comment.id}`).then(x => x.json())
                                                    .then(upvotes => {
                                                        showData(subscriptions, posts, comments, upvotes)
                                                    }).catch(handleError)
                                            })
                                        }).catch(handleError)
                                })
                            }).catch(handleError)
                    })
                }).catch(handleError)
        }).catch(handleError)
    ```

- Das nennt man "callback hell" oder die "Pyramide des Todes".
    - Es kann auch schwierig sein, mit so vielen Scopes zu arbeiten.

- Um dieses Problem zu lösen, gibt es eine andere Syntax für Promises.
    - Sie lässt Promise-basierten Code ähnlich wie synchronen Code aussehen.
    - Sie heißt `async/await` und führt die Keywords `async` und `await` ein.

- Ein einfaches async/await Beispiel:

    ```js
    async function getData() {
        const result = await fetch('https://example.org/data')
        const data = await result.json()
        return data
    }

    console.log(getData())
    ```

- `async` ist ein Keyword für Funktionen.
    - `async` Funktionen geben immer ein Promise zurück.
    - `async` ermöglicht auch die Verwendung des `await` Keywords in einer Funktion.

- Um `.catch()` zu ersetzen, musst du `try...catch` verwenden:

    ```js
    async function getData() {
        try {
            const result = await fetch('https://example.org/data')
            const data = await result.json()
            return data
        } catch (error) {
            console.error("FEHLER", error)
            return null
        }
    }

    console.log(getData())
    ```

- Du kannst `await` direkt in deinem Skript verwenden.
    - Das nennt man "top-level await".
    - Aber wenn du eine Funktion hast, musst du sie als async deklarieren.

- Das Pyramide-des-Todes-Beispiel mit async/await sieht ein bisschen einfacher aus.
    - Die Pyramide existiert, aber sie ist weniger "düster".

    ```js
    try {
        const response1 = await fetch("/api/checkLogin");
        const user = await response1.json();
        if (!user) {
            alert("Bitte einloggen");
        } else {
            const response2 = await fetch("/api/subscriptions");
            const subscriptions = await response2.json();
            for (const sub of subscriptions) {
                const response3 = await fetch(`/api/posts/${sub.id}`);
                const posts = await response3.json();
                for (const post of posts) {
                    const response4 = await fetch(`/api/comments/${post.id}`);
                    const comments = await response4.json();
                    for (const comment of comments) {
                        const response5 = await fetch(`/api/upvotes/${comment.id}`);
                        const upvotes = await response5.json();
                        showData(subscriptions, posts, comments, upvotes);
                    }
                }
            }
        }
    } catch (error) {
        console.error(error);
    }
    ```

## HTTP POST - Daten mit fetch senden

- Bisher haben wir nur GET Requests gemacht.
- Es gibt aber auch andere Arten von Requests.
    - GET Requests werden im Allgemeinen zum Holen von Daten verwendet.
    - Aber um Daten zu erstellen, wird oft POST verwendet.

- Ohne extra Optionen macht `fetch` einfach einen GET Request.
    - Fetch akzeptiert jedoch einen zweiten Parameter, um den Request zu konfigurieren.
    - Lass uns einen POST mit fetch machen:

    ```js
    const url = "https://jsonplaceholder.typicode.com/todos"
    const options = {
        method: "POST",
    }
    const response = await fetch(url, options)
    const result = await response.json()
    console.log(result)
    ```

- Ein bisschen Theorie:
    - HTTP Requests bestehen aus vier Teilen:
        - Methode, URL, Body, Header.
        - Der Body ist, wo Daten gesendet werden können.
        - GET Requests haben praktisch nie einen Body.
        - Um Daten in einem Request-Body zu senden, müssen wir beschreiben, welche Art von Daten es ist.
        - Das wird mit HTTP Headers gemacht.

    - HTTP Headers:
        - Header beschreiben den Request und können zusätzliche Daten enthalten.
        - Zum Beispiel, um den Content-Typ zu beschreiben.
        - Responses haben auch Header.
        - Mehr dazu später :)

- Lass uns ein paar Daten mit unserem POST Request senden:

    ```js
    const url = "https://jsonplaceholder.typicode.com/todos"
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({text:"Abwaschen!"})
    }
    const response = await fetch(url, options)
    const result = await response.json()
    console.log(result)
    ```