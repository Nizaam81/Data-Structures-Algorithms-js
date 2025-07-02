class UndoRedo {
  constructor() {
    this.undo = []; // Stack to store actions that can be undone
    this.redo = []; // Stack to store actions that can be redone
  }

  // Perform a new action
  doAction(action) {
    this.undo.push(action); // Add the action to the undo stack
    this.redo = []; // Clear the redo stack when a new action is performed
    console.log("Action performed:", action);
  }

  // Undo the last performed action
  undoAction() {
    if (this.undo.length === 0) {
      console.log("Nothing to undo.");
      return;
    }
    let action = this.undo.pop(); // Remove last action from undo stack
    this.redo.push(action); // Add it to redo stack
    console.log("Undo:", action);
  }

  // Redo the last undone action
  redoAction() {
    if (this.redo.length === 0) {
      console.log("Nothing to redo.");
      return;
    }
    let action = this.redo.pop(); // Remove last action from redo stack
    this.undo.push(action); // Add it back to undo stack
    console.log("Redo:", action);
  }

  // Display the current state of the undo stack
  display() {
    console.log("Current actions:", this.undo);
  }
}

// Usage
let x = new UndoRedo();
x.doAction("hello"); // Action performed: hello
x.doAction("nizam"); // Action performed: nizam

x.undoAction(); // Undo: nizam
x.redoAction(); // Redo: nizam
x.display(); // Current actions: [ 'hello', 'nizam' ]
