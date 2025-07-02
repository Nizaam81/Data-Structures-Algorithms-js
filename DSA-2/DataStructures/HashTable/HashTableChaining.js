// HashTable implementation using separate chaining for collision handling
class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  // Hash function: generates an index based on the key
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i); // Sum character codes
    }
    return total % this.size;
  }

  // Set or update a key-value pair
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    // If no bucket exists, create one with the key-value pair
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      // Check if key already exists in the bucket
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        sameKey[1] = value; //  Update the value if key exists
      } else {
        bucket.push([key, value]); // Add new key-value pair
      }
    }
  }

  // Remove a key-value pair by key
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        if (bucket.length === 1) {
          // Only one item in bucket, remove entire bucket
          this.table[index] = undefined;
        } else {
          // Remove the specific key-value pair from bucket
          const position = bucket.indexOf(sameKey);
          bucket.splice(position, 1);
        }
        return sameKey[1]; // Return removed value
      }
    }
    return null; // Key not found
  }

  // Display all key-value pairs in the hash table
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const ht = new HashTable(10);

ht.set("name", "Nizam");
ht.set("age", 18);
ht.set("name", "Muhammad Nizamudheen"); 
ht.display();

console.log("Removed:", ht.remove("age"));
ht.display();
