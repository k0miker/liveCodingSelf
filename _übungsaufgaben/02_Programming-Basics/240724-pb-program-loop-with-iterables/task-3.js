/*
 Task 3
 */


const colors = ["green", "pink", "yellow", "red", "violet"];

// Option 1
let position = 1;

for (const color of colors) {
  console.log(`${position}. ${color}`);
  position++;
}

// Option 2
for (let i=0; i<colors.length; i++) {
  console.log(`${i+1}. ${colors[i]}`);
}


// Option 3
for (let i=0; i<colors.length; i++) {
  console.log((i + 1) + ". " + colors[i]);
}
