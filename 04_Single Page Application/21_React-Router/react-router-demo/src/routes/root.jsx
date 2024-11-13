import { Outlet, Link } from "react-router-dom";
// Outlet: definiert wo die children Routen gerendert werden sollen. 
// Link: Für die interne Navigation ohne Page reloads. 


const Root = () => {
    return (
        <>
        <div id="sidebar">
            <nav>
                {/*Wir navigieren mit Link Components anstelle von <a> Tags.*/}
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <div id="detail">
                <Outlet /> {/* Wenn ich zu /about navigiere, wird hier die About Komponente gerendert.*/}
            </div>
        </div>
        </>
    )
}

export default Root;