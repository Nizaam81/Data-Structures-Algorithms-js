// Queue Data Structure using Linked List in JavaScript

// Node represents each element in the queue
class Node {
  constructor(value) {
    this.value = value; // value stored in the node
    this.next = null; // pointer to the next node
  }
}

// Queue class with linked list implementation
class Queue {
  constructor() {
    this.head = null; // front of the queue
    this.tail = null; // rear of the queue
    this.size = 0; // total number of elements
  }

  // Returns the total number of elements in the queue
  getSize() {
    return this.size;
  }

  // Checks whether the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Prints all elements in the queue from front to rear
  print() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    }
    let curr = this.head;
    let listValue = "";
    while (curr) {
      listValue += `${curr.value}->`; // collect node values
      curr = curr.next;
    }
    console.log(listValue);
  }

  // Adds a new element at the rear of the queue
  enqueue(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      // If queue is empty, head and tail point to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, add new node at the end and move the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++; // increase queue size
  }

  // Removes the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    }
    // Move head to the next node (removes front element)
    this.head = this.head.next;
    this.size--; // decrease queue size
  }

  // Returns the front element of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    }
    console.log(this.head.value);
  }
}

// Sample usage
let x = new Queue();
x.enqueue(10); // add 10
x.enqueue(20); // add 20
x.enqueue(30); // add 30
x.dequeue(); // remove 10
x.print(); // Output: 20->30->
x.peek(); // Output: 20
