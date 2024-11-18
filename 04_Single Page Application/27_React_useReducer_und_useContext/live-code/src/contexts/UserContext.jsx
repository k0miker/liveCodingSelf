import { createContext, useReducer } from "react";

// *Initial state*
const InitialState = {
    user: null, //wird später ein Object, z.B. { name: "Hans-Herrmann"}
    isLoggedIn: false
}

// *Reducer function*
const reducer = (state, action) => {

    switch (action.type) {
        case "LOGIN": // Nutzer hat seine Zugangsdaten eingegeben
            // In einer realen App, würden wir hier eine API aufrufen
            return {
                ...state, // der "alte" oder aktuelle state
                user: action.payload,
                isLoggedIn: true
            }
        case "LOGOUT": // Nutzer loggt sich aus
            return {
                ...state,
                user: null,
                isLoggedIn: false
            }
            // Wir könnten hier auch InitialState returnen
            // return InitialState
        case "UPDATE": 
            console.log("Update Action");
            console.log("{...state.user}", {...state.user})
            // Im real life würde hier sicherlich auch ein update
            // in der Datenbank mittels API Aufruf erfolgen 
        
            return {
                ...state,
                user: {
                    ...state.user, // User ist object, deswegen nochmal hier user destructern
                    name: action.payload
                }
            }
        default:
            console.error("Unbekannter Action Type", action.type);
            return state; // man übergibt den aktuellen state unverändert

    } // END switch-case

        // Anstatt switch case könnten wir natürlich if verwenden
        // if(action.type === "LOGIN") {
        //     return {
        //         ...state, // der "alte" oder aktuelle state
        //         user: action.payload,
        //         isLoggedIn: true
        //     } 
        // } 
        // if(action.type === "LOGOUT") {
        //     return {
        //         ...state,
        //         user: null,
        //         isLoggedIn: false
        //     }
        // }
        //.. 

}
// Nur zur Veranschaulichung 
// (Denn wir rufen reducer nicht selbst auf, das macht dispatch)
// reducer( { user: "Ich",isLoggedIn: true}, {type: "UPDTE", payload: "Nico"} )

// Das Ganze als State anstatt Reducer, würde so ausehen (zumindest ein kleiner Teil davon)
// const [user, setUser] = useState(null)
// const [isLoggedIn, setIsLoggedIn] = useState(false)



// *Kontext erstellen*
export const UserContext = createContext()

//*Komponente, die den Kontext ihren Kindern (children) zur Verfügung stellt*
export const UserProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, InitialState)

    return(
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )

}








