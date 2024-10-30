 # Class

## Task 1

Create a `Product` class with the following properties:

- `type`: the type of product, for example t-shirt, jeans, shoes...
- `color`: a string representing the color of the product
- `price`: a number with the price

The class has 1 method:

- `description`: it returns a string with the description of the product, for example `"A red t-shirt, 19.99€"`.

For example:

```js
const shirt = new Product("shirt", "red", 9.99);

console.log(shirt.description()); // A red shirt, 9.99€
```

## Task 2

Create a class called `Rectangle`

The class contains 3 properties:

- `width`
- `height`
- `color`

The class contains the following methods:

- `perimeter`: calculates and returns the perimeter of the rectangle
- `area`: calculates and returns the area of the rectangle
- `description`: returns a string describing the rectangle, stating the color, height and width. For example: `"This is a green rectangle 3cm wide and 4cm high"`

For example:

```js
const rectangle1 =  new Rectangle(3, 4, "green");

console.log(rectangle1.perimeter()); // 14
console.log(rectangle1.area()); // 12 
console.log(rectangle1.description()); // This is a green rectangle 3cm wide and 4cm high
```

## Task 3

Create a class called `Person`

The class should contain the following properties:

- `firstName`
- `lastName`
- `age`
- `city`

The class should contain the following methods:

- `introduce()`: it returns a string like `"Hello, my name is Rick Sanchez and I live in Berlin"`
- `greet(person)`: it takes a string with the name of person in input and returns a message like `"Hello Sophie, how are you?"`. 

**Bonus**

Make the `greet()` method so that it picks a random greeting each time. Some options are "Hi", "Hey", "Hallo", "Yo", "Good morning"...

For example:

```js
const person1 = new Person("Thomas", "Thomson", 29, "New York");

console.log(person1.introduce()); // Hello, my name is Thomas Thomson and I live in New York
console.log(person1.greet("John")); // Hi John, how are you?
console.log(person1.greet("Sophie")); // Hello Sophie, how are you?
console.log(person1.greet("Mike")); // Hallo Mike, how are you?
```

## Task 4

Create a `Song` class to represent a song.

The class should contain the following properties:

- `title`: title of the song
- `artist`: artist of the song
- `duration`: duration of the song, as a string with minutes and seconds, like this: `3:24`

The class has the following methods:

- `info()`: returns a string with information about the song
- `durationInSeconds()`: returns a number with the duration of the song in seconds

For example:
```js
const song = new Song("Last Nite", "The Strokes", "3:13");

console.log(song.info()); // Last Nite by The Strokes (3:13)
console.log(song.durationInSeconds()); // 193
```

## Task 5

Create a `HTMLElement` class called to represent a generic HTML element.

The class should contain the following properties:

- `element`: a string representing the HTML element, for example `div`, `span`, `h1`...
- `id`: a string with the element id. 
  - default value: `""`
- `classList`: an array of strings containing the element's CSS classes
    - default value: `[]`

The class has the following methods:

- `addCSSClass(className)`: it takes a class name in input. It checks whether the class is already inside the `classList` array. If it isn't, it adds it at the end of the `classList` array
- `removeCSSClass(className)`: it takes a class name in input and removes the matching class from the `classList` array.
- `showHTML()`: it prints a string showing the HTML element with its `id` and `class`es, for example: `"<section id="about-section" class="page-section container alt-bg">...</section>"`

For example:

```js
const section = new HTMLElement("section", "about-section", []);

section.addCSSClass("page-section")
section.removeCSSClass("container")
console.log(section.showHTML()); // <section id="about-section" class="page-section container">...</section>

const div = new HTMLElement("div", "", []);
console.log(div.showHTML()); // <div id="" class="">...</div>
```