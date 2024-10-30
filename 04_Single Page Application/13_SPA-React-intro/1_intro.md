# Einführung: Single Page Application (SPA)


![What is a Single Page Application? Pros & Cons With Examples](https://cdn-blog.scalablepath.com/uploads/2023/01/spa-vs-mpa-architecture-1024x576.png)
Quelle: https://www.scalablepath.com/front-end/single-page-applications


- Eine SPA ist eine Webseite, die normalerweise ein einzelnes HTML-Dokument ist
    - Der Inhalt davon wird dynamisch neu geladen
    - Die gesamte Seite muss nicht neu geladen werden, wenn sich etwas ändert
   -  Beim Navigieren von einer "Seite" zur anderen ist kein vollständiges Neuladen erforderlich

- Single Page Applications sind _eine_ Möglichkeit, Websites zu erstellen
    - Wie alles, hat es Vor- und Nachteile (dazu im Laufe mehr)
    - React ist ein Tool, dass uns die Umsetzung einer SPA deutlich vereinfacht
  


![Examples of companies using single-page apps today.](https://cdn-blog.scalablepath.com/uploads/2023/01/companies-using-single-page-apps-1024x576.png "Examples of companies using single-page apps today.")

*(Es könnte sein, dass einige Anbieter davon die library inzwischen gewechselt haben)*
*Quelle: https://www.scalablepath.com/front-end/single-page-applications*


### React
- React ist eine Frontend JavaScript-Bibliothek (library)
- Anstatt HTML zu schreiben und JS hinzuzufügen: Du schreibst JS und fügst sozusagen HTML hinzu (wird noch klarer)


**Warum React?**
-  Es ist extrem beliebt
- Wir lernen React als **Beispiel** für Frontend-Bibliotheken
- Es ist großartig, um grundlegende Konzepte zu lernen
- Es hat eine starke Unterstützung/Community; React wird von Meta entwickelt

Andere Alternativen sind zum Beispiel
- AngularJS
- VueJS
- => Wenn du eine von ihnen gut kennst, kannst du die anderen schnell lernen

**Websites und Web-Apps die React verwendet** (oder verwendet haben)

![Which World-Class Websites are Based on ReactJS?](https://www.prismetric.com/wp-content/uploads/2023/02/websites-built-with-reactjs.jpg)


### React-Ökosystem
- React hat ein großes Ökosystem
    - Es gibt viele Bibliotheken und Frameworks, die um React herum gebaut sind


- **React** Die Kernbibliothek von React
- **React Native** zum Erstellen von nativen mobilen Anwendungen für Android & iOS
- **Gatsby** statischer Site-Generator zum Generieren von unglaublich schnellen Websites
- **Next.js** Framework zum Erstellen von servergerenderten Anwendungen

### Wie funktioniert React?

⚛️ **React und das virtuelle DOM:**
- React erstellt eine **virtuelle Version** des DOM in JavaScript (🌐)
- Das **echte DOM** existiert weiterhin, aber React kümmert sich automatisch um die Änderungen
- Du arbeitest nur mit **Variablen** und React aktualisiert das DOM automatisch


📝 **JSX und Struktur:**
- Um die Struktur deiner Seite zu erstellen, schreibst du in **JSX** – das sieht sehr aus wie **HTML**
- Mehr dazu gleich

🔄 **React und Zustandsänderungen:**
- **React** reagiert auf **Zustandsänderungen** (Änderungen des States) 
	- z.B.  das Öffnen eines Kommentarfelds oder Chats (z.B. `isCommentBoxOpen` oder `privateChats`)
- Es aktualisiert nur die **Teile der Seite**, die sich tatsächlich ändern müssen – der Rest bleibt unverändert.

### JSX

- JSX ist die Sprache zur Definition der HTML-Struktur einer Seite
    - Es sind im Grunde HTML-Elemente in JavaScript!
    - Vite (schneller Build-Tool) übersetzt dein JSX in reines JavaScript


- JSX ist eine Art Mischung zwischen HTML und JS
- JSX erzeugt React-Elemente
- JSX ist theoretisch nicht notwendig, um mit React zu arbeiten
    - man könnte theoretisch die react function bzw. methoden verwenden
    - Programmierung wird durch JSX aber deutlich einfacher
    - es gibt in der Regel keine Gründe, auf jsx zu verzichten

- Du musst *einige* (nicht so viele) Unterschiede lernen, zum Beispiel

```jsx
    <label htmlFor="namedInput">Name:</label>
    <input id="namedInput" type="text" name="name" />
```

- Jedes Element **muss** ein schließendes Tag haben oder einen selbstschließenden Slash
- `className` anstelle von `class`
- oder `htmlFor` anstelle von `for`
- => Solltest du etwas falsches Verwenden, wirst du meistens spätestens beim Ausführen darauf hingewiesen


**"Transpilieren" wir mal nachfolgendes Beispiel:**
- `const element = <h1>Hello, world!</h1>;`
	- [https://babeljs.io/repl](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=AQYw9gdgzgLsC8xgB4A2BDARgU1cAFjALaoBiYATvAEQTpHYAmAkhAA4CuM1AfAHL1sALmQB6DDlQ8AUEA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.25.8&externalPlugins=&assumptions=%7B%7D)


### Ein React-Projekt mit Vite starten

- Wir werden `vite` für die Arbeit mit React verwenden
    - Vite ist ein Build-Tool und Entwicklungsserver
    - Der Entwicklungsserver ersetzt `Live Server` für uns
    - Es ist modern und SEHR schnell
    - Das Build-Tool enthält ähnliche Funktionen wie WebPack und Babel


- Um ein neues React-Projekt mit dem Namen "my-react-app" zu erstellen

```sh
npm create vite@latest my-react-app
```

```jsx
function App() {

  const number = Math.round(Math.random() * 20); // Zufallszahl zwischen 0 und 20

  return (
    <>
      <h1>Hello world</h1>
      <p>Your lucky number is {number}</p>
      {number === 20 ? <h2>Critical success</h2> : <p>Fun!</p>}
    </>
  )
}

export default App

```


## Bedingtes (Conditional) Rendering

- Unser erster Fall von Logik in JSX!
- In JSX kannst du ein Element basierend auf einer Bedingung rendern
- Oft wird dies mit Ternären oder `&&` gemacht