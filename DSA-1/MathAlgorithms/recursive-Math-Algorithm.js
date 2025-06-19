// Fibonacci Sequence with recursion

function recursionFibonacciSequence(n) {
  if (n < 2) return n;
  return recursionFibonacciSequence(n - 1) + recursionFibonacciSequence(n - 2);
}
console.log(recursionFibonacciSequence(6)); //8

// factorial of a number with  recursion

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); //120
console.log(factorial(4)); //24
