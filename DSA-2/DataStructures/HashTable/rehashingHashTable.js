//  Rehashing Hash Table using Separate Chaining
// Rehashing: When load factor exceeds threshold, table size is doubled and all items are re-inserted

class HashTable {
  constructor(capacity) {
    this.capacity = capacity; // Initial capacity
    this.table = new Array(capacity); // Main table (array of buckets)
    this.size = 0; // Number of items inserted
    this.loadFactor = 0.75; // Threshold to trigger rehash
  }

  //  Hash function based on character codes
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i); // ASCII sum
    }
    return total % this.capacity;
  }

  // ➕ Insert or update key-value pair
  set(key, value) {
    //  Rehash if load factor exceeds threshold
    if (this.size / this.capacity >= this.loadFactor) {
      this.rehash();
    }

    let index = this.hash(key);
    let bucket = this.table[index];

    //  If no bucket, create one
    if (!bucket) {
      this.table[index] = [[key, value]];
      this.size++;
    } else {
      //  Update value if key exists, else push new
      let sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
        this.size++;
      }
    }
  }

  //  Get value by key
  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];

    if (bucket) {
      let item = bucket.find((entry) => entry[0] === key);
      return item ? item[1] : null;
    }

    return null;
  }

  //  Remove key-value pair
  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];

    if (bucket) {
      let item = bucket.find((entry) => entry[0] === key);
      if (item) {
        bucket.splice(bucket.indexOf(item), 1);
        this.size--;
        return item[1];
      }
    }

    return null;
  }

  //  Display table contents
  display() {
    console.log("Hash Table:");
    for (let i = 0; i < this.table.length; i++) {
      console.log(i, this.table[i]);
    }
  }

  //  Rehash the table when load factor is high
  rehash() {
    console.log("Rehashing...");
    const oldTable = this.table;
    this.capacity *= 2;
    this.table = new Array(this.capacity);
    this.size = 0;

    // Re-insert all items into new table
    for (let bucket of oldTable) {
      if (bucket) {
        for (let [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }
}



const hash = new HashTable(5);

hash.set("name", "ajmal");
hash.set("age", 22);
hash.set("place", "kochi");
hash.set("addressee", "123place");
hash.set("rollee", 2);
hash.set("rolleeee", 2); // This should trigger rehash

hash.display();

