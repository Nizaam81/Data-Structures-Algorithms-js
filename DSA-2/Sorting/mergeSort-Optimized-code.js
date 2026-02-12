/*
=========================================
MERGE SORT (Pointer Version - Optimized)
=========================================

Difference Between shift() and Pointer Method:

1) shift() Method:
   - Removes first element from array.
   - All remaining elements shift left.
   - Time Complexity of shift() = O(n)
   - Makes merge step slower.

2) Pointer (Index) Method:
   - Uses index variables (i, j).
   - No element shifting.
   - Only increments pointer.
   - Time Complexity per step = O(1)
   - Keeps merge sort efficient at O(n log n)

This implementation uses the optimized pointer method.
*/

// Main merge function (Recursive Division)
function merge(arr) {
  // Base condition:
  // If array has 0 or 1 element, it's already sorted
  if (arr.length < 2) return arr;

  // Find middle index
  let mid = Math.floor(arr.length / 2);

  // Split array into two halves
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively divide and merge
  return sort(merge(left), merge(right));
}

// Merge two sorted arrays
function sort(left, right) {
  // New array to store sorted elements
  let sorted = [];

  // Pointers for left and right arrays
  let i = 0;
  let j = 0;

  // Compare elements from both arrays
  while (i < left.length && j < right.length) {
    // Push smaller element into sorted array
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++; // Move left pointer
    } else {
      sorted.push(right[j]);
      j++; // Move right pointer
    }
  }

  // Add remaining elements (if any)
  return [...sorted, ...left.slice(i), ...right.slice(j)];
}

// Example array
let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// Call merge sort
let x = merge(arr);

// Print sorted result
console.log(x);
