// Binary Search

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return mid; 
    } else if (target < arr[mid]) {
      right = mid - 1; //  Search left half
    } else {
      left = mid + 1; //  Search right half
    }
  }

  return -1; //  Target not found
}
  
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 9)); 




// BinarySearch using Recursion

function binary(arr, target, left, right) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) {

    return binary(arr, target, left, mid - 1);
  } else {
    
    return binary(arr, target, mid + 1, right);
  }
}

  const arr = [-5, 2, 4, 6, 10];
  console.log(binary(arr, 4, 0, arr.length - 1)); 



// find the minimum element in a rotated sorted array using binary search.

function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}
console.log(findMin([1, 2, 3, 4, 15]));
  