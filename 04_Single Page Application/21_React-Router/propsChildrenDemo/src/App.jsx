import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Layout = ({ children }) => {
  // props.children ist ein spezielles Prop in React, das es ermöglicht
  // JSX Elemente als "Kinder" an eine Komponente zu übergeben. 
  return (
    <>
      {children}
    </>
  )
}

function App() {
  return (
    <>
      <Layout className="layout">
        <h1> Hallo welt</h1>
        <p>Dieser Content wird als children übergeben.</p>
      </Layout>
    </>
  )
}

export default App
