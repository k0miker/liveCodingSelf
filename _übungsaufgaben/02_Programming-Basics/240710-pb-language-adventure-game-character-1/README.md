# Adventure Game Character 1

Using the library `readline-sync` create a small interactive program that asks the user some information for a character in an adventure game.

Some ideas for things to ask:

- character name
- character type (warrior, wizard, ninja, thief...)
- character age
- character weapon

Feel free to add more.

## How to

To get the input from a user and save it to a variable you can use `readlineSync.question()`.

For example:

```javascript
const age = readlineSync.question("How old are you? ");
console.log(age);
```

## Example output

Below you can find an example of how the program might look like:

**IMPORTANT**: try to pay attention to adding some space between the different questions and the user input.

```plaintext
Welcome brave adventurer!

What is your name?
> Gatsu

And tell me, Gatsu, are you a warrior or a wizard?
> warrior

How old are you, Gatsu the warrior?
> 23

Which weapon you like to use in a fight?
> Giant Sword

So, just to recap:

Name: Gatsu
Type: warrior
Age: 23
Weapon: Giant Sword

Have fun on your adventure!
```

