function bubble(arr) {
  let n = arr.length; 
  let swapped; 

  
  do {
    swapped = false; // Reset swapped flag at the beginning of each pass

    
    for (let i = 0; i < n - 1; i++) {
      // Compare adjacent elements
      if (arr[i] > arr[i + 1]) {
        // Swap them if they are in the wrong order
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true; // Mark that a swap occurred
      }
    }

    n--; // Reduce the range of comparison, as the largest element is now at the end
  } while (swapped); // Repeat only if a swap happened in the last pass
}

// Test array
let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// Call the bubble sort function
bubble(arr);

// Print the sorted array
console.log(arr); // Output: [1, 2, 3, ..., 10]
