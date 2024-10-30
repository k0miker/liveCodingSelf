// GitHub Copilot -> KI in VS Code

// Installation
//
// 1. Student Developer Pack für GitHub aktivieren
// 2. GitHub Copilot & GitHub Copilot Chat Extensions installieren
// 3. VS Code öffnen & GitHub Copilot aktivieren

// Was macht GitHub Copilot eigentlich?

// Teil 1: Vorschläge für Code
// => Vorschläge sollten wir abschalten. Konzentriert euch auf das selbstständige Programmieren...
// => Einstellungen der Copilot Extension öffnen & `Inline-Enabled` auf false setzen


// Teil 2: Fragen zum Code stellen

// Option 1: Code markieren & dann eine Frage im Chat dazu stellen

// Option 2: Code in den Chat kopieren & eine Frage dazu stellen.
// => Einzele Code-Statements: `word.slice(-1)`
// => Ganzer Code Block: ```...```

let word = 'basketball';

if (word[0] === 'a') {
  console.log(`${word} startet mit 'a'.`);
} else if (word[0] === 'b') {
  word = word.slice(-2);
  console.log(`${word} startet mit 'b'.`);
} else if (word[0] === 'c') {
  console.log(`${word} startet mit 'c'.`);
} else {
  console.log(`${word} startet nicht mit 'a', 'b' oder 'c'.`);
}