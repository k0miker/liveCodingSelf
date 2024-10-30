
const canvas = document.querySelector('#canvas');
canvas.width = 300;
canvas.height = 200;

const context = canvas.getContext('2d');
console.log(context);


// Hintergrundfarbe
context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);


/////////////////////////
// Rechtecke zeichnen

// Rechteck mit Füllung
context.fillStyle = 'white';
context.fillRect(20, 20, 10, 10);

// Rechteck mit Outline
context.lineWidth = 4; // Breite des Outline
context.strokeStyle = 'yellow';
context.strokeRect(40, 20, 10, 10);



//////////////////////////
// Pfade zeichnen

// Pfade bestehen aus einzelnen Punkten, die miteinander verbunden werden. Pfade können mit Füllung oder mit Outline gezeichnet werden.


// Beispiel: Einfachen Pfad zeichnen

// 1. Pfad definieren (Nur Outline)
context.beginPath(); // Neuen Pfad starten
context.moveTo(20, 60); // Zu Startpunkt auf dem Canvas bewegen
context.lineTo(40, 80); // Linie vom Startpunkt zu neuem Punkt zeichnen
context.lineTo(50, 70);
context.lineTo(60, 80);

// 2. Zeichen-Einstellungen setzen
context.lineWidth = 4;
context.strokeStyle = "orange";

// 3. Zeichnen
context.stroke();


// Beispiel: Dreieck mit Pfad zeichnen (Füllung & Outline)
context.beginPath();
context.moveTo(70, 80);
context.lineTo(90, 80);
context.lineTo(80, 60);

context.closePath(); // Pfad schließen

context.fillStyle = 'white';
context.fill(); // Pfad fülllen

context.stroke(); // Alte Zeicheneinstellungen werden weiterhin genommen, wenn wir diese nicht überschreiben



////////////////////////////////////////////
// Rundungen zeichnen (Kreise, Kurven, etc.)
// => context.arc(xPos, yPos, radius, startWinkel, endWinkel)
//
// Winkel werden in Radian angegeben:
// => 360 Grad => 2 * Math.PI
// => X Grad => 2 * Math.PI / 360 * x

// Beispiel 1: Halbkreis zeichnen
context.beginPath();

let radius = 20;
let startAngle = 0;
let endAngle = 2 * Math.PI / 360 * 180; // 1 * Math.PI // 180 Grad

context.arc(40, 120, radius, startAngle, endAngle);

context.strokeStyle = 'blue';
context.lineWidth = 3;
context.setLineDash([4, 2]); // Gestrichtelte Linie

context.stroke();


// Beispiel 2: Ganzen Kreis zeichnen
context.beginPath();

radius = 20;
startAngle = 0;
endAngle = 2 * Math.PI / 360 * 360; // 2 * Math.PI // 360 Grad

context.arc(100, 120, radius, startAngle, endAngle);

context.fillStyle = 'orange';
context.strokeStyle = 'yellow';
context.lineWidth = 3;
context.setLineDash([4, 2]); // Gestrichtelte Linie

context.fill();
context.stroke();


/////////////////////////
// Text zeichnen

context.font = '20px Helvetica'; // Schriftgröße & Schriftart setzen

context.fillStyle = 'white';
context.textAlign = 'left';

// context.fillText(string, xPosition, yPosition)
context.fillText('Hallo Welt', 20, 180);



/////////////////////////////
// Bilder zeichnen (Sprites)

const spriteImage = new Image();
spriteImage.src = 'flappybird.png';

const xPosition = 150;
const yPosition = 80;
// Die Originalgröße ist 408px breit & 288px hoch
const imgWidth = 408 / 4;
const imgHeight = 288 / 4;

spriteImage.onload = () => {
  // Bild erst zeichnen, wenn dieses geladen wurde
  context.drawImage(spriteImage, xPosition, yPosition, imgWidth, imgHeight);
}


