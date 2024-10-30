import { useState } from "react";

const RandomList = () => {
    const [randomList, setRandomList] = useState([]);
    
    const addNumber = () => {
        const newRandomNumber = Math.random();
        // wir nehmen die alte randomList, und packen sie mit dem spread operator aus. (...) und dann tun wir die ausgepackten zahlen aus dem alten randomList mit newRandomNumber in ein neues Array. 
        setRandomList((randomList) => [...randomList, newRandomNumber]);
    }
    
    return (<>
    <button onClick={addNumber}>click me!</button>
    <ul>
        {randomList.map( (number, index) => (
            <li key={index}>{number}</li>
        ))
        }
    </ul>
    </>)
}


export default RandomList;