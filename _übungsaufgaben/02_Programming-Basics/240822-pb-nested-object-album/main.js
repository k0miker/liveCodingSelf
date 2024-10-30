// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
const album = {
  artist: "The Clash",
  title: "The Clash",
  genre: "punk",
  year: 1977,
  tracklist: [
    { title: "Janie Jones", duration: "2:05" },
    { title: "Remote Control", duration: "3:00" },
    { title: "I'm So Bored With The U.S.A.", duration: "2:24" },
    { title: "White Riot", duration: "1:55" },
    { title: "Hate & War", duration: "2:05" },
    { title: "What's My Name", duration: "1:40" },
    { title: "Deny", duration: "3:03" },
    { title: "London's Burning", duration: "2:10" },
    { title: "Career Opportunities", duration: "1:51" },
    { title: "48 Hours", duration: "1:34" },
    { title: "Garageland", duration: "3:13" },
  ],
  credits: [
    {
      name: "Joe Strummer",
      instruments: ["Guitar", "Vocals"],
    },
    {
      name: "Mick Jones",
      instruments: ["Guitar", "Vocals"],
    },
    {
      name: "Paul Simonon",
      instruments: ["Bass Guitar"],
    },
    {
      name: "Tory Crimes",
      instruments: ["Drums"],
    },
  ],
};

whatTask(1);
/*
Task 1

Print the `title` and `duration` of the 6th song in the 
tracklist 

Expected output:
What's my name (1:40)
*/

console.log("\nSixth song:");
console.log(`${album.tracklist[5].title} (${album.tracklist[5].duration})`);

separator();

whatTask(2);
/*
Task 2

Looking at the `credits` property, print the name and instruments 
(separated by commas) of the first musician in the list.

Expected output:
Joe Strummer: Guitar, Vocals
*/
console.log("\nFirst musician:");
console.log(
  `${album.credits[0].name}: ${album.credits[0].instruments.join(", ")}`
);

separator();

whatTask(3);
/*
Task 3

Using a loop, print all the track titles, numbering them 
starting from 1, like shown below

Expected output:

1. Janie Jones
2. Remote Control
3. I'm So Bored With The U.S.A.
4. White Riot
5. Hate & War
6. What's My Name
7. Deny
8. London's Burning
9. Career Opportunities
10. 48 Hours
11. Garageland
*/

console.log("\nTracklist:");
// For in loop für Objekte
// let counter = 1;
// for (const index in album.tracklist) {
//   console.log(`${counter}. ${album.tracklist[index].title}`);
//   counter++;
// }

for (let i = 0; i < album.tracklist.length; i++) {
  console.log(`${i + 1}. ${album.tracklist[i].title}`);
}

separator();

whatTask(4);
/*
Task 4

Using the `credits` property in the object, print each band 
component together with the instruments they play.

Expected output:

Joe Strummer: Guitar, Vocals
Mick Jones: Guitar, Vocals
Paul Simonon: Bass Guitar
Tory Crimes: Drums
*/

console.log("\nBand members:");
for (let i = 0; i < album.credits.length; i++) {
  console.log(
    `${album.credits[i].name}: ${album.credits[i].instruments.join(", ")}`
  );
}

separator();
