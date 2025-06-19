//Linear Search
function linear(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i; //  Found
  }
  return -1; //  Not found
}
console.log(linear([1, 2, 3, 4, 5], 3)); 
  