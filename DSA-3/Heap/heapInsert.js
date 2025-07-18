class Heap {
  constructor() {
    this.heap = [];
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  insert(value) {
    this.heap.push(value); // Step 1: Add at the end
    this.heapifyUp(this.heap.length - 1); // Step 2: Fix heap
  }

  heapifyUp(index) {
    if (index === 0) return; // Base case: at root

    let parentIndex = this.getParent(index);

    if (this.heap[index] < this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ]; // Swap if child < parent
      this.heapifyUp(parentIndex); // Continue upward
    }
  }

  display() {
    console.log(this.heap);
  }
}

const heap = new Heap();
heap.insert(5);
heap.insert(30);
heap.insert(5);
heap.insert(20);
heap.insert(3);
heap.insert(13);
heap.insert(1);
heap.insert(50);
heap.display();
