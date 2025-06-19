// Fibonacci Sequence

function Fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(Fibonacci(2));
console.log(Fibonacci(7));

// Factorial of a number

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(4));

// Prime Numbers

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)); //false
console.log(isPrime(5)); // true

// Power of Two

function power(n) {
  if (n < 1) {
    return "enter a number valid number ";
  }
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= 2;
  }
  return result;
}
console.log(power(0));

// Power of Two algorithm using betwise operator

function isPowerBitwise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerBitwise(5));
