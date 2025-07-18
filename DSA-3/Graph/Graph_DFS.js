class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].delete(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].delete(vertex1);
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1]?.has(vertex2) &&
      this.adjacencyList[vertex2]?.has(vertex1)
    );
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${[...this.adjacencyList[vertex]].join(", ")}`);
    }
  }

  //  DFS Traversal Method
  dfs(start) {
    let stack = [start];
    let visited = new Set();
    visited.add(start);

    while (stack.length) {
      let currVertex = stack.pop();

      for (let adjacentVertex of this.adjacencyList[currVertex]) {
        if (!visited.has(adjacentVertex)) {
          stack.push(adjacentVertex);
          visited.add(adjacentVertex);
        }
      }
    }

    console.log("DFS Traversal Order:");
    console.log([...visited].join(" -> "));
  }
}

// Test
const g = new Graph();
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("E", "F");

g.display();
g.dfs("A");
