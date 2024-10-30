// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
/* 
Task 1

Given the object below
*/

let person = {
  name: "Petra Morin",
  address: {
    delivery: {
      street: "371-7636 Nulla Road",
      zip: "83-315",
      country: "Germany",
    },
    billing: {
      street: "123-999 Fake Street",
      zip: "12345",
      country: "Germany",
    },
  },
  hobbies: ["drums", "skating", "comics"],
  languages: [
    {
      name: "German",
      level: 5,
    },
    {
      name: "English",
      level: 4,
    },
    {
      name: "Spanish",
      level: 2,
    },
  ],
};

whatTask(1);
/*
Task 1.1

Print the zip code of the billing address to the console

Expected output:

12345
*/

console.log("\nBilling address:");
console.log(person.address.billing.zip);

separator();

whatTask(1.2);
/*
Task 1.2

Print the last of the hobbies

Expected output:
comics
*/
console.log("\nLast hobby:");
console.log(person.hobbies[person.hobbies.length - 1]);

separator();

whatTask(1.3);
/*
Task 1.3

Print the name and the level of the second spoken language 

Expected output:
English: 4
*/

console.log("\nSecond language:");
const secondLang = person.languages[1];
console.log(`
Second language: ${secondLang.name}, Level: ${secondLang.level}
`);

separator();

whatTask(1.4);
/*
Task 1.4

Print all the information relative to the delivery address.

Expected output:
Street: 371-7636 Nulla Road
Zip: 83-315
Country: Germany
*/

// console.log("\nDelivery address:");
const deliveryAdd = person.address.delivery;
console.log(
  `\nDelivery address: \nStreet: ${deliveryAdd.street} \nZip: ${deliveryAdd.zip} \nCountry: ${deliveryAdd.country}`
);

// console.log(`
// Street: ${person.address.delivery.street}
// Zip: ${person.address.delivery.zip}
// Country: ${person.address.delivery.country}
// `);

separator();

whatTask(1.5);
/*
Task 1.5

Using a loop, print all the hobbies, each on a separate line

Expected output:
Hobbies: 
- drums
- skating
- comics
*/

console.log("\nHobbies:");
for (let i = 0; i < person.hobbies.length; i++) {
  console.log(`- ${person.hobbies[i]}`);
}

// person.hobbies.forEach((hobby) => {
//   console.log(`- ${hobby}`);
// });

separator();

whatTask(1.6);
/*
Task 1.6

Using a loop, list all known languages with a level smaller than 5, together with their 
level.

Expected output:

English: 4
Spanish: 2
*/

console.log("\nKnown languages:");
// for (let i = 0; i < person.languages.length; i++) {
//   if (person.languages[i].level < 5) {
//     console.log(`${person.languages[i].name}: ${person.languages[i].level}`);
//   }
// }

for (const lang in person.languages) {
  if (person.languages[lang].level < 5) {
    console.log(
      `${person.languages[lang].name}: ${person.languages[lang].level}`
    );
  }
}

