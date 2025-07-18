#  BFS (Breadth-First Search) in Binary Search Tree

###  What is BFS?
- BFS (Breadth-First Search) means visiting nodes **level by level** (left to right, top to bottom).
- It uses a **queue** (First In First Out - FIFO) to remember the order of traversal.

---

###  How Level Order Traversal Works:

1. Start from the **root node**
2. Add the root node to the **queue**
3. While queue is not empty:
   - Remove (shift) the first node from the queue
   - Print its value
   - If it has a **left child**, push it to the queue
   - If it has a **right child**, push it to the queue

---

###  Example Tree:
        10
       /  \
     5     15
    / \      \
   2   7     20


### outPut of levelOrder travels 
10
5
15
2
7
20

