//  Insertion Sort Algorithm
// Builds the sorted array one element at a time by inserting elements
// into their correct position in the sorted part of the array.

function insertionSort(arr) {
  // Start from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    
    let numberToInsert = arr[i]; // The current element to be positioned
    let j = i - 1;

    // Shift all elements that are greater than numberToInsert to the right
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j]; // Shift right
      j--;
    }

    // Insert the current element into its correct position
    arr[j + 1] = numberToInsert;
  }
}

//  Test the insertion sort
const arr = [5, 4, 3, 2, 1];
insertionSort(arr);
console.log("Sorted array:", arr); // Output: [1, 2, 3, 4, 5]
