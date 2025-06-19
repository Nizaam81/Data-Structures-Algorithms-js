// Node class for each element in the list
class node {
  constructor(value) {
    this.value = value; // Store value
    this.next = null; // Pointer to next node
    this.prev = null; // Pointer to previous node
  }
}

// Circular Doubly Linked List class
class circularLinkedlist {
  constructor() {
    this.head = null; // First node
    this.tail = null; // Last node
    this.size = 0; // Number of nodes
  }

  // Return current size of the list
  getSize() {
    return this.size;
  }

  // Check if list is empty
  isEmpty() {
    return this.size == 0;
  }

  // Print all values in the list
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }

    let curr = this.head;
    let listValue = "";

    // Loop through the circular list
    do {
      listValue += `${curr.value}->`;
      curr = curr.next;
    } while (curr !== this.head);

    console.log(listValue);
  }

  // Insert a node at the beginning
  prepend(value) {
    let newNode = new node(value);

    if (this.isEmpty()) {
      // First node points to itself (circular)
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      // Link new node before head
      newNode.next = this.head;
      newNode.prev = this.tail;

      // Update existing head and tail links
      this.head.prev = newNode;
      this.tail.next = newNode;

      // Set new node as head
      this.head = newNode;
    }

    this.size++;
  }
}

// Create list and test
let list = new circularLinkedlist();
list.prepend(10);
list.print(); // Output: 10->
