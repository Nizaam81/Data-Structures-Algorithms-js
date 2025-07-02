// File: reverse-string-using-stack.js

// Stack class to reverse a string using stack operations
class Stack {
  constructor() {
    this.stack = [];
  }

  // Reverses a given string using a stack
  reverse(string) {
    for (let char of string) {
      this.stack.push(char); // push each character to the stack
    }

    let reversed = "";
    while (this.stack.length) {
      reversed += this.stack.pop(); // pop characters to reverse the string
    }

    console.log(reversed);
  }
}

// Example usage
const rever = new Stack();
rever.reverse("allah"); // Output: halla
