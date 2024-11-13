// extrem simples Beispiel für eine Komponente, die nichts rendert
// (also keine html elemente erzeugt), sondern nur javascript code ausführt

const Alert = () => {
    alert("Was ein Schwachsinn")

    return null;
}

export default Alert;