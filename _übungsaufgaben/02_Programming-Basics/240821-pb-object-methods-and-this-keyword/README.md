# Object method and this

This exercise is about practicing object methods.

## Task 1

Examine [task-1.js](task-1.js).

Write a loop to fill the `people` array with objects using the other arrays as source data for each object. Also create 2 other properties for each object:

    - `fullName`: string that is the first name and last name combined
    - `introduce`: method that returns a string like `"Hello, my name is Mark Shark, I live in New York and I am 18 years old."`

The first person object inside `people` should look like this:

```javascript
{
    firstName: "Mark",
    lastName: "Shark",
    age: 18,
    city: "New York",
    fullName: "Mark Shark",
    introduce: function() {...},
}
```

## Task 2

Examine [task-2.js](task-2.js).

Add a method called `greet` to the `person` object. It should should take in a string as input and return a custom greeting string depending on the input.

```javascript
// Notice the greeting capitalization

console.log(person.greet("hi")) // Hi, my name is Tim
console.log(person.greet("hey")) // Hey, my name is Tim
console.log(person.greet("hello")) // Hello, my name is Tim
```

## Task 3

Examine [task-3.js](task-3.js).

You are working on a fighting game.

Create two objects as the player characters with these properties:

    - `name`: string with the name of the character
    - `health`: number representing the remaining health of a character
    - `attackSkill`: string representing the kind of skill the character uses to attack
    - `attackDamage`: number representing how much damage does the attack skill do

Create a function called `attack` and add this function as a method to both characters.

The `attack` method should take another character object as an input parameter. When yo run the `attach` method it should:

    - decrease the `health` of the attacked character by to the `attackDamage` of the attacking character
    - print a message to the console for example: "Ryu attacked Ken with a punch, inflicting 16 damage. Ken's health is now 8."

The message should change depending on who's attacking and who's being attacked.

For example, if we have 2 characters called `ryu` and `ken`:

```javascript
ryu.attack(ken); // "Ryu attacked Ken with a punch, inflicting 16 damage. Ken's health is now 8."
ken.attack(ryu); // "Ken attacked Ryu with a flying kick, inflicting 24 damage. Ryu's health is now 2."
```

### Bonus

Feel free to add extra functionalities, like a way of checking when a character doesn't have any more health.
