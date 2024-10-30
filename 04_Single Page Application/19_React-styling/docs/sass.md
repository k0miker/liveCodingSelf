# Installation von Sass in einem Vite-Projekt

## Voraussetzungen

Stelle sicher, dass Node.js und npm (oder Yarn) installiert sind.

## 1. Vite-Projekt erstellen

Erstelle ein neues Vite-Projekt. Führe die folgenden Befehle in deinem Terminal aus:

```jsx
npm create vite@latest my-sass-app
cd my-sass-app
npm install
```

Ersetze `my-sass-app` durch den gewünschten Namen deines Projekts.

## 2. Sass installieren

Installiere Sass mit dem folgenden Befehl:

```jsx
npm install -D sass
```

## 3. Erstellen der `StyledSass`-Komponente

Erstelle eine neue Datei namens `StyledSass.jsx` im `src`-Verzeichnis und füge den folgenden Code hinzu:

```jsx
import styles from "./styledSass.module.scss";

const StyledSass = () => {
  return (
    <div className={styles["form-container"]}>
      <ul>
        <li>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </li>
      </ul>
      <button className={styles["submit-button"]}>Submit</button>
    </div>
  );
};

export default StyledSass;
```

## 4. Erstellen der Sass-Datei

Erstelle eine Datei namens `styledSass.module.scss` im `src`-Verzeichnis und füge den folgenden Code hinzu:

```scss
// Variablen definieren
$form-background: #f9f9f9;
$button-color: #3498db;
$label-color: #555;
$input-border-color: #ddd;

.form-container {
  background-color: $form-background;
  padding: 20px;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 15px;

      label {
        color: $label-color;
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
      }

      input[type="text"],
      input[type="email"] {
        width: 100%;
        padding: 8px;
        border: 1px solid $input-border-color;
        border-radius: 4px;
      }
    }
  }

  .submit-button {
    background-color: $button-color;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: darken($button-color, 10%);
    }
  }
}
```

## 5. Verwendung der `StyledSass`-Komponente in deiner App

Importiere die `StyledSass`-Komponente in deine `App.jsx` und benutze sie wie folgt:

```jsx
import StyledSass from "./StyledSass";

function App() {
  return (
    <>
      <StyledSass />
    </>
  );
}

export default App;
```

## 6. Anwendung starten

Starte deine Anwendung mit dem folgenden Befehl:

```
npm run dev
```

Öffne deinen Browser und gehe zu `http://localhost:5173`, um deine App mit dem Formular zu sehen.

## Nützliche Links

- [Sass-Dokumentation](https://sass-lang.com/documentation)
- [Vite-Dokumentation](https://vitejs.dev/guide/)
- [Vite mit React](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
