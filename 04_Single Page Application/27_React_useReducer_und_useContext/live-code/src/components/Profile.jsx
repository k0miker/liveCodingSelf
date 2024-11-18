import { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext.jsx'

const Profile = () => { 

    const {state, dispatch} = useContext(UserContext)

    // Kleine Sicherheit, falls user nicht eingeloggt ist
    if (!state.user) {
        return <div>Log dich ein um dein Profil zu bearbeiten.</div>
    }

    // Lokaler State, um den Namen vom Formularfeld "zwischenzuspeichern"
    const [name, setName] = useState(state.user.name)
    // Wir könnten auch direkt den globalen State aus dem Context verwenden.
    // Aber dieser würde dann mit jedem Tastenanschlag geupdatet werden 
	// (schlecht für performance)

    return (
        <div>
            <h2>Profile editor</h2>
            <div>ID: {state.user.id}</div>
            <div>Username: {state.user.username}</div>
            <div>
                <label htmlFor="username">Name:</label>
                <input type="text" id="username" value={name} onChange={e => setName(e.target.value)} />
            </div>

            {/* Globaler state wird erst manipuliert, wenn wir die Eingaben abschicken */}
            <button 
                onClick={()=> dispatch({type:"UPDATE", payload: name})}>
                Speichern
            </button>
            <hr />
            <p>Was passiert (grob ausgedrückt) beim Klick auf Speichern?</p>
            <ul style={{textAlign: "left"}}>
                <li>Die dispatch Funktion wird ausgeführt</li>
                <li>Die dispatch Funktion führt unsere reducer Funktion aus</li>
                <li>Die reducer Funktion für den Code von case "UPDATE" aus</li>  
                <li>Ergebnis: State wurde verändert</li>          
            </ul>
        
        </div>
    )
}

export default Profile;
