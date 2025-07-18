# 📘 DFS (Depth-First Search) in Binary Search Tree

##  What is DFS?

- DFS stands for **Depth-First Search**
- It means visiting nodes by going **deep down one side** of the tree before moving to the other side
- DFS is implemented using **recursion**
- In Binary Search Trees (BST), DFS has **three types**:
  - InOrder
  - PreOrder
  - PostOrder

---

##  1. InOrder Traversal (Left → Root → Right)

- Visit **left subtree**
- Visit **root**
- Visit **right subtree**
-  Gives **sorted order** for BST

###  Example:
    10
   /  \
  5    15
 / \     \
2   7     20

###  Output:
2 5 7 10 15 20


##  2. PreOrder Traversal (Root → Left → Right)

- Visit **root**
- Visit **left subtree**
- Visit **right subtree**
-  Used for **copying or serializing** a tree

###  Output:
10 5 2 7 15 20


---

##  3. PostOrder Traversal (Left → Right → Root)

- Visit **left subtree**
- Visit **right subtree**
- Visit **root**
-  Used to **delete a tree** safely (bottom-up)

###  Output:
2 7 5 20 15 10