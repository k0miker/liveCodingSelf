/*
 Task 4
 */

const cities = [
  "Berlin",
  "London",
  "Messina",
  "Los Angeles",
  "Madrid",
  "Tokyo",
  "Sidney",
  "New Delhi",
  "La Plata",
];

// Option 1
for (const city of cities) {
  if (city.toLowerCase().includes('l')) {
    console.log(city);
  }
}

// Option 2
for (const city of cities) {
  if (city.toLowerCase().includes('l')) console.log(city);
}

// Option 3
for (const city of cities) {
  if (city.includes('l') || city.includes('L')) console.log(city);
}
