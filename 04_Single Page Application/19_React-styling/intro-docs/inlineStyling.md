# Inline-Styles in JSX

Inline-Styles in JSX ermöglichen es, CSS direkt in React-Komponenten anzuwenden. Dies ist besonders nützlich für dynamische Stile, die sich basierend auf dem Zustand oder den Eigenschaften einer Komponente ändern.

## Beispielcode

Hier ist ein Beispiel, das zeigt, wie Inline-Styles verwendet werden:

```jsx
const Heading = () => {
  const divStyle = {
    color: "rebeccapurple",
    backgroundColor: "lightpink",
    padding: `10px`,
    rotate: `${(Math.random() - 0.5) * 15}deg`,
  };

  return <h1 style={divStyle}>Wonky</h1>;
};

export default Heading;
```

## Vorteile

1. **Dynamisches Styling**: Stile können basierend auf dem Zustand oder den Eigenschaften der Komponente angepasst werden.
2. **Komponenten-spezifische Stile**: Stile sind nur für die jeweilige Komponente gültig, was Konflikte vermeidet.
3. **Einfache Verständlichkeit**: Stile sind direkt mit der Logik der Komponente verbunden.

## Nachteile

1. **Leistungsprobleme**: Jedes Mal, wenn die Komponente gerendert wird, wird ein neues Style-Objekt erstellt, was ineffizient sein kann.
2. **Eingeschränkte CSS-Funktionen**: Inline-Styles unterstützen keine Pseudo-Klassen oder Medienabfragen.
3. **Wenig Wiederverwendbarkeit**: Inline-Styles können nicht leicht zwischen Komponenten geteilt werden.

## Dokumentationslinks

- [React-Dokumentation - Styling und CSS](https://reactjs.org/docs/faq-styling.html)
- [MDN Web Docs - CSS: Inline-Styles](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Inline_Styles)

## Fazit

Inline-Styles bieten eine einfache Möglichkeit, dynamische Stile in React anzuwenden, haben jedoch auch Einschränkungen in Bezug auf Leistung und Wiederverwendbarkeit.
