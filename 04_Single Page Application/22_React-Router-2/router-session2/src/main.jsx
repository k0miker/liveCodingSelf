import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import Root from './routes/Root';
import Home from './routes/Home';
import About from './routes/About';
import Preferences from './routes/preferences/Preferences';
import Profile from './routes/preferences/profilePrefs';
import Account from './routes/preferences/AccountPrefs';
import NotFound from './routes/NotFound';
import BuggyComponent from "./routes/BuggyComponent";
import ErrorPage from "./routes/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, //Fange fehler ab und rendere stattdessen diese Komponente
    children: [ // nested routes, diese routes werden innerhalb vom <Outlet /> von <Root /> gerendert
      {
        index: true, // Das hier ist die default Route unter "/"
        element: <Home />
      }, 
      {
        path: "about",
        element: <About />
      },
      {
        path: "bug",
        element: <BuggyComponent />
      },
      {
        path: "preferences",
        element: <Preferences />, // Das hier ist das Parent Element für alle Preferences
        children: [
          {
            index: true,
            element: <Profile />
          },
          {
            path: "account",
            element: <Account />
          }
        ]
      },
      {
        path: "*", // fange alle Pfade ab die nicht definiert sind. 
        element: <NotFound />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
