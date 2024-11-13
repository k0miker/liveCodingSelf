import { useState } from 'react'
import Layout from "./components/Layout"
import { ButtonContextProvider } from "./context/buttonContext"
import './App.css'

function App() {

  return (
    <>
      <ButtonContextProvider>
        <Layout />
      </ButtonContextProvider>
    </>
  )
}

export default App
