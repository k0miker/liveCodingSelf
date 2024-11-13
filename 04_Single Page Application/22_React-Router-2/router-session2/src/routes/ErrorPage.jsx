import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    // useRouteError ist ein hook der den geworfenen Error returned. Das könnte z.b. folgendes sein:
    // 1. Runtime Error -> beim Rendern passiert
    // 2. Response Error -> 404, 500
    // 3. Manuell geworferne Errors
    // 4. Errors die beim Datenladen oder bei Actions passieren. 

    const error = useRouteError();
    return (
        <>
            <h1>OOOPS!</h1>
            <p>Sorry es gab einen Fehler</p>
            {/* 
            statusText: "Not Found" (für 404 Fehler)
            message: "cannot read properties of null" (für runtime fehler)
            */}
            <p>{error.statusText || error.message}</p>
        </>
    )
}

export default ErrorPage;