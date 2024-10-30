// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
// class Employee {
//   constructor(id, firstName, lastName, taxId, salary) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.taxId = taxId;
//     this.salary = salary;
//   }

//   generatePaySlip() {
//     const monthlySalary = (this.salary / 12).toFixed(2);
//     return `Employee ID ${this.id}\n Name: ${this.firstName} ${this.lastName}\n Tax ID: ${this.taxId}\n Monatly Salary: ${monthlySalary}`;
//   }
// }

// let anEmployee = new Employee(123, "John", "Smith", 99090, 60000);
// console.log(anEmployee.generatePaySlip());

// const tax1 = 0.6;
// const tax2 = 0.7;
// const tax3 = 0.8;

// class Employee {
//   constructor(id, firstName, lastName, taxId, salary) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.taxId = taxId;
//     this.salary = salary;
//   }
//   generatePaySlip() {
//     let taxRate;
//     if (this.taxId === "tax1") {
//       taxRate = tax1;
//     } else if (this.taxId === "tax2") {
//       taxRate = tax2;
//     } else if (this.taxId === "tax3") {
//       taxRate = tax3;
//     } else {
//       taxRate = 1;
//     }
//     console.log(
//       `Employee ID: ${this.id}, Name: ${this.firstName} ${
//         this.lastName
//       }, Tax ID: ${this.taxId}, Pay ${(this.salary * taxRate) / 12}`
//     );
//   }
// }
// const person1 = new Employee(12, "Peter", "Lustig", "tax1", 30000);
// const person2 = new Employee(12, "Peter", "Lustig", "tax2", 30000);
// person1.generatePaySlip();
// person2.generatePaySlip();

separator();

whatTask(2);
class Employee {
  static nextId = 0;

  constructor(firstName, lastName, taxId, salary) {
    this.id = Employee.nextId++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary;
  }

  generatePaySlip() {
    const monthlySalary = (this.salary / 12).toFixed(0);
    return `Employee ID: ${this.id} Name: ${this.firstName} ${this.lastName} Tax ID: ${this.taxId} Pay: ${monthlySalary}`;
  }
}

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployees = [];
  }

  addManagedEmployee(employee) {
    employee.managed = true;
    if (!this.managedEmployees.includes(employee))
      this.managedEmployees.push(employee);
  }

  removeManagedEmployee(employeeId) {
    this.managedEmployees = this.managedEmployees.filter(
      (emp) => emp.id !== employeeId
    );
  }
}

const manager = new Manager("Jane", "Smith", 987, 80000);
const employee1 = new Employee("Alice", "Johnson", 123, 55000);
const employee2 = new Employee("Bob", "Williams", 321, 47000);
const employee3 = new Employee("Charlie", "Brown", 111, 36000);
const employee4 = new Employee("Diana", "Miller", 444, 40000);
console.log(employee1);

manager.addManagedEmployee(employee1);
manager.addManagedEmployee(employee2);
manager.addManagedEmployee(employee3);
manager.addManagedEmployee(employee4);

console.log(manager.managedEmployees);

manager.removeManagedEmployee(1);
manager.removeManagedEmployee(3);

console.log(manager.managedEmployees);
// console.log(employee1.generatePaySlip());

manager.managedEmployees.forEach((employee) =>
  console.log(employee.generatePaySlip())
);

separator();
