class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a new vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  // Add an undirected edge between two vertices
  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  // Remove an edge between two vertices
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].delete(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].delete(vertex1);
    }
  }

  // Check if two vertices are connected
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1]?.has(vertex2) &&
      this.adjacencyList[vertex2]?.has(vertex1)
    );
  }

  // Remove a vertex and all edges connected to it
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  // Display the graph
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${[...this.adjacencyList[vertex]].join(", ")}`);
    }
  }
}

// ---------- Testing All Methods ----------

const graph = new Graph();

// Add edges (also creates the vertices automatically)
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("E", "F");

console.log("Initial graph:");
graph.display();

// Check edge existence
console.log("\nHas edge A-C:", graph.hasEdge("A", "C")); // true
console.log("Has edge B-E:", graph.hasEdge("B", "E")); // false

// Remove an edge
graph.removeEdge("A", "C");
console.log("\nAfter removing edge A-C:");
graph.display();

// Remove a vertex
graph.removeVertex("B");
console.log("\nAfter removing vertex B:");
graph.display();
