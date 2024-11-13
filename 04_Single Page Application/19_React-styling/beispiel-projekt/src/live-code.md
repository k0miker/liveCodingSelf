Das Styling in React-Apps kann auf viele Arten erfolgen
Heute werden wir uns ansehen
Inline-Stile
Verwendung von SCSS
Verwendung von Bootstrap... auf die React-Art
Verwendung von Tailwind Css


app.css clearen :

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}



1.) Styled Component

Genau wie in normalem HTML, kannst du in React Inline-Stile verwenden

Allerdings kannst du kein reguläres CSS verwenden

Stattdessen kannst du CSS direkt auf Elemente anwenden, indem du JavaScript-Objekte verwendest

```js
const MyComponent = () => {
  const divStyle = {
    color: "rebeccapurple",
    backgroundColor: "lightpink",
    padding: `${Math.random() * 10}px`,
  };

  return <div style={divStyle}>Styled Div</div>;
};
```

2.) SASS

npm install -g sass
npm install -D sass-embedded

Um die Styles als Module in React zu nutzen, benenne die Datei styledSass.module.scss um.

- Variablen
- Nesting

  3.) Bootstrap

Technisch gesehen kannst du Bootstrap genau so verwenden wie in UIB

Wer erinnert sich, wie das gemacht wurde?

Abhängigkeiten von einem CDN hinzufügen
Elemente aus der Dokumentation kopieren und einfügen oder eigene schreiben
Bootstrap-Klassen verwenden, um Klassen zu steuern
Eine eher "React"-Art, dies zu tun, besteht darin, vorgefertigte Komponenten auf Basis von Bootstrap-Klassen zu verwenden

Dafür gibt es eine schöne NPM-Komponentenbibliothek

npm install react-bootstrap bootstrap

```jsx
import "./App.css";
import StyledSass from "./components/StyledSass";
import Heading from "./components/Heading";
import BootstrapButton from "./components/BootstrapButton";
function App() {
  return (
    <>
      <Heading />
      <StyledSass />
      <BootstrapButton label="Primary Button" variant="primary" size="lg" />
      <BootstrapButton label="Success Button" variant="success" size="md" />




    </>
  );
}
export default App;

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const BootstrapButton = ({ label, variant, size, onClick }) => {
  return (
    <Button variant={variant} size={size} onClick={onClick}>
      {label}
    </Button>
  );
};

export default BootstrapButton;
```


npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

tailwind config

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Stellen Sie sicher, dass der Pfad zu deinen Dateien stimmt
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```



IN DIE INDEX.JSX!!!

@tailwind base;
@tailwind components;
@tailwind utilities;

dann Livecode.

