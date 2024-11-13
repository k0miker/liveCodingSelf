import Gigs from "./Gigs";
import Musicians from "./Musicians";

function Layout() {

    return (
        <div>
            <h1>Willkommen auf meiner Band Seite!</h1>
            <p>Hier kannste alle Infos über meine Band finden</p>

            <Musicians />
            <Gigs />
        </div>
    )
}

export default Layout;