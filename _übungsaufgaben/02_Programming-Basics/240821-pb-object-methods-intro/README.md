# Object methods intro

## Task 1

Create some objects (at least 3) for different animals:

- a cat
- a dog
- a fish
- a bird
- whatever else you want

For each animal, add the following properties:

- `type`: the type of animal
- `name`: the name of the animal
- `color`: the color of the animal

## Task 2

Create a function `describe` and add it as a method to every animal you created.

The function returns a description of the animal.

For example:
```plaintext
Missy is a blue fish
```

## Task 3

Add a method `speak` to each animal which returns a different sound depending on the animal  

For example:
```javascript
console.log(dog.speak()); // woof woof
console.log(cat.speak()); // meow
console.log(fish.speak()); // blub blub
```

## Task 4

Create some objects (at least 3) for different persons, specifying:

- `name`
- `age`
- `city`
- `profession`

## Task 5

Add a method `introduce` to each object that returns a string with the person introducing themselves

For example:
```javascript
console.log(person1.introduce()); // My name is Steve, I am 37 years old. I live in Tokyo where I work as a UX Designer
```

## Task 6

Add a method `greet` to the objects from task 5.

The method should take another person object in input and it should return a message of one person greeting the other.

For example:

```javascript
// assuming that person2 is Cindy
console.log(person1.greet(person2)); // Hello Cindy, how are you?
```