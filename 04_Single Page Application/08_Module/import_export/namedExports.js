// bei allen sachen die eine andere Datei braucht, kann ich einfach einen export dazu schreiben. 

let zahl = 0; // Zahl ist in meinem Modul privat
export const banana = "yellow"; 
export const apple = "red";
export const addierer = () => {
    zahl = zahl + 1;
    console.log(zahl);
}