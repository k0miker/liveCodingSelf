# JSON
- JavaScript Object Notation
- Ein Dateiformat bzw. Strukturierung von Daten basierend auf JavaScript-Datentypen
- Wird oft für **Datenspeicherung** und **Datentransfer** verwendet
- Im Grunde wie JavaScript, aber doch ein bisschen anders
- Meistens verschickt (z.B. an Server, zu einer API, etc.) man JSON als **String**

```js
const data = '{ "id":1, "name": "Angela Merkel", "born": "17.07.1954"  }'
```

- Einige Unterschiede zu regulären JS-Objekten
    - Du benötigst die Anführungszeichen um Eigenschaftsnamen (properties)
    - Begrenzte Werttypen: Funktionen oder `new Date()` können zum Beispiel nicht vorhanden sein

- Es ist wichtig zu wissen, wie man von String zu JSON und zurück konvertiert


```js
const data = '{ "id": 1, "name": "Din Djarin", "born": "1978-11-12" }'
const mandalorian = JSON.parse(data)
mandalorian.name = "Grogu"
mandalorian.born = "2016-05-04"

const newData = JSON.stringify(mandalorian)
console.log(newData)

const prettyPrinted = JSON.stringify(mandalorian, null, 2)
console.log(prettyPrinted)
```