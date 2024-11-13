# Installation von Bootstrap in einem Vite-Projekt

## Voraussetzungen

Stelle sicher, dass Node.js und npm (oder Yarn) installiert sind.

## 1. Vite-Projekt erstellen

Erstelle ein neues Vite-Projekt. Führe die folgenden Befehle in deinem Terminal aus:

```jsx
npm create vite@latest my-bootstrap-app
cd my-bootstrap-app
npm install
```

Ersetze `my-bootstrap-app` durch den gewünschten Namen deines Projekts.

## 2. Bootstrap und React-Bootstrap installieren

Installiere Bootstrap und React-Bootstrap mit den folgenden Befehlen:

```jsx
npm install bootstrap react-bootstrap
```

## 3. Bootstrap in dein Projekt einfügen

Füge die Bootstrap CSS-Datei zu deiner Anwendung hinzu, indem du sie in die `main.jsx` (oder `index.jsx`, `App.jsx`) Datei importierst:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS importieren
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## 4. Erstellen der `BootstrapButton`-Komponente

Erstelle eine neue Datei namens `BootstrapButton.jsx` im `src`-Verzeichnis und füge den folgenden Code hinzu:

```jsx
import React from "react";
import Button from "react-bootstrap/Button";

const BootstrapButton = ({ label, variant, size, onClick }) => {
  return (
    <Button variant={variant} size={size} onClick={onClick}>
      {label}
    </Button>
  );
};
```

export default BootstrapButton;

## 5. Verwendung der `BootstrapButton`-Komponente in deiner App

Importiere die `BootstrapButton`-Komponente in deine `App.jsx` und benutze sie wie folgt:

```js
import BootstrapButton from "./BootstrapButton";
function App() {
  return (
    <>
      <BootstrapButton label="Primary Button" variant="primary" size="lg" />
      <BootstrapButton label="Success Button" variant="success" size="md" />
    </>
  );
}

export default App;
```

## 6. Anwendung starten

Starte deine Anwendung mit dem folgenden Befehl:

```jsx
npm run dev
```

Öffne deinen Browser und gehe zu `http://localhost:5173`, um deine App mit Bootstrap-Buttons zu sehen.

## Nützliche Links

- [Bootstrap-Dokumentation](https://getbootstrap.com/docs/)
- [React-Bootstrap-Dokumentation](https://react-bootstrap.github.io/)
- [Vite-Dokumentation](https://vitejs.dev/guide/)
- [Vite mit React](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)