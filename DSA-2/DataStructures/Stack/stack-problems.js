// Reverse a string using stack
function reverseString(str) {
  const stack = [];
  for (const char of str) {
    stack.push(char);
  }
  let reversed = "";
  while (stack.length) {
    reversed += stack.pop();
  }
  return reversed;
}

// Check if a string is a palindrome using stack
class PalindromeStack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    return this.stack.pop();
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}

function isPalindrome(str) {
  const stack = new PalindromeStack();
  for (const char of str) {
    stack.push(char);
  }
  let reversed = "";
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed === str;
}

// Sort a stack using only another stack
function sortStack(stack) {
  const tempStack = [];
  while (stack.length) {
    const temp = stack.pop();
    while (tempStack.length && tempStack[tempStack.length - 1] > temp) {
      stack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }
  return tempStack;
}

// Example usage
console.log(reverseString("love you"));
console.log(isPalindrome("SAAS"));
console.log(sortStack([0, 5, 2, 1, 3]));
