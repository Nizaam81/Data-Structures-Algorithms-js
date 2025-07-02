// Stack Data Structure using Linked List in JavaScript

// Node represents each element in the stack
class Node {
  constructor(value) {
    this.value = value; // node value
    this.next = null; // pointer to next node
  }
}

// Stack class using linked list
class Stack {
  constructor() {
    this.head = null; // top of the stack
    this.size = 0; // number of elements in stack
  }

  // Checks if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Returns the number of elements in the stack
  getSize() {
    return this.size;
  }

  // Adds an element to the top of the stack
  push(value) {
    const newNode = new Node(value); // create new node
    newNode.next = this.head; // point to current top
    this.head = newNode; // update top to new node
    this.size++; // increment size
  }

  // Removes the top element from the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty"); // underflow check
      return;
    }
    this.head = this.head.next; // move top to next node
    this.size--; // decrement size
  }

  // Returns the top element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    return this.head.value; // return top value
  }

  // Prints all elements in the stack
  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    let curr = this.head;
    let listValues = "";
    while (curr) {
      listValues += `${curr.value} -> `; // add value to string
      curr = curr.next;
    }
    console.log(listValues); // print stack
  }
}

// Sample usage
const stack = new Stack();
stack.push(10);
stack.push(30);
stack.push(20);
stack.print(); // Output: 20 -> 30 -> 10 ->
console.log(stack.peek()); // Output: 20
stack.pop();
stack.print(); // Output: 30 -> 10 ->
console.log(stack.getSize()); // Output: 2
