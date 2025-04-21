type BorrowState =
  | { kind: "Unborrowed" }
  | { kind: "ImmutableBorrow"; count: number }
  | { kind: "MutableBorrow" }
  | { kind: "Moved" };

type VariableState = {
  borrowState: BorrowState;
  isMutable: boolean;
  isCopyType: boolean; // Indicates if the variable is a copy type
  borrowedFrom?: string; // Variable from which this variable was borrowed
};

export class BorrowChecker {
  private state: Map<string, VariableState>[] = [new Map()]; // Stack of frames

  // Declare a variable in the current frame
  declare(
    varName: string,
    isMutable: boolean,
    isCopyType: boolean,
    borrowedFrom?: string
  ) {
    console.log("Declaring variable:", varName, "borrowedfrom:", borrowedFrom);
    const currentFrame = this.getCurrentFrame();
    if (currentFrame.has(varName)) {
      throw new Error(
        `Variable '${varName}' already declared in the current scope`
      );
    }
    currentFrame.set(varName, {
      borrowState: { kind: "Unborrowed" },
      isMutable,
      isCopyType,
      borrowedFrom,
    });
  }

  // Assign to a variable (search across all frames)
  assign(varName: string, varNameBorrowFrom?: string) {
    console.log("Assigning to variable:", varName);
    const [frame, variable] = this.lookup(varName);

    if (variable.borrowState.kind === "MutableBorrow") {
      throw new Error(
        `Cannot assign to '${varName}' while it is mutably borrowed`
      );
    }
    if (variable.borrowState.kind === "ImmutableBorrow") {
      throw new Error(
        `Cannot assign to '${varName}' while it is immutably borrowed`
      );
    }
    if (!variable.isMutable) {
      throw new Error(`Cannot assign to '${varName}' because it is immutable`);
    }

    // Always release the old borrow (if any)
    if (variable.borrowedFrom) {
      console.log(`Releasing old borrow from: ${variable.borrowedFrom}`);
      this.release(variable.borrowedFrom);
    }

    // Assignment is allowed
    frame.set(varName, {
      ...variable,
      borrowState: { kind: "Unborrowed" }, // Reset borrow state after assignment
      borrowedFrom: varNameBorrowFrom ?? undefined,
    });
  }

  mutateDeref(varName: string) {
    console.log("Mutating variable:", varName);
    const [frame, variable] = this.lookup(varName);

    // only can mutate if unborrowed
    if (variable.borrowState.kind === "Moved") {
      throw new Error(`Cannot mutate '${varName}' because it has been moved`);
    }
    if (variable.borrowState.kind === "ImmutableBorrow") {
      throw new Error(
        `Cannot mutate '${varName}' while it is immutably borrowed`
      );
    }
    if (variable.borrowState.kind === "MutableBorrow") {
      throw new Error(
        `Cannot mutate '${varName}' while it is mutably borrowed`
      );
    }
  }

  readFrom(varName: string) {
    console.log("Reading from variable:", varName);
    const [frame, variable] = this.lookup(varName);
    if (variable.isCopyType) {
      return; // No need to transfer ownership for copy types
    }

    if (variable.borrowState.kind === "MutableBorrow") {
      throw new Error(
        `Cannot read from '${varName}' because it was mutably borrowed`
      );
    }
    if (variable.borrowState.kind === "Moved") {
      throw new Error(
        `Cannot read from '${varName}' because it has been moved`
      );
    }

    frame.set(varName, {
      ...variable,
      borrowState: { kind: "Moved" },
    });
  }

  // Immutable borrow (search across all frames)
  immutBorrow(varName: string) {
    console.log("Immutable borrow:", varName);
    const [frame, variable] = this.lookup(varName);
    if (variable.borrowState.kind === "Moved") {
      throw new Error(
        `Cannot immutably borrow '${varName}' because it has been moved`
      );
    }
    if (variable.borrowState.kind === "MutableBorrow") {
      throw new Error(
        `Cannot immutably borrow '${varName}' while it is mutably borrowed`
      );
    }
    const count =
      variable.borrowState.kind === "ImmutableBorrow"
        ? variable.borrowState.count + 1
        : 1;
    frame.set(varName, {
      ...variable,
      borrowState: { kind: "ImmutableBorrow", count },
    });
  }

