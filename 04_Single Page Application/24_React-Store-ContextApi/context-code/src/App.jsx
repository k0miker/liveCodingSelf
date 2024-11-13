import { useState, createContext } from 'react'
import './App.css'
import Layout from './components/Layout';

// 1. Context vorbereiten
// (Dieser SChritt wird normalerweise in eine separate Datei ausgelagert)
export const MyContext = createContext();
// Argument in createContext
// Dient als Standard-Wert für Consumer,
// die nicht von einem Provider "umhüllt" (gewrapped) sind
// => Fallback Daten (kann nur statisch sein, kein state)

function App() {

  const [count, setCount] = useState(0)
  console.log(count)

  // Daten vorbereiten, die den Consumern zur Verfügung stehen werden
  const data = {
    message: "Hallo vom Context",
    count,
    setCount
  }

  // 2. Daten zur Verfügung mittels Context-Provider
  // => Alle Kinder des Providers können auf die Daten zugreifen

  return (
   <MyContext.Provider value={data}>
      {/*3. Context verwenden (hier in den Kindern von Layout "Gigs" und "Musicians!) */}
      <Layout />
   </MyContext.Provider>
  )
}

export default App
