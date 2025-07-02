// Quadratic Probing Hash Table Implementation
class HashTable {
  constructor(size) {
    this.table = new Array(size); // Create empty hash table array
    this.size = size;
  }

  // Hash function based on character codes
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i); // Sum of character ASCII values
    }
    return total % this.size; // Modulo to fit in table size
  }

  // Insert key-value pair using quadratic probing
  set(key, value) {
    let index = this.hash(key);
    let i = 0;

    // Find the next empty slot or same key using (index + i^2) % size
    while (
      this.table[(index + i ** 2) % this.size] &&
      this.table[(index + i ** 2) % this.size].key !== key
    ) {
      i++;
      if (i === this.size) {
        console.log("Hash table is full");
        return;
      }
    }

    this.table[(index + i ** 2) % this.size] = { key, value };
  }

  // Search for a key in the table
  search(key) {
    let index = this.hash(key);
    let i = 0;

    while (this.table[(index + i ** 2) % this.size]) {
      if (this.table[(index + i ** 2) % this.size].key === key) {
        return this.table[(index + i ** 2) % this.size].value;
      }
      i++;
      if (i === this.size) break;
    }

    console.log("No element found");
    return undefined;
  }

  // Remove a key-value pair from the table
  remove(key) {
    let index = this.hash(key);
    let i = 0;

    while (this.table[(index + i ** 2) % this.size]) {
      if (this.table[(index + i ** 2) % this.size].key === key) {
        this.table[(index + i ** 2) % this.size] = undefined;
        return; // Stop after removing
      }
      i++;
      if (i === this.size) break;
    }

    console.log("No element found");
  }

  // Display the hash table contents
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

// ---------------------
//  Usage Example
const hashtable = new HashTable(7);

hashtable.set("name", "nizam");
hashtable.set("age", 28);
hashtable.set("place", "ottappalam");
hashtable.set("mane", "sourav");
hashtable.set("anem", "nizam");

console.log("Search 'anem':", hashtable.search("anem"));

hashtable.display();
