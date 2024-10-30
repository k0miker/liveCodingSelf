# Styled Components in React

**Styled Components** ist eine beliebte Bibliothek zur Erstellung von CSS-in-JS, die es ermöglicht, CSS-Stile direkt in React-Komponenten zu definieren. Mit Styled Components können Sie Ihre Stile als JavaScript-Funktionen schreiben, die auf Props reagieren, was eine dynamische und modulare Art der Stilanwendung bietet.

## Beispielcode

Hier ist ein Beispiel für die Verwendung von Styled Components, das einen Button mit dynamischen Stilen zeigt:

```jsx
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "darkblue" : "darkgray")};
  }
`;

export default Button;
```

### Erklärung des Beispiels

1. **Importieren der Bibliothek**: Zuerst importieren Sie `styled` aus der `styled-components`-Bibliothek.

2. **Erstellen einer gestylten Komponente**: Der `Button` wird als gestylte Komponente definiert.

   - Hier verwenden wir eine Template-String-Syntax (Backticks), um die CSS-Regeln für den Button zu schreiben.
   - Die `background-color`-Eigenschaft wird dynamisch basierend auf dem `primary`-Prop gesetzt. Wenn `primary` wahr ist, wird die Hintergrundfarbe blau, andernfalls grau.

3. **Hover-Effekt**: Der `&:hover`-Selektor ermöglicht es, die Hintergrundfarbe des Buttons beim Hover zu ändern, ebenfalls basierend auf dem `primary`-Prop.

### Vorteile von Styled Components

1. **Modularität**: Stile sind direkt mit den Komponenten verbunden, was die Wartbarkeit und Lesbarkeit verbessert.

2. **Dynamische Stile**: Sie können Stile basierend auf Props und Zustand anpassen, was eine flexible Gestaltung ermöglicht.

3. **Eliminierung von Konflikten**: Durch die Verwendung von generierten Klassen werden Konflikte zwischen CSS-Klassen vermieden.

4. **Theming**: Styled Components unterstützen das Erstellen von Theming-Optionen, um das Design konsistent zu halten.

### Installation

Um Styled Components in Ihrem Projekt zu verwenden, müssen Sie die Bibliothek installieren:

```bash
npm install styled-components
```

### Verwendung in einer Komponente

Um den gestylten Button in einer React-Komponente zu verwenden, können Sie ihn wie folgt einfügen:

```jsx
import Button from "./Button";
const App = () => {
  return (
    <>
      <Button primary>Primärer Button</Button>
      <Button>Standard Button</Button>
    </>
  );
};

export default App;
```

### Fazit

Styled Components bieten eine leistungsstarke Möglichkeit, CSS in React-Anwendungen zu verwalten. Sie ermöglichen es, Stile auf modulare und dynamische Weise zu definieren, was zu einer besseren Wartbarkeit und einem konsistenten Design führt. Diese Bibliothek eignet sich hervorragend für moderne React-Projekte, die eine klare Trennung von Logik und Präsentation benötigen.
