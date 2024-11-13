# Installation von Tailwind CSS in einem Vite-Projekt

## Voraussetzungen

Stelle sicher, dass Node.js und npm (oder Yarn) installiert sind.

## 1. Vite-Projekt erstellen

Erstelle ein neues Vite-Projekt. Führe die folgenden Befehle in deinem Terminal aus:

```jsx
npm create vite@latest my-tailwind-app
cd my-tailwind-app
npm install
```

Ersetze `my-tailwind-app` durch den gewünschten Namen deines Projekts.

## 2. Tailwind CSS installieren

Installiere Tailwind CSS sowie die erforderlichen PostCSS-Plugins mit den folgenden Befehlen:

```jsx
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 3. Tailwind in dein Projekt einfügen

Füge die Tailwind-Direktiven in die `src/index.css` Datei ein:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4. Konfiguration von Tailwind CSS

Bearbeite die `tailwind.config.js`, um den Pfad zu den Inhalten deiner Komponenten anzugeben:

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 5. Erstellen der `CardComponent`

Erstelle eine neue Datei namens `CardComponent.jsx` im `src`-Verzeichnis und füge den folgenden Code hinzu:

```jsx
const CardComponent = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://th.bing.com/th/id/OIP.FL6r-StiKPIoGxDaylYHMwHaEb?rs=1&pid=ImgDetMain"
        alt="Beautiful scenery"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Beautiful Scenery
        </h2>
        <p className="text-gray-600 mt-2">
          This is a beautiful scenery that makes you feel relaxed and happy.
          Enjoy nature's beauty!
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
```

## 6. Verwendung der `CardComponent` in deiner App

Importiere die `CardComponent` in deine `App.jsx` und benutze sie wie folgt:

```jsx
import CardComponent from "./CardComponent";
function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Willkommen zu meiner Tailwind CSS-App!</h1>
      <CardComponent />
    </div>
  );
}
export default App;
```

## 7. Anwendung starten

Starte deine Anwendung mit dem folgenden Befehl:

```jsx
npm run dev
```

Öffne deinen Browser und gehe zu `http://localhost:5173`, um deine App mit der Card-Komponente zu sehen.

## Nützliche Links

- [Tailwind CSS-Dokumentation](https://tailwindcss.com/docs)
- [Vite-Dokumentation](https://vitejs.dev/guide/)
- [Vite mit React](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
