

// Queue class with recursive sort implementation
class Queue {
  constructor() {
    this.items = [1, 6, 2, 0, 4, -3]; // initial queue
  }

  // Sorts the queue recursively
  sortqueue(queue = this.items) {
    if (queue.length === 0) return;

    const temp = queue.shift(); // remove front element
    this.sortqueue(queue); // sort the remaining queue
    this.insertsort(queue, temp); // insert the removed element in sorted order
  }

  // Helper to insert element into sorted queue
  insertsort(queue, value) {
    if (queue.length === 0 || value <= queue[0]) {
      queue.unshift(value); // insert at front if smaller or equal
      return;
    }

    const temp = queue.shift(); // remove front
    this.insertsort(queue, value); // insert recursively
    queue.unshift(temp); // put back the removed item
  }

  // Displays the queue
  display() {
    console.log(this.items.join(" "));
  }
}

// Example usage
const q = new Queue();
q.sortqueue(); // sort the queue
q.display(); // Output: -3 0 1 2 4 6
