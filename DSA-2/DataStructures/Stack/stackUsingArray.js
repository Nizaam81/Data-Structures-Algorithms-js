//  Stack Data Structure using Array in JavaScript

// A stack is a linear data structure that follows the LIFO (Last In First Out) principle.

//it can be implemented using linked list and arrays
 
// This implementation uses a JavaScript array to store stack elements.



class Stack {
  constructor() {
    //  Internal array to store stack elements
    this.items = [];
  }

  // Adds an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  //  Removes the top element from the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    this.items.pop();
  }

  //  Returns the top element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    return this.items[this.items.length - 1];
  }

  //  Returns the total number of elements in the stack
  size() {
    return this.items.length;
  }

  //  Checks whether the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  //  Prints all elements of the stack
  print() {
    console.log(this.items.join(" "));
  }
}

// ✅ Example usage
const stack = new Stack();

stack.push(10); // Stack: [10]
stack.push(20); // Stack: [10, 20]
stack.push(30); // Stack: [10, 20, 30]
stack.push(40); // Stack: [10, 20, 30, 40]

stack.pop(); // Removes 40 → Stack becomes: [10, 20, 30]

console.log("Top element is:", stack.peek()); // Output: Top element is: 30

stack.print(); // Output: 10 20 30
