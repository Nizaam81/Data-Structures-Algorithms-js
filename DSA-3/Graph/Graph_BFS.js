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

  //  BFS Traversal Method
  bfs(start) {
    let queue = [start];
    let visited = new Set();
    visited.add(start);

    while (queue.length) {
      let currVertex = queue.shift();

      for (let adjacentVertex of this.adjacencyList[currVertex]) {
        if (!visited.has(adjacentVertex)) {
          queue.push(adjacentVertex);
          visited.add(adjacentVertex);
        }
      }
    }


    console.log([...visited].join(" -> "));
  }
}
const g = new Graph();

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("E", "F");

g.display(); // Optional: to see the structure

g.bfs("A");  //  Expected output: A -> B -> C -> D -> E -> F
