/**
 * The myMap() function below takes an array and a function in input
 * 
 * Write the 3 functions and complete the calls to myMap() in order to get the expected output
 * 
 */

 function myMap(items, callback) {
    let result = [];
    for (let i = 0; i < items.length; i++) {
        result.push(callback(items));
    }
    return result;
  }
  

  console.log(myMap([1, 2, 3])); // expected output: [901, 902, 903]
  console.log(myMap([2, 4, 10])); // expected output: [1, 2, 5] 
  console.log(myMap(["Rufus", "Lisa", "July"])); // expected output: ["sufuR", "asiL", "yluJ"]
  