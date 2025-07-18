// Define TrieNode class
class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

// Define Trie class
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }

  // Autocomplete all words starting with given prefix
  autoComplete(prefix) {
    let node = this.root;

    // Traverse the trie to the end of the prefix
    for (let char of prefix) {
      if (!node.children[char]) return []; // Prefix not found
      node = node.children[char];
    }

    const queue = [[node, prefix]]; // Queue to hold nodes for BFS
    const result = [];

    // BFS to find all words starting with the prefix
    while (queue.length) {
      const [currNode, word] = queue.shift();

      if (currNode.isEnd) {
        result.push(word);
      }

      for (let char in currNode.children) {
        queue.push([currNode.children[char], word + char]);
      }
    }

    return result;
  }
}


//  TEST CASES 


const trie = new Trie();

// Insert sample words
trie.insert("car");
trie.insert("care");
trie.insert("cat");
trie.insert("dog");
trie.insert("data");
trie.insert("dare");

// Test autoComplete
console.log("AutoComplete for 'ca':", trie.autoComplete("ca")); // ["car", "care", "cat"]
