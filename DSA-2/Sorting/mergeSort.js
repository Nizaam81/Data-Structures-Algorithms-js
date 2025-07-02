//  Merge Sort Algorithm

// Divide:
// If the array has one or zero elements, return it (already sorted).
// Otherwise, split the array into two halves (left and right).
// Recursively sort both halves using Merge Sort.
// Merge the two sorted halves into a single sorted array.

function mergeSort(arr) {
  // Base case: array with 0 or 1 element is already sorted
  if (arr.length < 2) return arr;

  // Divide: Find the middle index
  let mid = Math.floor(arr.length / 2);

  // Slice the array into left and right halves
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  // Recursively sort both halves, then merge them
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

//  Merge two sorted arrays into one sorted array
function merge(leftArr, rightArr) {
  let sorted = [];

  // Compare and push the smaller element into 'sorted'
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sorted.push(leftArr.shift()); // Remove from left and push
    } else {
      sorted.push(rightArr.shift()); // Remove from right and push
    }
  }

  // Push the remaining elements (if any) from leftArr or rightArr
  return [...sorted, ...leftArr, ...rightArr];
}

//  Example
const arr = [5, 4, 3, 2, 1];
let sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5]
