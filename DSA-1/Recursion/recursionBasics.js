//  Sum of first n natural numbers using recursion
function sum(n) {

  if (n === 0) return 0;


  return n + sum(n - 1);
}
console.log("Sum of 5:", sum(5)); 



// Factorial of a number using recursion
function factorial(n) {

  if (n === 1) return 1;

 
  return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));



// Count number of digits in a number using recursion
function countDigits(n) {

  if (n < 10) return 1;


  return 1 + countDigits(Math.floor(n / 10));
}
console.log("Digits in 1000:", countDigits(1000)); 



// Print numbers from n to 1 (descending order)
function printDescending(n = 5) {

  if (n < 1) return;


  console.log(n);

 
  printDescending(n - 1);
}
printDescending(); 



//   Print numbers from 1 to n (ascending order)
function printAscending(n = 1) {

  if (n > 5) return;


  console.log(n);


  printAscending(n + 1);
}
printAscending(); 




//Sum of array using Recursion 

function sum(arr) {
  if (arr.length === 0) return 0;

  return arr[0] + sum(arr.slice(1));
}
console.log(sum([1, 2, 3, 4, 5]));



// Remove From first char  in the string using recursion 


function removeFirstChar(str) {
  if (str.length <= 1) return "";
  return str.slice(1);
}

console.log(removeFirstChar("nizam")); 





// Remove the last letter of index using recursion

function removeLasttChar(str) {
  if (str.length <= 1) return "";
  return str.slice(0, str.length - 1);
}

console.log(removeFirstChar("nizam")); 




// Reverse a string  using Recursion

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
console.log(reverse("nizam"));


// Write a recursive function to check is palindrome or not 

function isPalindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) return false;

  return pal(str.slice(1, -1));
}

console.log(isPalindrome("nizam"));
console.log(isPalindrome("madam"));   
