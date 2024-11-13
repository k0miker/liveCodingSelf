import { useState, useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
  useParams, // Das brauchen wir für die dynamischen Parameter
  Link
} from "react-router-dom"

import './App.css'

// Zunächst machen wir die Routes
const websiteRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: "users",
        children: [
          {
            index: true,
            element: <UserList />
          },
          {
            path: ":id", // dynamische Route: /users/:id (wichtig: Doppelpunkt ":")
            element: <UserProfile />
            // :id bedeutet, ich kann alle nach /users/
            // schreiben: zb.: /users/23, /users/wawa, 
            // Diese Id wird dann in der Component UserProfile
            // ausgelesen
          },
          {
            path: "new", // verschachtelte route: /users/new
            element: <UserRegistration />
          }
        ]
      },
      
      {
        path: "*", // "Catch All" (wenn eine route gefunden wird)
        element: <NotFound />
      }
    ]
  }
]);

function Layout() {
  return (
    <>
      <h1>Wilkommen zu unserer super Seite!</h1>
      <nav>
        <ul>
          {/* Im Gegensatz zu <Link>  markiert <NavLink> sozusagen den aktuellen Menüpunkt
          Sind wir zu, Beispiel auf /users bekommt unser /users Navlink
          die Klasse `active` */}
          <li><NavLink to="/">Home</NavLink></li> 
          <li><NavLink to="/users">Users</NavLink></li> 
          <li><NavLink to="/users/new">Registration</NavLink></li> 
        </ul>
      </nav>
      <main>

        {/* Outlet rendert die Children */}
        Outlet:<Outlet />
      </main>
    </>
  )
}

function Home() {
  return <h2>Home</h2>
}

function NotFound() {
  return <h2>404: Nicht gefunden</h2>
}

function UserRegistration() {
  return <h2>Registration</h2>
}

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {/*Hier wird zu unserer dynamischen Route verlinkt
          /users/:id 
          Ziel: Lade und rendere entsprechenden User in unserer
          Komponente */}
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function UserProfile() {
  const [user, setUser] = useState({}); 
  const [loading, setLoading] = useState(true);

  // liest "id" aus dem dynamischen Pfad aus
  const {id} = useParams(); 

  // Hinweis zum Verständnis
  // Angenommen, ich würde den entsprechenden Nutzer
  // aus einen Nutzer-Array laden wollen:
  // const user = userArray.filter( user => {
  //   return user.id === id
  // })
  
  // Wir wollen aber den Nutzer nicht aus einem Array
  // laden, sondern mittels einer API (also mit fetch)


  useEffect( () => {
    fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(data => {
      setUser(data);
      setLoading(false);
    })

  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>E-Mail: {user.email}</p>
      <p>Website: {user.website}</p>
    </div>
  );
// Was fehlt hier noch?
// Fehlerbehandlung (Error-Handling)! Wenn eine Anfrage fehlschlägt, 
// z.B. 404

}

function App() {

  return (
    <RouterProvider router={websiteRouter} />
  )
}

export default App
