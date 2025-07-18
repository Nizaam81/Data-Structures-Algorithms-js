class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (root === null) return false;
    if (root.value === value) return true;
    return value < root.value
      ? this.search(root.left, value)
      : this.search(root.right, value);
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder(root) {
    if (!root) return;

    const queue = [];
    queue.push(root);

    while (queue.length) {
      const curr = queue.shift();
      console.log(curr.value);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) return root;

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // Node found

      // Case 1: No children
      if (!root.left && !root.right) return null;

      // Case 2: One child
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      // Case 3: Two children
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }
}


// ✅ TEST CASES 

const bst = new BinarySearchTree();

// Insertion test
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

bst.inOrder(bst.root); // Expected: 3 5 7 10 12 15 18

// Search test
console.log("Search 7:", bst.search(bst.root, 7)); // true
console.log("Search 99:", bst.search(bst.root, 99)); // false

// Preorder test
console.log("PreOrder Traversal:");
bst.preOrder(bst.root); // Root → Left → Right

// Postorder test
console.log("PostOrder Traversal:");
bst.postOrder(bst.root); // Left → Right → Root

// Level order (BFS) test
console.log("LevelOrder Traversal:");
bst.levelOrder(bst.root); // Level by level

// Min & Max test
console.log("Minimum Value:", bst.min(bst.root)); // 3
console.log("Maximum Value:", bst.max(bst.root)); // 18

// Deletion tests
bst.delete(5); // Delete node with two children
console.log("After deleting 5 (inOrder):");
bst.inOrder(bst.root); // Should not have 5

bst.delete(15); // Delete node with two children
console.log("After deleting 15 (inOrder):");
bst.inOrder(bst.root); // Should not have 15

bst.delete(3); // Leaf node
console.log("After deleting 3 (inOrder):");
bst.inOrder(bst.root); // Should not have 3

bst.delete(10); // Root node
console.log("After deleting 10 (inOrder):");
bst.inOrder(bst.root); // Should not have 10
