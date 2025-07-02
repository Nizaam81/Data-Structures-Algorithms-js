// Double Hashing Hash Table Implementation
class HashTable {
  constructor(size) {
    this.table = new Array(size); // Create empty hash table
    this.size = size;
  }

  // Primary hash function - based on ASCII values
  primaryHash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i); // Sum of character codes
    }
    return total % this.size;
  }

  // Secondary hash function - ensures different step sizes
  secondaryHash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return 1 + (total % (this.size - 1)); // Step size must be non-zero
  }

  // Insert key-value pair using double hashing
  set(key, value) {
    let index = this.primaryHash(key);
    let stepSize = this.secondaryHash(key);
    let i = 0;

    while (
      this.table[(index + i * stepSize) % this.size] &&
      this.table[(index + i * stepSize) % this.size].key !== key
    ) {
      i++;
      if (i === this.size) {
        console.log("Hash table is full");
        return;
      }
    }

    this.table[(index + i * stepSize) % this.size] = { key, value };
  }

  // Search for a value using key
  search(key) {
    let index = this.primaryHash(key);
    let stepSize = this.secondaryHash(key);
    let i = 0;

    while (this.table[(index + i * stepSize) % this.size]) {
      if (this.table[(index + i * stepSize) % this.size].key === key) {
        return this.table[(index + i * stepSize) % this.size].value;
      }
      i++;
      if (i === this.size) break;
    }

    console.log("No element found");
    return undefined;
  }

  // Remove a key from the hash table
  remove(key) {
    let index = this.primaryHash(key);
    let stepSize = this.secondaryHash(key);
    let i = 0;

    while (this.table[(index + i * stepSize) % this.size]) {
      if (this.table[(index + i * stepSize) % this.size].key === key) {
        this.table[(index + i * stepSize) % this.size] = undefined;
        return;
      }
      i++;
      if (i === this.size) break;
    }

    console.log("No element found");
  }

  // Display the contents of the hash table
  display() {
    console.log("Hash Table:");
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      } else {
        console.log(i, "--- empty ---");
      }
    }
  }
}

// ---------------------------

const hashtable = new HashTable(7);
hashtable.set("name", "nizam"); 

hashtable.set("pincode", 682025);
hashtable.set("age", 18);
hashtable.set("place", "kalamassery");
hashtable.set("phone", 9876543210);

console.log("Search 'name':", hashtable.search("name")); 

hashtable.display();
