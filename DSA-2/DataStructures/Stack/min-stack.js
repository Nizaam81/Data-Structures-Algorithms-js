// Define the Stack class with min tracking capability

class Stack {
  constructor() {
    this.stack = []; // Main stack to store all values
    this.minStack = []; // Auxiliary stack to track current minimums
  }

  // Push a value onto the stack
  push(value) {
    this.stack.push(value); // Always push to main stack

    // Only push to minStack if it's empty or new value is smaller/equal
    if (
      this.minStack.length === 0 ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    }
  }

  // Pop a value from the stack
  pop() {
    let removed = this.stack.pop(); // Remove top from main stack

    // If removed value is same as top of minStack, pop from minStack too
    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return removed; // Return removed value
  }

  // Get the current minimum value in the stack
  getMin() {
    if (this.minStack.length === 0) {
      console.log("Stack is empty"); // Edge case: no elements
      return null;
    }

    // Return the top of minStack (which is the current minimum)
    return this.minStack[this.minStack.length - 1];
  }
}

// Test the implementation
let x = new Stack();
x.push(10); // Stack: [10]      MinStack: [10]
x.push(40); // Stack: [10,40]   MinStack: [10]
x.push(20); // Stack: [10,40,20] MinStack: [10]

console.log(x.getMin()); // Output: 10 (current minimum)
