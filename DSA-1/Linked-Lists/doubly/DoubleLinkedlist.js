// Node class for Doubly Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// Doubly Linked List class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Get the number of nodes in the list
  getSize() {
    return this.size;
  }

  // Check if the list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Print the list from head to tail
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let curr = this.head;
    let listValue = "";

    while (curr) {
      listValue += `${curr.value} -> `;
      curr = curr.next;
    }

    console.log(listValue);
  }

  // Print the list in reverse from tail to head
  printReverse() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let curr = this.tail;
    let listValue = "";

    while (curr) {
      listValue += `${curr.value} -> `;
      curr = curr.prev;
    }

    console.log(listValue);
  }

  // Add a node at the beginning of the list
  prepend(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  // Add a node at the end of the list
  append(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Remove the first node from the list
  removeFront() {
    if (this.isEmpty()) return;

    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    this.size--;
  }

  // Remove the last node from the list
  removeFromEnd() {
    if (this.isEmpty()) return;

    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    this.size--;
  }

  // Delete the first node that matches the given value
  delete(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    // 🔸 Case: First node matches the value
    if (this.head.value === value) {
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }

      this.size--;
      return;
    }

    let curr = this.head;

    while (curr && curr.value !== value) {
      curr = curr.next;
    }

    if (!curr) {
      console.log("Value not found");
      return;
    }

    if (curr === this.tail) {
      this.tail = curr.prev;
      this.tail.next = null;
    } else {
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
    }

    this.size--;
  }

  // Delete a node at a specific index
  deleteUsingIndex(index) {
    if (index < 0 || index >= this.size) {
      console.log("Enter a valid index");
      return;
    }

    // 🔸 Case: Deleting the first node (index = 0)
    if (index === 0) {
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }

      this.size--;
      return;
    }

    // 🔸 Case: Deleting the last node
    if (index === this.size - 1) {
      this.tail = this.tail.prev;

      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }

      this.size--;
      return;
    }

    // 🔸 Case: Deleting a node in the middle
    let curr = this.head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;

    this.size--;
  }

  findMiddle() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log("Middle element:", slow.value);
    return slow.value;
  }
}

// =========================
// Usage Example
// =========================

// Create a new doubly linked list
const list = new DoublyLinkedList();

// Add elements to the beginning
list.prepend(15);
list.prepend(10);
list.prepend(5);

// Add elements to the end
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.append(60);
list.append(70);

// Remove nodes from beginning and end
list.removeFront();
list.removeFromEnd();

// Delete specific value
list.delete(5);

// Delete by index
list.deleteUsingIndex(2);

// Print the list
list.print(); // Output: 10 -> 15 -> 30 -> 40 -> 50 -> 60 ->

// Print the list in reverse
list.printReverse(); // Output: 60 -> 50 -> 40 -> 30 -> 15 -> 10 ->
