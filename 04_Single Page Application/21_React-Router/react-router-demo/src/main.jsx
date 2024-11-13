import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/root'
import Error from './routes/error'
import Home from './routes/home'
import About from './routes/about'
// Router Konfigurations-Objekt
// Wir definieren hier wie sich URLs zu den Komponenten mappen und wir generell unsere Routing-Struktur aussehen soll. 
const router = createBrowserRouter([
  {
    path: "/", // Base path
    element: <Root />, // Welche Component soll auf dem Base Path gerendert werden. 
    errorElement: <Error />, // Welche Component soll gerendert werden wenn der pfad nicht stimmt. 
    children: [ // nested routes innerhalb des Outlets von <Root />.
      {
        index: true, // Das hier soll die default Route sein
        element: <Home />
      },
      {
        path: "about", // wird über /about ansprechbar sein. 
        element: <About />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
