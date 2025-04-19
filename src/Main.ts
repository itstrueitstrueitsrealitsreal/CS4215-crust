import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { testCases } from "./tests/TestCases";
import { runTests } from "./tests/TestRunner";

// Enhanced MockConductor that captures outputs for testing
export class TestConductor implements IRunnerPlugin {
  // Make sure it's exported if TestRunner is separate
  outputs: string[] = [];
  errors: string[] = [];
  // Keep original console methods for optional logging during tests
  private originalConsoleLog = console.log;
  private originalConsoleError = console.error;

  sendOutput(output: string): void {
    this.outputs.push(output);
    // Optionally log to console during tests for visibility
    this.originalConsoleLog(output);
  }

  sendError(error: any): void {
    const errorMsg = error instanceof Error ? error.message : String(error);
    // Capture errors in a separate array or format them if needed for comparison
    this.errors.push(`Error: ${errorMsg}`);
    this.outputs.push(`Error: ${errorMsg}`); // Also add to outputs for comparison if tests expect errors
    // Optionally log errors to console during tests
    this.originalConsoleError(`Error: ${errorMsg}`);
  }

  // Stub implementations for required methods
  requestFile() {
    return Promise.resolve(undefined);
  }
  requestChunk() {
    return Promise.resolve("");
  }
  requestInput() {
    return Promise.resolve("");
  }
  tryRequestInput() {
    return undefined;
  }
  updateStatus() {}
  hostLoadPlugin() {}
  registerPlugin() {
    return {} as any;
  }
  unregisterPlugin() {}
  registerModule() {
    return {} as any;
  }
  unregisterModule() {}
  importAndRegisterExternalPlugin() {
    return Promise.resolve({} as any);
  }
  importAndRegisterExternalModule() {
    return Promise.resolve({} as any);
  }
  name?: string;
}

// Main function to run all tests
async function main() {
  // Use originalConsoleLog for test runner's own output
  const log = console.log;
  log("Running Crust language tests...");
  log("===============================");

  // Run all tests and get results (assuming runTests uses TestConductor internally)
  const { passed, failed, failedTests } = await runTests(testCases);

  log("\n===============================");
  log(`Test summary: ${passed} passed, ${failed} failed`);

  // Print list of failed tests
  if (failed > 0) {
    log("\nFailed tests:");
    failedTests.forEach((testName, index) => {
      log(`${index + 1}. ${testName}`);
    });
    process.exit(1); // Exit with error code if tests fail
  }
  // No need to exit if tests pass
}

// Run the tests
main().catch((error) => {
  // Use original console.error for errors in the test runner itself
  console.error("An error occurred during test execution:", error);
  process.exit(1);
});
