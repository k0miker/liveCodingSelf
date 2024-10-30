import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Greeter ist ein Component
const Greeter = ({ name }) => {
    // event Handler
    function handleClick() {
        alert("Hello " + name);
    }
    // YES: onClick={handleClick}   NOOOOO: onClick={handleClick()}
    return <button onClick={handleClick}> hallo</button>
}


function App() {
    const [count, setCount] = useState(0);
    const onClickHandler = () => { 
        setCount(count => count + 1)
    }
  return (
    <>
      <div>
        {/* wir geben name als prop der child component mit */}
       {/*  <button onClick={handleClick}> hallo</button> */}
        <Greeter name="niels" /> 
          {/*  <button onClick={handleClick}> hallo</button> */}
        <Greeter name="Metin" />
          {/*  <button onClick={handleClick}> hallo</button> */}
        <Greeter name="Micha" />
        <button onClick={onClickHandler}>{count}</button>
     </div>
    </>
  )
}

export default App
