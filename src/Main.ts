import { CrustEvaluator } from "./CrustEvaluator";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { TestCase, testCases } from "./tests/TestCases";
import { runTests } from "./tests/TestRunner";

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

// Main function to run all tests
async function main() {
  console.log("Running Crust language tests...");
  console.log("===============================");
  
  // Run all tests and get results
  const { passed, failed, failedTests } = await runTests(testCases);
  
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