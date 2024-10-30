## Komponenten

![React.js components](https://www.adcisolutions.com/sites/default/files/styles/scale_w770/public/2022-09/table_1.jpg.webp?itok=r6bjjEm8)

- Es ist natürlich/intuitiv, Websites als eine Reihe von Seiten zu betrachten
    - `index.html`
    - `contact.html`
    - `about.html`


- Bei den meisten modernen Methoden zum Erstellen von Websites denkst du tatsächlich in Komponenten
    - Schauen wir uns https://toom.de an und suchen gemeinsam nach Komponenten
        - Header
        - Footer
        - Suche
        - Chat
        - Hero
        - MarktAuswahl
        - ProduktAngebote
            - ProduktAngebotKarte
        - TopServices
            - TopServiceKarte


🤔 **Wann sollte man eine benutzerdefinierte Komponente erstellen?**

 Verwende die gleichen Techniken wie bei der Erstellung neuer Funktionen:
- 📏 **Single Responsibility Prinzip**: 
    - Eine **Komponente** sollte **nur eine Aufgabe** haben.
    - Wenn sie zu groß wird, teile sie in kleinere **Unter-Komponenten** auf.
- 🔄 **DRY-Prinzip**: 
    - Wiederverwendbare Teile wie **Buttons** oder **Produktkarten** sollten als eigene **Komponenten** erstellt werden.
- 🧠 **Komplexität**: 
    - Wenn ein Teil der Seite komplex genug ist, wie z.B. eine **Suchfunktion**, ist er ein guter Kandidat für eine eigene **Komponente**.

Wie HTML bilden Komponenten eine verschachtelte Struktur; einen Komponentenbaum
```jsx
    <ProductList>
        <Product>
            <h2>Apple iPad</h2>
            <p>Cool tablet device thing</p>
        </Product>
        <Product>
            <h2>ThinkPad x200</h2>
            <p>An oldie, but goldie laptop </p>
        </Product>
    </ProductList>
```

- Konzeptionell sind Komponenten wie JavaScript-Funktionen
    - Sie können Eingaben akzeptieren (`props` - kurz für Eigenschaften)
    - Sie geben JSX zurück, das beschreibt, was angezeigt werden soll
        - Komponenten können entweder ein einzelnes JSX-Element zurückgeben (häufig)
        - ODER ein Array von Elementen (selten)

## Props
![](https://media.licdn.com/dms/image/v2/D4D12AQHR-Qf8JrSOVA/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1689959227757?e=1734566400&v=beta&t=PWY_kSZRnGlEazrIV3lF0blWzU-QrHn2VGkB6hS0fBw)
_("emit events" erst einmal ignorieren)_

💬 **Kommunikation zwischen Komponenten:**
- **Komponenten** übergeben **Daten** an andere Komponenten mithilfe von **`props`**.
- 🔄 **Props** sind eine Mischung aus:
        - **HTML-Attribute**, die Elemente konfigurieren oder ihr Verhalten anpassen, und
        - **Funktionsparametern**, die Werte an Funktionen übergeben.
- Ein Beispiel zur Veranschaulichung:
        - 🖥️ **JavaScript**: `printProduct( {product:prod} )`
        - ⚛️ **JSX**: `<Product product={prod} />`

 **Ein Code-Beispiel**
![](https://i.giphy.com/Dh5q0sShxgp13DwrvG.webp)
- https://codepen.io/Mikatchu/pen/MWWPzbb

```js
// Die "Welcome" Komponente akzeptiert "props" als ein Objekt
const Welcome = (props) => {
	return <h1>Hello, {props.name}</h1>
}

export default Welcome
```

```js
import Welcome from "./Welcome"

// Die App-Komponente verwendet die Welcome-Komponente und gibt eine "name" Prop ein
const App = () => {
	return (
		<div className="App">
			<Welcome name="Jane Doe" />
			<Welcome name="John Doe" />
		</div>
	)
}
```
