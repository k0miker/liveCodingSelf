const Text = (props) => {
    // const x = (y<10) ? "ja es ist kleiner" : "nein"
    const className = (props.count < 5) ? "" : "backgroundOlive"; // Ternären Operator

    return(
        <>
        <p className={className}>
            {(props.count > 10) ? "count ist größer als 10" : `count ist ${props.count}`}
        </p>
        </>
    )
}

export default Text;