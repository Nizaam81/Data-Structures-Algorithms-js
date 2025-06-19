// Node class to represent each element in the linked list
class Node {
  constructor(value) {
    this.value = value; // The data value
    this.next = null; // Pointer to the next node (initially null)
  }
}

// LinkedList class to manage linked list operations
class Linkedlist {
  constructor() {
    this.head = null; // First node of the list
    this.tail = null; // Last node of the list
    this.size = 0; // Total number of nodes in the list
  }

  // Returns the number of elements in the list
  getSize() {
    return this.size;
  }

  // Checks if the list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Prints the linked list
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }

    let curr = this.head;
    let listvalue = "";
    while (curr) {
      listvalue += `${curr.value}`;
      if (curr.next) listvalue += "->";
      curr = curr.next;
    }
    console.log(listvalue);
  }

  // Adds a node at the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head; // Point new node to current head
    this.head = newNode; // Make new node the new head
    if (this.size === 0) {
      this.tail = newNode; // If list was empty, tail also becomes new node
    }
    this.size++;
  }

  // Adds a node at the end of the list
  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      // If list is empty, new node is both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
        // Link the current tail to the new node
      this.tail.next = newNode;
      this.tail = newNode;  // Update tail to new node
    }
    this.size++;
  }
}

// Testing the LinkedList

let list = new Linkedlist();
list.print();  // Output: list is empty
list.prepend(10);
list.prepend(20);
list.print();   // Output: 20->10
list.append(30);
list.print();   // Output: 20->10->30
