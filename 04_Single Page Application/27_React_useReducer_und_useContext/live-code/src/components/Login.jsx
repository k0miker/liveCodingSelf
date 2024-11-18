import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {

    // Local State (für das Formular)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // globaler state bzw globale Funktion
    // um state zu manipulieren
    const { dispatch } = useContext(UserContext);

    // Wird ausgeführt, wenn man auf Login-Button klickt
    const loginHandler = () => {
        // "gefaktes" Login 
        // normalerweise würden wir die Zugangsdaten über eine
        // Datenbank abfragen
        if (username === 'admin' && password === 'admin') {
            const fakeUser = { id: 1, username, name: "Alessandra Admin" };

            // Nutzer (den wir normalerweise aus Datenbank geholt hätten)
            // unserem State hinzufügen (wir manipulieren also state)
            dispatch({ type: "LOGIN", payload: fakeUser })

        }

    }


    return (
        <>
            <div>
                <h1>Login</h1>
                <input
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <br />
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <br />
                <button onClick={loginHandler}>
                    Login
                </button>
            </div>
        </>
    )
}

export default Login;