import { useContext } from "react"
import { UserContext } from "../contexts/UserContext.jsx"

const Header = () => {
    const { state, dispatch } = useContext(UserContext)

	// Kleine Sicherheit, falls user nicht eingeloggt ist
	if (!state.user) return <div>Please log in.</div>
    

    return (
        <>
            <h1>Demo Application</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>{state.user.name}</div>
                <button onClick={() => dispatch({ type: "LOGOUT" })}>
                    Logout
                </button>
            </div>
        </>
    )
}

export default Header