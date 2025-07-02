//  Circular Queue Data Structure using Array in JavaScript

// A circular queue is a linear data structure that follows the FIFO (First In First Out) principle.
// Unlike a normal queue, when the end of the array is reached, it wraps around to the beginning.
// It reuses empty spaces created by dequeue operations.

class CircularQueue {
  constructor(size) {
    // Total fixed size of the queue
    this.size = size;

    // Internal array to store queue elements
    this.item = new Array(size);

    // Front points to the position where elements are removed
    this.front = -1;

    // Rear points to the position where elements are added
    this.rear = -1;
  }

  //  Checks if the queue is full
  isFull() {
    // The queue is full when the next position of rear is equal to front
    return (this.rear + 1) % this.size === this.front;
  }

  //  Checks if the queue is empty
  isEmpty() {
    // Queue is empty when front is -1
    return this.front === -1;
  }

  //  Adds an element to the rear of the queue
  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is full");
      return;
    }

    // First element being inserted
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      // Move rear forward circularly
      this.rear = (this.rear + 1) % this.size;
    }

    // Insert the value at rear position
    this.item[this.rear] = value;
  }

  //  Removes and returns the element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    // Store the value being removed
    let removed = this.item[this.front];

    // If the queue has only one element, reset it to empty
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      // Move front forward circularly
      this.front = (this.front + 1) % this.size;
    }

    return removed;
  }

  //  Displays the elements from front to rear
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let i = this.front;
    let result = [];

    // Loop through queue from front to rear
    while (true) {
      result.push(this.item[i]);
      if (i === this.rear) break;
      i = (i + 1) % this.size;
    }

    console.log("Queue contents:", result.join(" "));
  }
}

//  Example usage:
let q = new CircularQueue(5);

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.display(); // Output: 10 20 30

q.dequeue(); // Removes 10toto
q.display(); // Output: 20 30

q.enqueue(40);
q.enqueue(50);
q.enqueue(60); // Queue is now full
q.enqueue(70); // Output: Queue is full

q.display(); // Final contents
