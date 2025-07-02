

// Basic HashTable implementation without collision handling
class HashTable {
  constructor(size) {
    this.table = new Array(size); // Create an empty array with the given size
    this.size = size; // Store the size of the table
  }

  // Hash function to convert a key into an index
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i); // Get ASCII value of each character
    }
    return total % this.size; // Ensure index is within the array size
  }

  // Insert or update a key-value pair
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  // Remove a key-value pair by setting it to undefined
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  // Retrieve the value associated with a given key
  search(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  // Display all non-empty slots in the hash table
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

// Example usage
const hash = new HashTable(5);
hash.set("name", "nizam");
hash.set("age", 22);
hash.display();
console.log(hash.search("name"));
hash.remove("name");
hash.display();
