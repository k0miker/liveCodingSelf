import { useContext } from "react";
import { ButtonContext } from "../context/buttonContext";

const Gigs = () => {
    const contextData = useContext(ButtonContext)
    return (
        <>
        <div className="gigs">
            <h2>Gigs</h2>
            <p>Aktuell stehen keine Konzerte an... 
                aber du hast {contextData.count} mal geklickt.
            </p>
        </div>
        </>
    )

}

export default Gigs;