import { CrustEvaluator } from "./CrustEvaluator";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";

// Enhanced MockConductor that captures outputs for testing
class TestConductor implements IRunnerPlugin {
  outputs: string[] = [];
  errors: string[] = [];
  originalConsoleLog: any;
  originalConsoleError: any;
  
  constructor() {
    // Override console.log to capture output
    this.originalConsoleLog = console.log;
    this.originalConsoleError = console.error;
    console.log = (message: any, ...optionalParams: any[]) => {
      const output = String(message);
      this.outputs.push(output);
      this.originalConsoleLog(message, ...optionalParams);
    };
    console.error = (message: any, ...optionalParams: any[]) => {
      const output = String(message);
      this.outputs.push(output);
      this.originalConsoleError(message, ...optionalParams);
    };
  }
  
  sendOutput(output: string): void {
    this.outputs.push(output);
    this.originalConsoleLog(output);
  }
  
  sendError(error: any): void {
    const errorMsg = error instanceof Error ? error.message : String(error);
    this.errors.push(`Error: ${errorMsg}`);
    this.originalConsoleError(`Error: ${errorMsg}`);
  }
  
  // Stub implementations for required methods
  requestFile() { return Promise.resolve(undefined); }
  requestChunk() { return Promise.resolve(""); }
  requestInput() { return Promise.resolve(""); }
  tryRequestInput() { return undefined; }
  updateStatus() {}
  hostLoadPlugin() {}
  registerPlugin() { return {} as any; }
  unregisterPlugin() {}
  registerModule() { return {} as any; }
  unregisterModule() {}
  importAndRegisterExternalPlugin() { return Promise.resolve({} as any); }
  importAndRegisterExternalModule() { return Promise.resolve({} as any); }
  name?: string;
  destroy() {
    // Restore original console.log when done
    console.log = this.originalConsoleLog;
    console.error = this.originalConsoleError;
  }
}

// Interface for test cases
interface TestCase {
  name: string;
  code: string;
  expectedOutput: string[];  // Make optional
}

// Function to run a single test
async function runTest(test: TestCase): Promise<boolean> {
  console.log(`\n----- Running test: ${test.name} -----`);
  
  const conductor = new TestConductor();
  const evaluator = new CrustEvaluator(conductor);
  
  try {
    await evaluator.evaluateChunk(test.code);
  } catch (error) {
    // Add errors to conductor's outputs so they can be checked
    const errorMessage = error instanceof Error ? error.message : String(error);
    conductor.outputs.push(`Error: ${errorMessage}`);
  }
  
  // Simply check if all expected outputs are in the actual outputs
  let allFound = true;
  for (const expected of test.expectedOutput) {
    if (!conductor.outputs.some(out => out.includes(expected))) {
      console.log(`❌ Expected output not found: "${expected}"`);
      console.log(`Actual outputs:`, conductor.outputs);
      allFound = false;
    }
  }
  
  if (allFound) {
    console.log(`✅ Test passed!`);
    return true;
  } else {
    console.log(`❌ Test failed`);
    return false;
  }
}

