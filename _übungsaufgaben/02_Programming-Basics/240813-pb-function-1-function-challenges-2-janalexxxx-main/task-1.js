const isItemInArray2 = function(array, item) {
  return array.includes(item);
}

const isItemInArray = function(array, item) {
  for (const element of array) {
    if (element === item) return true;
  }
  return false;
}


console.log(isItemInArray(["apple", "pear", "banana"], "kiwi")); // false
console.log(isItemInArray(["apple", "pear", "banana"], "mango")); // false
console.log(isItemInArray(["apple", "pear", "banana"], "apple")); // true
