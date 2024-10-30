# Animationsbibliothek

Diese Übung handelt davon, wie man DOM-Elemente mit useRef anspricht.

[Live-Demo](https://digitalcareerinstitute.github.io/SPA-Component-AnimateWithUseRef/)

## Anforderungen

- Wenn der Benutzer auf "Weiter" klickt, muss die `current` Zustandsvariable erhöht werden
    - Wenn der Wert 5 erreicht, setze `current` zurück auf 0
- Verwende `useRef`, um eine Referenz zum gerenderten `.target` DOM-Element zu behalten
- Wenn sich die `current` Zustandsvariable ändert, rufe `.animate()` auf dem `.target` DOM-Element auf
    - `.animate()` nimmt zwei Parameter, Animations-Keyframes und Timing
    - verwende das bereitgestellte `timing` Objekt für das Timing
    - verwende `animations[current]` für die Animations-Keyframes

## Siehe auch

- https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
- https://developer.mozilla.org/en-US/docs/Web/CSS/filter
