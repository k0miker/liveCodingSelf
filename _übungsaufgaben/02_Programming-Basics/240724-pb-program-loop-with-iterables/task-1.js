/*
 Task 1
 */

const string = "hello";

// Option 1
for (let i=0; i<string.length; i++) {
  console.log(string[i]);
}


// Option 2
for (const letter of string) {
  console.log(letter);
}
