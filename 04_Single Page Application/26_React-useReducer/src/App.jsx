import { useReducer } from 'react'
import './App.css'
// ich baue hier mal einen Warenkorb
// In diesem Warenkorb gibt es 2 Funktionen: add, clear 
// In meinem Warenkorb habe ich produkte und ich habe "total", dass ist die Gesamtsumme

// Beispiel-Produktaten
const products = [
  {id: 1, name: "cat food", price: 2},
  {id: 2, name: "cat toy", price: 5},
  {id: 3, name: "cat bed", price: 20},
  {id: 4, name: "cat toilet", price: 30},
  {id: 5, name: "cat tree", price: 50},
  {id: 6, name: "cat brush", price: 10},
]

// Initial State für unseren Warenkorb. 
const initialState = {
  basket: [], // Leeres Array für ausgewählte Produkte
  total: 0 // Startwert für die Gesamtsumme
}

// Reducer Funktion: Verwaltet unsere State änderungen
// 2 Parameter:
// state: Aktueller State unserer APp
// action: Ein Objekt, das beschreibt, welche Änderung wir vornehmen wollen
function reducer(state, action) {
  switch(action.type) {
    case 'add':
      return {
        basket: [...state.basket, action.product], // Kopiere alle existierenden Items im WK und füge das neue hinzu
        total: state.total + action.product.price // Aktualisiere die Gesamtsumme durch Addition des neuen Produktpreises
      }
    case 'clear': // wir leeren den Warenkorb
      return {
        basket: [], // Wir leeren den basket Array 
        total: 0 // und setzen die Gesamtsumme auf 0
      }
    default:
      // Bei einer unbekannten Action: Logge den Fehler und gib den State unverändert zurück
      console.error("Unbekannte action", action)
      return state
  }
}

function App() {
  // Wir geben dem useReducer hook die reducer funktion und den initalState. Beides haben wir oben definiert. 
  // Wir kriegen dafür den momentanen State und mit dispatch eine Funktion um Aktionen auf dem State auszuführen. 
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <h1>Cat stuff</h1>
    {/* Warenkorbinfo und clear button */}
    <p>
    {state.basket.length} items, {state.total} Euro
    <br />
    <button onClick={() => dispatch({type: "clear"})}> Clear Basket</button>
    </p>
    <main>
      {/*Gehe durch alle produkte und erstelle für jedes einen hinzufügen button */}
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price} Euro</p>
          {/*dispatch({type: 'add', product}) sagt dem reducer, dass er das Item zum Warenkorb hinzufügen soll.*/}
          <button onClick={() => dispatch({ type: 'add', product: product})}>
            Add to basket
          </button>
        </div>
      ))}
    </main>
    </>
  )
}

export default App
