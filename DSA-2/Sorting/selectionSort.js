//  Selection Sort Algorithm
// Sorts the array in ascending order by repeatedly finding the minimum element
// and placing it at the beginning

function selection(arr) {
  // Loop over each element except the last one
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i; // Assume the current index has the smallest value

    // Loop through the unsorted part of the array
    for (let j = i + 1; j < arr.length; j++) {
      // If a smaller element is found, update the min index
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // Swap the current element with the smallest element found
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
}

//  Test the selection sort
let arr = [5, 4, 3, 2, 1];
selection(arr);
console.log("Sorted array:", arr); // Output: [1, 2, 3, 4, 5]
