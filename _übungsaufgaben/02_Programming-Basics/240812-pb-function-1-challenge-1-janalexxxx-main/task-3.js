/**
 * Task 3
 * 
 * Create a function that takes a string in input 
 * and returns the same string with the first and last character capitalised
 * 
 * If the input string is an empty string, it returns an empty string
 */

function capitaliseFirstAndLast2(string) {
  if (string === "") return "";
  if (string.length === 1) return string.toUpperCase();

  const firstChar = string[0].toUpperCase();
  const lastChar = string[string.length - 1].toUpperCase();
  const middle = string.slice(1, -1).toLowerCase();
  
  return firstChar + middle + lastChar;
}

const capitaliseFirstAndLast3 = (str) =>
  str.length === 0
    ? ""
    : str[0].toUpperCase() + str.slice(1, -1) + str.slice(-1).toUpperCase();

const capitaliseFirstAndLast4 = s => s ? s[0].toUpperCase() + s.slice(1, -1) + s.slice(-1).toUpperCase() : "";

function capitaliseFirstAndLast(str) {
  if(str === '') return '';
  return str[0].toUpperCase() + str.slice(1,-1) + str.slice(-1).toUpperCase();
}

console.log(capitaliseFirstAndLast("table")); // TablE
console.log(capitaliseFirstAndLast("cat")); // CaT
console.log(capitaliseFirstAndLast("js")); // JS
console.log(capitaliseFirstAndLast("")); // ""
console.log(capitaliseFirstAndLast("tischTeNNis")); // "TischtenniS"
