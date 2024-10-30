/*
 Task 5
 */

const years = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];

// Option 1
for (let index = 0; index < years.length; index++) {
  const year = years[index];
  if (year % 4 === 0) {
    console.log(year);
  }
}

// Option 2
const finalYears = [];
for (let i = 0; i < years.length; i++) {
  if (year % 4 === 0) {
    finalYears.push(year);
  }
}

console.log(finalYears);


// Option 3
// ForEach ist eine Array-Methode (die kommt später)
years.forEach(year => {
  if (year % 4 === 0) {
    console.log(year);
  }
})

