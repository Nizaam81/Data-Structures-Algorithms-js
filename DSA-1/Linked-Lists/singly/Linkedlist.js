//  Node - creates a new node with value and next pointer
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//  LinkedList - manages linked list operations
class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //  getSize - returns the number of nodes
  getSize() {
    return this.size;
  }

  //  isEmpty - checks if list is empty
  isEmpty() {
    return this.size === 0;
  }

  //  print - prints all node values
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let curr = this.head;
    let listval = "";
    while (curr) {
      listval += `${curr.value}->`;
      curr = curr.next;
    }
    console.log(listval + "null");
  }

  //  prepend - adds node at beginning
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  //  append - adds node at end
  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = newNode;
    }
    this.size++;
  }

  //  insert - adds node at given index
  insert(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      newNode.next = prev.next;
      prev.next = newNode;
      this.size++;
    }
  }

  //  search - returns index of value or -1
  search(value) {
    if (this.isEmpty()) return -1;
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return i;
      curr = curr.next;
      i++;
    }
    return -1;
  }

  //  removeFrom - removes node at index
  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode;
  }

  //  removeValue - removes node by value
  removeValue(value) {
    if (this.isEmpty()) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let curr = this.head;
    while (curr.next && curr.next.value !== value) {
      curr = curr.next;
    }
    if (!curr.next) {
      console.log("Value not found");
      return;
    }
    curr.next = curr.next.next;
    this.size--;
  }

  //  removeDuplicate - removes duplicates (sorted list)
  removeDuplicate() {
    if (this.isEmpty()) return;
    let curr = this.head;
    while (curr && curr.next) {
      if (curr.value === curr.next.value) {
        curr.next = curr.next.next;
        this.size--;
      } else {
        curr = curr.next;
      }
    }
  }

  //  removeMiddle - removes middle node (slow-fast pointer)
  removeMiddle() {
    if (!this.head || !this.head.next) {
      this.head = null;
      this.size = 0;
      return;
    }

    let slow = this.head;
    let fast = this.head;
    let prev = null;

    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }

    prev.next = slow.next;
    this.size--;
  }

  //  findMiddle - returns middle node's value
  findMiddle() {
    if (!this.head) return null;

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.value;
  }

  //  reverse - reverses the entire list
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  //  reversElement - prints reversed values only
  reversElement() {
    let arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }
    console.log(arr.reverse().join("->") + "->null");
  }

  //  fromArray - creates list from given array
  fromArray(arr) {
    if (arr.length === 0) return;
    this.head = new Node(arr[0]);
    this.size = 1;

    let curr = this.head;
    for (let i = 1; i < arr.length; i++) {
      curr.next = new Node(arr[i]);
      curr = curr.next;
      this.size++;
    }
  }
}

// ----------  Test code ----------
const list = new Linkedlist();
list.fromArray([10, 20, 30, 40]); // builds list from array
list.print(); // Output: 10->20->30->40->null
list.removeMiddle(); // removes 20 or 30 depending on list size
list.print(); // prints updated list
list.reverse(); // reverse the list
list.print(); // reversed list
