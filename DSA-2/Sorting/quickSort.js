// Quick Sort Algorithm
// Step-by-step process:
// 1. Select a pivot element (commonly the last element).
// 2. Partition the array:
//    - Move elements smaller than pivot to the left array.
//    - Move elements greater or equal to pivot to the right array.
// 3. Recursively apply Quick Sort to the left and right arrays.
// 4. Combine sorted left, pivot, and sorted right to form final sorted array.


function quickSort(arr) {
  // Base case: array with 0 or 1 element is already sorted
  if (arr.length < 2) return arr;

  // Choose the last element as the pivot
  let pivot = arr[arr.length - 1];

  // Create two subarrays for elements less than and greater than or equal to the pivot
  let left = []; // Stores elements smaller than pivot
  let right = []; // Stores elements greater than or equal to pivot

  // Partition the array based on pivot
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Element is smaller, push to left
    } else {
      right.push(arr[i]); // Element is greater or equal, push to right
    }
  }

  // Recursively sort left and right, then combine with pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
let arr = [5, 4, 3, 2, 1];
let sortedArr = quickSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5]
