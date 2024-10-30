const getIndexOf2 = function(array, item) {
  return array.indexOf(item);
}

const getIndexOf = function(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) return i;
  }
  return -1;
}

console.log(getIndexOf(["apple", "pear", "banana"], "kiwi")); // -1
console.log(getIndexOf(["apple", "pear", "banana"], "banana")); // 2
console.log(getIndexOf(["apple", "pear", "banana"], "apple")); // 0