  // Mutable borrow (search across all frames)
  mutBorrow(varName: string) {
    console.log("Mutable borrow:", varName);
    this.dumpState();
    const [frame, variable] = this.lookup(varName);
    if (variable.borrowState.kind === "Moved") {
      throw new Error(
        `Cannot mutably borrow '${varName}' because it has been moved`
      );
    }
    if (variable.borrowState.kind === "ImmutableBorrow") {
      throw new Error(
        `Cannot mutably borrow '${varName}' while it is immutably borrowed`
      );
    }
    if (variable.borrowState.kind === "MutableBorrow") {
      throw new Error(
        `Cannot mutably borrow '${varName}' while it is already mutably borrowed`
      );
    }
    if (!variable.isMutable) {
      throw new Error(
        `Cannot mutably borrow '${varName}' because it is immutable`
      );
    }
    frame.set(varName, {
      ...variable,
      borrowState: { kind: "MutableBorrow" },
    });
  }

  releaseParent(varName: string) {
    console.log("Dropping variable:", varName);
    // release parent borrows
    const [_, variable] = this.lookup(varName);
    const varNameBorrowedFrom = variable.borrowedFrom;
    console.log("Variable borrowed from:", varNameBorrowedFrom);
    if (!varNameBorrowedFrom) {
      return;
    }
    const [frame, variableBorrowedFrom] = this.lookup(varNameBorrowedFrom);
    if (
      variableBorrowedFrom.borrowState.kind === "ImmutableBorrow" ||
      variableBorrowedFrom.borrowState.kind === "MutableBorrow"
    ) {
      this.release(varNameBorrowedFrom);
    } else {
      throw new Error(
        `Logic Error: Cannot release '${varNameBorrowedFrom}' because it is not borrowed`
      );
    }
  }

  // Release a borrow (search across all frames)
  release(varName: string) {
    console.log("Releasing borrow:", varName);
    const [frame, variable] = this.lookup(varName);
    if (variable.borrowState.kind === "ImmutableBorrow") {
      if (variable.borrowState.count === 1) {
        frame.set(varName, {
          ...variable,
          borrowState: { kind: "Unborrowed" },
        });
      } else {
        frame.set(varName, {
          ...variable,
          borrowState: {
            kind: "ImmutableBorrow",
            count: variable.borrowState.count - 1,
          },
        });
      }
    } else if (variable.borrowState.kind === "MutableBorrow") {
      frame.set(varName, {
        ...variable,
        borrowState: { kind: "Unborrowed" },
      });
    }
  }

  // Push a new frame onto the stack (enter a new scope)
  pushFrame() {
    this.state.push(new Map());
  }

  // Pop the top frame off the stack (exit the current scope)
  popFrame() {
    // Print the current state
    this.dumpState();
    console.log("Popping frame");

    if (this.state.length === 1) {
      throw new Error("Cannot pop the global frame");
    }

    // release all variables in the current frame (release unborrowed variables first)
    const currentFrame = this.getCurrentFrame();
    const unreleasedVariables = new Set(currentFrame.keys()); // Track variables that need to be released

    // Attempt to release variables in the frame
    let progressMade = true;
    while (unreleasedVariables.size > 0 && progressMade) {
      progressMade = false;
      for (const varName of Array.from(unreleasedVariables)) {
        const variable = currentFrame.get(varName)!;
        // Check if the variable is unborrowed
        if (
          variable.borrowState.kind === "Unborrowed" ||
          variable.borrowState.kind === "Moved"
        ) {
          console.log(`Releasing unborrowed variable: ${varName}`);
          this.releaseParent(varName); // Release any parent borrows
          unreleasedVariables.delete(varName); // Mark as released
          progressMade = true;
        }
      }
    }

    // If there are still unreleased variables, throw a lifetime error
    if (unreleasedVariables.size > 0) {
      const borrowedVars = Array.from(unreleasedVariables).join(", ");
      throw new Error(
        `Lifetime error: Cannot drop frame because the following variables are still borrowed: ${borrowedVars}`
      );
    }

    // Remove the current frame
    this.state.pop();
  }

  // Lookup a variable across all frames (starting from the top)
  private lookup(varName: string): [Map<string, VariableState>, VariableState] {
    for (let i = this.state.length - 1; i >= 0; i--) {
      const frame = this.state[i];
      if (frame.has(varName)) {
        const variable = frame.get(varName)!;
        return [frame, variable];
      }
    }
    throw new Error(`Variable '${varName}' is undeclared`);
  }

  // Get the current (top) frame
  private getCurrentFrame(): Map<string, VariableState> {
    return this.state[this.state.length - 1];
  }

  // Dump the state for debugging
  dumpState() {
    console.log("Current borrow states:");
    for (let i = 0; i < this.state.length; i++) {
      console.log(`Frame ${i}:`);
      for (const [k, v] of this.state[i].entries()) {
        console.log(`  ${k}: ${JSON.stringify(v)}`);
      }
    }
  }
}
