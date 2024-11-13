import { useContext } from "react";
import { MyContext } from "../App";

function Musicians() {

    // Hier holen wir uns unsere Daten aus dem Context
    const contextData = useContext(MyContext);
    console.log("contextData", contextData);

    const { count, setCount } = contextData;

    const handleClick = () => {
        setCount(count + 1 );
    }

    return (
        <div className="cards">
            <div className="card" onClick={handleClick}>
                <p>Ich heiße John und spiele Bass</p>
            </div>
            <div className="card" onClick={handleClick}>
                <p>Ich heiße Paul und spiele Gitarre</p>
            </div>
            <div className="card" onClick={handleClick}>
                <p>Ich heiße Ringo und spiele Flöte</p>
            </div>
        </div>
    );

}

export default Musicians;