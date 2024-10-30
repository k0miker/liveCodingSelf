import ProductList from "./components/ProductList";

const App = () => {

  // Hier kurz schon mal auf Aufgabe 2 eingehen

  const number = Math.round( Math.random() * 20 ); //  Zufallszahl zwischen 0 und 20


  return (
    <>
      <div>
        
        <h1>React Rockt </h1>
        <p>Deine Zahl lautet {number}</p>

        {/* Conditional Rendering */}
        { number === 20 ? <h2>Du hast Gewonnen (Rum und Döner)!</h2> : <p>Mach nochmal!</p> }

      </div>
      <hr />
      <ProductList productName="Kissen"/>
    </>
  )
}

export default App;

/*
React Fragment:

- In unserem JSX brauchen wir immer ein oberstes Element
- falls wir aber keinen HTML Tag wie z.B. div, main, etc rendern
wollen, können wir <> als oberstes Element verwenden

React Fragement: <></>
*/
