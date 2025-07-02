// 1. Node class – each element in the queue
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; 
  }
}

// 2. CircularQueue class – main queue implementation
class CircularQueue {
  constructor() {
    this.front = null; // front of the queue
    this.rear = null; // rear of the queue
  }

  // Check if the queue is empty
  isEmpty() {
    return this.front === null;
  }

  // Add a new value at the rear of the queue
  enqueue(value) {
    const node = new Node(value);

    // If queue is empty
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
      node.next = this.front; // circular link to itself
    } else {
      this.rear.next = node; // link new node after rear
      this.rear = node; // update rear
      node.next = this.front; // circular link to front
    }
  }

  // Remove the value from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let removedValue;

    // If there's only one element
    if (this.front === this.rear) {
      removedValue = this.front.value;
      this.front = null;
      this.rear = null;
    } else {
      removedValue = this.front.value;
      this.front = this.front.next; // move front pointer
      this.rear.next = this.front; // maintain circular link
    }

    return removedValue;
  }

  // Display the entire queue
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let result = [];
    let curr = this.front;

    do {
      result.push(curr.value);
      curr = curr.next;
    } while (curr !== this.front);

    console.log("Queue:", result.join(" "));
  }
}

// 3. Example usage
const q = new CircularQueue(); 

// Display empty queue
q.display(); // Output: Queue is empty

// Add values
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

// Display after enqueues
q.display(); // Output: Queue: 10 20 30

// Remove one element
q.dequeue();

// Display after one dequeue
q.display(); // Output: Queue: 20 30

// Remove all elements
q.dequeue();
q.dequeue();

// Final display (empty)
q.display(); // Output: Queue is empty
