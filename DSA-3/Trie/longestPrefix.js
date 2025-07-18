class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

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

  longestPrefix() {
    let node = this.root;
    let prefix = "";

    while (node && !node.isEnd && Object.keys(node.children).length === 1) {
      let char = Object.keys(node.children)[0];
      prefix += char;
      node = node.children[char];
    }

    return prefix;
  }
}

//  Test Case
const trie = new Trie();
trie.insert("flow");
trie.insert("flower");
trie.insert("flowing");

console.log("Longest Common Prefix:", trie.longestPrefix()); 
