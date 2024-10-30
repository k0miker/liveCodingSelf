console.clear();

// ## Task 1 - is number in range?

function isNumberInRange(number, min, max) {
  if (
    typeof number !== "number" ||
    typeof min !== "number" ||
    typeof max !== "number"
  ) {
    return { msg: "please, provide three numbers" };
  }

  return number >= min && number <= max;
}

// TEST
/* 
console.log(isNumberInRange(1, 0, 5)); // true
console.log(isNumberInRange(10, 0, 5)); // false
console.log(isNumberInRange(100, 50, 500)); // true
console.log(isNumberInRange(-1, -50, 50)); // true
console.log(isNumberInRange(0, -50, 50)); // true
*/

// ## Task 2 - ends with "ing"?

/* function endsWithIng(text) {
 
  return text.toLowerCase().slice(-3) === "ing";
} */

function endsWithIng(string) {
  return string.toLowerCase().endsWith("ing") ? true : false;
}
/* console.log(
  endsWithIng("Ingo") +
    "\n" +
    endsWithIng("hello") +
    "\n" +
    endsWithIng("going") +
    "\n" +
    endsWithIng("ALAN TURING") +
    "\n" +
    endsWithIng("making of") +
    "\n" +
    endsWithIng("")
); */

//TEST
/* 
console.log(endsWithIng("hello")); // false
console.log(endsWithIng("going")); // true
console.log(endsWithIng("ALAN TURING")); // true
console.log(endsWithIng("ding ding")); // true
console.log(endsWithIng("making of")); // false
 */
// ## Task 3 - starts with "the"?

function startsWithThe(text) {
  return text.toLowerCase().slice(0, 3) === "the";
}

// TEST
/* 
console.log(startsWithThe("hello")); // false
console.log(startsWithThe("theremin")); // true
console.log(startsWithThe("The Clash")); // true
console.log(startsWithThe("ding ding")); // false 
console.log(startsWithThe("making of")); // false
*/

//  ## Task 4 - is first letter lower case?

function isFirstLetterLowercase(string) {
  const firstLett = string.charAt(0);
  return firstLett === firstLett.toLowerCase() && string.length > 0
    ? true
    : false;
}

/* function isFirstLetterLowerCase(text) {
  const letter = text.slice(0, 1);
  return letter.toLowerCase() === letter;
} */

// TEST
/* 
console.log(isFirstLetterLowercase("hello")); // true
console.log(isFirstLetterLowercase("Hello")); // false
console.log(isFirstLetterLowercase("Bianca")); // false
console.log(isFirstLetterLowercase("jim")); // true
console.log(isFirstLetterLowercase("")); // false
console.log(isFirstLetterLowercase("A")); // false
 */
// ## Task 5 - cheaperThan

/* function cheaperThan(price, limit) {
    return price.filter(price => price < limit)
} */

function cheaperThan(prices, filterPrice) {
  let filteredPrices = [];
  for (let i = 0; i < prices.length; i++) {
    /* if (prices[i] < filterPrice) {
      filteredPrices.push(prices[i]);
    } */
    prices[i] < filterPrice && filteredPrices.push(prices[i]);
  }
  return filteredPrices;
}

// ## Task 6 - wordsThatEndWithIng

/* 
["table", "jeans", "working", "ping", "small"]);
*/

/* 
["working", "ping"]
*/

/* function wordsThatEndWithIng(words) {
  let filteredWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].slice(-3) === "ing") {
      filteredWords.push(words[i]);
    }
  }
    return filteredWords
} */
function wordsThatEndWithIng(words) {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase().endsWith("ing")) {
      //* prüfen ob die Wörter mit ing enden, case-sensitive
      result.push(words[i]); //* das gefundene Wort zum result-Array pushen
    }
  }
  return result; //* gibt das Array mit den Worten auf ing endent, zurück
}

// TEST
/* 
wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"]); // ["working", "ping"]
wordsThatEndWithIng(["table", "jeans", "small"]); // []
wordsThatEndWithIng(["walking", "ing"]); // ["walking", "ing"]
 */

// ## Task 7 - numbersDivisibleBy3

function numbersDivisibleBy3(numbers) {
  let filteredNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].slice(-3) === "ing") {
      filteredNumbers.push(numbers[i]);
    }
  }
}

// Alle anderen Aufgaben müsst ihr erstmal selbst lösen ;)