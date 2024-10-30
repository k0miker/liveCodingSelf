const repeatString2 = (string, n) => {
  return string.repeat(n);
}

const repeatString = (string, n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += string;
  }
  return result;
}

console.log(repeatString("table", 3)); // "tabletabletable"
console.log(repeatString("cat", 5)); // "catcatcatcatcat"
console.log(repeatString("dog", 0)); // ""
console.log(repeatString("", 5)); // ""
console.log(repeatString("+", 10)); // "++++++++++"
