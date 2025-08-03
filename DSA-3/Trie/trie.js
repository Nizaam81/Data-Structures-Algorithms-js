// Trie Node class
class TrieNode {
  constructor() {
    this.children = {}; // Stores child nodes
    this.isEnd = false; // Marks end of a word
  }
}

// Trie class
class Trie {
  constructor() {
    this.root = new TrieNode(); // Root node of the Trie
  }

  // Insert a word into the Trie
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode(); // Create new node if not exists
      }
      node = node.children[char]; // Move to the next node
    }
    node.isEnd = true; // Mark end of word
  }

  // Search for a complete word
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false; // If not found, return false
      node = node.children[char];
    }
    return node.isEnd; // Return true only if it's the end of a word
  }

  // Check if any word starts with the given prefix
  startPrefix(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true; // If prefix traversal is successful
  }

  // Delete a word from the Trie
  delete(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return -1;
      node = node.children[char];
    }

    if (node.isEndOfWord) {
      node.isEndOfWord = false;
    } else return -1;
  }
}

// Usage Example
let trie = new Trie();
trie.insert("cat");
trie.insert("car");
console.log(trie.search("cat")); // true
console.log(trie.search("can")); // false
console.log(trie.startPrefix("ca")); // true
trie.delete("cat");
console.log(trie.search("cat")); // false
