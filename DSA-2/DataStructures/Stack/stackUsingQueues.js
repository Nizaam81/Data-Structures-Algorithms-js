class Stack {
  constructor() {
    this.queue1 = []; // Main queue to hold elements
    this.queue2 = []; // Helper queue for popping and peeking
  }

  // Push: Add element to the stack
  push(value) {
    this.queue1.push(value);
  }

  // Pop: Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }

    // Move all elements except the last to queue2
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    // Remove and return the last element (top of the stack)
    const popped = this.queue1.shift();

    // Swap queues to prepare for next operation
    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return popped;
  }

  // Top: Return the top element without removing it
  top() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }

    // Move all elements except the last to queue2
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    // Peek the last element
    const topElement = this.queue1.shift();

    // Put it back into queue2
    this.queue2.push(topElement);

    // Swap queues to restore state
    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return topElement;
  }

  // Display: Print all elements from bottom to top
  display() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    console.log("Stack elements (bottom to top):", this.queue1);
  }

  // Check if stack is empty
  isEmpty() {
    return this.queue1.length === 0;
  }

  // Get the number of elements in the stack
  getSize() {
    return this.queue1.length;
  }
}

// Test Example
const stack = new Stack();

console.log("Pushing elements: 10, 20, 30");
stack.push(10);
stack.push(20);
stack.push(30);

stack.display(); // Output: Stack elements (bottom to top): [10, 20, 30]

console.log("Pop:", stack.pop()); // Output: 30
stack.display(); // Output: [10, 20]

console.log("Top:", stack.top()); // Output: 20
stack.display(); // Output: [10, 20]

console.log("Size:", stack.getSize()); // Output: 2
console.log("Is Empty:", stack.isEmpty()); // Output: false

console.log("Pop:", stack.pop()); // Output: 20
console.log("Pop:", stack.pop()); // Output: 10
console.log("Pop:", stack.pop()); // Output: Stack is empty → null

stack.display(); // Output: Stack is empty
