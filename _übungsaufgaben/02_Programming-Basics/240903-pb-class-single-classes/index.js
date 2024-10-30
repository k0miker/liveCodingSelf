// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
class Product {
  constructor(type, color, price) {
    this.type = type;
    this.color = color;
    this.price = price;
  }

  description() {
    return `A ${this.color} ${this.type}, ${this.price}€`;
  }
}

const shirt = new Product("shirt", "red", 9.99);
console.log(shirt.description());

separator();

whatTask(2);
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
  area() {
    return this.width * this.height;
  }
  description() {
    return `Dies ist ein ${this.color}es Rechteck, ${this.width}cm breit und ${this.height}cm hoch`;
  }
}

const rectangle1 = new Rectangle(6, 4, "black");

console.log(rectangle1.perimeter());
console.log(rectangle1.area());
console.log(rectangle1.description());

separator();

whatTask(3);
class Person {
  constructor(firstName, lastName, age, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
  }

  introduce() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I live in ${this.city}`;
  }

  greet(person) {
    const greetings = [
      "Hello",
      "Hi",
      "Hey",
      "Hola",
      "Bonjour",
      "Hallo",
      "Ciao",
      "Hej",
      "Salut",
      "Aloha",
      "Namaste",
      "Konnichiwa",
      "Szia",
      "Merhaba",
      "Shalom",
      "Zdravstvuyte",
      "Nǐ hǎo",
      "Olá",
      "Kamusta",
      "Salam",
      "Kumusta",
      "Hei",
      "Ahoj",
      "Sveiki",
      "Saluton",
      "Tere",
      "Sawubona",
      "Yassas",
      "Hoi",
      "Hej",
      "Salam",
      "Sveiki",
      "Saluton",
      "Tere",
      "Sawubona",
      "Yassas",
      "Hoi",
    ];
    const randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)];
    return `${randomGreeting} ${person}, how are you?`;
  }
}
const person1 = new Person("Thomas", "Thomson", 29, "New York");

console.log(person1.introduce());
console.log(person1.greet("John"));
console.log(person1.greet("Sophie"));
console.log(person1.greet("Mike"));

separator();

whatTask(4);
class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }
  info() {
    return `${this.title} von ${this.artist} ${this.duration}`;
  }
  durationInSeconds() {
    // VARIANTE 1
    const time = this.duration.split(":");
    return parseInt(time[0] * 60) + parseInt(time[1]) + " seconds";

    // VARIANTE 2
    // const [minutes, seconds] = this.duration.split(":").map(Number);
    // return minutes * 60 + seconds;
  }
}

const song = new Song("Last Nite", "The Strokes", "3:34");
console.log(song.info()); // Last Nite von The Str
console.log(song.info()); // Last Nite von The Strokes 3:34
console.log(song.durationInSeconds()); // 214

separator();

whatTask(5);
class HTMLElement {
  constructor(element, id, classList = []) {
    this.element = element;
    this.id = id;
    this.classList = classList;
  }
  addCSSClass(className) {
    if (!this.classList.includes(className)) this.classList.push(className);
  }
  removeCSSClass(className) {
    this.classList = this.classList.filter((item) => item !== className);
  }
  showHTML() {
    return `<${this.element} id="${this.id}" class="${this.classList.join(
      " "
    )}">...</${this.element}>`;
  }
  // showHTML() {
  //   const idPart = this.id ? ` id="${this.id}"` : "";
  //   const classPart =
  //     this.classList.length > 0 ? ` class="${this.classList.join(" ")}"` : "";
  //   return `<${this.element}${idPart}${classPart}>...</${this.element}>`;
  // }
}
const div = new HTMLElement("div", "", []);

div.addCSSClass("page-section");
// div.removeCSSClass("container");
console.log(div.showHTML());

separator();

// const test = ["test", "hallo"];
// test = "auto";

// console.log(test);
