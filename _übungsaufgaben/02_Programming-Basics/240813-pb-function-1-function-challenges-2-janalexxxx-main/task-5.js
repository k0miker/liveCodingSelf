// Lösung mit Regular Expression
const removeVowels2 = (string) => {
  return string.replace(/[aeiouAEIOU]/g, "");
}

// Lösung mit Regular Expression
const removeVowels3 = (string) => {
  return string.replace(/[aeiou]/gi, "");
}

const removeVowels4 = (string) => {
  const vowels = "aeiouAEIOU";
  let result = "";
  for (const char of string) {
    if (!vowels.includes(char)) {
      result += char;
    }
  }
  return result;
}

function removeVowels(str) { 
  let result = ''; 
  for (let i = 0; i < str.length; i++) { 
    if (!'aeiouAEIOU'.includes(str[i])) { 
      result += str[i]; 
    } 
  } 
  return result; 
}

console.log(removeVowels("table")); // "tbl"
console.log(removeVowels("JavaScript")); // "JvScrpt"
console.log(removeVowels("AEIOU")); // ""
console.log(removeVowels("ABCDe")); // "BCD"