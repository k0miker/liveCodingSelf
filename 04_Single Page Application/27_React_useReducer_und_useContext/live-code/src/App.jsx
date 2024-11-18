import { useContext, useState } from 'react'
import './App.css'
import Login from './components/Login'
import { UserContext } from './contexts/UserContext'
import Main from './components/Main'

function App() {

  // Wir schnappen uns hier den globalen state
  const {state} = useContext(UserContext)


  return (
    <>
      {state.user ? <Main /> : <Login /> }
    </>
    
  )
}

export default App
