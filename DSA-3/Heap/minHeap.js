class minheap {
  constructor(array = []) {
    this.heap = array;
    this.buildHeap();
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftchild(index) {
    return 2 * index + 1;
  }

  getRightchild(index) {
    return 2 * index + 2;
  }

  buildHeap() {
    for (let i = this.getParent(this.heap.length - 1); i >= 0; i--) {
      this.heapify(i);
    }
  }

  heapify(index) {
    let smallest = index;
    let left = this.getLeftchild(index);
    let right = this.getRightchild(index);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.heapify(smallest);
    }
  }

  display() {
    console.log("Heap:", this.heap);
  }
}

//  Test case
const h1 = new minheap([10, 5, 30, 2, 8, 15]);
h1.display(); // Output: Heap: [2, 5, 15, 10, 8, 30]
