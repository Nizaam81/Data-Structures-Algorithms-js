class QueueUsingStack {
  constructor() {
    this.stack1 = []; // Used for enqueue
    this.stack2 = []; // Used for dequeue
  }

  // Enqueue: Add element to the end of the queue
  enqueue(value) {
    this.stack1.push(value);
  }

  // Dequeue: Remove element from the front of the queue
  dequeue() {
    // If stack2 is empty, transfer elements from stack1
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) {
        console.log("Queue is empty");
        return null;
      }

      // Move all elements from stack1 to stack2
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop(); // Return the front of the queue
  }

  // Peek: Return the front element without removing it
  front() {
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) {
        console.log("Queue is empty");
        return null;
      }

      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2[this.stack2.length - 1];
  }

  // Display: Show all elements in correct queue order
  display() {
    const result = [...this.stack2].reverse().concat(this.stack1);
    if (result.length === 0) {
      console.log("Queue is empty");
    } else {
      console.log("Queue elements (front to back):", result);
    }
  }

  // isEmpty: Check if queue is empty
  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  // getSize: Return total number of elements in the queue
  getSize() {
    return this.stack1.length + this.stack2.length;
  }
}

// Test Example
const queue = new QueueUsingStack();

console.log("Enqueue 10, 20, 30");
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.display(); // Output: [10, 20, 30]

console.log("Dequeued:", queue.dequeue()); // Output: 10
queue.display(); // Output: [20, 30]

console.log("Front element:", queue.front()); // Output: 20

console.log("Size:", queue.getSize()); // Output: 2
console.log("Is Empty:", queue.isEmpty()); // Output: false

queue.dequeue();
queue.dequeue();
queue.dequeue(); // Output: Queue is empty
queue.display(); // Output: Queue is empty
