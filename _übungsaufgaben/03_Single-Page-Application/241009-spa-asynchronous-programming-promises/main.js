console.log("Before");

const file = fetch("./data.json").then(() => {
  console.log("File downloaded");
});

console.log("After");
