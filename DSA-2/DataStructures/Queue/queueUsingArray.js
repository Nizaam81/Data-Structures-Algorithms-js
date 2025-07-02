// A queue is a linear data structure that follow first in first out (FIFO) principle

// it can be implemented using both array and linked list

// Queue Data Structure using Array in JavaScript

class Queue {
  constructor() {
    this.queue = []; // array to hold queue elements
  }

  getSize() {
    return this.queue.length; // returns size of queue
  }

  isEmpty() {
    return this.queue.length === 0; // checks if queue is empty
  }

  display() {
    console.log(this.queue); // prints queue
  }

  enqueue(value) {
    this.queue.unshift(value); // adds element to rear
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("queue is empty"); // underflow check
      return;
    }
    this.queue.pop(); // removes element from front
  }

  peek() {
    if (this.isEmpty()) {
      console.log("queue is empty"); // empty check
      return;
    }
    console.log(this.queue[0]); // prints rear element
  }
}

// Sample usage
let x = new Queue();
x.enqueue(10); // queue: [10]
x.enqueue(20); // queue: [20, 10]
x.enqueue(30); // queue: [30, 20, 10]
x.dequeue(); // removes 10 → queue: [30, 20]
x.display(); // Output: [30, 20]
x.peek(); // Output: 30 (rear element)
