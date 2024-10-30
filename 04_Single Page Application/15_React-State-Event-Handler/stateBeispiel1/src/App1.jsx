import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState ist ein sogenannter Hook (später mehr zu hooks)
  // State values sind immutable (const). Immutable bedeuted man kann sie nicht verändern, nur überschreiben/ersetzen. 
  // Wir können den State nur mit der setter Funktion verändern.
  const [count, setCount] = useState(0) // useState definiert den momentanen Zustand, der aber evtl auch verändert werden kann. 
  // const [NAME DES STATES, NAME DER SETTER FUNKTION] = useState(INITIALWERT)
  // Wenn sich der State verändert, rerendert sich die Komponente
  // Den ersten render nennt man "initial render"
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card"> 
        {/*                     setter(CALLBACK(letzten state) => neuer state)            */}
        <button onClick={() => setCount((count) => count+1)}>
          count is {count}
          {console.log(count)}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