// Test cases derived from your existing examples
const testCases: TestCase[] = [
  // Basic variable declaration
  {
    name: "Basic variable declaration and primitive types",
    code: `{
      let x: i64 = 42;
      let y: bool = true;
      let s: &str = "hello";
      println!("x: {}, y: {}, s: {}", x, y, s);
    }`,
    expectedOutput: ["x: 42, y: true, s: hello"]
  },
  
  // Copy types behavior
  {
    name: "Copy types behavior",
    code: `{
      let mut x: i64 = 5;
      let mut y: i64 = x;  // Copy happens here
      y = 10;              // Modifying y
      println!("x: {}, y: {}", x, y);  // x should still be 5
    }`,
    expectedOutput: ["x: 5, y: 10"]
  },
  
  // Move semantics with non-copy types
  {
    name: "Move semantics with non-copy types",
    code: `{
      let a: String = "hello".to_string();
      let b: String = a;
      // Using a after move should fail
      println!("{}", a);
    }`,
    expectedOutput: ["Cannot immutably borrow 'a' because it has been moved"]
  },
  
  // Multiple immutable borrows
  {
    name: "Multiple immutable borrows",
    code: `{
      let x: i64 = 42;
      let r: &i64 = &x;
      let r1: &i64 = &x;
      println!("x: {}, r: {}, r1: {}", x, r, r1);
    }`,
    expectedOutput: ["x: 42, r: 42, r1: 42"]
  },
  // Mutable and immutable borrow conflict
  {
    name: "Mutable and immutable borrow conflict",
    code: `{
      let mut x: i64 = 10;
      let r1: &i64 = &x;
      let r2: &mut i64 = &mut x;  // Should fail - can't have mutable borrow while immutable exists
      println!("{}", r1);
    }`,
    expectedOutput: ["Cannot mutably borrow 'x' while it is immutably borrowed"]
  },
  
  // Function borrowing
  {
    name: "Function borrowing",
    code: `{
      fn modify(x: &mut i64) {
        *x = *x + 1;
      }
      
      let mut a: i64 = 10;
      modify(&mut a);
      modify(&mut a);
      println!("Result: {}", a);
    }`,
    expectedOutput: ["Result: 12"]
  },
  // Scopes and lifetimes
  {
    name: "Scopes and lifetimes",
    code: `{
      let mut s: String = "start".to_string();
      
      {
        let r: &mut String = &mut s;
        *r = "modified".to_string();
      } // r goes out of scope here
      
      // Now we can use s again
      println!("Final value: {}", s);
    }`,
    expectedOutput: ["Final value: modified"]
  },
  
  // Dereferencing copy types
  {
    name: "Dereferencing copy types",
    code: `{
      let x: i64 = 42;
      let r: &i64 = &x;
      let val: i64 = *r;
      let val1: i64 = *r;
      println!("x: {}, val: {}, val1: {}", x, val, val1);
    }`,
    expectedOutput: ["x: 42, val: 42, val1: 42"]
  },
  // Function with multiple borrowed parameters
  {
    name: "Multiple borrowed parameters",
    code: `{
      fn sum(a: &i64, b: &i64) -> i64 {
        return *a + *b;
      }
      
      let x: i64 = 5;
      let y: i64 = 10;
      let result: i64 = sum(&x, &y);
      println!("Sum: {}", result);
    }`,
    expectedOutput: ["Sum: 15"]
  },
  // Returning references from functions
  {
    name: "Returning references",
    code: `{
      fn get_ref(x: &i64) -> &i64 {
        return x;
      }
      
      let x: i64 = 42;
      let r: &i64 = get_ref(&x);
      println!("Referenced value: {}", *r);
    }`,
    expectedOutput: ["Referenced value: 42"]
  },
];

// Main function to run all tests
async function main() {
  console.log("Running Crust language tests...");
  console.log("===============================");
  
  let passed = 0;
  let failed = 0;
  const failedTests: string[] = []; // Array to track failed tests
  
  for (const test of testCases) {
    try {
      const success = await runTest(test);
      if (success) {
        passed++;
      } else {
        failed++;
        failedTests.push(test.name); // Add failed test name to array
      }
    } catch (error) {
      console.error(`Error running test ${test.name}:`, error);
      failed++;
      failedTests.push(test.name); // Also track tests that throw errors
    }
  }
  
  console.log("\n===============================");
  console.log(`Test summary: ${passed} passed, ${failed} failed`);
  
  // Print list of failed tests
  if (failed > 0) {
    console.log("\nFailed tests:");
    failedTests.forEach((testName, index) => {
      console.log(`${index + 1}. ${testName}`);
    });
    process.exit(1);
  }
}

// Run the tests
main().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});