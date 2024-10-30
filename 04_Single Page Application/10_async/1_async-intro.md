## Blockierendes Parsen und Rendern
- JavaScript läuft in einer sogenannten "Ereignisschleife" (event loop)
     - Die Details sind **nicht** wichtig
- Einige Operationen können diese Ereignisschleife stoppen
- Diese Art von Code wird als blockierender Code bezeichnet

- Drei Beispiele:
    - `alert(123)`
    Stoppt den Browser, bis du auf OK klickst

    - `for(i=39999999; --i;){};document.body.style.background='red'`
    
    - `<script src="script.js"></script>`
        Der Browser lädt das Skript herunter und parst es, bevor er fortfährt


- Millisekunden sind wichtig, wir wollen, dass der Browser Assets gleichzeitig herunterlädt
    - Du kannst `<script async src="script.js"></script>` verwenden
    - Du kannst `<script defer src="script.js"></script>` verwenden
    
    - **async**: Lädt und führt das Skript so schnell wie möglich aus.
	- **defer**: Lädt das Skript asynchron, führt es aber erst nach dem vollständigen Parsen des HTML-Dokuments aus.
    
## Promises
 ```js
    <script>
    // fetch ist asynchron
    // daher wird console.log direkt ausgeführt (es wird nicht gewartet, bis
    // fetch fertig ist)

    const p = fetch("./file.txt")
    console.log(p); // gibt promise zurück
    </script>
```
- Fetch macht eine GET-Anfrage für die Datei
- Fetch gibt ein Promise-Objekt zurück
- Promises sind wie Versprechen(=Promises) im echten Leben
- **"Ich verspreche, heute das Geschirr zu spülen"**
        - Bis ich das Geschirr spüle, ist mein Versprechen ausstehend (pending) 🤔
        - Wenn ich heute das Geschirr spüle, ist mein Versprechen erfüllt (resolved) 🙂
        - Wenn ich heute das Geschirr nicht spüle, ist mein Versprechen abgelehnt (rejected) 😞


- Ein Promise hat Zustände: ausstehend, erfüllt, abgelehnt bzw. pending, resolved, rejected 

Beispiel-Code
```js
<script>
// Eins nach dem anderen
console.log("Vorher")
const fetchPromise = fetch("file.txt")
const textPromise = fetchPromise.then(response => response.text())
textPromise.then(data => console.log("Daten abgerufen: " + data))
console.log("Nachher")
</script>
```

- Normalerweise ist Code meistens `Synchron`
    - Synchroner Code wird sequenziell ausgeführt
    - Jede Operation muss abgeschlossen sein, bevor die nächste beginnt
    - Blockierende Operationen sind typischerweise synchron
    - Das System wartet, bis jede Operation nacheinander abgeschlossen ist

- Promises sind `Asynchroner` Code
    - Asynchroner Code beginnt etwas zu tun
    - Aber er lässt den Rest des Programms nicht warten
    - Er ist nicht blockierend
    - Das Skript kann zur nächsten Operation übergehen


- Oft "verkettet" man die Promises
    - Eine Kette von Operationen; Verkettung

Beispiel-Code
```html
<script>
// Verkettung
console.log("Kette Vorher")
fetch("file.txt")
	.then(response => response.text())
	.then(data => console.log("Kette Daten abgerufen: " + data))
console.log("Kette Nachher")

// Ein weiteres Beispiel für das Verketten von Operationen
// Dieses Mal synchroner Code
const name = "rauli fitzgerald thunderkitten"
const x = name
	.toUpperCase()
	.split(" ")
	.map(x => x[0])
	.join("")
// Führe das in deinem Kopf aus; was gibt dir diese Kette von Operationen?
</script>
```