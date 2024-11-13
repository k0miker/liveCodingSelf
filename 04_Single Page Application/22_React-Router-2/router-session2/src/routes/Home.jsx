import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate(); // Wenn ich als antwort auf ein event navigieren will, benutze ich 
    // useNavigate.

    const handleButtonClick = () => {
        // hier passiert erstmal logik.
       navigate('preferences');
    }

    return (
        <>
        <h1>
            Home!
        </h1>
        <p>Welcome to the Home page</p>
        {/* Wir brauchen einen button der uns zu preferences schickt. */}
        <button onClick={handleButtonClick}>
            Go to /preferences
        </button>
        </>
    )
}

export default Home; 