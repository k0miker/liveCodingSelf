import {useContext} from "react"
import { MyContext } from "../App"

function Gigs() {
    const contextData = useContext(MyContext)

    return (
        <div className="gigs">
            <h2>Gigs</h2>
            <p>Aktuell stehen keine Konzerte an...
                Aber du hast {contextData.count} Male geklickt!
            </p>
        </div>
    )

}

export default Gigs