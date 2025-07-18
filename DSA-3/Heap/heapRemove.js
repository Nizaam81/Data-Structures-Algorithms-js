class Heap {
  constructor() {
    this.heap = [10, 15, 20, 25, 30, 35, 40, 45];
  }

  getLeftChildInd(index) {
    return index * 2 + 1;
  }

  getRightChildInd(index) {
    return index * 2 + 2;
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
  }

  heapifyDown(index) {
    let smallest = index;
    const left = this.getLeftChildInd(index);
    const right = this.getRightChildInd(index);

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
      this.heapifyDown(smallest);
    }
  }

  display() {
    console.log(this.heap);
  }
}

//  Usage
const heap = new Heap();
heap.remove();
heap.display();
