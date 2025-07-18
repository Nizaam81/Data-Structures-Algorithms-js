class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChild(index) {
    return index * 2 + 1;
  }

  getRightChild(index) {
    return index * 2 + 2;
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    if (index === 0) return;

    let parentIndex = this.getParent(index);
    if (this.heap[index] > this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      this.heapifyUp(parentIndex);
    }
  }

  sort() {
    let n = this.heap.length;
    for (let i = n - 1; i >= 0; i--) {
      [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]];
      this.heapifyDown(0, i);
    }
  }

  heapifyDown(index, n) {
    let largest = index;
    let left = this.getLeftChild(index);
    let right = this.getRightChild(index);

    if (left < n && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < n && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      this.heapifyDown(largest, n);
    }
  }

  display() {
    console.log("Heap:", this.heap);
  }
}
const heap = new Heap()
heap.insert(10)
heap.insert(9)
heap.insert(20)
heap.insert(15)
heap.insert(2)
heap.insert(4)
heap.insert(12)
heap.insert(60)
heap.insert(14)
heap.insert(70)

heap.display()     // Heap before sorting (Max Heap)
heap.sort()
heap.display()     // Sorted array (ascending order)
