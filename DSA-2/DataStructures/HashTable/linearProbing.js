// ✅ HashTable using Linear Probing (No 'get' method included)
class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  // 🔑 Simple hash function
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  //  Insert or update a key-value pair
  set(key, value) {
    let index = this.hash(key);
    let originalIndex = index;

    while (this.table[index] && this.table[index].key !== key) {
      index = (index + 1) % this.size;
      if (index === originalIndex) {
        console.log("Table is full");
        return;
      }
    }

    this.table[index] = { key, value };
  }

  //  Remove a key-value pair
  remove(key) {
    let index = this.hash(key);
    let originalIndex = index;

    while (this.table[index]) {
      if (this.table[index].key === key) {
        const removed = this.table[index].value;
        this.table[index] = undefined;
        return removed;
      }

      index = (index + 1) % this.size;
      if (index === originalIndex) {
        break;
      }
    }

    console.log("No value found here");
    return null;
  }

  //  Display all key-value pairs
  display() {
    console.log("Hash Table:");
    for (let i = 0; i < this.size; i++) {
      console.log(i, ":", this.table[i]);
    }
  }
}


const ht = new HashTable(4);

ht.set("name", "Nizam");
ht.set("age", 18);
ht.set("city", "Kochi");
ht.set("job", "Developer");

ht.display(); //  View all entries

console.log("Removed:", ht.remove("city"));
console.log("Removed:", ht.remove("unknown")); // Not found case

ht.display(); // View after removal