separator();
const users = [
  {
    name: "Petra Morin",
    address: {
      delivery: {
        street: "371-7636 Nulla Road",
        zip: "83-315",
        country: "Germany",
      },
      billing: {
        street: "123-999 Fake Street",
        zip: "12345",
        country: "Germany",
      },
    },
    hobbies: ["drums", "skating", "comics"],
    languages: [
      {
        name: "German",
        level: 5,
      },
      {
        name: "English",
        level: 4,
      },
      {
        name: "Spanish",
        level: 2,
      },
    ],
  },
  {
    name: "Abel Ashley",
    address: {
      delivery: {
        street: "9977 Aliquam Avenue",
        zip: "920134",
        country: "Mexico",
      },
      billing: {
        street: "123 Lorem Square",
        zip: "912098",
        country: "Mexico",
      },
    },
    hobbies: ["reading books", "wood working"],
    languages: [
      {
        name: "Spanish",
        level: 5,
      },
      {
        name: "English",
        level: 5,
      },
      {
        name: "Italian",
        level: 3,
      },
    ],
  },
  {
    name: "Aaron Cardenas",
    address: {
      delivery: {
        street: "987 Ipsum",
        zip: "129-234",
        country: "France",
      },
      billing: {
        street: "123 Etwas Plaza",
        zip: "912098",
        country: "Spain",
      },
    },
    hobbies: ["painting", "singing", "hiking"],
    languages: [
      {
        name: "French",
        level: 5,
      },
      {
        name: "Spanish",
        level: 5,
      },
      {
        name: "German",
        level: 1,
      },
    ],
  },
  {
    name: "Felix Moreno",
    address: {
      delivery: {
        street: "320-7871 Nec, Av.",
        zip: "59156",
        country: "New Zealand",
      },
      billing: {
        street: "921 Nullae Aliquam",
        zip: "912098",
        country: "New Zealand",
      },
    },
    hobbies: ["jogging", "coffee", "bird watching"],
    languages: [
      {
        name: "English",
        level: 5,
      },
      {
        name: "Italian",
        level: 3,
      },
    ],
  },
  {
    name: "Skyler May",
    address: {
      delivery: {
        street: "Ap #854-6462 Consectetuer Ave",
        zip: "00608",
        country: "Singapore",
      },
      billing: {
        street: "Ap #854-6462 Consectetuer Ave",
        zip: "00608",
        country: "Singapore",
      },
    },
    hobbies: ["cycling", "soccer", "bouldering"],
    languages: [
      {
        name: "Malay",
        level: 5,
      },
      {
        name: "English",
        level: 5,
      },
      {
        name: "Mandarin",
        level: 4,
      },
      {
        name: "French",
        level: 2,
      },
    ],
  },
];

whatTask(2.1);
/*
Task 2.1

Print the name and hobbies separated by commas from the last 
person on the list

Expected output:
Skyler May
Hobbies: cycling, soccer, bouldering
*/

console.log("\nLast person:");

console.log(
  users[users.length - 1].name +
    "\nHobbies: " +
    users[users.length - 1].hobbies.join(", ")
);

separator();

whatTask(2.2);
/*
Task 2.2

Print the name and information about the billing address of 
the second person on the list

Expected output:
Abel Ashley

Billing address:
Street: 123 Lorem Square
Zip: 912098
Country: Mexico
*/

console.log("\nSecond person:");
console.log(users[1].name + "\nBilling address:");
for (const key in users[1].address.billing) {
  console.log(
    `${key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}: ${
      users[1].address.billing[key]
    }`
  );
}

separator();

whatTask(2.3);
/*
Task 2.3

Using loops, print all the names of the people on the list. 

For each name, print also an index that starts at 1.

Expected output:
1. Petra Morin
2. Abel Ashley
3. Aaron Cardenas
4. Felix Moreno
5. Skyler May
*/

console.log("\nUsers:");
for (let i = 0; i < users.length; i++) {
  console.log(`${i + 1}. ${users[i].name}`);
}

separator();

whatTask(2.4);
/*
Task 2.4

Using loops, print a message for each person with a message 
showing the name, the delivery country and the first hobby in the list.

Expected output:
Petra Morin lives in Germany and their favourite hobby is: drums.

Abel Ashley lives in Mexico and their favourite hobby is: reading books.

Aaron Cardenas lives in France and their favourite hobby is: painting.

Felix Moreno lives in New Zealand and their favourite hobby is: jogging.

Skyler May lives in Singapore and their favourite hobby is: cycling.
*/

separator();

whatTask(2.5);
/*
Task 2.5

Using loops, print each name and every language they know 
with a level greater than or equal to 4.

Expected output:
Petra Morin speaks fluently:
- German
- English

Abel Ashley speaks fluently:
- Spanish
- English

...
*/
