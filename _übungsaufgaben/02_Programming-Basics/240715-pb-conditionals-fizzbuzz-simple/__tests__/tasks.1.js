const rewire = require("rewire");
const fs = require("fs");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));
// mock myNum

describe("Variable", () => {
   test("`myNum` variable exists", () => {
      const myNum = rewire("../solution").__get__("myNum");
      expect(myNum).toBeDefined();
   });
});

describe("Fizz", () => {
   test("'Fizz' is printed if `myNum` is divisible by 3 only", () => {
      // copy the code from solution.js
      const solution = fs.readFileSync("solution.js", "utf8");
      // replace the value of myNum
      const modifiedSolution = solution.replace(/myNum = \d+/, "myNum = 3");
      // write the modified code to a new file
      fs.writeFileSync("check.js", modifiedSolution, "utf8");
      // import the modified code
      require("../check");
      // check if the console.log was called with the correct argument
      expect(consoleSpy).toHaveBeenCalledWith("Fizz");
      // remove the new file
      fs.unlinkSync("check.js");
   });
});

describe("Buzz", () => {
   test("'Buzz' is printed if `myNum` is divisible by 5 only", () => {
      const solution = fs.readFileSync("solution.js", "utf8");
      const modifiedSolution = solution.replace(/myNum = \d+/, "myNum = 5");
      fs.writeFileSync("check2.js", modifiedSolution, "utf8");
      require("../check2");
      expect(consoleSpy).toHaveBeenCalledWith("Buzz");
      fs.unlinkSync("check2.js");
   });
});

describe("Fizzbuzz", () => {
   test("'Fizzbuzz' is printed if `myNum` is divisible by both 3 and 5", () => {
      const solution = fs.readFileSync("solution.js", "utf8");
      const modifiedSolution = solution.replace(/myNum = \d+/, "myNum = 15");
      fs.writeFileSync("check3.js", modifiedSolution, "utf8");
      require("../check3");
      expect(consoleSpy).toHaveBeenCalledWith("FizzBuzz");
      fs.unlinkSync("check3.js");
   });
});
