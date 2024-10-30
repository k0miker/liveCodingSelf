// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTopic("Verschachtelte Destructuring");
whatTask(1);

const book = {
  title: "JavaScript: The Good Parts",
  author: {
    firstName: "Douglas",
    lastName: "Crockford",
    birthYear: 1969,
  },
  year: 2008,
  reviews: [
    { reviewer: "Alice", rating: 4.5 },
    { reviewer: "Bob", rating: 5.0 },
    { reviewer: "Charlie", rating: 4.0 },
  ],
};

const {
  title,
  author,
  reviews: [{ rating: rating1 }, { rating: rating2 }, { rating: rating3 }],
} = book;
const highestRating = Math.max(rating1, rating2, rating3);

console.log(`
  Title: ${title}
  Author: ${author.firstName} ${author.lastName}
  Highest Rating: ${highestRating}
`);

separator();

whatTopic("Funktionale Destructuring");
whatTask(2);

const data = {
  user: {
    name: "Jane Doe",
    age: 28,
    email: "jane.doe@example.com",
  },
  settings: {
    theme: "dark",
    notifications: true,
    language: "en",
  },
};

const extractData = ({
  user: { name, email },
  settings: { theme, notifications },
}) =>
  console.log(
    `User: ${name}, Email: ${email}, Theme: ${theme}, Notifications: ${notifications}`
  );

extractData(data);

separator();

whatTopic("Array von Objekten Destructuring");
whatTask(3);

const students = [
  { name: "Tom", grade: 90 },
  { name: "Jerry", grade: 85 },
  { name: "Spike", grade: 78 },
  { name: "Tyke", grade: 92 },
];

let totalGrade = 0;

const totalstudents = students.length;

for (const { grade } of students) {
  totalGrade += grade;
}
const averageGrade = totalGrade / totalstudents;
console.log(`Average Grade: ${averageGrade.toFixed(2)}`);

// let totalGrades = 0;
// let studentNames = [];

// for (let i = 0; i < students.length; i++) {
//   const { name, grade } = students[i]; // Destrukturierung der Noten
//   studentNames.push(name);
//   totalGrades += grade;
// }

// const averageGrade = totalGrades / students.length;
// console.log(`Student names: ${studentNames.join(", ")}`);
// console.log(`Average Grade: ${averageGrade}`);

separator();

whatTopic("Kombination von Array- und Objekt-Destructuring");
whatTask(4);

const employees = [
  { name: "Alice", details: { department: "HR", salary: 5000 } },
  { name: "Bob", details: { department: "Engineering", salary: 7000 } },
  { name: "Charlie", details: { department: "Marketing", salary: 6000 } },
  { name: "David", details: { department: "Sales", salary: 5500 } },
];

let totalWages = 0;
let employeeCount = employees.length;

for (const {
  name: employeeName,
  details: { department: dept, salary: wage },
} of employees) {
  totalWages += wage;
}

const averageWage = totalWages / employeeCount;

console.log("Average Salary:", averageWage);

// VARIANTE unnötig viel
// let employeeNames = [];
// let departments = [];
// let totalSalary = 0;
// for (let i = 0; i < employees.length; i++) {
//   const {
//     name,
//     details: { department, salary },
//   } = employees[i]; // Destrukturierung der Gehälter
//   employeeNames.push(name);
//   departments.push(department);
//   totalSalary += salary;
// }

// const averageSalary = totalSalary / employees.length;
// console.log(`
// Employees: ${employeeNames.join(", ")}
// Departments: ${departments.join(", ")}
// Average Salary: ${averageSalary}
// `);

// VARIANTE ADVANCED
// const persons = employees.map(({ name, details: { department, salary } }) => [
//   name,
//   department,
//   salary,
// ]);
// console.log(persons);

// const [employee1, employee2, employee3, employee4] = employees;
// // const [] = employees.flat();
// const totalSalary = employees.reduce(
//   (sum, { details: { salary } }) => sum + salary,
//   0
// );
// const averageSalary = totalSalary / employees.length;

// console.log(`average salary: ${averageSalary}`);

separator();

whatTopic("Default-Werte und Rest-Syntax");
whatTask(5);

const product = {
  name: "Laptop",
  price: 1200,
  // Optional: rating, inStock
};

function processData({
  name,
  price,
  rating = "Not Rated",
  inStock = true,
  ...rest
}) {
  console.log(`Product Name: ${name}`);
  console.log(`Price: $${price}`);
  console.log(`Rating: ${rating}`);
  console.log(`In Stock: ${inStock}`);
  console.log(`Additional Info:`, rest);
}
processData(product);
