import { createContext, useState } from "react";

// Ich baue einen Context der in der Gesamten App benutzt werden kann. 
// den buttonContext benutzen wir später in useContext
// const contextData = useContext(ButtonContext)
export const ButtonContext = createContext();

// Ich baue einn Context-Provider der allen Kind-Komponenten Zugriff auf die Daten ermöglicht. 

export function ButtonContextProvider({ children }) {
    const [count, setCount] = useState(0);
    // Das data Objekt enthält alle Werte und Funktionen, die wir über den Context verfügbar machen wollen. 
    // count: Der aktuelle Zählerstand
    // setCount: Die Funktion zum aktualisieren des Zählers. 
    const data = {
        count, 
        setCount,
        message: "Hallo Welt aus Context"
    }
    return (
        // Der Provider umschließt alle Kind-Komponenten und macht ihnen
        // das data Objekt zugänglich. 
        <ButtonContext.Provider value={data}>
            {children}
        </ButtonContext.Provider>
    )
}
