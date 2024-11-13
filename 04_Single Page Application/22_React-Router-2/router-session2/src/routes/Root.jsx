import {Outlet, Link} from "react-router-dom"
const Root = () => {
    return (
        <>
        <div>
            <ul>
                <li>
                    <Link to="/"> Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
        <Outlet />
        </>
    )
}

export default Root; 