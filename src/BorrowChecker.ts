type BorrowState =
  | { kind: "Unborrowed" }
  | { kind: "ImmutableBorrow"; count: number }
  | { kind: "MutableBorrow" }
  | { kind: "Moved" }; // New state for ownership transfer

type VariableState = {
  borrowState: BorrowState;
  isMutable: boolean;
  isCopyType: boolean; // Indicates if the variable is a copy type
};

export class BorrowChecker {
  private state: Map<string, VariableState>[] = [new Map()]; // Stack of frames

  // Declare a variable in the current frame
  declare(varName: string, isMutable: boolean, isCopyType: boolean) {
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
    });
  }

  // Assign to a variable (search across all frames)
  assign(varName: string) {
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

    // Assignment is allowed
    frame.set(varName, {
      ...variable,
      borrowState: { kind: "Unborrowed" }, // Reset borrow state after assignment
    });
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
    const [frame, variable] = this.lookup(varName);
    if (variable.borrowState.kind !== "Unborrowed") {
      throw new Error(
        `Cannot mutably borrow '${varName}' while already borrowed`
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
    if (this.state.length === 1) {
      throw new Error("Cannot pop the global frame");
    }
    this.state.pop();
  }

  // Lookup a variable across all frames (starting from the top)
  private lookup(varName: string): [Map<string, VariableState>, VariableState] {
    for (let i = this.state.length - 1; i >= 0; i--) {
      const frame = this.state[i];
      if (frame.has(varName)) {
        const variable = frame.get(varName)!;
        // if (variable.borrowState.kind === "Moved") {
        //   throw new Error(
        //     `Variable '${varName}' has been moved and cannot be accessed`
        //   );
        // }
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
