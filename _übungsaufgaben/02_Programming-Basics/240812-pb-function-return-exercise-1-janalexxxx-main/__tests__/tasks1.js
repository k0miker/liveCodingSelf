const { expect } = require("@jest/globals");
const rewire = require("rewire");

describe("1. `uppercase` Function", () => {
   test("`uppercase` should accept a string and convert the first letter of each word of the string to uppercase", () => {
      const solution = rewire("../index");
      const uppercase = solution.__get__("uppercase");
      expect(uppercase("web development tutorial")).toEqual(
         "Web Development Tutorial"
      );
   });
});

describe("2. Longest word within a string", () => {
   test("`findLongestWord` should accept a string and return the longest word within that string", () => {
      const solution = rewire("../index");
      const findLongestWord = solution.__get__("findLongestWord");
      expect(findLongestWord("Web Development Tutorial")).toEqual(
         "Development"
      );
   });
});

describe("3. Longest Country Name", () => {
   test("`longestCountryName` should accept an array of country names and return the longest country name", () => {
      const solution = rewire("../index");
      const longestCountryName = solution.__get__("longestCountryName");
      expect(
         longestCountryName([
            "Australia",
            "Germany",
            "Democratic Republic of Sao Tome and Principe",
         ])
      ).toEqual(
         expect.stringMatching(/Democratic Republic of Sao Tome and Principe/i)
      );
   });
});

describe("4. Count Vowels", () => {
   test("`countVowels` should accept a string and return the number of vowels it contains", () => {
      const solution = rewire("../index");
      const countVowels = solution.__get__("countVowels");
      expect(countVowels("Australia")).toBe(5);
   });
});

describe("5. Make random String", () => {
   test("`makeRandomString` should accept a number and return a string of that length containing random characters", () => {
      const solution = rewire("../index");
      const makeRandomString = solution.__get__("makeRandomString");
      expect(typeof makeRandomString(5)).toBe("string");
      expect(makeRandomString(5).length).toBe(5);
   });
});
