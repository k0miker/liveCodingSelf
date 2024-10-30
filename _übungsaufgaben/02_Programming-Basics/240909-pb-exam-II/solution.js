// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
const profileData = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "Berlin",
};
console.log(profileData);

separator();

whatTask(2);
profileData.details = function () {
  return `${this.firstName} ${this.lastName} is ${this.age} years old and lives in ${this.city}.`;
};
console.log(profileData.details());

separator();

whatTask(3);
let adjectives = ["smart", "kind", "sweet", "small", "clear"];
const wordConverter = (words, suffix) => {
  return words.map((word) => word.concat(suffix));
};
console.log(adjectives);
console.log(wordConverter(adjectives, "er"));

separator();

whatTask(4);
const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];
const calculateHours = (hours) => {
  // Variante 1
  // let sumHours = 0;
  // hours.forEach((day) => {
  //   sumHours += day.end - day.start;
  // });
  // return sumHours;

  // Variante 2
  return hours.reduce((acc, cur) => (acc += cur.end - cur.start), 0);
};

console.log(calculateHours(hourTracking));

separator();

whatTask(5);
class Course {
  constructor(teacher, type, number) {
    this.teacher = teacher;
    this.type = type;
    this.number = number;
  }
  spaceNeeded() {
    return this.number * 2;
  }
  details() {
    return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`;
  }
}
const hugsForBugs = new Course("Jan", "Web Development", 14);
console.log(hugsForBugs.spaceNeeded());
console.log(hugsForBugs.details());

separator();

whatTask(6);
const validPin = (str) => {
  const pinArr = [...str];
  if (
    pinArr.filter((element) => !"0123456789".includes(element)).length === 0 &&
    pinArr.length === 4 &&
    pinArr[0] !== pinArr[3] &&
    "02468".includes(pinArr[3])
  )
    return true;
  return false;
};

// const validPin = (pin) => {
//   if (!/^\d{4}$/.test(pin)) {
//     // for (const char of pin) {
//     //   if (Number.isNaN(Number(char))) {
//     //     return false;
//     //   }
//     // }
//     // if (pin.split('').some(char => char < '0' || char > '9')) {
//     // if (pin.split('').some(char => isNaN(Number(char)))) {
//     return `Should only consist of numbers.`;
//   } else if (pin.length !== 4) {
//     return `Should be 4 digits, not ${pin.length}.`;
//   } else if (pin[pin.length - 1] % 2 !== 0) {
//     // else if (Number(pin[pin.length - 1]) % 2 !== 0) {
//     return `Last number should be even.`;
//   } else if (pin[0] === pin[pin.length - 1]) {
//     // else if (pin.charAt(0) === pin.charAt(pin.length - 1)) {
//     return `First and last digits should be different.`;
//   } else {
//     return `Your input is correct!`;
//   }
// };

// function validPin(pin) {
//   if (pin.length !== 4) {
//     return false;
//   }

//   for (let i = 0; i < pin.length; i++) {
//     if (pin[i] < "0" || pin[i] > "9") {
//       return false;
//     }
//   }

//   const lastNum = pin[3];
//   if (lastNum % 2 !== 0) {
//     return false;
//   }

//   if (pin[0] === pin[3]) {
//     return false;
//   }

//   return true;
// }

console.log(validPin("1234"));
console.log(validPin("1235")); // last number should be even
console.log(validPin("12ww")); // should only consist of numbers
console.log(validPin("12.4")); // should only consist of numbers
console.log(validPin("-234")); // should only consist of numbers
console.log(validPin("12345")); // should be 4 digits, not 5
console.log(validPin("2222")); // first and last digits should be different

console.log(validPin("2224"));
