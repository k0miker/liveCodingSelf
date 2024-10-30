/*
 Task 2
 */

const animals = ["cat", "dog", "bird", "koala", "giraffe"];

// Option 1
for (let i=0; i<animals.length; i++) {
  console.log(animals[i]);
}

// Option 2
for (const word of animals) {
  console.log(word);
}