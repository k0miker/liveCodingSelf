import { useContext } from "react";
import { ButtonContext } from "../context/buttonContext";

const Musicians = () => {
    // Wir holen uns hier die Daten aus unserem Context
    const contextData = useContext(ButtonContext);
    // Wir destructuren die Daten, damit es besser aussieht.
    const {count, setCount} = contextData;

    const handleClick = () => {
        // Wir updaten den State in unserem globalen Context
        setCount(count + 1);
    }
    return (
        <>
            <div className="cards">
                <div className="card" onClick={handleClick}>
                    <p>Klicke hier auf Paul (Bass)</p>
                </div>
                <div className="card" onClick={handleClick}>
                    <p>Klicke hier auf John (Gitarre)</p>
                </div>
                <div className="card" onClick={handleClick}>
                    <p>Klicke hier auf Ringo (Schlagzeug)</p>
                </div>
            </div>
        </>
    )
}

export default Musicians;