## Fehler in Fetch
 - Es gibt zwei Arten von Fehlern, die wir überprüfen müssen
 - Fehler, die dazu führen, dass das Fetch-Promise abgelehnt wird 
 - Fehler, die **nicht** dazu führen, dass das Fetch-Promise abgelehnt wird :)

     ```js
    // nicht existente url
    // const url = 'https://glorpborgdorkhorp.org/' 
    
	//existente url/api, jedoch existiert kein 100000. todo
	
    const url = 'https://jsonplaceholder.typicode.com/todos/100000' 
    fetch(url)
        .then(response => {
            console.log("response", response)
            console.log("response.ok", response.ok)

            if (!response.ok) {
                console.log(`HTTP error! status: ${response.status}`);
                return {};

                // besser wäre es eigentlich, hier eien error zu "werfen" oder das promise zu "rejecten
                // in Zukunft ;) "
            }
            return response.json()
        })
        .then(json => console.log("json Antwort:", json))
        .catch(error => {
            console.log(error)
            alert(`Kontaktaufnahme mit ${url} fehlgeschlagen`)
        })
    ```