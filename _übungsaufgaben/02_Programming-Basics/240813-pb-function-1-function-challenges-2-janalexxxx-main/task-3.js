const reverseString = (string) => {
  // split("") => Wandelt den String in einen Array um
  // reverse() => Umkehrung des Arrays
  // join("") => Array in String umwandeln
  return string.split("").reverse().join("");
}

console.log(reverseString("table")); // "elbat"
console.log(reverseString("blabla")); // "albalb"
console.log(reverseString("")); // ""
console.log(reverseString("tomato")); // "otamot"
console.log(reverseString("cat")); // "tac"