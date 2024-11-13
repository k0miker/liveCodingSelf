function WinCheck(props) {
    console.log("props", props);
    console.log("props.number", props.num);

    // wir können props natürlich auch wie gewohnt
    // "destructern"
    // const { num } = props
    
    return (
        <>
            {props.num === 20 ? <h2>Du hast Gewonnen (Rum und Döner)!</h2> : <p>Mach nochmal!</p>}
        </>
    )

    // verkürtze Variante
    // return props.num === 20 ? <h2>Du hast Gewonnen (Rum und Döner)!</h2> : <p>Mach nochmal!</p>


}

export default WinCheck;